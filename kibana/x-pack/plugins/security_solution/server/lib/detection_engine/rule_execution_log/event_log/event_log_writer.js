"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEventLogWriter = void 0;

var _server = require("../../../../../../../../src/core/server");

var _server2 = require("../../../../../../event_log/server");

var _common = require("../../../../../common/detection_engine/schemas/common");

var _constants = require("./constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const createEventLogWriter = eventLogService => {
  const eventLogger = eventLogService.getLogger({
    event: {
      provider: _constants.RULE_EXECUTION_LOG_PROVIDER
    }
  });
  let sequence = 0;
  return {
    logStatusChange({
      executionId,
      ruleId,
      ruleName,
      ruleType,
      spaceId,
      newStatus,
      message
    }) {
      eventLogger.logEvent({
        '@timestamp': nowISO(),
        message,
        rule: {
          id: ruleId,
          name: ruleName,
          category: ruleType
        },
        event: {
          kind: 'event',
          action: _constants.RuleExecutionLogAction['status-change'],
          sequence: sequence++
        },
        kibana: {
          alert: {
            rule: {
              execution: {
                status: newStatus,
                status_order: _common.ruleExecutionStatusOrderByStatus[newStatus],
                uuid: executionId
              }
            }
          },
          space_ids: [spaceId],
          saved_objects: [{
            rel: _server2.SAVED_OBJECT_REL_PRIMARY,
            type: _constants.RULE_SAVED_OBJECT_TYPE,
            id: ruleId,
            namespace: spaceIdToNamespace(spaceId)
          }]
        }
      });
    },

    logExecutionMetrics({
      executionId,
      ruleId,
      ruleName,
      ruleType,
      spaceId,
      metrics
    }) {
      eventLogger.logEvent({
        '@timestamp': nowISO(),
        rule: {
          id: ruleId,
          name: ruleName,
          category: ruleType
        },
        event: {
          kind: 'metric',
          action: _constants.RuleExecutionLogAction['execution-metrics'],
          sequence: sequence++
        },
        kibana: {
          alert: {
            rule: {
              execution: {
                metrics,
                uuid: executionId
              }
            }
          },
          space_ids: [spaceId],
          saved_objects: [{
            rel: _server2.SAVED_OBJECT_REL_PRIMARY,
            type: _constants.RULE_SAVED_OBJECT_TYPE,
            id: ruleId,
            namespace: spaceIdToNamespace(spaceId)
          }]
        }
      });
    }

  };
};

exports.createEventLogWriter = createEventLogWriter;

const nowISO = () => new Date().toISOString();

const spaceIdToNamespace = _server.SavedObjectsUtils.namespaceStringToId;