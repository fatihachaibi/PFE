"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerDeleteUnknownTypesRoute = void 0;

var _utils = require("../utils");

var _deprecations = require("../../deprecations");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const registerDeleteUnknownTypesRoute = (router, {
  kibanaIndex,
  kibanaVersion
}) => {
  router.post({
    path: '/deprecations/_delete_unknown_types',
    validate: false
  }, (0, _utils.catchAndReturnBoomErrors)(async (context, req, res) => {
    const {
      elasticsearch,
      savedObjects
    } = await context.core;
    await (0, _deprecations.deleteUnknownTypeObjects)({
      esClient: elasticsearch.client,
      typeRegistry: savedObjects.typeRegistry,
      kibanaIndex,
      kibanaVersion
    });
    return res.ok({
      body: {
        success: true
      }
    });
  }));
};

exports.registerDeleteUnknownTypesRoute = registerDeleteUnknownTypesRoute;