"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.importRules = void 0;

var _utils = require("../../../rules/utils");

var _utils2 = require("../../utils");

var _helpers = require("../../../../../../common/machine_learning/helpers");

var _create_rules = require("../../../rules/create_rules");

var _read_rules = require("../../../rules/read_rules");

var _patch_rules = require("../../../rules/patch_rules");

var _validation = require("../../../../machine_learning/validation");

var _check_rule_exception_references = require("./check_rule_exception_references");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Takes rules to be imported and either creates or updates rules
 * based on user overwrite preferences
 * @param ruleChunks {array} - rules being imported
 * @param rulesResponseAcc {array} - the accumulation of success and
 * error messages gathered through the rules import logic
 * @param mlAuthz {object}
 * @param overwriteRules {boolean} - whether to overwrite existing rules
 * with imported rules if their rule_id matches
 * @param rulesClient {object}
 * @param savedObjectsClient {object}
 * @param exceptionsClient {object}
 * @param spaceId {string} - space being used during import
 * @param existingLists {object} - all exception lists referenced by
 * rules that were found to exist
 * @returns {Promise} an array of error and success messages from import
 */


const importRules = async ({
  ruleChunks,
  rulesResponseAcc,
  mlAuthz,
  overwriteRules,
  rulesClient,
  savedObjectsClient,
  exceptionsClient,
  spaceId,
  existingLists
}) => {
  let importRuleResponse = [...rulesResponseAcc]; // If we had 100% errors and no successful rule could be imported we still have to output an error.
  // otherwise we would output we are success importing 0 rules.

  if (ruleChunks.length === 0) {
    return importRuleResponse;
  } else {
    while (ruleChunks.length) {
      var _ruleChunks$shift;

      const batchParseObjects = (_ruleChunks$shift = ruleChunks.shift()) !== null && _ruleChunks$shift !== void 0 ? _ruleChunks$shift : [];
      const newImportRuleResponse = await Promise.all(batchParseObjects.reduce((accum, parsedRule) => {
        const importsWorkerPromise = new Promise(async (resolve, reject) => {
          try {
            if (parsedRule instanceof Error) {
              // If the JSON object had a validation or parse error then we return
              // early with the error and an (unknown) for the ruleId
              resolve((0, _utils2.createBulkErrorObject)({
                statusCode: 400,
                message: parsedRule.message
              }));
              return null;
            }

            const {
              anomaly_threshold: anomalyThreshold,
              author,
              building_block_type: buildingBlockType,
              description,
              enabled,
              timestamp_field: timestampField,
              event_category_override: eventCategoryOverride,
              tiebreaker_field: tiebreakerField,
              false_positives: falsePositives,
              from,
              immutable,
              query: queryOrUndefined,
              language: languageOrUndefined,
              license,
              machine_learning_job_id: machineLearningJobId,
              output_index: outputIndex,
              saved_id: savedId,
              meta,
              filters: filtersRest,
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
              threat,
              threat_filters: threatFilters,
              threat_index: threatIndex,
              threat_query: threatQuery,
              threat_mapping: threatMapping,
              threat_language: threatLanguage,
              threat_indicator_path: threatIndicatorPath,
              concurrent_searches: concurrentSearches,
              items_per_search: itemsPerSearch,
              threshold,
              timestamp_override: timestampOverride,
              to,
              type,
              references,
              note,
              timeline_id: timelineId,
              timeline_title: timelineTitle,
              throttle,
              version,
              actions
            } = parsedRule;

            try {
              const [exceptionErrors, exceptions] = (0, _check_rule_exception_references.checkRuleExceptionReferences)({
                rule: parsedRule,
                existingLists
              });
              importRuleResponse = [...importRuleResponse, ...exceptionErrors];
              const query = !(0, _helpers.isMlRule)(type) && queryOrUndefined == null ? '' : queryOrUndefined;
              const language = !(0, _helpers.isMlRule)(type) && languageOrUndefined == null ? 'kuery' : languageOrUndefined; // TODO: Fix these either with an is conversion or by better typing them within io-ts

              const filters = filtersRest;
              (0, _validation.throwAuthzError)(await mlAuthz.validateRuleType(type));
              const rule = await (0, _read_rules.readRules)({
                rulesClient,
                ruleId,
                id: undefined
              });

              if (rule == null) {
                await (0, _create_rules.createRules)({
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
                  immutable,
                  query,
                  language,
                  license,
                  machineLearningJobId,
                  outputIndex: '',
                  savedId,
                  timelineId,
                  timelineTitle,
                  meta,
                  filters,
                  ruleId,
                  index,
                  interval,
                  maxSignals,
                  name,
                  relatedIntegrations,
                  requiredFields,
                  riskScore,
                  riskScoreMapping,
                  ruleNameOverride,
                  setup,
                  severity,
                  severityMapping,
                  tags,
                  throttle,
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
                  timestampOverride,
                  references,
                  note,
                  version,
                  exceptionsList: [...exceptions],
                  actions
                });
                resolve({
                  rule_id: ruleId,
                  status_code: 200
                });
              } else if (rule != null && overwriteRules) {
                const migratedRule = await (0, _utils.legacyMigrate)({
                  rulesClient,
                  savedObjectsClient,
                  rule
                });
                await (0, _patch_rules.patchRules)({
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
                  rule: migratedRule,
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
                  throttle,
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
                  note,
                  version,
                  exceptionsList: [...exceptions],
                  anomalyThreshold,
                  machineLearningJobId,
                  actions
                });
                resolve({
                  rule_id: ruleId,
                  status_code: 200
                });
              } else if (rule != null) {
                resolve((0, _utils2.createBulkErrorObject)({
                  ruleId,
                  statusCode: 409,
                  message: `rule_id: "${ruleId}" already exists`
                }));
              }
            } catch (err) {
              var _err$statusCode;

              resolve((0, _utils2.createBulkErrorObject)({
                ruleId,
                statusCode: (_err$statusCode = err.statusCode) !== null && _err$statusCode !== void 0 ? _err$statusCode : 400,
                message: err.message
              }));
            }
          } catch (error) {
            reject(error);
          }
        });
        return [...accum, importsWorkerPromise];
      }, []));
      importRuleResponse = [...importRuleResponse, ...newImportRuleResponse];
    }

    return importRuleResponse;
  }
};

exports.importRules = importRules;