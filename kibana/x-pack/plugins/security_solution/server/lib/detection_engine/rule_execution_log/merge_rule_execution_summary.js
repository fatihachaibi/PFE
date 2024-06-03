"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeRuleExecutionSummary = void 0;

var _common = require("../../../../common/detection_engine/schemas/common");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const mergeRuleExecutionSummary = (rule, ruleExecutionSummary) => {
  if (ruleExecutionSummary == null) {
    return null;
  }

  const frameworkStatus = rule.executionStatus;
  const customStatus = ruleExecutionSummary.last_execution;

  if (frameworkStatus.status === 'error' && new Date(frameworkStatus.lastExecutionDate) > new Date(customStatus.date)) {
    var _frameworkStatus$erro, _frameworkStatus$erro2;

    return { ...ruleExecutionSummary,
      last_execution: {
        date: frameworkStatus.lastExecutionDate.toISOString(),
        status: _common.RuleExecutionStatus.failed,
        status_order: _common.ruleExecutionStatusOrderByStatus[_common.RuleExecutionStatus.failed],
        message: `Reason: ${(_frameworkStatus$erro = frameworkStatus.error) === null || _frameworkStatus$erro === void 0 ? void 0 : _frameworkStatus$erro.reason} Message: ${(_frameworkStatus$erro2 = frameworkStatus.error) === null || _frameworkStatus$erro2 === void 0 ? void 0 : _frameworkStatus$erro2.message}`,
        metrics: customStatus.metrics
      }
    };
  }

  return ruleExecutionSummary;
};

exports.mergeRuleExecutionSummary = mergeRuleExecutionSummary;