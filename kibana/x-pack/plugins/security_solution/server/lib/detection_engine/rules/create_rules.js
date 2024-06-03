"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRules = void 0;

var _securitysolutionRules = require("@kbn/securitysolution-rules");

var _utils = require("../../../../common/detection_engine/utils");

var _transform_actions = require("../../../../common/detection_engine/transform_actions");

var _constants = require("../../../../common/constants");

var _utils2 = require("./utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const createRules = async ({
  rulesClient,
  anomalyThreshold,
  author,
  buildingBlockType,
  description,
  enabled,
  timestampField,
  eventCategoryOverride,
  tiebreakerField,
  falsePositives,
  from,
  query,
  language,
  license,
  savedId,
  timelineId,
  timelineTitle,
  meta,
  machineLearningJobId,
  filters,
  ruleId,
  immutable,
  index,
  interval,
  maxSignals,
  relatedIntegrations,
  requiredFields,
  riskScore,
  riskScoreMapping,
  ruleNameOverride,
  outputIndex,
  name,
  setup,
  severity,
  severityMapping,
  tags,
  threat,
  threatFilters,
  threatIndex,
  threatIndicatorPath,
  threatLanguage,
  concurrentSearches,
  itemsPerSearch,
  threatQuery,
  threatMapping,
  threshold,
  timestampOverride,
  throttle,
  to,
  type,
  references,
  namespace,
  note,
  version,
  exceptionsList,
  actions,
  id
}) => {
  const rule = await rulesClient.create({
    options: {
      id
    },
    data: {
      name,
      tags,
      alertTypeId: _securitysolutionRules.ruleTypeMappings[type],
      consumer: _constants.SERVER_APP_ID,
      params: {
        anomalyThreshold,
        author,
        buildingBlockType,
        description,
        ruleId,
        index,
        timestampField,
        eventCategoryOverride,
        tiebreakerField,
        falsePositives,
        from,
        immutable,
        query,
        language,
        license,
        outputIndex,
        savedId,
        timelineId,
        timelineTitle,
        meta,
        machineLearningJobId: machineLearningJobId ? (0, _utils.normalizeMachineLearningJobIds)(machineLearningJobId) : undefined,
        filters,
        maxSignals,
        relatedIntegrations,
        requiredFields,
        riskScore,
        riskScoreMapping,
        ruleNameOverride,
        setup,
        severity,
        severityMapping,
        threat,
        threshold: threshold ? (0, _utils.normalizeThresholdObject)(threshold) : undefined,

        /**
         * TODO: Fix typing inconsistancy between `RuleTypeParams` and `CreateRulesOptions`
         */
        threatFilters: threatFilters,
        threatIndex,
        threatIndicatorPath: threatIndicatorPath !== null && threatIndicatorPath !== void 0 ? threatIndicatorPath : type === 'threat_match' ? _constants.DEFAULT_INDICATOR_SOURCE_PATH : undefined,
        threatQuery,
        concurrentSearches,
        itemsPerSearch,
        threatMapping,
        threatLanguage,
        timestampOverride,
        to,
        type,
        references,
        namespace,
        note,
        version,
        exceptionsList
      },
      schedule: {
        interval
      },
      enabled,
      actions: actions.map(_transform_actions.transformRuleToAlertAction),
      throttle: (0, _utils2.transformToAlertThrottle)(throttle),
      notifyWhen: (0, _utils2.transformToNotifyWhen)(throttle)
    }
  }); // Mute the rule if it is first created with the explicit no actions

  if (throttle === _constants.NOTIFICATION_THROTTLE_NO_ACTIONS) {
    await rulesClient.muteAll({
      id: rule.id
    });
  }

  return rule;
};

exports.createRules = createRules;