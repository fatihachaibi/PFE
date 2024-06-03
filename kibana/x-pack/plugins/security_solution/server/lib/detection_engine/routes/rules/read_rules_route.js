"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readRulesRoute = void 0;

var _securitysolutionEsUtils = require("@kbn/securitysolution-es-utils");

var _query_rules_type_dependents = require("../../../../../common/detection_engine/schemas/request/query_rules_type_dependents");

var _query_rules_schema = require("../../../../../common/detection_engine/schemas/request/query_rules_schema");

var _route_validation = require("../../../../utils/build_validation/route_validation");

var _constants = require("../../../../../common/constants");

var _utils = require("./utils");

var _utils2 = require("../utils");

var _read_rules = require("../../rules/read_rules");

var _legacy_get_rule_actions_saved_object = require("../../rule_actions/legacy_get_rule_actions_saved_object");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// eslint-disable-next-line no-restricted-imports


const readRulesRoute = (router, logger) => {
  router.get({
    path: _constants.DETECTION_ENGINE_RULES_URL,
    validate: {
      query: (0, _route_validation.buildRouteValidation)(_query_rules_schema.queryRulesSchema)
    },
    options: {
      tags: ['access:securitySolution']
    }
  }, async (context, request, response) => {
    const siemResponse = (0, _utils2.buildSiemResponse)(response);
    const validationErrors = (0, _query_rules_type_dependents.queryRuleValidateTypeDependents)(request.query);

    if (validationErrors.length) {
      return siemResponse.error({
        statusCode: 400,
        body: validationErrors
      });
    }

    const {
      id,
      rule_id: ruleId
    } = request.query;

    try {
      const rulesClient = (await context.alerting).getRulesClient();
      const ruleExecutionLog = (await context.securitySolution).getRuleExecutionLog();
      const savedObjectsClient = (await context.core).savedObjects.client;
      const rule = await (0, _read_rules.readRules)({
        id,
        rulesClient,
        ruleId
      });

      if (rule != null) {
        const legacyRuleActions = await (0, _legacy_get_rule_actions_saved_object.legacyGetRuleActionsSavedObject)({
          savedObjectsClient,
          ruleAlertId: rule.id,
          logger
        });
        const ruleExecutionSummary = await ruleExecutionLog.getExecutionSummary(rule.id);
        const transformed = (0, _utils.transform)(rule, ruleExecutionSummary, legacyRuleActions);

        if (transformed == null) {
          return siemResponse.error({
            statusCode: 500,
            body: 'Internal error transforming'
          });
        } else {
          return response.ok({
            body: transformed !== null && transformed !== void 0 ? transformed : {}
          });
        }
      } else {
        const error = (0, _utils.getIdError)({
          id,
          ruleId
        });
        return siemResponse.error({
          body: error.message,
          statusCode: error.statusCode
        });
      }
    } catch (err) {
      const error = (0, _securitysolutionEsUtils.transformError)(err);
      return siemResponse.error({
        body: error.message,
        statusCode: error.statusCode
      });
    }
  });
};

exports.readRulesRoute = readRulesRoute;