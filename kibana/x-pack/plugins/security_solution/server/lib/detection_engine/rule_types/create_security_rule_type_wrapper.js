"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSecurityRuleTypeWrapper = void 0;

var _lodash = require("lodash");

var _securitysolutionIoTsUtils = require("@kbn/securitysolution-io-ts-utils");

var _elasticApmNode = _interopRequireDefault(require("elastic-apm-node"));

var _server = require("../../../../../rule_registry/server");

var _build_rule_message_factory = require("./factories/build_rule_message_factory");

var _utils = require("../signals/utils");

var _constants = require("../../../../common/constants");

var _get_list_client = require("./utils/get_list_client");

var _schedule_notification_actions = require("../notifications/schedule_notification_actions");

var _utils2 = require("../notifications/utils");

var _utils3 = require("./utils");

var _factories = require("./factories");

var _rule_execution_log = require("../rule_execution_log");

var _common = require("../../../../common/detection_engine/schemas/common");

var _schedule_throttle_notification_actions = require("../notifications/schedule_throttle_notification_actions");

var _signal_aad_mapping = _interopRequireDefault(require("../routes/index/signal_aad_mapping.json"));

var _saved_object_references = require("../signals/saved_object_references");

var _with_security_span = require("../../../utils/with_security_span");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/* eslint-disable complexity */


const createSecurityRuleTypeWrapper = ({
  lists,
  logger,
  config,
  ruleDataClient,
  eventLogService,
  ruleExecutionLoggerFactory
}) => type => {
  const {
    alertIgnoreFields: ignoreFields,
    alertMergeStrategy: mergeStrategy
  } = config;
  const persistenceRuleType = (0, _server.createPersistenceRuleTypeWrapper)({
    ruleDataClient,
    logger
  });
  return persistenceRuleType({ ...type,
    cancelAlertsOnRuleTimeout: false,
    useSavedObjectReferences: {
      extractReferences: params => (0, _saved_object_references.extractReferences)({
        logger,
        params
      }),
      injectReferences: (params, savedObjectReferences) => (0, _saved_object_references.injectReferences)({
        logger,
        params,
        savedObjectReferences
      })
    },

    async executor(options) {
      _elasticApmNode.default.setTransactionName(`${options.rule.ruleTypeId} execution`);

      return (0, _with_security_span.withSecuritySpan)('scurityRuleTypeExecutor', async () => {
        const {
          alertId,
          executionId,
          params,
          previousStartedAt,
          startedAt,
          services,
          spaceId,
          state,
          updatedBy: updatedByUser,
          rule
        } = options;
        let runState = state;
        const {
          from,
          maxSignals,
          meta,
          ruleId,
          timestampOverride,
          to
        } = params;
        const {
          alertWithPersistence,
          savedObjectsClient,
          scopedClusterClient,
          uiSettingsClient
        } = services;
        const searchAfterSize = Math.min(maxSignals, _constants.DEFAULT_SEARCH_AFTER_PAGE_SIZE);
        const esClient = scopedClusterClient.asCurrentUser;
        const ruleExecutionLogger = ruleExecutionLoggerFactory(savedObjectsClient, eventLogService, logger, {
          executionId,
          ruleId: alertId,
          ruleName: rule.name,
          ruleType: rule.ruleTypeId,
          spaceId
        });
        const completeRule = {
          ruleConfig: rule,
          ruleParams: params,
          alertId
        };
        const {
          actions,
          name,
          schedule: {
            interval
          }
        } = completeRule.ruleConfig;
        const refresh = actions.length ? 'wait_for' : false;
        const buildRuleMessage = (0, _build_rule_message_factory.buildRuleMessageFactory)({
          id: alertId,
          executionId,
          ruleId,
          name,
          index: spaceId
        });
        logger.debug(buildRuleMessage('[+] Starting Signal Rule execution'));
        logger.debug(buildRuleMessage(`interval: ${interval}`));
        let wroteWarningStatus = false;
        await ruleExecutionLogger.logStatusChange({
          newStatus: _common.RuleExecutionStatus.running
        });
        let result = (0, _utils3.createResultObject)(state);
        const notificationRuleParams = { ...params,
          name,
          id: alertId
        }; // check if rule has permissions to access given index pattern
        // move this collection of lines into a function in utils
        // so that we can use it in create rules route, bulk, etc.

        try {
          if (!(0, _utils.isMachineLearningParams)(params)) {
            var _params$index;

            const index = params.index;
            const hasTimestampOverride = !!timestampOverride;
            const inputIndices = (_params$index = params.index) !== null && _params$index !== void 0 ? _params$index : [];
            const privileges = await (0, _utils.checkPrivilegesFromEsClient)(esClient, inputIndices);
            wroteWarningStatus = await (0, _utils.hasReadIndexPrivileges)({
              privileges,
              logger,
              buildRuleMessage,
              ruleExecutionLogger,
              uiSettingsClient
            });

            if (!wroteWarningStatus) {
              const timestampFieldCaps = await (0, _with_security_span.withSecuritySpan)('fieldCaps', () => services.scopedClusterClient.asCurrentUser.fieldCaps({
                index,
                fields: hasTimestampOverride ? ['@timestamp', timestampOverride] : ['@timestamp'],
                include_unmapped: true
              }, {
                meta: true
              }));
              wroteWarningStatus = await (0, _utils.hasTimestampFields)({
                timestampField: hasTimestampOverride ? timestampOverride : '@timestamp',
                timestampFieldCapsResponse: timestampFieldCaps,
                inputIndices,
                ruleExecutionLogger,
                logger,
                buildRuleMessage
              });
            }
          }
        } catch (exc) {
          const errorMessage = buildRuleMessage(`Check privileges failed to execute ${exc}`);
          logger.warn(errorMessage);
          await ruleExecutionLogger.logStatusChange({
            newStatus: _common.RuleExecutionStatus['partial failure'],
            message: errorMessage
          });
          wroteWarningStatus = true;
        }

        let hasError = false;
        const {
          tuples,
          remainingGap
        } = (0, _utils.getRuleRangeTuples)({
          logger,
          previousStartedAt,
          from,
          to,
          interval,
          maxSignals: maxSignals !== null && maxSignals !== void 0 ? maxSignals : _constants.DEFAULT_MAX_SIGNALS,
          buildRuleMessage,
          startedAt
        });

        if (remainingGap.asMilliseconds() > 0) {
          const gapString = remainingGap.humanize();
          const gapMessage = buildRuleMessage(`${gapString} (${remainingGap.asMilliseconds()}ms) were not queried between this rule execution and the last execution, so signals may have been missed.`, 'Consider increasing your look behind time or adding more Kibana instances.');
          logger.warn(gapMessage);
          hasError = true;
          await ruleExecutionLogger.logStatusChange({
            newStatus: _common.RuleExecutionStatus.failed,
            message: gapMessage,
            metrics: {
              executionGap: remainingGap
            }
          });
        }

        try {
          const {
            listClient,
            exceptionsClient
          } = (0, _get_list_client.getListClient)({
            esClient: services.scopedClusterClient.asCurrentUser,
            updatedByUser,
            spaceId,
            lists,
            savedObjectClient: options.services.savedObjectsClient
          });
          const exceptionItems = await (0, _utils.getExceptions)({
            client: exceptionsClient,
            lists: params.exceptionsList
          });
          const bulkCreate = (0, _factories.bulkCreateFactory)(logger, alertWithPersistence, buildRuleMessage, refresh);
          const legacySignalFields = Object.keys(_signal_aad_mapping.default);
          const wrapHits = (0, _factories.wrapHitsFactory)({
            ignoreFields: [...ignoreFields, ...legacySignalFields],
            mergeStrategy,
            completeRule,
            spaceId
          });
          const wrapSequences = (0, _factories.wrapSequencesFactory)({
            logger,
            ignoreFields: [...ignoreFields, ...legacySignalFields],
            mergeStrategy,
            completeRule,
            spaceId
          });

          for (const tuple of tuples) {
            const runResult = await type.executor({ ...options,
              services,
              state: runState,
              runOpts: {
                buildRuleMessage,
                bulkCreate,
                exceptionItems,
                listClient,
                completeRule,
                searchAfterSize,
                tuple,
                wrapHits,
                wrapSequences,
                ruleDataReader: ruleDataClient.getReader({
                  namespace: options.spaceId
                })
              }
            });
            const createdSignals = result.createdSignals.concat(runResult.createdSignals);
            const warningMessages = result.warningMessages.concat(runResult.warningMessages);
            result = {
              bulkCreateTimes: result.bulkCreateTimes.concat(runResult.bulkCreateTimes),
              createdSignals,
              createdSignalsCount: createdSignals.length,
              errors: result.errors.concat(runResult.errors),
              lastLookbackDate: runResult.lastLookBackDate,
              searchAfterTimes: result.searchAfterTimes.concat(runResult.searchAfterTimes),
              state: runResult.state,
              success: result.success && runResult.success,
              warning: warningMessages.length > 0,
              warningMessages
            };
            runState = runResult.state;
          }

          if (result.warningMessages.length) {
            const warningMessage = buildRuleMessage((0, _rule_execution_log.truncateList)(result.warningMessages).join());
            await ruleExecutionLogger.logStatusChange({
              newStatus: _common.RuleExecutionStatus['partial failure'],
              message: warningMessage
            });
          }

          const createdSignalsCount = result.createdSignals.length;

          if (actions.length) {
            var _parseScheduleDates, _parseScheduleDates2;

            const fromInMs = (_parseScheduleDates = (0, _securitysolutionIoTsUtils.parseScheduleDates)(`now-${interval}`)) === null || _parseScheduleDates === void 0 ? void 0 : _parseScheduleDates.format('x');
            const toInMs = (_parseScheduleDates2 = (0, _securitysolutionIoTsUtils.parseScheduleDates)('now')) === null || _parseScheduleDates2 === void 0 ? void 0 : _parseScheduleDates2.format('x');
            const resultsLink = (0, _utils2.getNotificationResultsLink)({
              from: fromInMs,
              to: toInMs,
              id: alertId,
              kibanaSiemAppUrl: meta === null || meta === void 0 ? void 0 : meta.kibana_siem_app_url
            });
            logger.debug(buildRuleMessage(`Found ${createdSignalsCount} signals for notification.`));

            if (completeRule.ruleConfig.throttle != null) {
              var _completeRule$ruleCon; // NOTE: Since this is throttled we have to call it even on an error condition, otherwise it will "reset" the throttle and fire early


              await (0, _schedule_throttle_notification_actions.scheduleThrottledNotificationActions)({
                alertInstance: services.alertFactory.create(alertId),
                throttle: (_completeRule$ruleCon = completeRule.ruleConfig.throttle) !== null && _completeRule$ruleCon !== void 0 ? _completeRule$ruleCon : '',
                startedAt,
                id: alertId,
                kibanaSiemAppUrl: meta === null || meta === void 0 ? void 0 : meta.kibana_siem_app_url,
                outputIndex: ruleDataClient.indexNameWithNamespace(spaceId),
                ruleId,
                esClient: services.scopedClusterClient.asCurrentUser,
                notificationRuleParams,
                signals: result.createdSignals,
                logger
              });
            } else if (createdSignalsCount) {
              const alertInstance = services.alertFactory.create(alertId);
              (0, _schedule_notification_actions.scheduleNotificationActions)({
                alertInstance,
                signalsCount: createdSignalsCount,
                signals: result.createdSignals,
                resultsLink,
                ruleParams: notificationRuleParams
              });
            }
          }

          if (result.success) {
            logger.debug(buildRuleMessage('[+] Signal Rule execution completed.'));
            logger.debug(buildRuleMessage(`[+] Finished indexing ${createdSignalsCount} signals into ${ruleDataClient.indexNameWithNamespace(spaceId)}`));

            if (!hasError && !wroteWarningStatus && !result.warning) {
              await ruleExecutionLogger.logStatusChange({
                newStatus: _common.RuleExecutionStatus.succeeded,
                message: 'succeeded',
                metrics: {
                  searchDurations: result.searchAfterTimes,
                  indexingDurations: result.bulkCreateTimes
                }
              });
            }

            logger.debug(buildRuleMessage(`[+] Finished indexing ${createdSignalsCount} ${!(0, _lodash.isEmpty)(tuples) ? `signals searched between date ranges ${JSON.stringify(tuples, null, 2)}` : ''}`));
          } else {
            const errorMessage = buildRuleMessage('Bulk Indexing of signals failed:', (0, _rule_execution_log.truncateList)(result.errors).join());
            logger.error(errorMessage);
            await ruleExecutionLogger.logStatusChange({
              newStatus: _common.RuleExecutionStatus.failed,
              message: errorMessage,
              metrics: {
                searchDurations: result.searchAfterTimes,
                indexingDurations: result.bulkCreateTimes
              }
            });
          }
        } catch (error) {
          var _error$message;

          const errorMessage = (_error$message = error.message) !== null && _error$message !== void 0 ? _error$message : '(no error message given)';
          const message = buildRuleMessage('An error occurred during rule execution:', `message: "${errorMessage}"`);
          logger.error(message);
          await ruleExecutionLogger.logStatusChange({
            newStatus: _common.RuleExecutionStatus.failed,
            message,
            metrics: {
              searchDurations: result.searchAfterTimes,
              indexingDurations: result.bulkCreateTimes
            }
          }); // NOTE: Since this is throttled we have to call it even on an error condition, otherwise it will "reset" the throttle and fire early

          if (actions.length && completeRule.ruleConfig.throttle != null) {
            var _completeRule$ruleCon2;

            await (0, _schedule_throttle_notification_actions.scheduleThrottledNotificationActions)({
              alertInstance: services.alertFactory.create(alertId),
              throttle: (_completeRule$ruleCon2 = completeRule.ruleConfig.throttle) !== null && _completeRule$ruleCon2 !== void 0 ? _completeRule$ruleCon2 : '',
              startedAt,
              id: completeRule.alertId,
              kibanaSiemAppUrl: meta === null || meta === void 0 ? void 0 : meta.kibana_siem_app_url,
              outputIndex: ruleDataClient.indexNameWithNamespace(spaceId),
              ruleId,
              esClient: services.scopedClusterClient.asCurrentUser,
              notificationRuleParams,
              signals: result.createdSignals,
              logger
            });
          }
        }

        return result.state;
      });
    }

  });
};

exports.createSecurityRuleTypeWrapper = createSecurityRuleTypeWrapper;