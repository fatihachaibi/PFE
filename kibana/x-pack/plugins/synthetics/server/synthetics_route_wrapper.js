"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syntheticsRouteWrapper = void 0;

var _router = require("../../../../src/core/server/http/router");

var _common = require("../../observability/common");

var _lib = require("./legacy_uptime/lib/lib");

var _service_api_key = require("./legacy_uptime/lib/saved_objects/service_api_key");

var _constants = require("../common/constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// eslint-disable-next-line @kbn/eslint/no-restricted-paths


const syntheticsRouteWrapper = (uptimeRoute, server) => ({ ...uptimeRoute,
  options: {
    tags: ['access:uptime-read', ...(uptimeRoute !== null && uptimeRoute !== void 0 && uptimeRoute.writeAccess ? ['access:uptime-write'] : [])]
  },
  handler: async (context, request, response) => {
    var _server$config$servic;

    const coreContext = await context.core;
    const {
      client: esClient
    } = coreContext.elasticsearch;
    const savedObjectsClient = coreContext.savedObjects.getClient({
      includedHiddenTypes: [_service_api_key.syntheticsServiceApiKey.name]
    }); // specifically needed for the synthetics service api key generation

    server.authSavedObjectsClient = savedObjectsClient;
    const isInspectorEnabled = await coreContext.uiSettings.client.get(_common.enableInspectEsQueries);
    const uptimeEsClient = (0, _lib.createUptimeESClient)({
      request,
      savedObjectsClient,
      isInspectorEnabled,
      esClient: esClient.asCurrentUser
    });
    server.uptimeEsClient = uptimeEsClient;

    if ((isInspectorEnabled || server.isDev) && ((_server$config$servic = server.config.service) === null || _server$config$servic === void 0 ? void 0 : _server$config$servic.username) !== 'localKibanaIntegrationTestsUser') {
      _lib.inspectableEsQueriesMap.set(request, []);
    }

    const res = await uptimeRoute.handler({
      uptimeEsClient,
      savedObjectsClient,
      context,
      request,
      response,
      server
    });

    if (res instanceof _router.KibanaResponse) {
      return res;
    }

    return response.ok({
      body: { ...res,
        ...((isInspectorEnabled || server.isDev) && uptimeRoute.path !== _constants.API_URLS.DYNAMIC_SETTINGS ? {
          _inspect: _lib.inspectableEsQueriesMap.get(request)
        } : {})
      }
    });
  }
});

exports.syntheticsRouteWrapper = syntheticsRouteWrapper;