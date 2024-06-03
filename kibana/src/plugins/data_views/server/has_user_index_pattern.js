"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasUserIndexPattern = exports.getIndexPattern = void 0;

var _constants = require("../common/constants");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const getIndexPattern = async ({
  esClient,
  soClient
}) => soClient.find({
  type: 'index-pattern',
  fields: ['title'],
  search: `*`,
  searchFields: ['title'],
  perPage: 100
});

exports.getIndexPattern = getIndexPattern;

const hasUserIndexPattern = async ({
  esClient,
  soClient
}, indexPatterns) => {
  if (!indexPatterns) {
    indexPatterns = await getIndexPattern({
      esClient,
      soClient
    });
  }

  if (indexPatterns.total === 0) {
    return false;
  } // If there are any index patterns that are not the default metrics-* and logs-* ones created by Fleet,
  // assume there are user created index patterns


  if (indexPatterns.saved_objects.some(ip => ip.attributes.title !== _constants.DEFAULT_ASSETS_TO_IGNORE.METRICS_INDEX_PATTERN && ip.attributes.title !== _constants.DEFAULT_ASSETS_TO_IGNORE.LOGS_INDEX_PATTERN)) {
    return true;
  }

  const resolveResponse = await esClient.indices.resolveIndex({
    name: `${_constants.DEFAULT_ASSETS_TO_IGNORE.LOGS_INDEX_PATTERN},${_constants.DEFAULT_ASSETS_TO_IGNORE.METRICS_INDEX_PATTERN}`
  });
  const hasAnyNonDefaultFleetIndices = resolveResponse.indices.some(ds => ds.name !== _constants.DEFAULT_ASSETS_TO_IGNORE.METRICS_ENDPOINT_INDEX_TO_IGNORE);
  if (hasAnyNonDefaultFleetIndices) return true;
  const hasAnyNonDefaultFleetDataStreams = resolveResponse.data_streams.some(ds => ds.name !== _constants.DEFAULT_ASSETS_TO_IGNORE.METRICS_DATA_STREAM_TO_IGNORE && ds.name !== _constants.DEFAULT_ASSETS_TO_IGNORE.LOGS_DATA_STREAM_TO_IGNORE && ds.name !== _constants.DEFAULT_ASSETS_TO_IGNORE.ENT_SEARCH_LOGS_DATA_STREAM_TO_IGNORE);
  if (hasAnyNonDefaultFleetDataStreams) return true;
  return false;
};

exports.hasUserIndexPattern = hasUserIndexPattern;