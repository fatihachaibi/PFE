"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMetricThresholdExecutor = exports.WARNING_ACTIONS = exports.NO_DATA_ACTIONS = exports.FIRED_ACTIONS = void 0;

var _i18n = require("@kbn/i18n");

var _ruleDataUtils = require("@kbn/rule-data-utils");

var _lodash = require("lodash");

var _common = require("../../../../../alerting/common");

var _metrics = require("../../../../common/alerting/metrics");

var _formatters = require("../../../../common/formatters");

var _messages = require("../common/messages");

var _utils = require("../common/utils");

var _evaluate_rule = require("./lib/evaluate_rule");

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

const createMetricThresholdExecutor = libs => libs.metricsRules.createLifecycleRuleExecutor(async function (options) {
  const startTime = Date.now();
  const {
    services,
    params,
    state,
    startedAt,
    alertId,
    executionId
  } = options;
  const {
    criteria
  } = params;
  if (criteria.length === 0) throw new Error('Cannot execute an alert with 0 conditions');
  const logger = (0, _utils.createScopedLogger)(libs.logger, 'metricThresholdRule', {
    alertId,
    executionId
  });
  const {
    alertWithLifecycle,
    savedObjectsClient
  } = services;

  const alertFactory = (id, reason) => alertWithLifecycle({
    id,
    fields: {
      [_ruleDataUtils.ALERT_REASON]: reason
    }
  });

  const {
    sourceId,
    alertOnNoData,
    alertOnGroupDisappear: _alertOnGroupDisappear
  } = params;

  if (!params.filterQuery && params.filterQueryText) {
    try {
      const {
        fromKueryExpression
      } = await Promise.resolve().then(() => _interopRequireWildcard(require('@kbn/es-query')));
      fromKueryExpression(params.filterQueryText);
    } catch (e) {
      logger.error(e.message);
      const timestamp = startedAt.toISOString();
      const actionGroupId = FIRED_ACTIONS.id; // Change this to an Error action group when able

      const reason = (0, _messages.buildInvalidQueryAlertReason)(params.filterQueryText);
      const alert = alertFactory(_utils.UNGROUPED_FACTORY_KEY, reason);
      alert.scheduleActions(actionGroupId, {
        group: _utils.UNGROUPED_FACTORY_KEY,
        alertState: _messages.stateToAlertMessage[_metrics.AlertStates.ERROR],
        reason,
        viewInAppUrl: (0, _utils.getViewInAppUrl)(libs.basePath, _metrics.LINK_TO_METRICS_EXPLORER),
        timestamp,
        value: null,
        metric: mapToConditionsLookup(criteria, c => c.metric)
      });
      return {
        lastRunTimestamp: startedAt.valueOf(),
        missingGroups: [],
        groupBy: params.groupBy,
        filterQuery: params.filterQuery
      };
    }
  } // For backwards-compatibility, interpret undefined alertOnGroupDisappear as true


  const alertOnGroupDisappear = _alertOnGroupDisappear !== false;
  const source = await libs.sources.getSourceConfiguration(savedObjectsClient, sourceId || 'default');
  const config = source.configuration;
  const compositeSize = libs.configuration.alerting.metric_threshold.group_by_page_size;
  const filterQueryIsSame = (0, _lodash.isEqual)(state.filterQuery, params.filterQuery);
  const groupByIsSame = (0, _lodash.isEqual)(state.groupBy, params.groupBy);
  const previousMissingGroups = alertOnGroupDisappear && filterQueryIsSame && groupByIsSame ? state.missingGroups : [];
  const alertResults = await (0, _evaluate_rule.evaluateRule)(services.scopedClusterClient.asCurrentUser, params, config, compositeSize, alertOnGroupDisappear, logger, state.lastRunTimestamp, {
    end: startedAt.valueOf()
  }, previousMissingGroups);
  const resultGroupSet = new Set();

  for (const resultSet of alertResults) {
    for (const group of Object.keys(resultSet)) {
      resultGroupSet.add(group);
    }
  }

  const groups = [...resultGroupSet];
  const nextMissingGroups = new Set();
  const hasGroups = !(0, _lodash.isEqual)(groups, [_utils.UNGROUPED_FACTORY_KEY]);
  let scheduledActionsCount = 0;

  for (const group of groups) {
    // AND logic; all criteria must be across the threshold
    const shouldAlertFire = alertResults.every(result => {
      var _result$group;

      return (_result$group = result[group]) === null || _result$group === void 0 ? void 0 : _result$group.shouldFire;
    });
    const shouldAlertWarn = alertResults.every(result => {
      var _result$group2;

      return (_result$group2 = result[group]) === null || _result$group2 === void 0 ? void 0 : _result$group2.shouldWarn;
    }); // AND logic; because we need to evaluate all criteria, if one of them reports no data then the
    // whole alert is in a No Data/Error state

    const isNoData = alertResults.some(result => {
      var _result$group3;

      return (_result$group3 = result[group]) === null || _result$group3 === void 0 ? void 0 : _result$group3.isNoData;
    });

    if (isNoData && group !== _utils.UNGROUPED_FACTORY_KEY) {
      nextMissingGroups.add(group);
    }

    const nextState = isNoData ? _metrics.AlertStates.NO_DATA : shouldAlertFire ? _metrics.AlertStates.ALERT : shouldAlertWarn ? _metrics.AlertStates.WARNING : _metrics.AlertStates.OK;
    let reason;

    if (nextState === _metrics.AlertStates.ALERT || nextState === _metrics.AlertStates.WARNING) {
      reason = alertResults.map(result => (0, _messages.buildFiredAlertReason)({ ...formatAlertResult(result[group], nextState === _metrics.AlertStates.WARNING),
        group
      })).join('\n');
    }
    /* NO DATA STATE HANDLING
     *
     * - `alertOnNoData` does not indicate IF the alert's next state is No Data, but whether or not the user WANTS TO BE ALERTED
     *   if the state were No Data.
     * - `alertOnGroupDisappear`, on the other hand, determines whether or not it's possible to return a No Data state
     *   when a group disappears.
     *
     * This means we need to handle the possibility that `alertOnNoData` is false, but `alertOnGroupDisappear` is true
     *
     * nextState === NO_DATA would be true on both { '*': No Data } or, e.g. { 'a': No Data, 'b': OK, 'c': OK }, but if the user
     * has for some reason disabled `alertOnNoData` and left `alertOnGroupDisappear` enabled, they would only care about the latter
     * possibility. In this case, use hasGroups to determine whether to alert on a potential No Data state
     *
     * If `alertOnNoData` is true but `alertOnGroupDisappear` is false, we don't need to worry about the {a, b, c} possibility.
     * At this point in the function, a false `alertOnGroupDisappear` would already have prevented group 'a' from being evaluated at all.
     */


    if (alertOnNoData || alertOnGroupDisappear && hasGroups) {
      // In the previous line we've determined if the user is interested in No Data states, so only now do we actually
      // check to see if a No Data state has occurred
      if (nextState === _metrics.AlertStates.NO_DATA) {
        reason = alertResults.filter(result => result[group].isNoData).map(result => (0, _messages.buildNoDataAlertReason)({ ...result[group],
          group
        })).join('\n');
      }
    }

    if (reason) {
      const timestamp = startedAt.toISOString();
      const actionGroupId = nextState === _metrics.AlertStates.OK ? _common.RecoveredActionGroup.id : nextState === _metrics.AlertStates.NO_DATA ? NO_DATA_ACTIONS.id : nextState === _metrics.AlertStates.WARNING ? WARNING_ACTIONS.id : FIRED_ACTIONS.id;
      const alert = alertFactory(`${group}`, reason);
      scheduledActionsCount++;
      alert.scheduleActions(actionGroupId, {
        group,
        alertState: _messages.stateToAlertMessage[nextState],
        reason,
        viewInAppUrl: (0, _utils.getViewInAppUrl)(libs.basePath, _metrics.LINK_TO_METRICS_EXPLORER),
        timestamp,
        value: mapToConditionsLookup(alertResults, result => formatAlertResult(result[group]).currentValue),
        threshold: mapToConditionsLookup(alertResults, result => formatAlertResult(result[group]).threshold),
        metric: mapToConditionsLookup(criteria, c => c.metric)
      });
    }
  }

  const stopTime = Date.now();
  logger.debug(`Scheduled ${scheduledActionsCount} actions in ${stopTime - startTime}ms`);
  return {
    lastRunTimestamp: startedAt.valueOf(),
    missingGroups: [...nextMissingGroups],
    groupBy: params.groupBy,
    filterQuery: params.filterQuery
  };
});

exports.createMetricThresholdExecutor = createMetricThresholdExecutor;
const FIRED_ACTIONS = {
  id: 'metrics.threshold.fired',
  name: _i18n.i18n.translate('xpack.infra.metrics.alerting.threshold.fired', {
    defaultMessage: 'Alert'
  })
};
exports.FIRED_ACTIONS = FIRED_ACTIONS;
const WARNING_ACTIONS = {
  id: 'metrics.threshold.warning',
  name: _i18n.i18n.translate('xpack.infra.metrics.alerting.threshold.warning', {
    defaultMessage: 'Warning'
  })
};
exports.WARNING_ACTIONS = WARNING_ACTIONS;
const NO_DATA_ACTIONS = {
  id: 'metrics.threshold.nodata',
  name: _i18n.i18n.translate('xpack.infra.metrics.alerting.threshold.nodata', {
    defaultMessage: 'No Data'
  })
};
exports.NO_DATA_ACTIONS = NO_DATA_ACTIONS;

const mapToConditionsLookup = (list, mapFn) => list.map(mapFn).reduce((result, value, i) => ({ ...result,
  [`condition${i}`]: value
}), {});

const formatAlertResult = (alertResult, useWarningThreshold) => {
  const {
    metric,
    currentValue,
    threshold,
    comparator,
    warningThreshold,
    warningComparator
  } = alertResult;

  const noDataValue = _i18n.i18n.translate('xpack.infra.metrics.alerting.threshold.noDataFormattedValue', {
    defaultMessage: '[NO DATA]'
  });

  if (!metric.endsWith('.pct')) return { ...alertResult,
    currentValue: currentValue !== null && currentValue !== void 0 ? currentValue : noDataValue
  };
  const formatter = (0, _formatters.createFormatter)('percent');
  const thresholdToFormat = useWarningThreshold ? warningThreshold : threshold;
  const comparatorToFormat = useWarningThreshold ? warningComparator : comparator;
  return { ...alertResult,
    currentValue: currentValue !== null && typeof currentValue !== 'undefined' ? formatter(currentValue) : noDataValue,
    threshold: Array.isArray(thresholdToFormat) ? thresholdToFormat.map(v => formatter(v)) : thresholdToFormat,
    comparator: comparatorToFormat
  };
};