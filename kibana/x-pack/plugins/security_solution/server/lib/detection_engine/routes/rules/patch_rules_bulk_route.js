"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchRulesBulkRoute = void 0;

var _securitysolutionIoTsUtils = require("@kbn/securitysolution-io-ts-utils");

var _patch_rules_bulk_schema = require("../../../../../common/detection_engine/schemas/request/patch_rules_bulk_schema");

var _route_validation = require("../../../../utils/build_validation/route_validation");

var _rules_bulk_schema = require("../../../../../common/detection_engine/schemas/response/rules_bulk_schema");

var _constants = require("../../../../../common/constants");

var _authz = require("../../../machine_learning/authz");

var _validation = require("../../../machine_learning/validation");

var _utils = require("../utils");

var _utils2 = require("./utils");

var _validate = require("./validate");

var _patch_rules = require("../../rules/patch_rules");

var _read_rules = require("../../rules/read_rules");

var _utils3 = require("../../rules/utils");

var _deprecation = require("./utils/deprecation");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * @deprecated since version 8.2.0. Use the detection_engine/rules/_bulk_action API instead
 */


const patchRulesBulkRoute = (router, ml, logger) => {
  router.patch({
    path: _constants.DETECTION_ENGINE_RULES_BULK_UPDATE,
    validate: {
      body: (0, _route_validation.buildRouteValidation)(_patch_rules_bulk_schema.patchRulesBulkSchema)
    },
    options: {
      tags: ['access:securitySolution']
    }
  }, async (context, request, response) => {
    (0, _deprecation.logDeprecatedBulkEndpoint)(logger, _constants.DETECTION_ENGINE_RULES_BULK_UPDATE);
    const siemResponse = (0, _utils.buildSiemResponse)(response);
    const ctx = await context.resolve(['core', 'securitySolution', 'alerting', 'licensing']);
    const rulesClient = ctx.alerting.getRulesClient();
    const ruleExecutionLog = ctx.securitySolution.getRuleExecutionLog();
    const savedObjectsClient = ctx.core.savedObjects.client;
    const mlAuthz = (0, _authz.buildMlAuthz)({
      license: ctx.licensing.license,
      ml,
      request,
      savedObjectsClient
    });
    const rules = await Promise.all(request.body.map(async payloadRule => {
      var _ref;

      const {
        actions: actionsRest,
        author,
        building_block_type: buildingBlockType,
        description,
        enabled,
        timestamp_field: timestampField,
        event_category_override: eventCategoryOverride,
        tiebreaker_field: tiebreakerField,
        false_positives: falsePositives,
        from,
        query,
        language,
        license,
        output_index: outputIndex,
        saved_id: savedId,
        timeline_id: timelineId,
        timeline_title: timelineTitle,
        meta,
        filters: filtersRest,
        rule_id: ruleId,
        id,
        index,
        interval,
        max_signals: maxSignals,
        risk_score: riskScore,
        risk_score_mapping: riskScoreMapping,
        rule_name_override: ruleNameOverride,
        name,
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
        throttle,
        references,
        note,
        version,
        anomaly_threshold: anomalyThreshold,
        machine_learning_job_id: machineLearningJobId,
        exceptions_list: exceptionsList
      } = payloadRule;
      const idOrRuleIdOrUnknown = (_ref = id !== null && id !== void 0 ? id : ruleId) !== null && _ref !== void 0 ? _ref : '(unknown id)'; // TODO: Fix these either with an is conversion or by better typing them within io-ts

      const actions = actionsRest;
      const filters = filtersRest;

      try {
        if (type) {
          // reject an unauthorized "promotion" to ML
          (0, _validation.throwAuthzError)(await mlAuthz.validateRuleType(type));
        }

        const existingRule = await (0, _read_rules.readRules)({
          rulesClient,
          ruleId,
          id
        });

        if (existingRule !== null && existingRule !== void 0 && existingRule.params.type) {
          // reject an unauthorized modification of an ML rule
          (0, _validation.throwAuthzError)(await mlAuthz.validateRuleType(existingRule === null || existingRule === void 0 ? void 0 : existingRule.params.type));
        }

        const migratedRule = await (0, _utils3.legacyMigrate)({
          rulesClient,
          savedObjectsClient,
          rule: existingRule
        });
        const rule = await (0, _patch_rules.patchRules)({
          rule: migratedRule,
          rulesClient,
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
          outputIndex,
          savedId,
          timelineId,
          timelineTitle,
          meta,
          filters,
          index,
          interval,
          maxSignals,
          riskScore,
          riskScoreMapping,
          ruleNameOverride,
          name,
          severity,
          severityMapping,
          tags,
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
          throttle,
          concurrentSearches,
          itemsPerSearch,
          timestampOverride,
          references,
          note,
          version,
          anomalyThreshold,
          machineLearningJobId,
          actions,
          exceptionsList
        });

        if (rule != null && rule.enabled != null && rule.name != null) {
          const ruleExecutionSummary = await ruleExecutionLog.getExecutionSummary(rule.id);
          return (0, _validate.transformValidateBulkError)(rule.id, rule, ruleExecutionSummary);
        } else {
          return (0, _utils2.getIdBulkError)({
            id,
            ruleId
          });
        }
      } catch (err) {
        return (0, _utils.transformBulkError)(idOrRuleIdOrUnknown, err);
      }
    }));
    const [validated, errors] = (0, _securitysolutionIoTsUtils.validate)(rules, _rules_bulk_schema.rulesBulkSchema);

    if (errors != null) {
      return siemResponse.error({
        statusCode: 500,
        body: errors,
        headers: (0, _deprecation.getDeprecatedBulkEndpointHeader)(_constants.DETECTION_ENGINE_RULES_BULK_UPDATE)
      });
    } else {
      return response.ok({
        body: validated !== null && validated !== void 0 ? validated : {},
        headers: (0, _deprecation.getDeprecatedBulkEndpointHeader)(_constants.DETECTION_ENGINE_RULES_BULK_UPDATE)
      });
    }
  });
};

exports.patchRulesBulkRoute = patchRulesBulkRoute;