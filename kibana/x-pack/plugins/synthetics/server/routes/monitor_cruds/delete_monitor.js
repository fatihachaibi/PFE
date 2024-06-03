"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSyntheticsMonitorRoute = exports.deleteMonitor = void 0;

var _configSchema = require("@kbn/config-schema");

var _server = require("../../../../../../src/core/server");

var _runtime_types = require("../../../common/runtime_types");

var _constants = require("../../../common/constants");

var _synthetics_monitor = require("../../legacy_uptime/lib/saved_objects/synthetics_monitor");

var _service_errors = require("../synthetics_service/service_errors");

var _monitor_upgrade_sender = require("../telemetry/monitor_upgrade_sender");

var _secrets = require("../../synthetics_service/utils/secrets");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const deleteSyntheticsMonitorRoute = () => ({
  method: 'DELETE',
  path: _constants.API_URLS.SYNTHETICS_MONITORS + '/{monitorId}',
  validate: {
    params: _configSchema.schema.object({
      monitorId: _configSchema.schema.string({
        minLength: 1,
        maxLength: 1024
      })
    })
  },
  handler: async ({
    request,
    response,
    savedObjectsClient,
    server
  }) => {
    const {
      monitorId
    } = request.params;

    try {
      const errors = await deleteMonitor({
        savedObjectsClient,
        server,
        monitorId
      });

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

      return monitorId;
    } catch (getErr) {
      if (_server.SavedObjectsErrorHelpers.isNotFoundError(getErr)) {
        return (0, _service_errors.getMonitorNotFoundResponse)(response, monitorId);
      }

      throw getErr;
    }
  }
});

exports.deleteSyntheticsMonitorRoute = deleteSyntheticsMonitorRoute;

const deleteMonitor = async ({
  savedObjectsClient,
  server,
  monitorId
}) => {
  const {
    syntheticsService,
    logger,
    telemetry,
    kibanaVersion,
    encryptedSavedObjects
  } = server;
  const encryptedSavedObjectsClient = encryptedSavedObjects.getClient();

  try {
    var _encryptedMonitor$nam;

    const encryptedMonitor = await savedObjectsClient.get(_synthetics_monitor.syntheticsMonitorType, monitorId);
    const monitor = await encryptedSavedObjectsClient.getDecryptedAsInternalUser(_synthetics_monitor.syntheticsMonitor.name, monitorId, {
      namespace: (_encryptedMonitor$nam = encryptedMonitor.namespaces) === null || _encryptedMonitor$nam === void 0 ? void 0 : _encryptedMonitor$nam[0]
    });
    const normalizedMonitor = (0, _secrets.normalizeSecrets)(monitor);
    await savedObjectsClient.delete(_synthetics_monitor.syntheticsMonitorType, monitorId);
    const errors = await syntheticsService.deleteConfigs([{ ...normalizedMonitor.attributes,
      id: normalizedMonitor.attributes[_runtime_types.ConfigKey.CUSTOM_HEARTBEAT_ID] || monitorId
    }]);
    (0, _monitor_upgrade_sender.sendTelemetryEvents)(logger, telemetry, (0, _monitor_upgrade_sender.formatTelemetryDeleteEvent)(monitor, kibanaVersion, new Date().toISOString(), Boolean(normalizedMonitor.attributes[_runtime_types.ConfigKey.SOURCE_INLINE]), errors));
    return errors;
  } catch (e) {
    throw e;
  }
};

exports.deleteMonitor = deleteMonitor;