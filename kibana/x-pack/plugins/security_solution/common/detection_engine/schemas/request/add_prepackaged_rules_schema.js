"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPrepackagedRulesSchema = void 0;

var t = _interopRequireWildcard(require("io-ts"));

var _securitysolutionIoTsAlertingTypes = require("@kbn/securitysolution-io-ts-alerting-types");

var _securitysolutionIoTsTypes = require("@kbn/securitysolution-io-ts-types");

var _securitysolutionIoTsListTypes = require("@kbn/securitysolution-io-ts-list-types");

var _common = require("../common");

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
 * Big differences between this schema and the createRulesSchema
 *  - rule_id is required here
 *  - output_index is not allowed (and instead the space index must be used)
 *  - immutable is forbidden but defaults to true instead of to false and it can only ever be true (This is forced directly in the route and not here)
 *  - enabled defaults to false instead of true
 *  - version is a required field that must exist
 *  - index is a required field that must exist if type !== machine_learning (Checked within the runtime type dependent system)
 */


const addPrepackagedRulesSchema = t.intersection([t.exact(t.type({
  description: _common.description,
  risk_score: _securitysolutionIoTsAlertingTypes.risk_score,
  name: _common.name,
  severity: _securitysolutionIoTsAlertingTypes.severity,
  type: _securitysolutionIoTsAlertingTypes.type,
  rule_id: _common.rule_id,
  version: _securitysolutionIoTsTypes.version
})), t.exact(t.partial({
  actions: _securitysolutionIoTsAlertingTypes.DefaultActionsArray,
  // defaults to empty actions array if not set during decode
  anomaly_threshold: _common.anomaly_threshold,
  // defaults to undefined if not set during decode
  author: _securitysolutionIoTsTypes.DefaultStringArray,
  // defaults to empty array of strings if not set during decode
  building_block_type: _common.building_block_type,
  // defaults to undefined if not set during decode
  enabled: _securitysolutionIoTsTypes.DefaultBooleanFalse,
  // defaults to false if not set during decode
  timestamp_field: _common.timestamp_field,
  // defaults to "undefined" if not set during decode
  event_category_override: _common.event_category_override,
  // defaults to "undefined" if not set during decode
  tiebreaker_field: _common.tiebreaker_field,
  // defaults to "undefined" if not set during decode
  false_positives: _securitysolutionIoTsTypes.DefaultStringArray,
  // defaults to empty string array if not set during decode
  filters: _common.filters,
  // defaults to undefined if not set during decode
  from: _securitysolutionIoTsAlertingTypes.DefaultFromString,
  // defaults to "now-6m" if not set during decode
  index: _common.index,
  // defaults to undefined if not set during decode
  interval: _securitysolutionIoTsAlertingTypes.DefaultIntervalString,
  // defaults to "5m" if not set during decode
  query: _common.query,
  // defaults to undefined if not set during decode
  language: _securitysolutionIoTsAlertingTypes.language,
  // defaults to undefined if not set during decode
  license: _common.license,
  // defaults to "undefined" if not set during decode
  saved_id: _common.saved_id,
  // defaults to "undefined" if not set during decode
  timeline_id: _common.timeline_id,
  // defaults to "undefined" if not set during decode
  timeline_title: _common.timeline_title,
  // defaults to "undefined" if not set during decode
  meta: _common.meta,
  // defaults to "undefined" if not set during decode
  machine_learning_job_id: _securitysolutionIoTsAlertingTypes.machine_learning_job_id,
  // defaults to "undefined" if not set during decode
  max_signals: _securitysolutionIoTsAlertingTypes.DefaultMaxSignalsNumber,
  // defaults to DEFAULT_MAX_SIGNALS (100) if not set during decode
  related_integrations: _common.RelatedIntegrationArray,
  // defaults to "undefined" if not set during decode
  required_fields: _common.RequiredFieldArray,
  // defaults to "undefined" if not set during decode
  risk_score_mapping: _securitysolutionIoTsAlertingTypes.DefaultRiskScoreMappingArray,
  // defaults to empty risk score mapping array if not set during decode
  rule_name_override: _common.rule_name_override,
  // defaults to "undefined" if not set during decode
  setup: _common.SetupGuide,
  // defaults to "undefined" if not set during decode
  severity_mapping: _securitysolutionIoTsAlertingTypes.DefaultSeverityMappingArray,
  // defaults to empty actions array if not set during decode
  tags: _securitysolutionIoTsTypes.DefaultStringArray,
  // defaults to empty string array if not set during decode
  to: _securitysolutionIoTsAlertingTypes.DefaultToString,
  // defaults to "now" if not set during decode
  threat: _securitysolutionIoTsAlertingTypes.DefaultThreatArray,
  // defaults to empty array if not set during decode
  threshold: _common.threshold,
  // defaults to "undefined" if not set during decode
  throttle: _securitysolutionIoTsAlertingTypes.DefaultThrottleNull,
  // defaults to "null" if not set during decode
  timestamp_override: _common.timestamp_override,
  // defaults to "undefined" if not set during decode
  references: _securitysolutionIoTsTypes.DefaultStringArray,
  // defaults to empty array of strings if not set during decode
  note: _common.note,
  // defaults to "undefined" if not set during decode
  exceptions_list: _securitysolutionIoTsListTypes.DefaultListArray,
  // defaults to empty array if not set during decode
  threat_filters: _securitysolutionIoTsAlertingTypes.threat_filters,
  // defaults to "undefined" if not set during decode
  threat_mapping: _securitysolutionIoTsAlertingTypes.threat_mapping,
  // defaults to "undefined" if not set during decode
  threat_query: _securitysolutionIoTsAlertingTypes.threat_query,
  // defaults to "undefined" if not set during decode
  threat_index: _securitysolutionIoTsAlertingTypes.threat_index,
  // defaults to "undefined" if not set during decode
  threat_language: _securitysolutionIoTsAlertingTypes.threat_language,
  // defaults "undefined" if not set during decode
  threat_indicator_path: _securitysolutionIoTsAlertingTypes.threat_indicator_path,
  // defaults "undefined" if not set during decode
  concurrent_searches: _securitysolutionIoTsAlertingTypes.concurrent_searches,
  // defaults to "undefined" if not set during decode
  items_per_search: _securitysolutionIoTsAlertingTypes.items_per_search,
  // defaults to "undefined" if not set during decode
  namespace: _common.namespace // defaults to "undefined" if not set during decode

}))]);
exports.addPrepackagedRulesSchema = addPrepackagedRulesSchema;