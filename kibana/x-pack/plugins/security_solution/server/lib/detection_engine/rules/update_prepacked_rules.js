"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePrepackagedRules = exports.createPromises = void 0;

var _fp = require("lodash/fp");

var _constants = require("../../../../common/constants");

var _patch_rules = require("./patch_rules");

var _read_rules = require("./read_rules");

var _utils = require("./utils");

var _delete_rules = require("./delete_rules");

var _add_prepackaged_rules_route = require("../routes/rules/add_prepackaged_rules_route");

var _create_rules = require("./create_rules");

var _transform_actions = require("../../../../common/detection_engine/transform_actions");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Updates the prepackaged rules given a set of rules and output index.
 * This implements a chunked approach to not saturate network connections and
 * avoid being a "noisy neighbor".
 * @param rulesClient Alerting client
 * @param spaceId Current user spaceId
 * @param rules The rules to apply the update for
 * @param outputIndex The output index to apply the update to.
 */


const updatePrepackagedRules = async (rulesClient, savedObjectsClient, rules, outputIndex, ruleExecutionLog) => {
  const ruleChunks = (0, _fp.chunk)(_constants.MAX_RULES_TO_UPDATE_IN_PARALLEL, rules);

  for (const ruleChunk of ruleChunks) {
    const rulePromises = createPromises(rulesClient, savedObjectsClient, ruleChunk, outputIndex, ruleExecutionLog);
    await Promise.all(rulePromises);
  }
};
/**
 * Creates promises of the rules and returns them.
 * @param rulesClient Alerting client
 * @param spaceId Current user spaceId
 * @param rules The rules to apply the update for
 * @param outputIndex The output index to apply the update to.
 * @returns Promise of what was updated.
 */


exports.updatePrepackagedRules = updatePrepackagedRules;

const createPromises = (rulesClient, savedObjectsClient, rules, outputIndex, ruleExecutionLog) => {
  return rules.map(async rule => {
    const {
      author,
      building_block_type: buildingBlockType,
      description,
      timestamp_field: timestampField,
      event_category_override: eventCategoryOverride,
      tiebreaker_field: tiebreakerField,
      false_positives: falsePositives,
      from,
      query,
      language,
      license,
      saved_id: savedId,
      meta,
      filters: filtersObject,
      rule_id: ruleId,
      index,
      interval,
      max_signals: maxSignals,
      related_integrations: relatedIntegrations,
      required_fields: requiredFields,
      risk_score: riskScore,
      risk_score_mapping: riskScoreMapping,
      rule_name_override: ruleNameOverride,
      name,
      setup,
      severity,
      severity_mapping: severityMapping,
      tags,
      to,
      type,
      threat,
      threshold,
      threat_filters: threatFilters,
      threat_index: threatIndex,
      threat_indicator_path: threatIndicatorPath,
      threat_query: threatQuery,
      threat_mapping: threatMapping,
      threat_language: threatLanguage,
      concurrent_searches: concurrentSearches,
      items_per_search: itemsPerSearch,
      timestamp_override: timestampOverride,
      references,
      version,
      note,
      throttle,
      anomaly_threshold: anomalyThreshold,
      timeline_id: timelineId,
      timeline_title: timelineTitle,
      machine_learning_job_id: machineLearningJobId,
      exceptions_list: exceptionsList
    } = rule;
    const existingRule = await (0, _read_rules.readRules)({
      rulesClient,
      ruleId,
      id: undefined
    }); // TODO: Fix these either with an is conversion or by better typing them within io-ts

    const filters = filtersObject;
    const migratedRule = await (0, _utils.legacyMigrate)({
      rulesClient,
      savedObjectsClient,
      rule: existingRule
    });

    if (!migratedRule) {
      throw new _add_prepackaged_rules_route.PrepackagedRulesError(`Failed to find rule ${ruleId}`, 500);
    } // If we're trying to change the type of a prepackaged rule, we need to delete the old one
    // and replace it with the new rule, keeping the enabled setting, actions, throttle, id,
    // and exception lists from the old rule


    if (type !== migratedRule.params.type) {
      await (0, _delete_rules.deleteRules)({
        ruleId: migratedRule.id,
        rulesClient,
        ruleExecutionLog
      });
      return await (0, _create_rules.createRules)({
        id: migratedRule.id,
        rulesClient,
        anomalyThreshold,
        author,
        buildingBlockType,
        description,
        enabled: migratedRule.enabled,
        // Enabled comes from existing rule
        timestampField,
        eventCategoryOverride,
        tiebreakerField,
        falsePositives,
        from,
        immutable: true,
        // At the moment we force all prepackaged rules to be immutable
        query,
        language,
        license,
        machineLearningJobId,
        outputIndex,
        savedId,
        timelineId,
        timelineTitle,
        meta,
        filters,
        ruleId,
        index,
        interval,
        maxSignals,
        relatedIntegrations,
        requiredFields,
        riskScore,
        riskScoreMapping,
        ruleNameOverride,
        name,
        setup,
        severity,
        severityMapping,
        tags,
        to,
        type,
        threat,
        threatFilters,
        threatMapping,
        threatLanguage,
        concurrentSearches,
        itemsPerSearch,
        threatQuery,
        threatIndex,
        threatIndicatorPath,
        threshold,
        throttle: migratedRule.throttle,
        // Throttle comes from the existing rule
        timestampOverride,
        references,
        note,
        version,
        // The exceptions list passed in to this function has already been merged with the exceptions list of
        // the existing rule
        exceptionsList,
        actions: migratedRule.actions.map(_transform_actions.transformAlertToRuleAction) // Actions come from the existing rule

      }); // TODO: Replace AddPrepackagedRulesSchema with type specific rules schema so we can clean up these types
    } else {
      // Note: we do not pass down enabled as we do not want to suddenly disable
      // or enable rules on the user when they were not expecting it if a rule updates
      return (0, _patch_rules.patchRules)({
        rulesClient,
        author,
        buildingBlockType,
        description,
        timestampField,
        eventCategoryOverride,
        tiebreakerField,
        falsePositives,
        from,
        query,
        language,
        license,
        outputIndex,
        rule: migratedRule,
        savedId,
        meta,
        filters,
        index,
        interval,
        maxSignals,
        relatedIntegrations,
        requiredFields,
        riskScore,
        riskScoreMapping,
        ruleNameOverride,
        name,
        setup,
        severity,
        severityMapping,
        tags,
        timestampOverride,
        to,
        type,
        threat,
        threshold,
        threatFilters,
        threatIndex,
        threatIndicatorPath,
        threatQuery,
        threatMapping,
        threatLanguage,
        concurrentSearches,
        itemsPerSearch,
        references,
        version,
        note,
        anomalyThreshold,
        enabled: undefined,
        timelineId,
        timelineTitle,
        machineLearningJobId,
        exceptionsList,
        throttle,
        actions: undefined
      });
    }
  });
};

exports.createPromises = createPromises;