"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClientForRoutes = void 0;

var _lodash = require("lodash");

var _promise_pool = require("../../../../utils/promise_pool");

var _with_security_span = require("../../../../utils/with_security_span");

var _common = require("../../../../../common/detection_engine/schemas/common");

var _normalization = require("../utils/normalization");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const RULES_PER_CHUNK = 1000;
const MAX_LAST_FAILURES = 5;

const createClientForRoutes = (soClient, eventLog, logger) => {
  return {
    getAggregateExecutionEvents({
      ruleId,
      start,
      end,
      queryText,
      statusFilters,
      page,
      perPage,
      sortField,
      sortOrder
    }) {
      return (0, _with_security_span.withSecuritySpan)('IRuleExecutionLogForRoutes.getAggregateExecutionEvents', async () => {
        try {
          return await eventLog.getAggregateExecutionEvents({
            ruleId,
            start,
            end,
            queryText,
            statusFilters,
            page,
            perPage,
            sortField,
            sortOrder
          });
        } catch (e) {
          const logMessage = 'Error getting last aggregation of execution failures from event log';
          const logAttributes = `rule id: "${ruleId}"`;
          const logReason = e instanceof Error ? e.message : String(e);
          const logMeta = {
            rule: {
              id: ruleId
            }
          };
          logger.error(`${logMessage}; ${logAttributes}; ${logReason}`, logMeta);
          throw e;
        }
      });
    },

    /**
     * Get the current rule execution summary for each of the given rule IDs.
     * This method splits work into chunks so not to overwhelm Elasticsearch
     * when fetching statuses for a big number of rules.
     *
     * @param ruleIds A list of rule IDs (`rule.id`) to fetch summaries for
     * @returns A dict with rule IDs as keys and execution summaries as values
     *
     * @throws AggregateError if any of the rule status requests fail
     */
    getExecutionSummariesBulk(ruleIds) {
      return (0, _with_security_span.withSecuritySpan)('IRuleExecutionLogForRoutes.getExecutionSummariesBulk', async () => {
        try {
          const ruleIdsChunks = (0, _lodash.chunk)(ruleIds, RULES_PER_CHUNK);
          const {
            results,
            errors
          } = await (0, _promise_pool.initPromisePool)({
            concurrency: 1,
            items: ruleIdsChunks,
            executor: async ruleIdsChunk => {
              try {
                const savedObjectsByRuleId = await soClient.getManyByRuleIds(ruleIdsChunk);
                return (0, _lodash.mapValues)(savedObjectsByRuleId, so => {
                  var _so$attributes;

                  return (_so$attributes = so === null || so === void 0 ? void 0 : so.attributes) !== null && _so$attributes !== void 0 ? _so$attributes : null;
                });
              } catch (e) {
                var _e$stack;

                const ruleIdsString = `[${(0, _normalization.truncateList)(ruleIdsChunk).join(', ')}]`;
                const logMessage = 'Error fetching a chunk of rule execution saved objects';
                const logAttributes = `num of rules: ${ruleIdsChunk.length}, rule ids: ${ruleIdsString}`;
                const logReason = e instanceof Error ? (_e$stack = e.stack) !== null && _e$stack !== void 0 ? _e$stack : e.message : String(e);
                logger.error(`${logMessage}; ${logAttributes}; ${logReason}`);
                throw e;
              }
            }
          });

          if (errors.length) {
            const numAllChunks = ruleIdsChunks.length;
            const numFailedChunks = errors.length;
            const message = `Error fetching rule execution saved objects in chunks: ${numFailedChunks}/${numAllChunks} chunks failed`;
            throw new AggregateError(errors, message);
          } // Merge all rule statuses into a single dict


          return Object.assign({}, ...results.map(({
            result
          }) => result));
        } catch (e) {
          const ruleIdsString = `[${(0, _normalization.truncateList)(ruleIds).join(', ')}]`;
          const logMessage = 'Error bulk getting rule execution summaries';
          const logAttributes = `num of rules: ${ruleIds.length}, rule ids: ${ruleIdsString}`;
          const logReason = e instanceof Error ? e.message : String(e);
          logger.error(`${logMessage}; ${logAttributes}; ${logReason}`);
          throw e;
        }
      });
    },

    getExecutionSummary(ruleId) {
      return (0, _with_security_span.withSecuritySpan)('IRuleExecutionLogForRoutes.getExecutionSummary', async () => {
        try {
          const savedObject = await soClient.getOneByRuleId(ruleId);
          return savedObject ? savedObject.attributes : null;
        } catch (e) {
          const logMessage = 'Error getting rule execution summary';
          const logAttributes = `rule id: "${ruleId}"`;
          const logReason = e instanceof Error ? e.message : String(e);
          const logMeta = {
            rule: {
              id: ruleId
            }
          };
          logger.error(`${logMessage}; ${logAttributes}; ${logReason}`, logMeta);
          throw e;
        }
      });
    },

    clearExecutionSummary(ruleId) {
      return (0, _with_security_span.withSecuritySpan)('IRuleExecutionLogForRoutes.clearExecutionSummary', async () => {
        try {
          await soClient.delete(ruleId);
        } catch (e) {
          const logMessage = 'Error clearing rule execution summary';
          const logAttributes = `rule id: "${ruleId}"`;
          const logReason = e instanceof Error ? e.message : String(e);
          const logMeta = {
            rule: {
              id: ruleId
            }
          };
          logger.error(`${logMessage}; ${logAttributes}; ${logReason}`, logMeta);
          throw e;
        }
      });
    },

    getLastFailures(ruleId) {
      return (0, _with_security_span.withSecuritySpan)('IRuleExecutionLogForRoutes.getLastFailures', async () => {
        try {
          return await eventLog.getLastStatusChanges({
            ruleId,
            count: MAX_LAST_FAILURES,
            includeStatuses: [_common.RuleExecutionStatus.failed]
          });
        } catch (e) {
          const logMessage = 'Error getting last execution failures from event log';
          const logAttributes = `rule id: "${ruleId}"`;
          const logReason = e instanceof Error ? e.message : String(e);
          const logMeta = {
            rule: {
              id: ruleId
            }
          };
          logger.error(`${logMessage}; ${logAttributes}; ${logReason}`, logMeta);
          throw e;
        }
      });
    }

  };
};

exports.createClientForRoutes = createClientForRoutes;