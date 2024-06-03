"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRulesSchema = exports.thresholdCreateParams = exports.threatMatchCreateParams = exports.sharedUpdateSchema = exports.sharedCreateSchema = exports.savedQueryCreateParams = exports.queryCreateParams = exports.previewRulesSchema = exports.machineLearningCreateParams = exports.fullResponseSchema = exports.fullPatchSchema = exports.eqlResponseParams = exports.eqlCreateParams = exports.createSchema = exports.createRulesSchema = exports.buildAPISchemas = void 0;

var t = _interopRequireWildcard(require("io-ts"));

var _securitysolutionIoTsAlertingTypes = require("@kbn/securitysolution-io-ts-alerting-types");

var _securitysolutionIoTsListTypes = require("@kbn/securitysolution-io-ts-list-types");

var _securitysolutionIoTsTypes = require("@kbn/securitysolution-io-ts-types");

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


const createSchema = (requiredFields, optionalFields, defaultableFields) => {
  return t.intersection([t.exact(t.type(requiredFields)), t.exact(t.partial(optionalFields)), t.exact(t.partial(defaultableFields))]);
};

exports.createSchema = createSchema;

const patchSchema = (requiredFields, optionalFields, defaultableFields) => {
  return t.intersection([t.exact(t.partial(requiredFields)), t.exact(t.partial(optionalFields)), t.exact(t.partial(defaultableFields))]);
};

const responseSchema = (requiredFields, optionalFields, defaultableFields) => {
  return t.intersection([t.exact(t.type(requiredFields)), t.exact(t.partial(optionalFields)), t.exact(t.type(defaultableFields))]);
};

const buildAPISchemas = params => {
  return {
    create: createSchema(params.required, params.optional, params.defaultable),
    patch: patchSchema(params.required, params.optional, params.defaultable),
    response: responseSchema(params.required, params.optional, params.defaultable)
  };
};

exports.buildAPISchemas = buildAPISchemas;
const baseParams = {
  required: {
    name: _common.name,
    description: _common.description,
    risk_score: _securitysolutionIoTsAlertingTypes.risk_score,
    severity: _securitysolutionIoTsAlertingTypes.severity
  },
  optional: {
    building_block_type: _common.building_block_type,
    note: _common.note,
    license: _common.license,
    outcome: _common.outcome,
    alias_target_id: _common.alias_target_id,
    alias_purpose: _common.alias_purpose,
    output_index: _common.output_index,
    timeline_id: _common.timeline_id,
    timeline_title: _common.timeline_title,
    meta: _common.meta,
    rule_name_override: _common.rule_name_override,
    timestamp_override: _common.timestamp_override,
    namespace: _common.namespace
  },
  defaultable: {
    tags: _common.tags,
    interval: _common.interval,
    enabled: _common.enabled,
    throttle: _securitysolutionIoTsAlertingTypes.throttle,
    actions: _securitysolutionIoTsAlertingTypes.actions,
    author: _common.author,
    false_positives: _common.false_positives,
    from: _securitysolutionIoTsAlertingTypes.from,
    // maxSignals not used in ML rules but probably should be used
    max_signals: _securitysolutionIoTsAlertingTypes.max_signals,
    risk_score_mapping: _securitysolutionIoTsAlertingTypes.risk_score_mapping,
    severity_mapping: _securitysolutionIoTsAlertingTypes.severity_mapping,
    threat: _securitysolutionIoTsAlertingTypes.threats,
    to: _common.to,
    references: _common.references,
    version: _securitysolutionIoTsTypes.version,
    exceptions_list: _securitysolutionIoTsListTypes.listArray
  }
};
const {
  create: baseCreateParams,
  patch: basePatchParams,
  response: baseResponseParams
} = buildAPISchemas(baseParams); // "shared" types are the same across all rule types, and built from "baseParams" above
// with some variations for each route. These intersect with type specific schemas below
// to create the full schema for each route.

const sharedCreateSchema = t.intersection([baseCreateParams, t.exact(t.partial({
  rule_id: _common.rule_id
}))]);
exports.sharedCreateSchema = sharedCreateSchema;
const sharedUpdateSchema = t.intersection([baseCreateParams, t.exact(t.partial({
  rule_id: _common.rule_id
})), t.exact(t.partial({
  id: _common.id
}))]);
exports.sharedUpdateSchema = sharedUpdateSchema;
const eqlRuleParams = {
  required: {
    type: t.literal('eql'),
    language: t.literal('eql'),
    query: _common.query
  },
  optional: {
    index: _common.index,
    filters: _common.filters,
    timestamp_field: _common.timestamp_field,
    event_category_override: _common.event_category_override,
    tiebreaker_field: _common.tiebreaker_field
  },
  defaultable: {}
};
const {
  create: eqlCreateParams,
  patch: eqlPatchParams,
  response: eqlResponseParams
} = buildAPISchemas(eqlRuleParams);
exports.eqlResponseParams = eqlResponseParams;
exports.eqlCreateParams = eqlCreateParams;
const threatMatchRuleParams = {
  required: {
    type: t.literal('threat_match'),
    query: _common.query,
    threat_query: _securitysolutionIoTsAlertingTypes.threat_query,
    threat_mapping: _securitysolutionIoTsAlertingTypes.threat_mapping,
    threat_index: _securitysolutionIoTsAlertingTypes.threat_index
  },
  optional: {
    index: _common.index,
    filters: _common.filters,
    saved_id: _common.saved_id,
    threat_filters: _securitysolutionIoTsAlertingTypes.threat_filters,
    threat_indicator_path: _securitysolutionIoTsAlertingTypes.threat_indicator_path,
    threat_language: t.keyof({
      kuery: null,
      lucene: null
    }),
    concurrent_searches: _securitysolutionIoTsAlertingTypes.concurrent_searches,
    items_per_search: _securitysolutionIoTsAlertingTypes.items_per_search
  },
  defaultable: {
    language: t.keyof({
      kuery: null,
      lucene: null
    })
  }
};
const {
  create: threatMatchCreateParams,
  patch: threatMatchPatchParams,
  response: threatMatchResponseParams
} = buildAPISchemas(threatMatchRuleParams);
exports.threatMatchCreateParams = threatMatchCreateParams;
const queryRuleParams = {
  required: {
    type: t.literal('query')
  },
  optional: {
    index: _common.index,
    filters: _common.filters,
    saved_id: _common.saved_id
  },
  defaultable: {
    query: _common.query,
    language: t.keyof({
      kuery: null,
      lucene: null
    })
  }
};
const {
  create: queryCreateParams,
  patch: queryPatchParams,
  response: queryResponseParams
} = buildAPISchemas(queryRuleParams);
exports.queryCreateParams = queryCreateParams;
const savedQueryRuleParams = {
  required: {
    type: t.literal('saved_query'),
    saved_id: _common.saved_id
  },
  optional: {
    // Having language, query, and filters possibly defined adds more code confusion and probably user confusion
    // if the saved object gets deleted for some reason
    index: _common.index,
    query: _common.query,
    filters: _common.filters
  },
  defaultable: {
    language: t.keyof({
      kuery: null,
      lucene: null
    })
  }
};
const {
  create: savedQueryCreateParams,
  patch: savedQueryPatchParams,
  response: savedQueryResponseParams
} = buildAPISchemas(savedQueryRuleParams);
exports.savedQueryCreateParams = savedQueryCreateParams;
const thresholdRuleParams = {
  required: {
    type: t.literal('threshold'),
    query: _common.query,
    threshold: _common.threshold
  },
  optional: {
    index: _common.index,
    filters: _common.filters,
    saved_id: _common.saved_id
  },
  defaultable: {
    language: t.keyof({
      kuery: null,
      lucene: null
    })
  }
};
const {
  create: thresholdCreateParams,
  patch: thresholdPatchParams,
  response: thresholdResponseParams
} = buildAPISchemas(thresholdRuleParams);
exports.thresholdCreateParams = thresholdCreateParams;
const machineLearningRuleParams = {
  required: {
    type: t.literal('machine_learning'),
    anomaly_threshold: _common.anomaly_threshold,
    machine_learning_job_id: _securitysolutionIoTsAlertingTypes.machine_learning_job_id
  },
  optional: {},
  defaultable: {}
};
const {
  create: machineLearningCreateParams,
  patch: machineLearningPatchParams,
  response: machineLearningResponseParams
} = buildAPISchemas(machineLearningRuleParams);
exports.machineLearningCreateParams = machineLearningCreateParams;
const createTypeSpecific = t.union([eqlCreateParams, threatMatchCreateParams, queryCreateParams, savedQueryCreateParams, thresholdCreateParams, machineLearningCreateParams]);
const createRulesSchema = t.intersection([sharedCreateSchema, createTypeSpecific]);
exports.createRulesSchema = createRulesSchema;
const previewRulesSchema = t.intersection([sharedCreateSchema, createTypeSpecific, t.type({
  invocationCount: t.number
})]);
exports.previewRulesSchema = previewRulesSchema;
const patchTypeSpecific = t.union([eqlPatchParams, threatMatchPatchParams, queryPatchParams, savedQueryPatchParams, thresholdPatchParams, machineLearningPatchParams]);
const responseTypeSpecific = t.union([eqlResponseParams, threatMatchResponseParams, queryResponseParams, savedQueryResponseParams, thresholdResponseParams, machineLearningResponseParams]);
const updateRulesSchema = t.intersection([createTypeSpecific, sharedUpdateSchema]);
exports.updateRulesSchema = updateRulesSchema;
const fullPatchSchema = t.intersection([basePatchParams, patchTypeSpecific, t.exact(t.partial({
  id: _common.id
}))]);
exports.fullPatchSchema = fullPatchSchema;
const responseRequiredFields = {
  id: _common.id,
  rule_id: _common.rule_id,
  immutable: _common.immutable,
  updated_at: _common.updated_at,
  updated_by: _common.updated_by,
  created_at: _common.created_at,
  created_by: _common.created_by,
  // NOTE: For now, Related Integrations, Required Fields and Setup Guide are supported for prebuilt
  // rules only. We don't want to allow users to edit these 3 fields via the API. If we added them
  // to baseParams.defaultable, they would become a part of the request schema as optional fields.
  // This is why we add them here, in order to add them only to the response schema.
  related_integrations: _common.RelatedIntegrationArray,
  required_fields: _common.RequiredFieldArray,
  setup: _common.SetupGuide
};
const responseOptionalFields = {
  execution_summary: _common.ruleExecutionSummary
};
const fullResponseSchema = t.intersection([baseResponseParams, responseTypeSpecific, t.exact(t.type(responseRequiredFields)), t.exact(t.partial(responseOptionalFields))]);
exports.fullResponseSchema = fullResponseSchema;