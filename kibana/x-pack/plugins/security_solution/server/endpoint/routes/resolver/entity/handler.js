"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleEntities = handleEntities;

var _build_resolver_entity = require("./utils/build_resolver_entity");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * This is used to get an 'entity_id' which is an internal-to-Resolver concept, from an `_id`, which
 * is the artificial ID generated by ES for each document.
 */


function handleEntities() {
  return async (context, request, response) => {
    const {
      query: {
        _id,
        indices
      }
    } = request;
    const esClient = (await context.core).elasticsearch.client;
    const queryResponse = await esClient.asCurrentUser.search({
      ignore_unavailable: true,
      index: indices,
      body: {
        // only return 1 match at most
        size: 1,
        query: {
          bool: {
            filter: [{
              // only return documents with the matching _id
              ids: {
                values: _id
              }
            }]
          }
        }
      }
    });
    const responseBody = (0, _build_resolver_entity.resolverEntity)(queryResponse.hits.hits);
    return response.ok({
      body: responseBody
    });
  };
}