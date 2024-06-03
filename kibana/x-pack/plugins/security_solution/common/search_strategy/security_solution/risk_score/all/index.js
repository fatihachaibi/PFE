"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RiskSeverity = exports.RiskScoreFields = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

let RiskScoreFields;
exports.RiskScoreFields = RiskScoreFields;

(function (RiskScoreFields) {
  RiskScoreFields["timestamp"] = "@timestamp";
  RiskScoreFields["hostName"] = "host.name";
  RiskScoreFields["userName"] = "user.name";
  RiskScoreFields["riskScore"] = "risk_stats.risk_score";
  RiskScoreFields["risk"] = "risk";
})(RiskScoreFields || (exports.RiskScoreFields = RiskScoreFields = {}));

let RiskSeverity;
exports.RiskSeverity = RiskSeverity;

(function (RiskSeverity) {
  RiskSeverity["unknown"] = "Unknown";
  RiskSeverity["low"] = "Low";
  RiskSeverity["moderate"] = "Moderate";
  RiskSeverity["high"] = "High";
  RiskSeverity["critical"] = "Critical";
})(RiskSeverity || (exports.RiskSeverity = RiskSeverity = {}));