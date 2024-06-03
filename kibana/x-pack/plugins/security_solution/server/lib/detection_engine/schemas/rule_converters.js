"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeSpecificSnakeToCamel = exports.typeSpecificCamelToSnake = exports.internalRuleToAPIResponse = exports.convertCreateAPIToInternalSchema = exports.commonParamsCamelToSnake = void 0;

var _uuid = _interopRequireDefault(require("uuid"));

var _securitysolutionRules = require("@kbn/securitysolution-rules");

var _utils = require("../../../../common/detection_engine/utils");

var _utility_types = require("../../../../common/utility_types");

var _constants = require("../../../../common/constants");

var _transform_actions = require("../../../../common/detection_engine/transform_actions");

var _utils2 = require("../rules/utils");

var _rule_execution_log = require("../rule_execution_log");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// These functions provide conversions from the request API schema to the internal rule schema and from the internal rule schema
// to the response API schema. This provides static type-check assurances that the internal schema is in sync with the API schema for
// required and defaultable fields. However, it is still possible to add an optional field to the API schema
// without causing a type-check error here.
// Converts params from the snake case API format to the internal camel case format AND applies default values where needed.
// Notice that params.language is possibly undefined for most rule types in the API but we default it to kuery to match
// the legacy API behavior


const typeSpecificSnakeToCamel = params => {
  switch (params.type) {
    case 'eql':
      {
        return {
          type: params.type,
          language: params.language,
          index: params.index,
          query: params.query,
          filters: params.filters,
          timestampField: params.timestamp_field,
          eventCategoryOverride: params.event_category_override,
          tiebreakerField: params.tiebreaker_field
        };
      }

    case 'threat_match':
      {
        var _params$language;

        return {
          type: params.type,
          language: (_params$language = params.language) !== null && _params$language !== void 0 ? _params$language : 'kuery',
          index: params.index,
          query: params.query,
          filters: params.filters,
          savedId: params.saved_id,
          threatFilters: params.threat_filters,
          threatQuery: params.threat_query,
          threatMapping: params.threat_mapping,
          threatLanguage: params.threat_language,
          threatIndex: params.threat_index,
          threatIndicatorPath: params.threat_indicator_path,
          concurrentSearches: params.concurrent_searches,
          itemsPerSearch: params.items_per_search
        };
      }

    case 'query':
      {
        var _params$language2, _params$query;

        return {
          type: params.type,
          language: (_params$language2 = params.language) !== null && _params$language2 !== void 0 ? _params$language2 : 'kuery',
          index: params.index,
          query: (_params$query = params.query) !== null && _params$query !== void 0 ? _params$query : '',
          filters: params.filters,
          savedId: params.saved_id
        };
      }

    case 'saved_query':
      {
        var _params$language3;

        return {
          type: params.type,
          language: (_params$language3 = params.language) !== null && _params$language3 !== void 0 ? _params$language3 : 'kuery',
          index: params.index,
          query: params.query,
          filters: params.filters,
          savedId: params.saved_id
        };
      }

    case 'threshold':
      {
        var _params$language4;

        return {
          type: params.type,
          language: (_params$language4 = params.language) !== null && _params$language4 !== void 0 ? _params$language4 : 'kuery',
          index: params.index,
          query: params.query,
          filters: params.filters,
          savedId: params.saved_id,
          threshold: (0, _utils.normalizeThresholdObject)(params.threshold)
        };
      }

    case 'machine_learning':
      {
        return {
          type: params.type,
          anomalyThreshold: params.anomaly_threshold,
          machineLearningJobId: (0, _utils.normalizeMachineLearningJobIds)(params.machine_learning_job_id)
        };
      }

    default:
      {
        return (0, _utility_types.assertUnreachable)(params);
      }
  }
};

exports.typeSpecificSnakeToCamel = typeSpecificSnakeToCamel;

const convertCreateAPIToInternalSchema = (input, siemClient) => {
  var _input$rule_id, _input$tags, _input$author, _input$false_positive, _input$from, _input$output_index, _input$max_signals, _input$risk_score_map, _input$severity_mappi, _input$threat, _input$to, _input$references, _input$version, _input$exceptions_lis, _input$interval, _input$enabled, _input$actions$map, _input$actions;

  const typeSpecificParams = typeSpecificSnakeToCamel(input);
  const newRuleId = (_input$rule_id = input.rule_id) !== null && _input$rule_id !== void 0 ? _input$rule_id : _uuid.default.v4();
  return {
    name: input.name,
    tags: (_input$tags = input.tags) !== null && _input$tags !== void 0 ? _input$tags : [],
    alertTypeId: _securitysolutionRules.ruleTypeMappings[input.type],
    consumer: _constants.SERVER_APP_ID,
    params: {
      author: (_input$author = input.author) !== null && _input$author !== void 0 ? _input$author : [],
      buildingBlockType: input.building_block_type,
      description: input.description,
      ruleId: newRuleId,
      falsePositives: (_input$false_positive = input.false_positives) !== null && _input$false_positive !== void 0 ? _input$false_positive : [],
      from: (_input$from = input.from) !== null && _input$from !== void 0 ? _input$from : 'now-6m',
      immutable: false,
      license: input.license,
      outputIndex: (_input$output_index = input.output_index) !== null && _input$output_index !== void 0 ? _input$output_index : siemClient.getSignalsIndex(),
      timelineId: input.timeline_id,
      timelineTitle: input.timeline_title,
      meta: input.meta,
      maxSignals: (_input$max_signals = input.max_signals) !== null && _input$max_signals !== void 0 ? _input$max_signals : _constants.DEFAULT_MAX_SIGNALS,
      riskScore: input.risk_score,
      riskScoreMapping: (_input$risk_score_map = input.risk_score_mapping) !== null && _input$risk_score_map !== void 0 ? _input$risk_score_map : [],
      ruleNameOverride: input.rule_name_override,
      severity: input.severity,
      severityMapping: (_input$severity_mappi = input.severity_mapping) !== null && _input$severity_mappi !== void 0 ? _input$severity_mappi : [],
      threat: (_input$threat = input.threat) !== null && _input$threat !== void 0 ? _input$threat : [],
      timestampOverride: input.timestamp_override,
      to: (_input$to = input.to) !== null && _input$to !== void 0 ? _input$to : 'now',
      references: (_input$references = input.references) !== null && _input$references !== void 0 ? _input$references : [],
      namespace: input.namespace,
      note: input.note,
      version: (_input$version = input.version) !== null && _input$version !== void 0 ? _input$version : 1,
      exceptionsList: (_input$exceptions_lis = input.exceptions_list) !== null && _input$exceptions_lis !== void 0 ? _input$exceptions_lis : [],
      relatedIntegrations: [],
      requiredFields: [],
      setup: '',
      ...typeSpecificParams
    },
    schedule: {
      interval: (_input$interval = input.interval) !== null && _input$interval !== void 0 ? _input$interval : '5m'
    },
    enabled: (_input$enabled = input.enabled) !== null && _input$enabled !== void 0 ? _input$enabled : true,
    actions: (_input$actions$map = (_input$actions = input.actions) === null || _input$actions === void 0 ? void 0 : _input$actions.map(_transform_actions.transformRuleToAlertAction)) !== null && _input$actions$map !== void 0 ? _input$actions$map : [],
    throttle: (0, _utils2.transformToAlertThrottle)(input.throttle),
    notifyWhen: (0, _utils2.transformToNotifyWhen)(input.throttle)
  };
}; // Converts the internal rule data structure to the response API schema


exports.convertCreateAPIToInternalSchema = convertCreateAPIToInternalSchema;

const typeSpecificCamelToSnake = params => {
  switch (params.type) {
    case 'eql':
      {
        return {
          type: params.type,
          language: params.language,
          index: params.index,
          query: params.query,
          filters: params.filters,
          timestamp_field: params.timestampField,
          event_category_override: params.eventCategoryOverride,
          tiebreaker_field: params.tiebreakerField
        };
      }

    case 'threat_match':
      {
        return {
          type: params.type,
          language: params.language,
          index: params.index,
          query: params.query,
          filters: params.filters,
          saved_id: params.savedId,
          threat_filters: params.threatFilters,
          threat_query: params.threatQuery,
          threat_mapping: params.threatMapping,
          threat_language: params.threatLanguage,
          threat_index: params.threatIndex,
          threat_indicator_path: params.threatIndicatorPath,
          concurrent_searches: params.concurrentSearches,
          items_per_search: params.itemsPerSearch
        };
      }

    case 'query':
      {
        return {
          type: params.type,
          language: params.language,
          index: params.index,
          query: params.query,
          filters: params.filters,
          saved_id: params.savedId
        };
      }

    case 'saved_query':
      {
        return {
          type: params.type,
          language: params.language,
          index: params.index,
          query: params.query,
          filters: params.filters,
          saved_id: params.savedId
        };
      }

    case 'threshold':
      {
        return {
          type: params.type,
          language: params.language,
          index: params.index,
          query: params.query,
          filters: params.filters,
          saved_id: params.savedId,
          threshold: params.threshold
        };
      }

    case 'machine_learning':
      {
        return {
          type: params.type,
          anomaly_threshold: params.anomalyThreshold,
          machine_learning_job_id: params.machineLearningJobId
        };
      }

    default:
      {
        return (0, _utility_types.assertUnreachable)(params);
      }
  }
}; // TODO: separate out security solution defined common params from Alerting framework common params
// so we can explicitly specify the return type of this function


exports.typeSpecificCamelToSnake = typeSpecificCamelToSnake;

const commonParamsCamelToSnake = params => {
  var _params$relatedIntegr, _params$requiredField, _params$setup;

  return {
    description: params.description,
    risk_score: params.riskScore,
    severity: params.severity,
    building_block_type: params.buildingBlockType,
    namespace: params.namespace,
    note: params.note,
    license: params.license,
    output_index: params.outputIndex,
    timeline_id: params.timelineId,
    timeline_title: params.timelineTitle,
    meta: params.meta,
    rule_name_override: params.ruleNameOverride,
    timestamp_override: params.timestampOverride,
    author: params.author,
    false_positives: params.falsePositives,
    from: params.from,
    rule_id: params.ruleId,
    max_signals: params.maxSignals,
    risk_score_mapping: params.riskScoreMapping,
    severity_mapping: params.severityMapping,
    threat: params.threat,
    to: params.to,
    references: params.references,
    version: params.version,
    exceptions_list: params.exceptionsList,
    immutable: params.immutable,
    related_integrations: (_params$relatedIntegr = params.relatedIntegrations) !== null && _params$relatedIntegr !== void 0 ? _params$relatedIntegr : [],
    required_fields: (_params$requiredField = params.requiredFields) !== null && _params$requiredField !== void 0 ? _params$requiredField : [],
    setup: (_params$setup = params.setup) !== null && _params$setup !== void 0 ? _params$setup : ''
  };
};

exports.commonParamsCamelToSnake = commonParamsCamelToSnake;

const internalRuleToAPIResponse = (rule, ruleExecutionSummary, legacyRuleActions) => {
  var _rule$updatedBy, _rule$createdBy;

  const mergedExecutionSummary = (0, _rule_execution_log.mergeRuleExecutionSummary)(rule, ruleExecutionSummary !== null && ruleExecutionSummary !== void 0 ? ruleExecutionSummary : null);

  const isResolvedRule = obj => obj.outcome != null;

  return {
    // saved object properties
    outcome: isResolvedRule(rule) ? rule.outcome : undefined,
    alias_target_id: isResolvedRule(rule) ? rule.alias_target_id : undefined,
    alias_purpose: isResolvedRule(rule) ? rule.alias_purpose : undefined,
    // Alerting framework params
    id: rule.id,
    updated_at: rule.updatedAt.toISOString(),
    updated_by: (_rule$updatedBy = rule.updatedBy) !== null && _rule$updatedBy !== void 0 ? _rule$updatedBy : 'elastic',
    created_at: rule.createdAt.toISOString(),
    created_by: (_rule$createdBy = rule.createdBy) !== null && _rule$createdBy !== void 0 ? _rule$createdBy : 'elastic',
    name: rule.name,
    tags: rule.tags,
    interval: rule.schedule.interval,
    enabled: rule.enabled,
    // Security solution shared rule params
    ...commonParamsCamelToSnake(rule.params),
    // Type specific security solution rule params
    ...typeSpecificCamelToSnake(rule.params),
    // Actions
    throttle: (0, _utils2.transformFromAlertThrottle)(rule, legacyRuleActions),
    actions: (0, _utils2.transformActions)(rule.actions, legacyRuleActions),
    // Execution summary
    execution_summary: mergedExecutionSummary !== null && mergedExecutionSummary !== void 0 ? mergedExecutionSummary : undefined
  };
};

exports.internalRuleToAPIResponse = internalRuleToAPIResponse;