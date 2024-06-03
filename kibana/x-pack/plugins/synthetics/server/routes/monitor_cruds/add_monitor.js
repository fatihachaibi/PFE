"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncNewMonitor = exports.addSyntheticsMonitorRoute = void 0;

var _configSchema = require("@kbn/config-schema");

var _server = require("../../../../../../src/core/server");

var _runtime_types = require("../../../common/runtime_types");

var _constants = require("../../../common/constants");

var _synthetics_monitor = require("../../legacy_uptime/lib/saved_objects/synthetics_monitor");

var _monitor_validation = require("./monitor_validation");

var _monitor_upgrade_sender = require("../telemetry/monitor_upgrade_sender");

var _format_configs = require("../../synthetics_service/formatters/format_configs");

var _secrets = require("../../synthetics_service/utils/secrets");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const addSyntheticsMonitorRoute = () => ({
  method: 'POST',
  path: _constants.API_URLS.SYNTHETICS_MONITORS,
  validate: {
    body: _configSchema.schema.any()
  },
  handler: async ({
    request,
    response,
    savedObjectsClient,
    server
  }) => {
    const monitor = request.body;
    const validationResult = (0, _monitor_validation.validateMonitor)(monitor);

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

    let newMonitor = null;

    try {
      newMonitor = await savedObjectsClient.create(_synthetics_monitor.syntheticsMonitorType, (0, _secrets.formatSecrets)({ ...monitor,
        revision: 1
      }));
    } catch (getErr) {
      if (_server.SavedObjectsErrorHelpers.isForbiddenError(getErr)) {
        return response.forbidden({
          body: getErr
        });
      }
    }

    if (!newMonitor) {
      return response.customError({
        body: {
          message: 'Unable to create monitor'
        },
        statusCode: 500
      });
    }

    const errors = await syncNewMonitor({
      monitor,
      monitorSavedObject: newMonitor,
      server
    });

    if (errors && errors.length > 0) {
      return response.ok({
        body: {
          message: 'error pushing monitor to the service',
          attributes: {
            errors
          },
          id: newMonitor.id
        }
      });
    }

    return response.ok({
      body: newMonitor
    });
  }
});

exports.addSyntheticsMonitorRoute = addSyntheticsMonitorRoute;

const syncNewMonitor = async ({
  monitor,
  monitorSavedObject,
  server
}) => {
  const errors = await server.syntheticsService.addConfig((0, _format_configs.formatHeartbeatRequest)({
    monitor,
    monitorId: monitorSavedObject.id,
    customHeartbeatId: monitor[_runtime_types.ConfigKey.CUSTOM_HEARTBEAT_ID]
  }));
  (0, _monitor_upgrade_sender.sendTelemetryEvents)(server.logger, server.telemetry, (0, _monitor_upgrade_sender.formatTelemetryEvent)({
    monitor: monitorSavedObject,
    errors,
    isInlineScript: Boolean(monitor[_runtime_types.ConfigKey.SOURCE_INLINE]),
    kibanaVersion: server.kibanaVersion
  }));
  return errors;
};

exports.syncNewMonitor = syncNewMonitor;