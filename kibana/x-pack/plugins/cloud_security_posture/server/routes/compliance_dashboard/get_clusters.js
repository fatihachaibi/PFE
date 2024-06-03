"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClustersQuery = exports.getClustersFromAggs = exports.getClusters = void 0;

var _get_grouped_findings_evaluation = require("./get_grouped_findings_evaluation");

var _get_stats = require("./get_stats");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getClustersQuery = (query, pitId) => ({
  size: 0,
  query,
  aggs: {
    aggs_by_cluster_id: {
      terms: {
        field: 'cluster_id.keyword'
      },
      aggs: {
        benchmarks: {
          terms: {
            field: 'rule.benchmark.name.keyword'
          }
        },
        timestamps: {
          terms: {
            field: '@timestamp',
            size: 1,
            order: {
              _key: 'desc'
            }
          }
        },
        ..._get_grouped_findings_evaluation.failedFindingsAggQuery,
        ..._get_stats.findingsEvaluationAggsQuery
      }
    }
  },
  pit: {
    id: pitId
  }
});

exports.getClustersQuery = getClustersQuery;

const getClustersFromAggs = clusters => clusters.map(cluster => {
  // get cluster's meta data
  const benchmarks = cluster.benchmarks.buckets;
  if (!Array.isArray(benchmarks)) throw new Error('missing aggs by benchmarks per cluster');
  const timestamps = cluster.timestamps.buckets;
  if (!Array.isArray(timestamps)) throw new Error('missing aggs by timestamps per cluster');
  const meta = {
    clusterId: cluster.key,
    benchmarkName: benchmarks[0].key,
    lastUpdate: timestamps[0].key
  }; // get cluster's stats

  if (!cluster.failed_findings || !cluster.passed_findings) throw new Error('missing findings evaluations per cluster');
  const stats = (0, _get_stats.getStatsFromFindingsEvaluationsAggs)(cluster); // get cluster's resource types aggs

  const resourcesTypesAggs = cluster.aggs_by_resource_type.buckets;
  if (!Array.isArray(resourcesTypesAggs)) throw new Error('missing aggs by resource type per cluster');
  const groupedFindingsEvaluation = (0, _get_grouped_findings_evaluation.getFailedFindingsFromAggs)(resourcesTypesAggs);
  return {
    meta,
    stats,
    groupedFindingsEvaluation
  };
});

exports.getClustersFromAggs = getClustersFromAggs;

const getClusters = async (esClient, query, pitId) => {
  var _queryResult$aggregat;

  const queryResult = await esClient.search(getClustersQuery(query, pitId));
  const clusters = (_queryResult$aggregat = queryResult.aggregations) === null || _queryResult$aggregat === void 0 ? void 0 : _queryResult$aggregat.aggs_by_cluster_id.buckets;
  if (!Array.isArray(clusters)) throw new Error('missing aggs by cluster id');
  return getClustersFromAggs(clusters);
};

exports.getClusters = getClusters;