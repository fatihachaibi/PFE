"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ruleExecutionSummary = exports.ruleExecutionStatusOrderByStatus = exports.ruleExecutionStatusOrder = exports.ruleExecutionStatus = exports.ruleExecutionMetrics = exports.ruleExecutionEvent = exports.executionLogTableSortColumns = exports.durationMetric = exports.aggregateRuleExecutionEvent = exports.RuleExecutionStatus = void 0;

var t = _interopRequireWildcard(require("io-ts"));

var _securitysolutionIoTsTypes = require("@kbn/securitysolution-io-ts-types");

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// -------------------------------------------------------------------------------------------------
// Rule execution status

/**
 * Custom execution status of Security rules that is different from the status
 * used in the Alerting Framework. We merge our custom status with the
 * Framework's status to determine the resulting status of a rule.
 */


let RuleExecutionStatus;
exports.RuleExecutionStatus = RuleExecutionStatus;

(function (RuleExecutionStatus) {
  RuleExecutionStatus["going to run"] = "going to run";
  RuleExecutionStatus["running"] = "running";
  RuleExecutionStatus["partial failure"] = "partial failure";
  RuleExecutionStatus["failed"] = "failed";
  RuleExecutionStatus["succeeded"] = "succeeded";
})(RuleExecutionStatus || (exports.RuleExecutionStatus = RuleExecutionStatus = {}));

const ruleExecutionStatus = (0, _securitysolutionIoTsTypes.enumeration)('RuleExecutionStatus', RuleExecutionStatus);
exports.ruleExecutionStatus = ruleExecutionStatus;
const ruleExecutionStatusOrder = _securitysolutionIoTsTypes.PositiveInteger;
exports.ruleExecutionStatusOrder = ruleExecutionStatusOrder;
const ruleExecutionStatusOrderByStatus = {
  [RuleExecutionStatus.succeeded]: 0,
  [RuleExecutionStatus['going to run']]: 10,
  [RuleExecutionStatus.running]: 15,
  [RuleExecutionStatus['partial failure']]: 20,
  [RuleExecutionStatus.failed]: 30
}; // -------------------------------------------------------------------------------------------------
// Rule execution metrics

exports.ruleExecutionStatusOrderByStatus = ruleExecutionStatusOrderByStatus;
const durationMetric = _securitysolutionIoTsTypes.PositiveInteger;
exports.durationMetric = durationMetric;
const ruleExecutionMetrics = t.partial({
  total_search_duration_ms: durationMetric,
  total_indexing_duration_ms: durationMetric,
  execution_gap_duration_s: durationMetric
});
exports.ruleExecutionMetrics = ruleExecutionMetrics; // -------------------------------------------------------------------------------------------------
// Rule execution summary

const ruleExecutionSummary = t.type({
  last_execution: t.type({
    date: _securitysolutionIoTsTypes.IsoDateString,
    status: ruleExecutionStatus,
    status_order: ruleExecutionStatusOrder,
    message: t.string,
    metrics: ruleExecutionMetrics
  })
});
exports.ruleExecutionSummary = ruleExecutionSummary; // -------------------------------------------------------------------------------------------------
// Rule execution events

const ruleExecutionEvent = t.type({
  date: _securitysolutionIoTsTypes.IsoDateString,
  status: ruleExecutionStatus,
  message: t.string
});
exports.ruleExecutionEvent = ruleExecutionEvent; // -------------------------------------------------------------------------------------------------
// Aggregate Rule execution events

const aggregateRuleExecutionEvent = t.type({
  execution_uuid: t.string,
  timestamp: _securitysolutionIoTsTypes.IsoDateString,
  duration_ms: t.number,
  status: t.string,
  message: t.string,
  num_active_alerts: t.number,
  num_new_alerts: t.number,
  num_recovered_alerts: t.number,
  num_triggered_actions: t.number,
  num_succeeded_actions: t.number,
  num_errored_actions: t.number,
  total_search_duration_ms: t.number,
  es_search_duration_ms: t.number,
  schedule_delay_ms: t.number,
  timed_out: t.boolean,
  indexing_duration_ms: t.number,
  search_duration_ms: t.number,
  gap_duration_s: t.number,
  security_status: t.string,
  security_message: t.string
});
exports.aggregateRuleExecutionEvent = aggregateRuleExecutionEvent;
const executionLogTableSortColumns = t.keyof({
  timestamp: _securitysolutionIoTsTypes.IsoDateString,
  duration_ms: t.number,
  gap_duration_s: t.number,
  indexing_duration_ms: t.number,
  search_duration_ms: t.number,
  schedule_delay_ms: t.number
});
exports.executionLogTableSortColumns = executionLogTableSortColumns;