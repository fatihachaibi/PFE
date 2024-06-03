"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatsQuery = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Builds a query for retrieving descendants of a node.
 */


class StatsQuery {
  constructor({
    schema,
    indexPatterns,
    timeRange,
    isInternalRequest
  }) {
    (0, _defineProperty2.default)(this, "schema", void 0);
    (0, _defineProperty2.default)(this, "indexPatterns", void 0);
    (0, _defineProperty2.default)(this, "timeRange", void 0);
    (0, _defineProperty2.default)(this, "isInternalRequest", void 0);
    this.schema = schema;
    this.indexPatterns = indexPatterns;
    this.timeRange = timeRange;
    this.isInternalRequest = isInternalRequest;
  }

  query(nodes) {
    return {
      size: 0,
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
            term: {
              'event.kind': 'event'
            }
          }, {
            bool: {
              must_not: {
                term: {
                  'event.category': 'process'
                }
              }
            }
          }]
        }
      },
      aggs: {
        ids: {
          terms: {
            field: this.schema.id,
            size: nodes.length
          },
          aggs: {
            categories: {
              terms: {
                field: 'event.category',
                size: 1000
              }
            }
          }
        }
      }
    };
  }

  static getEventStats(catAgg) {
    var _catAgg$categories;

    const total = catAgg.doc_count;

    if (!((_catAgg$categories = catAgg.categories) !== null && _catAgg$categories !== void 0 && _catAgg$categories.buckets)) {
      return {
        total,
        byCategory: {}
      };
    }

    const byCategory = catAgg.categories.buckets.reduce((cummulative, bucket) => ({ ...cummulative,
      [bucket.key]: bucket.doc_count
    }), {});
    return {
      total,
      byCategory
    };
  }
  /**
   * Returns the related event statistics for a set of nodes.
   * @param client used to make requests to Elasticsearch
   * @param nodes an array of unique IDs representing nodes in a resolver graph
   */


  async search(client, nodes) {
    var _body$aggregations, _body$aggregations$id;

    if (nodes.length <= 0) {
      return {};
    }

    const esClient = this.isInternalRequest ? client.asInternalUser : client.asCurrentUser; // leaving unknown here because we don't actually need the hits part of the body

    const body = await esClient.search({
      body: this.query(nodes),
      index: this.indexPatterns
    }); // @ts-expect-error declare aggegations type explicitly

    return (_body$aggregations = body.aggregations) === null || _body$aggregations === void 0 ? void 0 : (_body$aggregations$id = _body$aggregations.ids) === null || _body$aggregations$id === void 0 ? void 0 : _body$aggregations$id.buckets.reduce((cummulative, bucket) => ({ ...cummulative,
      [bucket.key]: StatsQuery.getEventStats(bucket)
    }), {});
  }

}

exports.StatsQuery = StatsQuery;