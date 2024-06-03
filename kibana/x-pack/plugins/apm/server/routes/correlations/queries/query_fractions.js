"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransactionDurationRangesRequest = exports.fetchTransactionDurationFractions = void 0;

var _elasticsearch_fieldnames = require("../../../../common/elasticsearch_fieldnames");

var _get_query_with_params = require("./get_query_with_params");

var _get_request_base = require("./get_request_base");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getTransactionDurationRangesRequest = (params, ranges) => ({ ...(0, _get_request_base.getRequestBase)(params),
  body: {
    query: (0, _get_query_with_params.getQueryWithParams)({
      params
    }),
    size: 0,
    aggs: {
      latency_ranges: {
        range: {
          field: _elasticsearch_fieldnames.TRANSACTION_DURATION,
          ranges
        }
      }
    }
  }
});

exports.getTransactionDurationRangesRequest = getTransactionDurationRangesRequest;
/**
 * Compute the actual percentile bucket counts and actual fractions
 */

const fetchTransactionDurationFractions = async (esClient, params, ranges) => {
  var _resp$aggregations$la;

  const resp = await esClient.search(getTransactionDurationRangesRequest(params, ranges));

  if (resp.hits.total.value === 0) {
    return {
      fractions: [],
      totalDocCount: 0
    };
  }

  if (resp.aggregations === undefined) {
    throw new Error('fetchTransactionDurationFractions failed, did not return aggregations.');
  }

  const buckets = (_resp$aggregations$la = resp.aggregations.latency_ranges) === null || _resp$aggregations$la === void 0 ? void 0 : _resp$aggregations$la.buckets;
  const totalDocCount = buckets.reduce((acc, bucket) => {
    return acc + bucket.doc_count;
  }, 0); // Compute (doc count per bucket/total doc count)

  return {
    fractions: buckets.map(bucket => bucket.doc_count / totalDocCount),
    totalDocCount
  };
};

exports.fetchTransactionDurationFractions = fetchTransactionDurationFractions;