"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRisksEsQuery = exports.getGroupedFindingsEvaluation = exports.getFailedFindingsFromAggs = exports.failedFindingsAggQuery = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const failedFindingsAggQuery = {
  aggs_by_resource_type: {
    terms: {
      field: 'rule.section.keyword'
    },
    aggs: {
      failed_findings: {
        filter: {
          term: {
            'result.evaluation.keyword': 'failed'
          }
        }
      },
      passed_findings: {
        filter: {
          term: {
            'result.evaluation.keyword': 'passed'
          }
        }
      }
    }
  }
};
exports.failedFindingsAggQuery = failedFindingsAggQuery;

const getRisksEsQuery = (query, pitId) => ({
  size: 0,
  query,
  aggs: failedFindingsAggQuery,
  pit: {
    id: pitId
  }
});

exports.getRisksEsQuery = getRisksEsQuery;

const getFailedFindingsFromAggs = queryResult => queryResult.map(bucket => ({
  name: bucket.key,
  totalFindings: bucket.doc_count,
  totalFailed: bucket.failed_findings.doc_count || 0,
  totalPassed: bucket.passed_findings.doc_count || 0
}));

exports.getFailedFindingsFromAggs = getFailedFindingsFromAggs;

const getGroupedFindingsEvaluation = async (esClient, query, pitId) => {
  var _resourceTypesQueryRe;

  const resourceTypesQueryResult = await esClient.search(getRisksEsQuery(query, pitId));
  const ruleSections = (_resourceTypesQueryRe = resourceTypesQueryResult.aggregations) === null || _resourceTypesQueryRe === void 0 ? void 0 : _resourceTypesQueryRe.aggs_by_resource_type.buckets;

  if (!Array.isArray(ruleSections)) {
    return [];
  }

  return getFailedFindingsFromAggs(ruleSections);
};

exports.getGroupedFindingsEvaluation = getGroupedFindingsEvaluation;