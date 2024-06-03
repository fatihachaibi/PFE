"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerListRoute = registerListRoute;

var _fetch_indices = require("../../lib/fetch_indices");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function registerListRoute({
  router
}) {
  router.get({
    path: '/internal/enterprise_search/indices',
    validate: false
  }, async (context, _, response) => {
    const {
      client
    } = (await context.core).elasticsearch;

    try {
      const indices = await (0, _fetch_indices.fetchIndices)(client);
      return response.ok({
        body: indices,
        headers: {
          'content-type': 'application/json'
        }
      });
    } catch (error) {
      return response.customError({
        statusCode: 502,
        body: 'Error fetching data from Enterprise Search'
      });
    }
  });
}