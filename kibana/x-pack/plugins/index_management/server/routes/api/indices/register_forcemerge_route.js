"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerForcemergeRoute = registerForcemergeRoute;

var _configSchema = require("@kbn/config-schema");

var _ = require("..");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const bodySchema = _configSchema.schema.object({
  indices: _configSchema.schema.arrayOf(_configSchema.schema.string()),
  maxNumSegments: _configSchema.schema.maybe(_configSchema.schema.number())
});

function registerForcemergeRoute({
  router,
  lib: {
    handleEsError
  }
}) {
  router.post({
    path: (0, _.addBasePath)('/indices/forcemerge'),
    validate: {
      body: bodySchema
    }
  }, async (context, request, response) => {
    const {
      client
    } = (await context.core).elasticsearch;
    const {
      maxNumSegments,
      indices = []
    } = request.body;
    const params = {
      expand_wildcards: 'none',
      index: indices
    };

    if (maxNumSegments) {
      params.max_num_segments = maxNumSegments;
    }

    try {
      await client.asCurrentUser.indices.forcemerge(params);
      return response.ok();
    } catch (error) {
      return handleEsError({
        error,
        response
      });
    }
  });
}