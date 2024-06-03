"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RuleExecutionStatusWarningReasons = exports.RuleExecutionStatusValues = exports.RuleExecutionStatusErrorReasons = exports.HealthStatus = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// for the `typeof ThingValues[number]` types below, become string types that
// only accept the values in the associated string arrays

const RuleExecutionStatusValues = ['ok', 'active', 'error', 'pending', 'unknown', 'warning'];
exports.RuleExecutionStatusValues = RuleExecutionStatusValues;
let RuleExecutionStatusErrorReasons;
exports.RuleExecutionStatusErrorReasons = RuleExecutionStatusErrorReasons;

(function (RuleExecutionStatusErrorReasons) {
  RuleExecutionStatusErrorReasons["Read"] = "read";
  RuleExecutionStatusErrorReasons["Decrypt"] = "decrypt";
  RuleExecutionStatusErrorReasons["Execute"] = "execute";
  RuleExecutionStatusErrorReasons["Unknown"] = "unknown";
  RuleExecutionStatusErrorReasons["License"] = "license";
  RuleExecutionStatusErrorReasons["Timeout"] = "timeout";
  RuleExecutionStatusErrorReasons["Disabled"] = "disabled";
})(RuleExecutionStatusErrorReasons || (exports.RuleExecutionStatusErrorReasons = RuleExecutionStatusErrorReasons = {}));

let RuleExecutionStatusWarningReasons;
exports.RuleExecutionStatusWarningReasons = RuleExecutionStatusWarningReasons;

(function (RuleExecutionStatusWarningReasons) {
  RuleExecutionStatusWarningReasons["MAX_EXECUTABLE_ACTIONS"] = "maxExecutableActions";
})(RuleExecutionStatusWarningReasons || (exports.RuleExecutionStatusWarningReasons = RuleExecutionStatusWarningReasons = {}));

let HealthStatus;
exports.HealthStatus = HealthStatus;

(function (HealthStatus) {
  HealthStatus["OK"] = "ok";
  HealthStatus["Warning"] = "warn";
  HealthStatus["Error"] = "error";
})(HealthStatus || (exports.HealthStatus = HealthStatus = {}));