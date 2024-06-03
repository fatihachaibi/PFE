"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeSpecificRuleParams = exports.thresholdRuleParams = exports.threatRuleParams = exports.savedQueryRuleParams = exports.ruleParams = exports.queryRuleParams = exports.notifyWhen = exports.machineLearningRuleParams = exports.internalRuleUpdate = exports.internalRuleResponse = exports.internalRuleCreate = exports.eqlRuleParams = exports.baseRuleParams = exports.allRuleTypes = void 0;

var t = _interopRequireWildcard(require("io-ts"));

var _securitysolutionIoTsAlertingTypes = require("@kbn/securitysolution-io-ts-alerting-types");

var _securitysolutionIoTsListTypes = require("@kbn/securitysolution-io-ts-list-types");

var _securitysolutionIoTsTypes = require("@kbn/securitysolution-io-ts-types");

var _securitysolutionRules = require("@kbn/securitysolution-rules");

var _common = require("../../../../common/detection_engine/schemas/common");

var _constants = require("../../../../common/constants");

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


const nonEqlLanguages = t.keyof({
  kuery: null,
  lucene: null
});
const baseRuleParams = t.exact(t.type({
  author: _common.author,
  buildingBlockType: _common.buildingBlockTypeOrUndefined,
  description: _common.description,
  namespace: _common.namespaceOrUndefined,
  note: _common.noteOrUndefined,
  falsePositives: _common.false_positives,
  from: _securitysolutionIoTsAlertingTypes.from,
  ruleId: _common.rule_id,
  immutable: _common.immutable,
  license: _common.licenseOrUndefined,
  outputIndex: _common.output_index,
  timelineId: _common.timelineIdOrUndefined,
  timelineTitle: _common.timelineTitleOrUndefined,
  meta: _common.metaOrUndefined,
  // maxSignals not used in ML rules but probably should be used
  maxSignals: _securitysolutionIoTsAlertingTypes.max_signals,
  riskScore: _securitysolutionIoTsAlertingTypes.risk_score,
  riskScoreMapping: _securitysolutionIoTsAlertingTypes.risk_score_mapping,
  ruleNameOverride: _common.ruleNameOverrideOrUndefined,
  severity: _securitysolutionIoTsAlertingTypes.severity,
  severityMapping: _securitysolutionIoTsAlertingTypes.severity_mapping,
  timestampOverride: _common.timestampOverrideOrUndefined,
  threat: _securitysolutionIoTsAlertingTypes.threats,
  to: _common.to,
  references: _common.references,
  version: _securitysolutionIoTsTypes.version,
  exceptionsList: _securitysolutionIoTsListTypes.listArray,
  relatedIntegrations: t.union([_common.RelatedIntegrationArray, t.undefined]),
  requiredFields: t.union([_common.RequiredFieldArray, t.undefined]),
  setup: t.union([_common.SetupGuide, t.undefined])
}));
exports.baseRuleParams = baseRuleParams;
const eqlSpecificRuleParams = t.type({
  type: t.literal('eql'),
  language: t.literal('eql'),
  index: _common.indexOrUndefined,
  query: _common.query,
  filters: _common.filtersOrUndefined,
  timestampField: _common.timestampFieldOrUndefined,
  eventCategoryOverride: _common.eventCategoryOverrideOrUndefined,
  tiebreakerField: _common.tiebreakerFieldOrUndefined
});
const eqlRuleParams = t.intersection([baseRuleParams, eqlSpecificRuleParams]);
exports.eqlRuleParams = eqlRuleParams;
const threatSpecificRuleParams = t.type({
  type: t.literal('threat_match'),
  language: nonEqlLanguages,
  index: _common.indexOrUndefined,
  query: _common.query,
  filters: _common.filtersOrUndefined,
  savedId: _common.savedIdOrUndefined,
  threatFilters: _common.filtersOrUndefined,
  threatQuery: _securitysolutionIoTsAlertingTypes.threat_query,
  threatMapping: _securitysolutionIoTsAlertingTypes.threat_mapping,
  threatLanguage: t.union([nonEqlLanguages, t.undefined]),
  threatIndex: _securitysolutionIoTsAlertingTypes.threat_index,
  threatIndicatorPath: _securitysolutionIoTsAlertingTypes.threatIndicatorPathOrUndefined,
  concurrentSearches: _securitysolutionIoTsAlertingTypes.concurrentSearchesOrUndefined,
  itemsPerSearch: _securitysolutionIoTsAlertingTypes.itemsPerSearchOrUndefined
});
const threatRuleParams = t.intersection([baseRuleParams, threatSpecificRuleParams]);
exports.threatRuleParams = threatRuleParams;
const querySpecificRuleParams = t.exact(t.type({
  type: t.literal('query'),
  language: nonEqlLanguages,
  index: _common.indexOrUndefined,
  query: _common.query,
  filters: _common.filtersOrUndefined,
  savedId: _common.savedIdOrUndefined
}));
const queryRuleParams = t.intersection([baseRuleParams, querySpecificRuleParams]);
exports.queryRuleParams = queryRuleParams;
const savedQuerySpecificRuleParams = t.type({
  type: t.literal('saved_query'),
  // Having language, query, and filters possibly defined adds more code confusion and probably user confusion
  // if the saved object gets deleted for some reason
  language: nonEqlLanguages,
  index: _common.indexOrUndefined,
  query: _common.queryOrUndefined,
  filters: _common.filtersOrUndefined,
  savedId: _common.saved_id
});
const savedQueryRuleParams = t.intersection([baseRuleParams, savedQuerySpecificRuleParams]);
exports.savedQueryRuleParams = savedQueryRuleParams;
const thresholdSpecificRuleParams = t.type({
  type: t.literal('threshold'),
  language: nonEqlLanguages,
  index: _common.indexOrUndefined,
  query: _common.query,
  filters: _common.filtersOrUndefined,
  savedId: _common.savedIdOrUndefined,
  threshold: _common.thresholdNormalized
});
const thresholdRuleParams = t.intersection([baseRuleParams, thresholdSpecificRuleParams]);
exports.thresholdRuleParams = thresholdRuleParams;
const machineLearningSpecificRuleParams = t.type({
  type: t.literal('machine_learning'),
  anomalyThreshold: _common.anomaly_threshold,
  machineLearningJobId: _securitysolutionIoTsAlertingTypes.machine_learning_job_id_normalized
});
const machineLearningRuleParams = t.intersection([baseRuleParams, machineLearningSpecificRuleParams]);
exports.machineLearningRuleParams = machineLearningRuleParams;
const typeSpecificRuleParams = t.union([eqlSpecificRuleParams, threatSpecificRuleParams, querySpecificRuleParams, savedQuerySpecificRuleParams, thresholdSpecificRuleParams, machineLearningSpecificRuleParams]);
exports.typeSpecificRuleParams = typeSpecificRuleParams;
const ruleParams = t.intersection([baseRuleParams, typeSpecificRuleParams]);
exports.ruleParams = ruleParams;
const notifyWhen = t.union([t.literal('onActionGroupChange'), t.literal('onActiveAlert'), t.literal('onThrottleInterval'), t.null]);
exports.notifyWhen = notifyWhen;
const allRuleTypes = t.union([t.literal(_securitysolutionRules.SIGNALS_ID), t.literal(_securitysolutionRules.EQL_RULE_TYPE_ID), t.literal(_securitysolutionRules.INDICATOR_RULE_TYPE_ID), t.literal(_securitysolutionRules.ML_RULE_TYPE_ID), t.literal(_securitysolutionRules.QUERY_RULE_TYPE_ID), t.literal(_securitysolutionRules.SAVED_QUERY_RULE_TYPE_ID), t.literal(_securitysolutionRules.THRESHOLD_RULE_TYPE_ID)]);
exports.allRuleTypes = allRuleTypes;
const internalRuleCreate = t.type({
  name: _common.name,
  tags: _common.tags,
  alertTypeId: allRuleTypes,
  consumer: t.literal(_constants.SERVER_APP_ID),
  schedule: t.type({
    interval: t.string
  }),
  enabled: _common.enabled,
  actions: _securitysolutionIoTsAlertingTypes.actionsCamel,
  params: ruleParams,
  throttle: _securitysolutionIoTsAlertingTypes.throttleOrNull,
  notifyWhen
});
exports.internalRuleCreate = internalRuleCreate;
const internalRuleUpdate = t.type({
  name: _common.name,
  tags: _common.tags,
  schedule: t.type({
    interval: t.string
  }),
  actions: _securitysolutionIoTsAlertingTypes.actionsCamel,
  params: ruleParams,
  throttle: _securitysolutionIoTsAlertingTypes.throttleOrNull,
  notifyWhen
});
exports.internalRuleUpdate = internalRuleUpdate;
const internalRuleResponse = t.intersection([internalRuleCreate, t.type({
  id: t.string,
  createdBy: _common.createdByOrNull,
  updatedBy: _common.updatedByOrNull,
  createdAt: _common.created_at,
  updatedAt: _common.updated_at
})]);
exports.internalRuleResponse = internalRuleResponse;