"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSyntheticsProjectMonitorRoute = void 0;

var _configSchema = require("@kbn/config-schema");

var _constants = require("../../../common/constants");

var _get_service_locations = require("../../synthetics_service/get_service_locations");

var _project_monitor_formatter = require("../../synthetics_service/project_monitor_formatter");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const addSyntheticsProjectMonitorRoute = libs => ({
  method: 'PUT',
  path: _constants.API_URLS.SYNTHETICS_MONITORS_PROJECT,
  validate: {
    body: _configSchema.schema.object({
      project: _configSchema.schema.string(),
      keep_stale: _configSchema.schema.boolean(),
      monitors: _configSchema.schema.arrayOf(_configSchema.schema.any())
    })
  },
  handler: async ({
    request,
    response,
    savedObjectsClient,
    server
  }) => {
    var _request$body;

    const monitors = ((_request$body = request.body) === null || _request$body === void 0 ? void 0 : _request$body.monitors) || [];
    const spaceId = server.spaces.spacesService.getSpaceId(request);
    const {
      keep_stale: keepStale,
      project: projectId
    } = request.body || {};
    const locations = (await (0, _get_service_locations.getServiceLocations)(server)).locations;
    const encryptedSavedObjectsClient = server.encryptedSavedObjects.getClient();
    const pushMonitorFormatter = new _project_monitor_formatter.ProjectMonitorFormatter({
      projectId,
      spaceId,
      keepStale,
      locations,
      encryptedSavedObjectsClient,
      savedObjectsClient,
      monitors,
      server
    });
    await pushMonitorFormatter.configureAllProjectMonitors();
    return response.ok({
      body: {
        createdMonitors: pushMonitorFormatter.createdMonitors,
        updatedMonitors: pushMonitorFormatter.updatedMonitors,
        staleMonitors: pushMonitorFormatter.staleMonitors,
        deletedMonitors: pushMonitorFormatter.deletedMonitors,
        failedMonitors: pushMonitorFormatter.failedMonitors,
        failedStaleMonitors: pushMonitorFormatter.failedStaleMonitors
      }
    });
  }
});

exports.addSyntheticsProjectMonitorRoute = addSyntheticsProjectMonitorRoute;