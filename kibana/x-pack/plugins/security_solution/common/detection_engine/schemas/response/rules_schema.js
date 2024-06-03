"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rulesWithoutTypeDependentsSchema = exports.rulesSchema = exports.requiredRulesSchema = exports.partialRulesSchema = exports.getDependents = exports.dependentRulesSchema = exports.checkTypeDependents = exports.addTimelineTitle = exports.addThresholdFields = exports.addThreatMatchFields = exports.addSavedId = exports.addQueryFields = exports.addMlFields = exports.addEqlFields = void 0;

var t = _interopRequireWildcard(require("io-ts"));

var _fp = require("lodash/fp");

var _Either = require("fp-ts/lib/Either");

var _pipeable = require("fp-ts/lib/pipeable");

var _securitysolutionIoTsAlertingTypes = require("@kbn/securitysolution-io-ts-alerting-types");

var _securitysolutionIoTsTypes = require("@kbn/securitysolution-io-ts-types");

var _securitysolutionIoTsListTypes = require("@kbn/securitysolution-io-ts-list-types");

var _helpers = require("../../../machine_learning/helpers");

var _utils = require("../../utils");

var _common = require("../common");

var _type_timeline_only_schema = require("./type_timeline_only_schema");

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
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * This is the required fields for the rules schema response. Put all required properties on
 * this base for schemas such as create_rules, update_rules, for the correct validation of the
 * output schema.
 */


const requiredRulesSchema = t.type({
  author: _securitysolutionIoTsTypes.DefaultStringArray,
  description: _common.description,
  enabled: _common.enabled,
  false_positives: _common.false_positives,
  from: _securitysolutionIoTsAlertingTypes.from,
  id: _common.id,
  immutable: _common.immutable,
  interval: _common.interval,
  rule_id: _common.rule_id,
  output_index: _common.output_index,
  max_signals: _securitysolutionIoTsAlertingTypes.max_signals,
  risk_score: _securitysolutionIoTsAlertingTypes.risk_score,
  risk_score_mapping: _securitysolutionIoTsAlertingTypes.DefaultRiskScoreMappingArray,
  name: _common.name,
  references: _common.references,
  severity: _securitysolutionIoTsAlertingTypes.severity,
  severity_mapping: _securitysolutionIoTsAlertingTypes.DefaultSeverityMappingArray,
  updated_by: _common.updated_by,
  tags: _common.tags,
  to: _common.to,
  type: _securitysolutionIoTsAlertingTypes.type,
  threat: _securitysolutionIoTsAlertingTypes.threats,
  created_at: _common.created_at,
  updated_at: _common.updated_at,
  created_by: _common.created_by,
  version: _securitysolutionIoTsTypes.version,
  exceptions_list: _securitysolutionIoTsListTypes.DefaultListArray,
  related_integrations: _common.RelatedIntegrationArray,
  required_fields: _common.RequiredFieldArray,
  setup: _common.SetupGuide
});
exports.requiredRulesSchema = requiredRulesSchema;
/**
 * If you have type dependents or exclusive or situations add them here AND update the
 * check_type_dependents file for whichever REST flow it is going through.
 */

const dependentRulesSchema = t.partial({
  // query fields
  language: _securitysolutionIoTsAlertingTypes.language,
  query: _common.query,
  // eql only fields
  timestamp_field: _common.timestamp_field,
  event_category_override: _common.event_category_override,
  tiebreaker_field: _common.tiebreaker_field,
  // when type = saved_query, saved_id is required
  saved_id: _common.saved_id,
  // These two are required together or not at all.
  timeline_id: _common.timeline_id,
  timeline_title: _common.timeline_title,
  // ML fields
  anomaly_threshold: _common.anomaly_threshold,
  machine_learning_job_id: _securitysolutionIoTsAlertingTypes.machine_learning_job_id,
  // Threshold fields
  threshold: _common.threshold,
  // Threat Match fields
  threat_filters: _securitysolutionIoTsAlertingTypes.threat_filters,
  threat_index: _securitysolutionIoTsAlertingTypes.threat_index,
  threat_query: _securitysolutionIoTsAlertingTypes.threat_query,
  concurrent_searches: _securitysolutionIoTsAlertingTypes.concurrent_searches,
  items_per_search: _securitysolutionIoTsAlertingTypes.items_per_search,
  threat_mapping: _securitysolutionIoTsAlertingTypes.threat_mapping,
  threat_language: _securitysolutionIoTsAlertingTypes.threat_language,
  threat_indicator_path: _securitysolutionIoTsAlertingTypes.threat_indicator_path
});
/**
 * This is the partial or optional fields for the rules schema. Put all optional
 * properties on this. DO NOT PUT type dependents such as xor relationships here.
 * Instead use dependentRulesSchema and check_type_dependents for how to do those.
 */

exports.dependentRulesSchema = dependentRulesSchema;
const partialRulesSchema = t.partial({
  actions: _securitysolutionIoTsAlertingTypes.actions,
  building_block_type: _common.building_block_type,
  license: _common.license,
  throttle: _securitysolutionIoTsAlertingTypes.throttle,
  rule_name_override: _common.rule_name_override,
  timestamp_override: _common.timestamp_override,
  filters: _common.filters,
  meta: _common.meta,
  outcome: _common.outcome,
  alias_target_id: _common.alias_target_id,
  alias_purpose: _common.alias_purpose,
  index: _common.index,
  namespace: _common.namespace,
  note: _common.note,
  uuid: _common.id,
  // Move to 'required' post-migration
  execution_summary: _common.ruleExecutionSummary
});
/**
 * This is the rules schema WITHOUT typeDependents. You don't normally want to use this for a decode
 */

exports.partialRulesSchema = partialRulesSchema;
const rulesWithoutTypeDependentsSchema = t.intersection([t.exact(dependentRulesSchema), t.exact(partialRulesSchema), t.exact(requiredRulesSchema)]);
exports.rulesWithoutTypeDependentsSchema = rulesWithoutTypeDependentsSchema;
/**
 * This is the rulesSchema you want to use for checking type dependents and all the properties
 * through: rulesSchema.decode(someJSONObject)
 */

const rulesSchema = new t.Type('RulesSchema', input => (0, _fp.isObject)(input), input => {
  return checkTypeDependents(input);
}, t.identity);
/**
 * This is the correct type you want to use for Rules that are outputted from the
 * REST interface. This has all base and all optional properties merged together.
 */

exports.rulesSchema = rulesSchema;

const addSavedId = typeAndTimelineOnly => {
  if (typeAndTimelineOnly.type === 'saved_query') {
    return [t.exact(t.type({
      saved_id: dependentRulesSchema.props.saved_id
    }))];
  } else {
    return [];
  }
};

exports.addSavedId = addSavedId;

const addTimelineTitle = typeAndTimelineOnly => {
  if (typeAndTimelineOnly.timeline_id != null) {
    return [t.exact(t.type({
      timeline_title: dependentRulesSchema.props.timeline_title
    })), t.exact(t.type({
      timeline_id: dependentRulesSchema.props.timeline_id
    }))];
  } else {
    return [];
  }
};

exports.addTimelineTitle = addTimelineTitle;

const addQueryFields = typeAndTimelineOnly => {
  if (['query', 'saved_query', 'threshold', 'threat_match'].includes(typeAndTimelineOnly.type)) {
    return [t.exact(t.type({
      query: dependentRulesSchema.props.query
    })), t.exact(t.type({
      language: dependentRulesSchema.props.language
    }))];
  } else {
    return [];
  }
};

exports.addQueryFields = addQueryFields;

const addMlFields = typeAndTimelineOnly => {
  if ((0, _helpers.isMlRule)(typeAndTimelineOnly.type)) {
    return [t.exact(t.type({
      anomaly_threshold: dependentRulesSchema.props.anomaly_threshold
    })), t.exact(t.type({
      machine_learning_job_id: dependentRulesSchema.props.machine_learning_job_id
    }))];
  } else {
    return [];
  }
};

exports.addMlFields = addMlFields;

const addThresholdFields = typeAndTimelineOnly => {
  if ((0, _utils.isThresholdRule)(typeAndTimelineOnly.type)) {
    return [t.exact(t.type({
      threshold: dependentRulesSchema.props.threshold
    })), t.exact(t.partial({
      saved_id: dependentRulesSchema.props.saved_id
    }))];
  } else {
    return [];
  }
};

exports.addThresholdFields = addThresholdFields;

const addEqlFields = typeAndTimelineOnly => {
  if (typeAndTimelineOnly.type === 'eql') {
    return [t.exact(t.partial({
      timestamp_field: dependentRulesSchema.props.timestamp_field
    })), t.exact(t.partial({
      event_category_override: dependentRulesSchema.props.event_category_override
    })), t.exact(t.partial({
      tiebreaker_field: dependentRulesSchema.props.tiebreaker_field
    })), t.exact(t.type({
      query: dependentRulesSchema.props.query
    })), t.exact(t.type({
      language: dependentRulesSchema.props.language
    }))];
  } else {
    return [];
  }
};

exports.addEqlFields = addEqlFields;

const addThreatMatchFields = typeAndTimelineOnly => {
  if (typeAndTimelineOnly.type === 'threat_match') {
    return [t.exact(t.type({
      threat_query: dependentRulesSchema.props.threat_query
    })), t.exact(t.type({
      threat_index: dependentRulesSchema.props.threat_index
    })), t.exact(t.type({
      threat_mapping: dependentRulesSchema.props.threat_mapping
    })), t.exact(t.partial({
      threat_language: dependentRulesSchema.props.threat_language
    })), t.exact(t.partial({
      threat_filters: dependentRulesSchema.props.threat_filters
    })), t.exact(t.partial({
      threat_indicator_path: dependentRulesSchema.props.threat_indicator_path
    })), t.exact(t.partial({
      saved_id: dependentRulesSchema.props.saved_id
    })), t.exact(t.partial({
      concurrent_searches: dependentRulesSchema.props.concurrent_searches
    })), t.exact(t.partial({
      items_per_search: dependentRulesSchema.props.items_per_search
    }))];
  } else {
    return [];
  }
};

exports.addThreatMatchFields = addThreatMatchFields;

const getDependents = typeAndTimelineOnly => {
  const dependents = [t.exact(requiredRulesSchema), t.exact(partialRulesSchema), ...addSavedId(typeAndTimelineOnly), ...addTimelineTitle(typeAndTimelineOnly), ...addQueryFields(typeAndTimelineOnly), ...addMlFields(typeAndTimelineOnly), ...addThresholdFields(typeAndTimelineOnly), ...addEqlFields(typeAndTimelineOnly), ...addThreatMatchFields(typeAndTimelineOnly)];

  if (dependents.length > 1) {
    // This unsafe cast is because t.intersection does not use an array but rather a set of
    // tuples and really does not look like they expected us to ever dynamically build up
    // intersections, but here we are doing that. Looking at their code, although they limit
    // the array elements to 5, it looks like you have N number of intersections
    const unsafeCast = dependents;
    return t.intersection(unsafeCast);
  } else {
    // We are not allowed to call t.intersection with a single value so we return without
    // it here normally.
    return dependents[0];
  }
};

exports.getDependents = getDependents;

const checkTypeDependents = input => {
  const typeOnlyDecoded = _type_timeline_only_schema.typeAndTimelineOnlySchema.decode(input);

  const onLeft = errors => (0, _Either.left)(errors);

  const onRight = typeAndTimelineOnly => {
    const intersections = getDependents(typeAndTimelineOnly);
    return intersections.decode(input);
  };

  return (0, _pipeable.pipe)(typeOnlyDecoded, (0, _Either.fold)(onLeft, onRight));
};

exports.checkTypeDependents = checkTypeDependents;