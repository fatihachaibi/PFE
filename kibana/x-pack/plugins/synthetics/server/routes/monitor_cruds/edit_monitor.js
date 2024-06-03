"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncEditedMonitor = exports.editSyntheticsMonitorRoute = void 0;

var _configSchema = require("@kbn/config-schema");

var _server = require("../../../../../../src/core/server");

var _runtime_types = require("../../../common/runtime_types");

var _constants = require("../../../common/constants");

var _synthetics_monitor = require("../../legacy_uptime/lib/saved_objects/synthetics_monitor");

var _monitor_validation = require("./monitor_validation");

var _service_errors = require("../synthetics_service/service_errors");

var _monitor_upgrade_sender = require("../telemetry/monitor_upgrade_sender");

var _format_configs = require("../../synthetics_service/formatters/format_configs");

var _secrets = require("../../synthetics_service/utils/secrets");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// Simplify return promise type and type it with runtime_types


const editSyntheticsMonitorRoute = () => ({
  method: 'PUT',
  path: _constants.API_URLS.SYNTHETICS_MONITORS + '/{monitorId}',
  validate: {
    params: _configSchema.schema.object({
      monitorId: _configSchema.schema.string()
    }),
    body: _configSchema.schema.any()
  },
  handler: async ({
    request,
    response,
    savedObjectsClient,
    server
  }) => {
    const {
      encryptedSavedObjects,
      logger
    } = server;
    const encryptedSavedObjectsClient = encryptedSavedObjects.getClient();
    const monitor = request.body;
    const {
      monitorId
    } = request.params;

    try {
      var _previousMonitor$name;

      const previousMonitor = await savedObjectsClient.get(_synthetics_monitor.syntheticsMonitorType, monitorId);
      /* Decrypting the previous monitor before editing ensures that all existing fields remain
       * on the object, even in flows where decryption does not take place, such as the enabled tab
       * on the monitor list table. We do not decrypt monitors in bulk for the monitor list table */

      const decryptedPreviousMonitor = await encryptedSavedObjectsClient.getDecryptedAsInternalUser(_synthetics_monitor.syntheticsMonitor.name, monitorId, {
        namespace: (_previousMonitor$name = previousMonitor.namespaces) === null || _previousMonitor$name === void 0 ? void 0 : _previousMonitor$name[0]
      });
      const editedMonitor = { ...(0, _secrets.normalizeSecrets)(decryptedPreviousMonitor).attributes,
        ...monitor
      };
      const validationResult = (0, _monitor_validation.validateMonitor)(editedMonitor);

      if (!validationResult.valid) {
        const {
          reason: message,
          details,
          payload
        } = validationResult;
        return response.badRequest({
          body: {
            message,
            attributes: {
              details,
              ...payload
            }
          }
        });
      }

      const monitorWithRevision = { ...editedMonitor,
        revision: (previousMonitor.attributes[_runtime_types.ConfigKey.REVISION] || 0) + 1
      };
      const formattedMonitor = (0, _secrets.formatSecrets)(monitorWithRevision);
      const editedMonitorSavedObject = await savedObjectsClient.update(_synthetics_monitor.syntheticsMonitorType, monitorId, monitor.type === 'browser' ? { ...formattedMonitor,
        urls: ''
      } : formattedMonitor);
      const errors = await syncEditedMonitor({
        server,
        editedMonitor,
        editedMonitorSavedObject,
        previousMonitor
      }); // Return service sync errors in OK response

      if (errors && errors.length > 0) {
        return response.ok({
          body: {
            message: 'error pushing monitor to the service',
            attributes: {
              errors
            }
          }
        });
      }

      return editedMonitorSavedObject;
    } catch (updateErr) {
      if (_server.SavedObjectsErrorHelpers.isNotFoundError(updateErr)) {
        return (0, _service_errors.getMonitorNotFoundResponse)(response, monitorId);
      }

      logger.error(updateErr);
      throw updateErr;
    }
  }
});

exports.editSyntheticsMonitorRoute = editSyntheticsMonitorRoute;

const syncEditedMonitor = async ({
  editedMonitor,
  editedMonitorSavedObject,
  previousMonitor,
  server
}) => {
  const errors = await server.syntheticsService.pushConfigs([(0, _format_configs.formatHeartbeatRequest)({
    monitor: editedMonitor,
    monitorId: editedMonitorSavedObject.id,
    customHeartbeatId: editedMonitor[_runtime_types.ConfigKey.CUSTOM_HEARTBEAT_ID]
  })], true);
  (0, _monitor_upgrade_sender.sendTelemetryEvents)(server.logger, server.telemetry, (0, _monitor_upgrade_sender.formatTelemetryUpdateEvent)(editedMonitorSavedObject, previousMonitor, server.kibanaVersion, Boolean(editedMonitor[_runtime_types.ConfigKey.SOURCE_INLINE]), errors));
  return errors;
};

exports.syncEditedMonitor = syncEditedMonitor;