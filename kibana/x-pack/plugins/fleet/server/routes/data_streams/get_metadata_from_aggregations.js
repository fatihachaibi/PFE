"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMetadataFromAggregations = getMetadataFromAggregations;

var _lodash = require("lodash");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function getMetadataFromAggregations({
  dataStreamName,
  esClient
}) {
  var _, _2, _3; // Query backing indices to extract data stream dataset, namespace, and type values


  const {
    aggregations: dataStreamAggs
  } = await esClient.search({
    index: dataStreamName,
    body: {
      size: 0,
      query: {
        bool: {
          filter: [{
            exists: {
              field: 'data_stream.namespace'
            }
          }, {
            exists: {
              field: 'data_stream.dataset'
            }
          }]
        }
      },
      aggs: {
        maxIngestedTimestamp: {
          max: {
            field: 'event.ingested'
          }
        },
        dataset: {
          terms: {
            field: 'data_stream.dataset',
            size: 1
          }
        },
        namespace: {
          terms: {
            field: 'data_stream.namespace',
            size: 1
          }
        },
        type: {
          terms: {
            field: 'data_stream.type',
            size: 1
          }
        },
        serviceName: {
          terms: {
            field: 'service.name',
            size: 2
          }
        },
        environment: {
          terms: {
            field: 'service.environment',
            size: 2,
            missing: 'ENVIRONMENT_NOT_DEFINED'
          }
        }
      }
    }
  });
  const {
    maxIngestedTimestamp
  } = dataStreamAggs;
  const {
    dataset,
    namespace,
    type,
    serviceName,
    environment
  } = dataStreamAggs;
  const maxIngested = maxIngestedTimestamp === null || maxIngestedTimestamp === void 0 ? void 0 : maxIngestedTimestamp.value;
  return {
    maxIngested,
    dataset: ((_ = dataset.buckets[0]) === null || _ === void 0 ? void 0 : _.key) || '',
    namespace: ((_2 = namespace.buckets[0]) === null || _2 === void 0 ? void 0 : _2.key) || '',
    type: ((_3 = type.buckets[0]) === null || _3 === void 0 ? void 0 : _3.key) || '',
    serviceNames: (0, _lodash.map)(serviceName.buckets, 'key'),
    environments: (0, _lodash.map)(environment.buckets, 'key')
  };
}