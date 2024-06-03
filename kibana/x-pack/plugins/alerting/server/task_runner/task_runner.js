"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultRuleMonitoring = exports.TaskRunner = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _elasticApmNode = _interopRequireDefault(require("elastic-apm-node"));

var _lodash = require("lodash");

var _uuid = _interopRequireDefault(require("uuid"));

var _server = require("../../../spaces/server");

var _server2 = require("../../../../../src/core/server");

var _server3 = require("../../../task_manager/server");

var _server4 = require("../../../event_log/server");

var _create_execution_handler = require("./create_execution_handler");

var _alert = require("../alert");

var _lib = require("../lib");

var _types = require("../types");

var _result_type = require("../lib/result_type");

var _monitoring = require("../lib/monitoring");

var _alert_task_instance = require("./alert_task_instance");

var _plugin = require("../plugin");

var _is_alerting_error = require("../lib/is_alerting_error");

var _saved_objects = require("../saved_objects");

var _common = require("../../common");

var _errors = require("../lib/errors");

var _monitoring2 = require("../monitoring");

var _wrap_scoped_cluster_client = require("../lib/wrap_scoped_cluster_client");

var _rule_run_metrics_store = require("../lib/rule_run_metrics_store");

var _wrap_search_source_client = require("../lib/wrap_search_source_client");

var _alerting_event_logger = require("../lib/alerting_event_logger/alerting_event_logger");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const FALLBACK_RETRY_INTERVAL = '5m';
const CONNECTIVITY_RETRY_INTERVAL = '5m';

const getDefaultRuleMonitoring = () => ({
  execution: {
    history: [],
    calculated_metrics: {
      success_ratio: 0
    }
  }
});

exports.getDefaultRuleMonitoring = getDefaultRuleMonitoring;

class TaskRunner {
  constructor(ruleType, taskInstance, context, inMemoryMetrics) {
    (0, _defineProperty2.default)(this, "context", void 0);
    (0, _defineProperty2.default)(this, "logger", void 0);
    (0, _defineProperty2.default)(this, "taskInstance", void 0);
    (0, _defineProperty2.default)(this, "ruleConsumer", void 0);
    (0, _defineProperty2.default)(this, "ruleType", void 0);
    (0, _defineProperty2.default)(this, "executionId", void 0);
    (0, _defineProperty2.default)(this, "ruleTypeRegistry", void 0);
    (0, _defineProperty2.default)(this, "inMemoryMetrics", void 0);
    (0, _defineProperty2.default)(this, "alertingEventLogger", void 0);
    (0, _defineProperty2.default)(this, "usageCounter", void 0);
    (0, _defineProperty2.default)(this, "searchAbortController", void 0);
    (0, _defineProperty2.default)(this, "cancelled", void 0);
    this.context = context;
    this.logger = context.logger;
    this.usageCounter = context.usageCounter;
    this.ruleType = ruleType;
    this.ruleConsumer = null;
    this.taskInstance = (0, _alert_task_instance.taskInstanceToAlertTaskInstance)(taskInstance);
    this.ruleTypeRegistry = context.ruleTypeRegistry;
    this.searchAbortController = new AbortController();
    this.cancelled = false;
    this.executionId = _uuid.default.v4();
    this.inMemoryMetrics = inMemoryMetrics;
    this.alertingEventLogger = new _alerting_event_logger.AlertingEventLogger(this.context.eventLogger);
  }

  async getDecryptedAttributes(ruleId, spaceId) {
    const namespace = this.context.spaceIdToNamespace(spaceId); // Only fetch encrypted attributes here, we'll create a saved objects client
    // scoped with the API key to fetch the remaining data.

    const {
      attributes: {
        apiKey,
        enabled,
        consumer
      }
    } = await this.context.encryptedSavedObjectsClient.getDecryptedAsInternalUser('alert', ruleId, {
      namespace
    });
    return {
      apiKey,
      enabled,
      consumer
    };
  }

  getFakeKibanaRequest(spaceId, apiKey) {
    const requestHeaders = {};

    if (apiKey) {
      requestHeaders.authorization = `ApiKey ${apiKey}`;
    }

    const path = (0, _server.addSpaceIdToPath)('/', spaceId);

    const fakeRequest = _server2.KibanaRequest.from({
      headers: requestHeaders,
      path: '/',
      route: {
        settings: {}
      },
      url: {
        href: '/'
      },
      raw: {
        req: {
          url: '/'
        }
      }
    });

    this.context.basePathService.set(fakeRequest, path);
    return fakeRequest;
  }

  getExecutionHandler(ruleId, ruleName, tags, spaceId, apiKey, kibanaBaseUrl, actions, ruleParams, request) {
    return (0, _create_execution_handler.createExecutionHandler)({
      ruleId,
      ruleName,
      ruleConsumer: this.ruleConsumer,
      tags,
      executionId: this.executionId,
      logger: this.logger,
      actionsPlugin: this.context.actionsPlugin,
      apiKey,
      actions,
      spaceId,
      ruleType: this.ruleType,
      kibanaBaseUrl,
      alertingEventLogger: this.alertingEventLogger,
      request,
      ruleParams,
      supportsEphemeralTasks: this.context.supportsEphemeralTasks,
      maxEphemeralActionsPerRule: this.context.maxEphemeralActionsPerRule,
      actionsConfigMap: this.context.actionsConfigMap
    });
  }

  async updateRuleSavedObject(ruleId, namespace, attributes) {
    const client = this.context.internalSavedObjectsRepository;

    try {
      await (0, _saved_objects.partiallyUpdateAlert)(client, ruleId, attributes, {
        ignore404: true,
        namespace,
        refresh: false
      });
    } catch (err) {
      this.logger.error(`error updating rule for ${this.ruleType.id}:${ruleId} ${err.message}`);
    }
  }

  shouldLogAndScheduleActionsForAlerts() {
    // if execution hasn't been cancelled, return true
    if (!this.cancelled) {
      return true;
    } // if execution has been cancelled, return true if EITHER alerting config or rule type indicate to proceed with scheduling actions


    return !this.context.cancelAlertsOnRuleTimeout || !this.ruleType.cancelAlertsOnRuleTimeout;
  }

  countUsageOfActionExecutionAfterRuleCancellation() {
    if (this.cancelled && this.usageCounter) {
      if (this.context.cancelAlertsOnRuleTimeout && this.ruleType.cancelAlertsOnRuleTimeout) {
        // Increment usage counter for skipped actions
        this.usageCounter.incrementCounter({
          counterName: `alertsSkippedDueToRuleExecutionTimeout_${this.ruleType.id}`,
          incrementBy: 1
        });
      }
    }
  }

  async executeAlert(alertId, alert, executionHandler, ruleRunMetricsStore) {
    const {
      actionGroup,
      subgroup: actionSubgroup,
      context,
      state
    } = alert.getScheduledActionOptions();
    alert.updateLastScheduledActions(actionGroup, actionSubgroup);
    alert.unscheduleActions();
    return executionHandler({
      actionGroup,
      actionSubgroup,
      context,
      state,
      alertId,
      ruleRunMetricsStore
    });
  }

  async executeRule(fakeRequest, rule, params, executionHandler, spaceId) {
    var _ruleType$doesSetReco2;

    const {
      alertTypeId,
      consumer,
      schedule,
      throttle,
      notifyWhen,
      mutedInstanceIds,
      name,
      tags,
      createdBy,
      updatedBy,
      createdAt,
      updatedAt,
      enabled,
      actions
    } = rule;
    const {
      params: {
        alertId: ruleId
      },
      state: {
        alertInstances: alertRawInstances = {},
        alertTypeState = {},
        previousStartedAt
      }
    } = this.taskInstance;
    const namespace = this.context.spaceIdToNamespace(spaceId);
    const ruleType = this.ruleTypeRegistry.get(alertTypeId);
    const alerts = (0, _lodash.mapValues)(alertRawInstances, (rawAlert, alertId) => new _alert.Alert(alertId, rawAlert));
    const originalAlerts = (0, _lodash.cloneDeep)(alerts);
    const originalAlertIds = new Set(Object.keys(originalAlerts));
    const ruleLabel = `${this.ruleType.id}:${ruleId}: '${name}'`;
    const wrappedClientOptions = {
      rule: {
        name: rule.name,
        alertTypeId: rule.alertTypeId,
        id: rule.id,
        spaceId
      },
      logger: this.logger,
      abortController: this.searchAbortController
    };
    const scopedClusterClient = this.context.elasticsearch.client.asScoped(fakeRequest);
    const wrappedScopedClusterClient = (0, _wrap_scoped_cluster_client.createWrappedScopedClusterClientFactory)({ ...wrappedClientOptions,
      scopedClusterClient
    });
    const searchSourceClient = await this.context.data.search.searchSource.asScoped(fakeRequest);
    const wrappedSearchSourceClient = (0, _wrap_search_source_client.wrapSearchSourceClient)({ ...wrappedClientOptions,
      searchSourceClient
    });
    let updatedRuleTypeState;

    try {
      const ctx = {
        type: 'alert',
        name: `execute ${rule.alertTypeId}`,
        id: ruleId,
        description: `execute [${rule.alertTypeId}] with name [${name}] in [${namespace !== null && namespace !== void 0 ? namespace : 'default'}] namespace`
      };
      const savedObjectsClient = this.context.savedObjects.getScopedClient(fakeRequest, {
        includedHiddenTypes: ['alert', 'action']
      });
      updatedRuleTypeState = await this.context.executionContext.withContext(ctx, () => {
        var _ruleType$doesSetReco;

        return this.ruleType.executor({
          alertId: ruleId,
          executionId: this.executionId,
          services: {
            savedObjectsClient,
            searchSourceClient: wrappedSearchSourceClient.searchSourceClient,
            uiSettingsClient: this.context.uiSettings.asScopedToClient(savedObjectsClient),
            scopedClusterClient: wrappedScopedClusterClient.client(),
            alertFactory: (0, _alert.createAlertFactory)({
              alerts,
              logger: this.logger,
              canSetRecoveryContext: (_ruleType$doesSetReco = ruleType.doesSetRecoveryContext) !== null && _ruleType$doesSetReco !== void 0 ? _ruleType$doesSetReco : false
            }),
            shouldWriteAlerts: () => this.shouldLogAndScheduleActionsForAlerts(),
            shouldStopExecution: () => this.cancelled
          },
          params,
          state: alertTypeState,
          startedAt: this.taskInstance.startedAt,
          previousStartedAt: previousStartedAt ? new Date(previousStartedAt) : null,
          spaceId,
          namespace,
          name,
          tags,
          createdBy,
          updatedBy,
          rule: {
            name,
            tags,
            consumer,
            producer: ruleType.producer,
            ruleTypeId: rule.alertTypeId,
            ruleTypeName: ruleType.name,
            enabled,
            schedule,
            actions,
            createdBy,
            updatedBy,
            createdAt,
            updatedAt,
            throttle,
            notifyWhen
          }
        });
      });
    } catch (err) {
      this.alertingEventLogger.setExecutionFailed(`rule execution failure: ${ruleLabel}`, err.message);
      throw new _lib.ErrorWithReason(_types.RuleExecutionStatusErrorReasons.Execute, err);
    }

    this.alertingEventLogger.setExecutionSucceeded(`rule executed: ${ruleLabel}`);
    const scopedClusterClientMetrics = wrappedScopedClusterClient.getMetrics();
    const searchSourceClientMetrics = wrappedSearchSourceClient.getMetrics();
    const searchMetrics = {
      numSearches: scopedClusterClientMetrics.numSearches + searchSourceClientMetrics.numSearches,
      totalSearchDurationMs: scopedClusterClientMetrics.totalSearchDurationMs + searchSourceClientMetrics.totalSearchDurationMs,
      esSearchDurationMs: scopedClusterClientMetrics.esSearchDurationMs + searchSourceClientMetrics.esSearchDurationMs
    };
    const ruleRunMetricsStore = new _rule_run_metrics_store.RuleRunMetricsStore();
    ruleRunMetricsStore.setNumSearches(searchMetrics.numSearches);
    ruleRunMetricsStore.setTotalSearchDurationMs(searchMetrics.totalSearchDurationMs);
    ruleRunMetricsStore.setEsSearchDurationMs(searchMetrics.esSearchDurationMs); // Cleanup alerts that are no longer scheduling actions to avoid over populating the alertInstances object

    const alertsWithScheduledActions = (0, _lodash.pickBy)(alerts, alert => alert.hasScheduledActions());
    const recoveredAlerts = (0, _lib.getRecoveredAlerts)(alerts, originalAlertIds);
    logActiveAndRecoveredAlerts({
      logger: this.logger,
      activeAlerts: alertsWithScheduledActions,
      recoveredAlerts,
      ruleLabel,
      canSetRecoveryContext: (_ruleType$doesSetReco2 = ruleType.doesSetRecoveryContext) !== null && _ruleType$doesSetReco2 !== void 0 ? _ruleType$doesSetReco2 : false
    });
    trackAlertDurations({
      originalAlerts,
      currentAlerts: alertsWithScheduledActions,
      recoveredAlerts
    });

    if (this.shouldLogAndScheduleActionsForAlerts()) {
      generateNewAndRecoveredAlertEvents({
        alertingEventLogger: this.alertingEventLogger,
        originalAlerts,
        currentAlerts: alertsWithScheduledActions,
        recoveredAlerts,
        ruleLabel,
        ruleRunMetricsStore
      });
    }

    const ruleIsSnoozed = (0, _lib.isRuleSnoozed)(rule);

    if (ruleIsSnoozed) {
      await this.markRuleAsSnoozed(rule.id);
    }

    if (!ruleIsSnoozed && this.shouldLogAndScheduleActionsForAlerts()) {
      const mutedAlertIdsSet = new Set(mutedInstanceIds);
      const alertsWithExecutableActions = Object.entries(alertsWithScheduledActions).filter(([alertName, alert]) => {
        const throttled = alert.isThrottled(throttle);
        const muted = mutedAlertIdsSet.has(alertName);
        let shouldExecuteAction = true;

        if (throttled || muted) {
          shouldExecuteAction = false;
          this.logger.debug(`skipping scheduling of actions for '${alertName}' in rule ${ruleLabel}: rule is ${muted ? 'muted' : 'throttled'}`);
        } else if (notifyWhen === 'onActionGroupChange' && !alert.scheduledActionGroupOrSubgroupHasChanged()) {
          shouldExecuteAction = false;
          this.logger.debug(`skipping scheduling of actions for '${alertName}' in rule ${ruleLabel}: alert is active but action group has not changed`);
        }

        return shouldExecuteAction;
      });
      await Promise.all(alertsWithExecutableActions.map(([alertId, alert]) => this.executeAlert(alertId, alert, executionHandler, ruleRunMetricsStore)));
      await scheduleActionsForRecoveredAlerts({
        recoveryActionGroup: this.ruleType.recoveryActionGroup,
        recoveredAlerts,
        executionHandler,
        mutedAlertIdsSet,
        logger: this.logger,
        ruleLabel,
        ruleRunMetricsStore
      });
    } else {
      if (ruleIsSnoozed) {
        this.logger.debug(`no scheduling of actions for rule ${ruleLabel}: rule is snoozed.`);
      }

      if (!this.shouldLogAndScheduleActionsForAlerts()) {
        this.logger.debug(`no scheduling of actions for rule ${ruleLabel}: rule execution has been cancelled.`); // Usage counter for telemetry
        // This keeps track of how many times action executions were skipped after rule
        // execution completed successfully after the execution timeout
        // This can occur when rule executors do not short circuit execution in response
        // to timeout

        this.countUsageOfActionExecutionAfterRuleCancellation();
      }
    }

    return {
      metrics: ruleRunMetricsStore.getMetrics(),
      alertTypeState: updatedRuleTypeState || undefined,
      alertInstances: (0, _lodash.mapValues)(alertsWithScheduledActions, alert => alert.toRaw())
    };
  }

  async validateAndExecuteRule(fakeRequest, apiKey, rule) {
    var _this$ruleType$valida;

    const {
      params: {
        alertId: ruleId,
        spaceId
      }
    } = this.taskInstance; // Validate

    const validatedParams = (0, _lib.validateRuleTypeParams)(rule.params, (_this$ruleType$valida = this.ruleType.validate) === null || _this$ruleType$valida === void 0 ? void 0 : _this$ruleType$valida.params);
    const executionHandler = this.getExecutionHandler(ruleId, rule.name, rule.tags, spaceId, apiKey, this.context.kibanaBaseUrl, rule.actions, rule.params, fakeRequest);
    return this.executeRule(fakeRequest, rule, validatedParams, executionHandler, spaceId);
  }

  async markRuleAsSnoozed(id) {
    let apiKey;
    const {
      params: {
        alertId: ruleId,
        spaceId
      }
    } = this.taskInstance;

    try {
      const decryptedAttributes = await this.getDecryptedAttributes(ruleId, spaceId);
      apiKey = decryptedAttributes.apiKey;
    } catch (err) {
      throw new _lib.ErrorWithReason(_types.RuleExecutionStatusErrorReasons.Decrypt, err);
    }

    const fakeRequest = this.getFakeKibanaRequest(spaceId, apiKey);
    const rulesClient = this.context.getRulesClientWithRequest(fakeRequest);
    await rulesClient.updateSnoozedUntilTime({
      id
    });
  }

  async loadRuleAttributesAndRun() {
    const {
      params: {
        alertId: ruleId,
        spaceId
      }
    } = this.taskInstance;
    let enabled;
    let apiKey;
    let consumer;

    try {
      const decryptedAttributes = await this.getDecryptedAttributes(ruleId, spaceId);
      apiKey = decryptedAttributes.apiKey;
      enabled = decryptedAttributes.enabled;
      consumer = decryptedAttributes.consumer;
    } catch (err) {
      throw new _lib.ErrorWithReason(_types.RuleExecutionStatusErrorReasons.Decrypt, err);
    }

    this.ruleConsumer = consumer;

    if (!enabled) {
      throw new _lib.ErrorWithReason(_types.RuleExecutionStatusErrorReasons.Disabled, new Error(`Rule failed to execute because rule ran after it was disabled.`));
    }

    const fakeRequest = this.getFakeKibanaRequest(spaceId, apiKey); // Get rules client with space level permissions

    const rulesClient = this.context.getRulesClientWithRequest(fakeRequest);
    let rule; // Ensure API key is still valid and user has access

    try {
      rule = await rulesClient.get({
        id: ruleId
      });

      if (_elasticApmNode.default.currentTransaction) {
        _elasticApmNode.default.currentTransaction.name = `Execute Alerting Rule: "${rule.name}"`;

        _elasticApmNode.default.currentTransaction.addLabels({
          alerting_rule_consumer: rule.consumer,
          alerting_rule_name: rule.name,
          alerting_rule_tags: rule.tags.join(', '),
          alerting_rule_type_id: rule.alertTypeId,
          alerting_rule_params: JSON.stringify(rule.params)
        });
      }
    } catch (err) {
      throw new _lib.ErrorWithReason(_types.RuleExecutionStatusErrorReasons.Read, err);
    }

    this.alertingEventLogger.setRuleName(rule.name);

    try {
      this.ruleTypeRegistry.ensureRuleTypeEnabled(rule.alertTypeId);
    } catch (err) {
      throw new _lib.ErrorWithReason(_types.RuleExecutionStatusErrorReasons.License, err);
    }

    if (rule.monitoring) {
      if (rule.monitoring.execution.history.length >= _common.MONITORING_HISTORY_LIMIT) {
        // Remove the first (oldest) record
        rule.monitoring.execution.history.shift();
      }
    }

    return {
      monitoring: (0, _result_type.asOk)(rule.monitoring),
      stateWithMetrics: await (0, _result_type.promiseResult)(this.validateAndExecuteRule(fakeRequest, apiKey, rule)),
      schedule: (0, _result_type.asOk)( // fetch the rule again to ensure we return the correct schedule as it may have
      // changed during the task execution
      (await rulesClient.get({
        id: ruleId
      })).schedule)
    };
  }

  async run() {
    var _resolveErr;

    const {
      params: {
        alertId: ruleId,
        spaceId,
        consumer
      },
      startedAt,
      state: originalState,
      schedule: taskSchedule
    } = this.taskInstance; // Initially use consumer as stored inside the task instance
    // Replace this with consumer as read from the rule saved object after
    // we successfully read the rule SO. This allows us to populate a consumer
    // value for `execute-start` events (which are written before the rule SO is read)
    // and in the event of decryption errors (where we cannot read the rule SO)
    // Because "consumer" is set when a rule is created, this value should be static
    // for the life of a rule but there may be edge cases where migrations cause
    // the consumer values to become out of sync.

    if (consumer) {
      this.ruleConsumer = consumer;
    }

    if (_elasticApmNode.default.currentTransaction) {
      _elasticApmNode.default.currentTransaction.name = `Execute Alerting Rule`;

      _elasticApmNode.default.currentTransaction.addLabels({
        alerting_rule_id: ruleId
      });
    }

    const runDate = new Date();
    const runDateString = runDate.toISOString();
    this.logger.debug(`executing rule ${this.ruleType.id}:${ruleId} at ${runDateString}`);
    const namespace = this.context.spaceIdToNamespace(spaceId);
    this.alertingEventLogger.initialize({
      ruleId,
      ruleType: this.ruleType,
      consumer: this.ruleConsumer,
      spaceId,
      executionId: this.executionId,
      taskScheduledAt: this.taskInstance.scheduledAt,
      ...(namespace ? {
        namespace
      } : {})
    });
    this.alertingEventLogger.start();
    const {
      stateWithMetrics,
      schedule,
      monitoring
    } = await errorAsRuleTaskRunResult(this.loadRuleAttributesAndRun());
    const ruleMonitoring = (_resolveErr = (0, _result_type.resolveErr)(monitoring, () => {
      return getDefaultRuleMonitoring();
    })) !== null && _resolveErr !== void 0 ? _resolveErr : getDefaultRuleMonitoring();
    const {
      status: executionStatus,
      metrics: executionMetrics
    } = (0, _result_type.map)(stateWithMetrics, ruleRunStateWithMetrics => (0, _lib.executionStatusFromState)(ruleRunStateWithMetrics, runDate), err => (0, _lib.executionStatusFromError)(err, runDate));

    if (_elasticApmNode.default.currentTransaction) {
      if (executionStatus.status === 'ok' || executionStatus.status === 'active') {
        _elasticApmNode.default.currentTransaction.setOutcome('success');
      } else if (executionStatus.status === 'error' || executionStatus.status === 'unknown') {
        _elasticApmNode.default.currentTransaction.setOutcome('failure');
      }
    }

    this.logger.debug(`ruleRunStatus for ${this.ruleType.id}:${ruleId}: ${JSON.stringify(executionStatus)}`);

    if (executionMetrics) {
      this.logger.debug(`ruleRunMetrics for ${this.ruleType.id}:${ruleId}: ${JSON.stringify(executionMetrics)}`);
    }

    this.alertingEventLogger.done({
      status: executionStatus,
      metrics: executionMetrics
    });
    const monitoringHistory = {
      success: true,
      timestamp: +new Date()
    }; // set start and duration based on event log

    const {
      start,
      duration
    } = this.alertingEventLogger.getStartAndDuration();

    if (null != start) {
      executionStatus.lastExecutionDate = start;
    }

    if (null != duration) {
      executionStatus.lastDuration = (0, _server4.nanosToMillis)(duration);
      monitoringHistory.duration = executionStatus.lastDuration;
    } // if executionStatus indicates an error, fill in fields in
    // event from it


    if (executionStatus.error) {
      monitoringHistory.success = false;
    }

    ruleMonitoring.execution.history.push(monitoringHistory);
    ruleMonitoring.execution.calculated_metrics = {
      success_ratio: (0, _monitoring.getExecutionSuccessRatio)(ruleMonitoring),
      ...(0, _monitoring.getExecutionDurationPercentiles)(ruleMonitoring)
    };

    if (!this.cancelled) {
      this.inMemoryMetrics.increment(_monitoring2.IN_MEMORY_METRICS.RULE_EXECUTIONS);

      if (executionStatus.error) {
        this.inMemoryMetrics.increment(_monitoring2.IN_MEMORY_METRICS.RULE_FAILURES);
      }

      this.logger.debug(`Updating rule task for ${this.ruleType.id} rule with id ${ruleId} - ${JSON.stringify(executionStatus)}`);
      await this.updateRuleSavedObject(ruleId, namespace, {
        executionStatus: (0, _lib.ruleExecutionStatusToRaw)(executionStatus),
        monitoring: ruleMonitoring
      });
    }

    const transformRunStateToTaskState = runStateWithMetrics => {
      return { ...(0, _lodash.omit)(runStateWithMetrics, ['metrics']),
        previousStartedAt: startedAt
      };
    };

    return {
      state: (0, _result_type.map)(stateWithMetrics, ruleRunStateWithMetrics => transformRunStateToTaskState(ruleRunStateWithMetrics), err => {
        const message = `Executing Rule ${spaceId}:${this.ruleType.id}:${ruleId} has resulted in Error: ${(0, _errors.getEsErrorMessage)(err)}`;

        if ((0, _is_alerting_error.isAlertSavedObjectNotFoundError)(err, ruleId)) {
          this.logger.debug(message);
        } else {
          this.logger.error(message);
        }

        return originalState;
      }),
      schedule: (0, _result_type.resolveErr)(schedule, error => {
        var _taskSchedule$interva;

        if ((0, _is_alerting_error.isAlertSavedObjectNotFoundError)(error, ruleId)) {
          const spaceMessage = spaceId ? `in the "${spaceId}" space ` : '';
          this.logger.warn(`Unable to execute rule "${ruleId}" ${spaceMessage}because ${error.message} - this rule will not be rescheduled. To restart rule execution, try disabling and re-enabling this rule.`);
          (0, _server3.throwUnrecoverableError)(error);
        }

        let retryInterval = (_taskSchedule$interva = taskSchedule === null || taskSchedule === void 0 ? void 0 : taskSchedule.interval) !== null && _taskSchedule$interva !== void 0 ? _taskSchedule$interva : FALLBACK_RETRY_INTERVAL; // Set retry interval smaller for ES connectivity errors

        if ((0, _is_alerting_error.isEsUnavailableError)(error, ruleId)) {
          retryInterval = (0, _common.parseDuration)(retryInterval) > (0, _common.parseDuration)(CONNECTIVITY_RETRY_INTERVAL) ? CONNECTIVITY_RETRY_INTERVAL : retryInterval;
        }

        return {
          interval: retryInterval
        };
      }),
      monitoring: ruleMonitoring
    };
  }

  async cancel() {
    if (this.cancelled) {
      return;
    }

    this.cancelled = true; // Write event log entry

    const {
      params: {
        alertId: ruleId,
        spaceId,
        consumer
      }
    } = this.taskInstance;
    const namespace = this.context.spaceIdToNamespace(spaceId);

    if (consumer && !this.ruleConsumer) {
      this.ruleConsumer = consumer;
    }

    this.logger.debug(`Cancelling rule type ${this.ruleType.id} with id ${ruleId} - execution exceeded rule type timeout of ${this.ruleType.ruleTaskTimeout}`);
    this.logger.debug(`Aborting any in-progress ES searches for rule type ${this.ruleType.id} with id ${ruleId}`);
    this.searchAbortController.abort();
    this.alertingEventLogger.logTimeout();
    this.inMemoryMetrics.increment(_monitoring2.IN_MEMORY_METRICS.RULE_TIMEOUTS); // Update the rule saved object with execution status

    const executionStatus = {
      lastExecutionDate: new Date(),
      status: 'error',
      error: {
        reason: _types.RuleExecutionStatusErrorReasons.Timeout,
        message: `${this.ruleType.id}:${ruleId}: execution cancelled due to timeout - exceeded rule type timeout of ${this.ruleType.ruleTaskTimeout}`
      }
    };
    this.logger.debug(`Updating rule task for ${this.ruleType.id} rule with id ${ruleId} - execution error due to timeout`);
    await this.updateRuleSavedObject(ruleId, namespace, {
      executionStatus: (0, _lib.ruleExecutionStatusToRaw)(executionStatus)
    });
  }

}

exports.TaskRunner = TaskRunner;

function trackAlertDurations(params) {
  const currentTime = new Date().toISOString();
  const {
    currentAlerts,
    originalAlerts,
    recoveredAlerts
  } = params;
  const originalAlertIds = Object.keys(originalAlerts);
  const currentAlertIds = Object.keys(currentAlerts);
  const recoveredAlertIds = Object.keys(recoveredAlerts);
  const newAlertIds = (0, _lodash.without)(currentAlertIds, ...originalAlertIds); // Inject start time into alert state of new alerts

  for (const id of newAlertIds) {
    const state = currentAlerts[id].getState();
    currentAlerts[id].replaceState({ ...state,
      start: currentTime
    });
  } // Calculate duration to date for active alerts


  for (const id of currentAlertIds) {
    const state = originalAlertIds.includes(id) ? originalAlerts[id].getState() : currentAlerts[id].getState();
    const durationInMs = new Date(currentTime).valueOf() - new Date(state.start).valueOf();
    const duration = state.start ? (0, _server4.millisToNanos)(durationInMs) : undefined;
    currentAlerts[id].replaceState({ ...state,
      ...(state.start ? {
        start: state.start
      } : {}),
      ...(duration !== undefined ? {
        duration
      } : {})
    });
  } // Inject end time into alert state of recovered alerts


  for (const id of recoveredAlertIds) {
    const state = recoveredAlerts[id].getState();
    const durationInMs = new Date(currentTime).valueOf() - new Date(state.start).valueOf();
    const duration = state.start ? (0, _server4.millisToNanos)(durationInMs) : undefined;
    recoveredAlerts[id].replaceState({ ...state,
      ...(duration ? {
        duration
      } : {}),
      ...(state.start ? {
        end: currentTime
      } : {})
    });
  }
}

function generateNewAndRecoveredAlertEvents(params) {
  const {
    alertingEventLogger,
    currentAlerts,
    originalAlerts,
    recoveredAlerts,
    ruleRunMetricsStore
  } = params;
  const originalAlertIds = Object.keys(originalAlerts);
  const currentAlertIds = Object.keys(currentAlerts);
  const recoveredAlertIds = Object.keys(recoveredAlerts);
  const newIds = (0, _lodash.without)(currentAlertIds, ...originalAlertIds);

  if (_elasticApmNode.default.currentTransaction) {
    _elasticApmNode.default.currentTransaction.addLabels({
      alerting_new_alerts: newIds.length
    });
  }

  ruleRunMetricsStore.setNumberOfActiveAlerts(currentAlertIds.length);
  ruleRunMetricsStore.setNumberOfNewAlerts(newIds.length);
  ruleRunMetricsStore.setNumberOfRecoveredAlerts(recoveredAlertIds.length);

  for (const id of recoveredAlertIds) {
    var _recoveredAlerts$id$g;

    const {
      group: actionGroup,
      subgroup: actionSubgroup
    } = (_recoveredAlerts$id$g = recoveredAlerts[id].getLastScheduledActions()) !== null && _recoveredAlerts$id$g !== void 0 ? _recoveredAlerts$id$g : {};
    const state = recoveredAlerts[id].getState();
    const message = `${params.ruleLabel} alert '${id}' has recovered`;
    alertingEventLogger.logAlert({
      action: _plugin.EVENT_LOG_ACTIONS.recoveredInstance,
      id,
      group: actionGroup,
      subgroup: actionSubgroup,
      message,
      state
    });
  }

  for (const id of newIds) {
    var _currentAlerts$id$get;

    const {
      actionGroup,
      subgroup: actionSubgroup
    } = (_currentAlerts$id$get = currentAlerts[id].getScheduledActionOptions()) !== null && _currentAlerts$id$get !== void 0 ? _currentAlerts$id$get : {};
    const state = currentAlerts[id].getState();
    const message = `${params.ruleLabel} created new alert: '${id}'`;
    alertingEventLogger.logAlert({
      action: _plugin.EVENT_LOG_ACTIONS.newInstance,
      id,
      group: actionGroup,
      subgroup: actionSubgroup,
      message,
      state
    });
  }

  for (const id of currentAlertIds) {
    var _currentAlerts$id$get2;

    const {
      actionGroup,
      subgroup: actionSubgroup
    } = (_currentAlerts$id$get2 = currentAlerts[id].getScheduledActionOptions()) !== null && _currentAlerts$id$get2 !== void 0 ? _currentAlerts$id$get2 : {};
    const state = currentAlerts[id].getState();
    const message = `${params.ruleLabel} active alert: '${id}' in ${actionSubgroup ? `actionGroup(subgroup): '${actionGroup}(${actionSubgroup})'` : `actionGroup: '${actionGroup}'`}`;
    alertingEventLogger.logAlert({
      action: _plugin.EVENT_LOG_ACTIONS.activeInstance,
      id,
      group: actionGroup,
      subgroup: actionSubgroup,
      message,
      state
    });
  }
}

async function scheduleActionsForRecoveredAlerts(params) {
  const {
    logger,
    recoveryActionGroup,
    recoveredAlerts,
    executionHandler,
    mutedAlertIdsSet,
    ruleLabel,
    ruleRunMetricsStore
  } = params;
  const recoveredIds = Object.keys(recoveredAlerts);

  for (const id of recoveredIds) {
    if (mutedAlertIdsSet.has(id)) {
      logger.debug(`skipping scheduling of actions for '${id}' in rule ${ruleLabel}: instance is muted`);
    } else {
      const alert = recoveredAlerts[id];
      alert.updateLastScheduledActions(recoveryActionGroup.id);
      alert.unscheduleActions();
      await executionHandler({
        actionGroup: recoveryActionGroup.id,
        context: alert.getContext(),
        state: {},
        alertId: id,
        ruleRunMetricsStore
      });
      alert.scheduleActions(recoveryActionGroup.id);
    }
  }
}

function logActiveAndRecoveredAlerts(params) {
  const {
    logger,
    activeAlerts,
    recoveredAlerts,
    ruleLabel,
    canSetRecoveryContext
  } = params;
  const activeAlertIds = Object.keys(activeAlerts);
  const recoveredAlertIds = Object.keys(recoveredAlerts);

  if (_elasticApmNode.default.currentTransaction) {
    _elasticApmNode.default.currentTransaction.addLabels({
      alerting_active_alerts: activeAlertIds.length,
      alerting_recovered_alerts: recoveredAlertIds.length
    });
  }

  if (activeAlertIds.length > 0) {
    logger.debug(`rule ${ruleLabel} has ${activeAlertIds.length} active alerts: ${JSON.stringify(activeAlertIds.map(alertId => {
      var _activeAlerts$alertId;

      return {
        instanceId: alertId,
        actionGroup: (_activeAlerts$alertId = activeAlerts[alertId].getScheduledActionOptions()) === null || _activeAlerts$alertId === void 0 ? void 0 : _activeAlerts$alertId.actionGroup
      };
    }))}`);
  }

  if (recoveredAlertIds.length > 0) {
    logger.debug(`rule ${ruleLabel} has ${recoveredAlertIds.length} recovered alerts: ${JSON.stringify(recoveredAlertIds)}`);

    if (canSetRecoveryContext) {
      for (const id of recoveredAlertIds) {
        if (!recoveredAlerts[id].hasContext()) {
          logger.debug(`rule ${ruleLabel} has no recovery context specified for recovered alert ${id}`);
        }
      }
    }
  }
}
/**
 * If an error is thrown, wrap it in an RuleTaskRunResult
 * so that we can treat each field independantly
 */


async function errorAsRuleTaskRunResult(future) {
  try {
    return await future;
  } catch (e) {
    return {
      stateWithMetrics: (0, _result_type.asErr)(e),
      schedule: (0, _result_type.asErr)(e),
      monitoring: (0, _result_type.asErr)(e)
    };
  }
}