"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = void 0;

var _metrics = require("../../../../../common/alerting/metrics");

var _utils = require("../../common/utils");

var _metric_query = require("./metric_query");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getValue = (aggregatedValue, params) => [_metrics.Aggregators.P95, _metrics.Aggregators.P99].includes(params.aggType) && aggregatedValue.values != null ? aggregatedValue.values[params.aggType === _metrics.Aggregators.P95 ? '95.0' : '99.0'] : aggregatedValue.value;

const NO_DATA_RESPONSE = {
  [_utils.UNGROUPED_FACTORY_KEY]: {
    value: null,
    warn: false,
    trigger: false
  }
};

const getData = async (esClient, params, index, groupBy, filterQuery, compositeSize, alertOnGroupDisappear, timeframe, logger, lastPeriodEnd, previousResults = {}, afterKey) => {
  const handleResponse = (aggs, previous, successfulShards) => {
    var _aggs$all; // This is absolutely NO DATA


    if (successfulShards === 0) {
      return NO_DATA_RESPONSE;
    }

    if (aggs.groupings) {
      const {
        groupings
      } = aggs;
      const nextAfterKey = groupings.after_key;

      for (const bucket of groupings.buckets) {
        const key = Object.values(bucket.key).join(',');
        const {
          shouldWarn,
          shouldTrigger,
          missingGroup,
          currentPeriod: {
            aggregatedValue,
            doc_count: docCount
          },
          aggregatedValue: aggregatedValueForRate
        } = bucket;

        if (missingGroup && missingGroup.value > 0) {
          previous[key] = {
            trigger: false,
            warn: false,
            value: null
          };
        } else {
          const value = params.aggType === _metrics.Aggregators.COUNT ? docCount : params.aggType === _metrics.Aggregators.RATE && aggregatedValueForRate != null ? aggregatedValueForRate.value : aggregatedValue != null ? getValue(aggregatedValue, params) : null;
          previous[key] = {
            trigger: shouldTrigger && shouldTrigger.value > 0 || false,
            warn: shouldWarn && shouldWarn.value > 0 || false,
            value
          };
        }
      }

      if (nextAfterKey) {
        return getData(esClient, params, index, groupBy, filterQuery, compositeSize, alertOnGroupDisappear, timeframe, logger, lastPeriodEnd, previous, nextAfterKey);
      }

      return previous;
    }

    if ((_aggs$all = aggs.all) !== null && _aggs$all !== void 0 && _aggs$all.buckets.all) {
      const {
        currentPeriod: {
          aggregatedValue,
          doc_count: docCount
        },
        aggregatedValue: aggregatedValueForRate,
        shouldWarn,
        shouldTrigger
      } = aggs.all.buckets.all;
      const value = params.aggType === _metrics.Aggregators.COUNT ? docCount : params.aggType === _metrics.Aggregators.RATE && aggregatedValueForRate != null ? aggregatedValueForRate.value : aggregatedValue != null ? getValue(aggregatedValue, params) : null; // There is an edge case where there is no results and the shouldWarn/shouldTrigger
      // bucket scripts will be missing. This is only an issue for document count because
      // the value will end up being ZERO, for other metrics it will be null. In this case
      // we need to do the evaluation in Node.js

      if (aggs.all && params.aggType === _metrics.Aggregators.COUNT && value === 0) {
        const trigger = comparatorMap[params.comparator](value, params.threshold);
        const warn = params.warningThreshold && params.warningComparator ? comparatorMap[params.warningComparator](value, params.warningThreshold) : false;
        return {
          [_utils.UNGROUPED_FACTORY_KEY]: {
            value,
            warn,
            trigger
          }
        };
      }

      return {
        [_utils.UNGROUPED_FACTORY_KEY]: {
          value,
          warn: shouldWarn && shouldWarn.value > 0 || false,
          trigger: shouldTrigger && shouldTrigger.value > 0 || false
        }
      };
    } else {
      return NO_DATA_RESPONSE;
    }
  };

  const request = {
    index,
    allow_no_indices: true,
    ignore_unavailable: true,
    body: (0, _metric_query.getElasticsearchMetricQuery)(params, timeframe, compositeSize, alertOnGroupDisappear, lastPeriodEnd, groupBy, filterQuery, afterKey)
  };
  logger.trace(`Request: ${JSON.stringify(request)}`);
  const body = await esClient.search(request);
  const {
    aggregations,
    _shards
  } = body;
  logger.trace(`Response: ${JSON.stringify(body)}`);

  if (aggregations) {
    return handleResponse(aggregations, previousResults, _shards.successful);
  } else if (_shards.successful) {
    return previousResults;
  }

  return NO_DATA_RESPONSE;
};

exports.getData = getData;
const comparatorMap = {
  [_metrics.Comparator.BETWEEN]: (value, [a, b]) => value >= Math.min(a, b) && value <= Math.max(a, b),
  // `threshold` is always an array of numbers in case the BETWEEN comparator is
  // used; all other compartors will just destructure the first value in the array
  [_metrics.Comparator.GT]: (a, [b]) => a > b,
  [_metrics.Comparator.LT]: (a, [b]) => a < b,
  [_metrics.Comparator.OUTSIDE_RANGE]: (value, [a, b]) => value < a || value > b,
  [_metrics.Comparator.GT_OR_EQ]: (a, [b]) => a >= b,
  [_metrics.Comparator.LT_OR_EQ]: (a, [b]) => a <= b
};