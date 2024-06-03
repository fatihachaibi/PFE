"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSyntheticsMonitorRoute = exports.getAllSyntheticsMonitorRoute = void 0;

var _configSchema = require("@kbn/config-schema");

var _server = require("../../../../../../src/core/server");

var _constants = require("../../../common/constants");

var _synthetics_monitor = require("../../legacy_uptime/lib/saved_objects/synthetics_monitor");

var _service_errors = require("../synthetics_service/service_errors");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getSyntheticsMonitorRoute = libs => ({
  method: 'GET',
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
    server: {
      encryptedSavedObjects
    },
    savedObjectsClient
  }) => {
    const {
      monitorId
    } = request.params;
    const encryptedSavedObjectsClient = encryptedSavedObjects.getClient();

    try {
      return await libs.requests.getSyntheticsMonitor({
        monitorId,
        encryptedSavedObjectsClient,
        savedObjectsClient
      });
    } catch (getErr) {
      if (_server.SavedObjectsErrorHelpers.isNotFoundError(getErr)) {
        return (0, _service_errors.getMonitorNotFoundResponse)(response, monitorId);
      }

      throw getErr;
    }
  }
});

exports.getSyntheticsMonitorRoute = getSyntheticsMonitorRoute;

const getAllSyntheticsMonitorRoute = () => ({
  method: 'GET',
  path: _constants.API_URLS.SYNTHETICS_MONITORS,
  validate: {
    query: _configSchema.schema.object({
      page: _configSchema.schema.maybe(_configSchema.schema.number()),
      perPage: _configSchema.schema.maybe(_configSchema.schema.number()),
      sortField: _configSchema.schema.maybe(_configSchema.schema.string()),
      sortOrder: _configSchema.schema.maybe(_configSchema.schema.oneOf([_configSchema.schema.literal('desc'), _configSchema.schema.literal('asc')])),
      search: _configSchema.schema.maybe(_configSchema.schema.string()),
      query: _configSchema.schema.maybe(_configSchema.schema.string())
    })
  },
  handler: async ({
    request,
    savedObjectsClient,
    server
  }) => {
    const {
      perPage = 50,
      page,
      sortField,
      sortOrder,
      search,
      query
    } = request.query; // TODO: add query/filtering params

    const {
      saved_objects: monitors,
      per_page: perPageT,
      ...rest
    } = await savedObjectsClient.find({
      type: _synthetics_monitor.syntheticsMonitorType,
      perPage,
      page,
      sortField,
      sortOrder,
      filter: query || (search ? `${_synthetics_monitor.syntheticsMonitorType}.attributes.name: ${search}` : '')
    });
    return { ...rest,
      perPage: perPageT,
      monitors,
      syncErrors: server.syntheticsService.syncErrors
    };
  }
});

exports.getAllSyntheticsMonitorRoute = getAllSyntheticsMonitorRoute;