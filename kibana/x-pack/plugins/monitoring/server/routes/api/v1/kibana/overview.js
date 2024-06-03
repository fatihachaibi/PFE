"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kibanaOverviewRoute = kibanaOverviewRoute;

var _get_kibana_cluster_status = require("./_get_kibana_cluster_status");

var _get_metrics = require("../../../../lib/details/get_metrics");

var _metric_set_overview = require("./metric_set_overview");

var _errors = require("../../../../lib/errors");

var _kibana = require("../../../../../common/http_api/kibana");

var _create_route_validation_function = require("../../../../lib/create_route_validation_function");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function kibanaOverviewRoute(server) {
  const validateParams = (0, _create_route_validation_function.createValidationFunction)(_kibana.postKibanaOverviewRequestParamsRT);
  const validateBody = (0, _create_route_validation_function.createValidationFunction)(_kibana.postKibanaOverviewRequestPayloadRT);
  server.route({
    method: 'post',
    path: '/api/monitoring/v1/clusters/{clusterUuid}/kibana',
    validate: {
      params: validateParams,
      body: validateBody
    },

    async handler(req) {
      const clusterUuid = req.params.clusterUuid;

      try {
        const moduleType = 'kibana';
        const dsDataset = 'stats';
        const [clusterStatus, metrics] = await Promise.all([(0, _get_kibana_cluster_status.getKibanaClusterStatus)(req, {
          clusterUuid
        }), (0, _get_metrics.getMetrics)(req, moduleType, _metric_set_overview.metricSet, [{
          bool: {
            should: [{
              term: {
                'data_stream.dataset': `${moduleType}.${dsDataset}`
              }
            }, {
              term: {
                'metricset.name': dsDataset
              }
            }, {
              term: {
                type: 'kibana_stats'
              }
            }]
          }
        }])]);
        return _kibana.postKibanaOverviewResponsePayloadRT.encode({
          clusterStatus,
          metrics
        });
      } catch (err) {
        throw (0, _errors.handleError)(err, req);
      }
    }

  });
}