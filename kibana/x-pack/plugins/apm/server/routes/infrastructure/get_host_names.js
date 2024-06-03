"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContainerHostNames = void 0;

var _server = require("../../../../observability/server");

var _elasticsearch_fieldnames = require("../../../common/elasticsearch_fieldnames");

var _get_metric_indices = require("../../lib/helpers/get_metric_indices");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getHostNames = async ({
  esClient,
  containerIds,
  index,
  start,
  end
}) => {
  var _response$aggregation, _response$aggregation2, _response$aggregation3;

  const response = await esClient.search({
    index: [index],
    body: {
      size: 0,
      query: {
        bool: {
          filter: [{
            terms: {
              [_elasticsearch_fieldnames.CONTAINER_ID]: containerIds
            }
          }, ...(0, _server.rangeQuery)(start, end)]
        }
      },
      aggs: {
        hostNames: {
          terms: {
            field: _elasticsearch_fieldnames.HOST_NAME,
            size: 500
          }
        }
      }
    }
  });
  return {
    hostNames: (_response$aggregation = (_response$aggregation2 = response.aggregations) === null || _response$aggregation2 === void 0 ? void 0 : (_response$aggregation3 = _response$aggregation2.hostNames) === null || _response$aggregation3 === void 0 ? void 0 : _response$aggregation3.buckets.map(bucket => bucket.key)) !== null && _response$aggregation !== void 0 ? _response$aggregation : []
  };
};

const getContainerHostNames = async ({
  containerIds,
  context,
  infra,
  start,
  end
}) => {
  if (containerIds.length) {
    const esClient = (await context.core).elasticsearch.client.asCurrentUser;
    const savedObjectsClient = (await context.core).savedObjects.client;
    const metricIndices = await (0, _get_metric_indices.getMetricIndices)({
      infraPlugin: infra,
      savedObjectsClient
    });
    const containerHostNames = await getHostNames({
      esClient,
      containerIds,
      index: metricIndices,
      start,
      end
    });
    return containerHostNames.hostNames;
  }

  return [];
};

exports.getContainerHostNames = getContainerHostNames;