"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createExecutionHandler = createExecutionHandler;

var _server = require("../../../actions/server");

var _server2 = require("../../../task_manager/server");

var _transform_action_params = require("./transform_action_params");

var _inject_action_params = require("./inject_action_params");

var _types = require("../types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function createExecutionHandler({
  logger,
  ruleId,
  ruleName,
  ruleConsumer,
  executionId,
  tags,
  actionsPlugin,
  actions: ruleActions,
  spaceId,
  apiKey,
  ruleType,
  kibanaBaseUrl,
  alertingEventLogger,
  request,
  ruleParams,
  supportsEphemeralTasks,
  maxEphemeralActionsPerRule,
  actionsConfigMap
}) {
  const ruleTypeActionGroups = new Map(ruleType.actionGroups.map(actionGroup => [actionGroup.id, actionGroup.name]));
  return async ({
    actionGroup,
    actionSubgroup,
    context,
    state,
    ruleRunMetricsStore,
    alertId
  }) => {
    if (!ruleTypeActionGroups.has(actionGroup)) {
      logger.error(`Invalid action group "${actionGroup}" for rule "${ruleType.id}".`);
      return;
    }

    const actions = ruleActions.filter(({
      group
    }) => group === actionGroup).map(action => {
      return { ...action,
        params: (0, _transform_action_params.transformActionParams)({
          actionsPlugin,
          alertId: ruleId,
          alertType: ruleType.id,
          actionTypeId: action.actionTypeId,
          alertName: ruleName,
          spaceId,
          tags,
          alertInstanceId: alertId,
          alertActionGroup: actionGroup,
          alertActionGroupName: ruleTypeActionGroups.get(actionGroup),
          alertActionSubgroup: actionSubgroup,
          context,
          actionParams: action.params,
          actionId: action.id,
          state,
          kibanaBaseUrl,
          alertParams: ruleParams
        })
      };
    }).map(action => ({ ...action,
      params: (0, _inject_action_params.injectActionParams)({
        ruleId,
        spaceId,
        actionParams: action.params,
        actionTypeId: action.actionTypeId
      })
    }));
    ruleRunMetricsStore.incrementNumberOfGeneratedActions(actions.length);
    const actionsClient = await actionsPlugin.getActionsClientWithRequest(request);
    let ephemeralActionsToSchedule = maxEphemeralActionsPerRule;

    for (const action of actions) {
      const {
        actionTypeId
      } = action;
      ruleRunMetricsStore.incrementNumberOfGeneratedActionsByConnectorType(actionTypeId);

      if (ruleRunMetricsStore.hasReachedTheExecutableActionsLimit(actionsConfigMap)) {
        ruleRunMetricsStore.setTriggeredActionsStatusByConnectorType({
          actionTypeId,
          status: _types.ActionsCompletion.PARTIAL
        });
        logger.debug(`Rule "${ruleId}" skipped scheduling action "${action.id}" because the maximum number of allowed actions has been reached.`);
        break;
      }

      if (ruleRunMetricsStore.hasReachedTheExecutableActionsLimitByConnectorType({
        actionTypeId,
        actionsConfigMap
      })) {
        if (!ruleRunMetricsStore.hasConnectorTypeReachedTheLimit(actionTypeId)) {
          logger.debug(`Rule "${ruleId}" skipped scheduling action "${action.id}" because the maximum number of allowed actions for connector type ${actionTypeId} has been reached.`);
        }

        ruleRunMetricsStore.setTriggeredActionsStatusByConnectorType({
          actionTypeId,
          status: _types.ActionsCompletion.PARTIAL
        });
        continue;
      }

      if (!actionsPlugin.isActionExecutable(action.id, actionTypeId, {
        notifyUsage: true
      })) {
        logger.warn(`Rule "${ruleId}" skipped scheduling action "${action.id}" because it is disabled`);
        continue;
      }

      ruleRunMetricsStore.incrementNumberOfTriggeredActions();
      ruleRunMetricsStore.incrementNumberOfTriggeredActionsByConnectorType(actionTypeId);
      const namespace = spaceId === 'default' ? {} : {
        namespace: spaceId
      };
      const enqueueOptions = {
        id: action.id,
        params: action.params,
        spaceId,
        apiKey: apiKey !== null && apiKey !== void 0 ? apiKey : null,
        consumer: ruleConsumer,
        source: (0, _server.asSavedObjectExecutionSource)({
          id: ruleId,
          type: 'alert'
        }),
        executionId,
        relatedSavedObjects: [{
          id: ruleId,
          type: 'alert',
          namespace: namespace.namespace,
          typeId: ruleType.id
        }]
      };

      if (supportsEphemeralTasks && ephemeralActionsToSchedule > 0) {
        ephemeralActionsToSchedule--;

        try {
          await actionsClient.ephemeralEnqueuedExecution(enqueueOptions);
        } catch (err) {
          if ((0, _server2.isEphemeralTaskRejectedDueToCapacityError)(err)) {
            await actionsClient.enqueueExecution(enqueueOptions);
          }
        }
      } else {
        await actionsClient.enqueueExecution(enqueueOptions);
      }

      alertingEventLogger.logAction({
        id: action.id,
        typeId: actionTypeId,
        alertId,
        alertGroup: actionGroup,
        alertSubgroup: actionSubgroup
      });
    }
  };
}