"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPValues = void 0;

var _constants = require("../../../../common/correlations/constants");

var _utils = require("../utils");

var _ = require(".");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const fetchPValues = async (esClient, paramsWithIndex, fieldCandidates) => {
  const histogramRangeSteps = await (0, _.fetchTransactionDurationHistogramRangeSteps)(esClient, paramsWithIndex);
  const {
    fulfilled,
    rejected
  } = (0, _utils.splitAllSettledPromises)(await Promise.allSettled(fieldCandidates.map(fieldName => (0, _.fetchFailedTransactionsCorrelationPValues)(esClient, paramsWithIndex, histogramRangeSteps, fieldName))));
  const flattenedResults = fulfilled.flat();
  const failedTransactionsCorrelations = [];
  let fallbackResult;
  flattenedResults.forEach(record => {
    if (record && typeof record.pValue === 'number' && record.pValue < _constants.ERROR_CORRELATION_THRESHOLD) {
      failedTransactionsCorrelations.push(record);
    } else {
      // If there's no result matching the criteria
      // Find the next highest/closest result to the threshold
      // to use as a fallback result
      if (!fallbackResult) {
        fallbackResult = record;
      } else {
        if (record.pValue !== null && fallbackResult && fallbackResult.pValue !== null && record.pValue < fallbackResult.pValue) {
          fallbackResult = record;
        }
      }
    }
  });
  const ccsWarning = rejected.length > 0 && (paramsWithIndex === null || paramsWithIndex === void 0 ? void 0 : paramsWithIndex.index.includes(':'));
  return {
    failedTransactionsCorrelations,
    ccsWarning,
    fallbackResult
  };
};

exports.fetchPValues = fetchPValues;