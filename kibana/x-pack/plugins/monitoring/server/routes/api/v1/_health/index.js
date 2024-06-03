"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerV1HealthRoute = registerV1HealthRoute;

var _create_route_validation_function = require("../../../../lib/create_route_validation_function");

var _health = require("../../../../../common/http_api/_health");

var _constants = require("../../../../../common/constants");

var _monitored_clusters = require("./monitored_clusters");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const DEFAULT_QUERY_TIMERANGE = {
  min: 'now-15m',
  max: 'now'
};
const DEFAULT_QUERY_TIMEOUT_SECONDS = 15;

function registerV1HealthRoute(server) {
  const validateQuery = (0, _create_route_validation_function.createValidationFunction)(_health.getHealthRequestQueryRT);

  const withCCS = indexPattern => {
    if (server.config.ui.ccs.enabled) {
      return `${indexPattern},*:${indexPattern}`;
    }

    return indexPattern;
  };

  server.route({
    method: 'get',
    path: '/api/monitoring/v1/_health',
    validate: {
      query: validateQuery
    },

    async handler(req) {
      const logger = req.getLogger();
      const timeRange = {
        min: req.query.min || DEFAULT_QUERY_TIMERANGE.min,
        max: req.query.max || DEFAULT_QUERY_TIMERANGE.max
      };
      const timeout = req.query.timeout || DEFAULT_QUERY_TIMEOUT_SECONDS;
      const {
        callWithRequest
      } = req.server.plugins.elasticsearch.getCluster('monitoring');
      const settings = extractSettings(server.config);
      const monitoredClusters = await (0, _monitored_clusters.fetchMonitoredClusters)({
        timeout,
        timeRange,
        monitoringIndex: withCCS(_constants.INDEX_PATTERN),
        entSearchIndex: withCCS(_constants.INDEX_PATTERN_ENTERPRISE_SEARCH),
        search: params => callWithRequest(req, 'search', params),
        logger
      }).catch(err => {
        logger.error(`_health: failed to retrieve monitored clusters:\n${err.stack}`);
        return {
          error: err.message
        };
      });
      return {
        monitoredClusters,
        settings
      };
    }

  });
}

function extractSettings(config) {
  return {
    ccs: config.ui.ccs.enabled,
    logsIndex: config.ui.logs.index,
    metricbeatIndex: config.ui.metricbeat.index,
    hasRemoteClusterConfigured: (config.ui.elasticsearch.hosts || []).some(Boolean)
  };
}