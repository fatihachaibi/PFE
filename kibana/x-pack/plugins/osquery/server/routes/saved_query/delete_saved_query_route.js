"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSavedQueryRoute = void 0;

var _configSchema = require("@kbn/config-schema");

var _common = require("../../../common");

var _types = require("../../../common/types");

var _utils = require("./utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const deleteSavedQueryRoute = (router, osqueryContext) => {
  router.delete({
    path: '/internal/osquery/saved_query/{id}',
    validate: {
      params: _configSchema.schema.object({
        id: _configSchema.schema.string()
      })
    },
    options: {
      tags: [`access:${_common.PLUGIN_ID}-writeSavedQueries`]
    }
  }, async (context, request, response) => {
    const coreContext = await context.core;
    const savedObjectsClient = coreContext.savedObjects.client;
    const isPrebuilt = await (0, _utils.isSavedQueryPrebuilt)(osqueryContext, request.params.id);

    if (isPrebuilt) {
      return response.conflict({
        body: `Elastic prebuilt Saved query cannot be deleted.`
      });
    }

    await savedObjectsClient.delete(_types.savedQuerySavedObjectType, request.params.id, {
      refresh: 'wait_for'
    });
    return response.ok({
      body: {}
    });
  });
};

exports.deleteSavedQueryRoute = deleteSavedQueryRoute;