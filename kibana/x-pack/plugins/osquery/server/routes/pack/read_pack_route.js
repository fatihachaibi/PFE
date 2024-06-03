"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readPackRoute = void 0;

var _lodash = require("lodash");

var _configSchema = require("@kbn/config-schema");

var _common = require("../../../../fleet/common");

var _common2 = require("../../../common");

var _types = require("../../../common/types");

var _utils = require("./utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars


const readPackRoute = (router, osqueryContext) => {
  router.get({
    path: '/internal/osquery/packs/{id}',
    validate: {
      params: _configSchema.schema.object({
        id: _configSchema.schema.string()
      })
    },
    options: {
      tags: [`access:${_common2.PLUGIN_ID}-readPacks`]
    }
  }, async (context, request, response) => {
    const coreContext = await context.core;
    const savedObjectsClient = coreContext.savedObjects.client;
    const {
      attributes,
      references,
      ...rest
    } = await savedObjectsClient.get(_types.packSavedObjectType, request.params.id);
    const policyIds = (0, _lodash.map)((0, _lodash.filter)(references, ['type', _common.AGENT_POLICY_SAVED_OBJECT_TYPE]), 'id');
    const osqueryPackAssetReference = !!(0, _lodash.filter)(references, ['type', 'osquery-pack-asset']);
    return response.ok({
      body: { ...rest,
        ...attributes,
        queries: (0, _utils.convertSOQueriesToPack)(attributes.queries),
        policy_ids: policyIds,
        read_only: attributes.version !== undefined && osqueryPackAssetReference
      }
    });
  });
};

exports.readPackRoute = readPackRoute;