"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LifecycleQuery = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("../utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Builds a query for retrieving descendants of a node.
 */


class LifecycleQuery {
  constructor({
    schema,
    indexPatterns,
    timeRange,
    isInternalRequest
  }) {
    (0, _defineProperty2.default)(this, "schema", void 0);
    (0, _defineProperty2.default)(this, "indexPatterns", void 0);
    (0, _defineProperty2.default)(this, "timeRange", void 0);
    (0, _defineProperty2.default)(this, "docValueFields", void 0);
    (0, _defineProperty2.default)(this, "isInternalRequest", void 0);
    this.docValueFields = (0, _utils.docValueFields)(schema);
    this.schema = schema;
    this.indexPatterns = indexPatterns;
    this.timeRange = timeRange;
    this.isInternalRequest = isInternalRequest;
  }

  query(nodes) {
    return {
      _source: false,
      docvalue_fields: this.docValueFields,
      size: nodes.length,
      collapse: {
        field: this.schema.id
      },
      sort: [{
        '@timestamp': 'asc'
      }],
      query: {
        bool: {
          filter: [{
            range: {
              '@timestamp': {
                gte: this.timeRange.from,
                lte: this.timeRange.to,
                format: 'strict_date_optional_time'
              }
            }
          }, {
            terms: {
              [this.schema.id]: nodes
            }
          }, {
            exists: {
              field: this.schema.id
            }
          }, {
            bool: {
              must_not: {
                term: {
                  [this.schema.id]: ''
                }
              }
            }
          }, {
            term: {
              'event.category': 'process'
            }
          }, {
            term: {
              'event.kind': 'event'
            }
          }]
        }
      }
    };
  }
  /**
   * Searches for lifecycle events matching the specified node IDs.
   *
   * @param client for making requests to Elasticsearch
   * @param nodes the unique IDs to search for in Elasticsearch
   */


  async search(client, nodes) {
    const validNodes = (0, _utils.validIDs)(nodes);

    if (validNodes.length <= 0) {
      return [];
    }

    const esClient = this.isInternalRequest ? client.asInternalUser : client.asCurrentUser;
    const body = await esClient.search({
      body: this.query(validNodes),
      index: this.indexPatterns
    });
    /**
     * The returned values will look like:
     * [
     *  { 'schema_id_value': <value>, 'schema_parent_value': <value> }
     * ]
     *
     * So the schema fields are flattened ('process.parent.entity_id')
     */
    // @ts-expect-error @elastic/elasticsearch _source is optional

    return body.hits.hits.map(hit => hit.fields);
  }

}

exports.LifecycleQuery = LifecycleQuery;