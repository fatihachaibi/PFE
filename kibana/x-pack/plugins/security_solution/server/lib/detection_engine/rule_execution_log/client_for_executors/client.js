"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClientForExecutors = void 0;

var _lodash = require("lodash");

var _common = require("../../../../../common/detection_engine/schemas/common");

var _with_security_span = require("../../../../utils/with_security_span");

var _normalization = require("../utils/normalization");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const createClientForExecutors = (soClient, eventLog, logger, context) => {
  const {
    executionId,
    ruleId,
    ruleName,
    ruleType,
    spaceId
  } = context;
  const client = {
    get context() {
      return context;
    },

    async logStatusChange(args) {
      await (0, _with_security_span.withSecuritySpan)('IRuleExecutionLogForExecutors.logStatusChange', async () => {
        try {
          const normalizedArgs = normalizeStatusChangeArgs(args);
          await Promise.all([writeStatusChangeToSavedObjects(normalizedArgs), writeStatusChangeToEventLog(normalizedArgs)]);
        } catch (e) {
          var _e$stack;

          const logMessage = 'Error logging rule execution status change';
          const logAttributes = `status: "${args.newStatus}", rule id: "${ruleId}", rule name: "${ruleName}", execution uuid: "${executionId}"`;
          const logReason = e instanceof Error ? (_e$stack = e.stack) !== null && _e$stack !== void 0 ? _e$stack : e.message : String(e);
          const logMeta = {
            rule: {
              id: ruleId,
              name: ruleName,
              type: ruleType,
              execution: {
                status: args.newStatus,
                uuid: executionId
              }
            },
            kibana: {
              spaceId
            }
          };
          logger.error(`${logMessage}; ${logAttributes}; ${logReason}`, logMeta);
        }
      });
    }

  }; // TODO: Add executionId to new status SO?

  const writeStatusChangeToSavedObjects = async args => {
    const {
      newStatus,
      message,
      metrics
    } = args;
    await soClient.createOrUpdate(ruleId, {
      last_execution: {
        date: nowISO(),
        status: newStatus,
        status_order: _common.ruleExecutionStatusOrderByStatus[newStatus],
        message,
        metrics: metrics !== null && metrics !== void 0 ? metrics : {}
      }
    });
  };

  const writeStatusChangeToEventLog = args => {
    const {
      newStatus,
      message,
      metrics
    } = args;

    if (metrics) {
      eventLog.logExecutionMetrics({
        executionId,
        ruleId,
        ruleName,
        ruleType,
        spaceId,
        metrics
      });
    }

    eventLog.logStatusChange({
      executionId,
      ruleId,
      ruleName,
      ruleType,
      spaceId,
      newStatus,
      message
    });
  };

  return client;
};

exports.createClientForExecutors = createClientForExecutors;

const nowISO = () => new Date().toISOString();

const normalizeStatusChangeArgs = args => {
  var _truncateValue;

  const {
    newStatus,
    message,
    metrics
  } = args;
  return {
    newStatus,
    message: (_truncateValue = (0, _normalization.truncateValue)(message)) !== null && _truncateValue !== void 0 ? _truncateValue : '',
    metrics: metrics ? {
      total_search_duration_ms: normalizeDurations(metrics.searchDurations),
      total_indexing_duration_ms: normalizeDurations(metrics.indexingDurations),
      execution_gap_duration_s: normalizeGap(metrics.executionGap)
    } : undefined
  };
};

const normalizeDurations = durations => {
  if (durations == null) {
    return undefined;
  }

  const sumAsFloat = (0, _lodash.sum)(durations.map(Number));
  return Math.round(sumAsFloat);
};

const normalizeGap = duration => {
  return duration ? Math.round(duration.asSeconds()) : undefined;
};