"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRulesRoute = void 0;

var _securitysolutionEsUtils = require("@kbn/securitysolution-es-utils");

var _request = require("../../../../../common/detection_engine/schemas/request");

var _update_rules_type_dependents = require("../../../../../common/detection_engine/schemas/request/update_rules_type_dependents");

var _constants = require("../../../../../common/constants");

var _authz = require("../../../machine_learning/authz");

var _validation = require("../../../machine_learning/validation");

var _utils = require("../utils");

var _utils2 = require("./utils");

var _validate = require("./validate");

var _update_rules = require("../../rules/update_rules");

var _route_validation = require("../../../../utils/build_validation/route_validation");

var _utils3 = require("../../rules/utils");

var _read_rules = require("../../rules/read_rules");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const updateRulesRoute = (router, ml) => {
  router.put({
    path: _constants.DETECTION_ENGINE_RULES_URL,
    validate: {
      body: (0, _route_validation.buildRouteValidation)(_request.updateRulesSchema)
    },
    options: {
      tags: ['access:securitySolution']
    }
  }, async (context, request, response) => {
    const siemResponse = (0, _utils.buildSiemResponse)(response);
    const validationErrors = (0, _update_rules_type_dependents.updateRuleValidateTypeDependents)(request.body);

    if (validationErrors.length) {
      return siemResponse.error({
        statusCode: 400,
        body: validationErrors
      });
    }

    try {
      const ctx = await context.resolve(['core', 'securitySolution', 'alerting', 'licensing']);
      const rulesClient = ctx.alerting.getRulesClient();
      const savedObjectsClient = ctx.core.savedObjects.client;
      const siemClient = ctx.securitySolution.getAppClient();
      const mlAuthz = (0, _authz.buildMlAuthz)({
        license: ctx.licensing.license,
        ml,
        request,
        savedObjectsClient
      });
      (0, _validation.throwAuthzError)(await mlAuthz.validateRuleType(request.body.type));
      const existingRule = await (0, _read_rules.readRules)({
        rulesClient,
        ruleId: request.body.rule_id,
        id: request.body.id
      });
      const migratedRule = await (0, _utils3.legacyMigrate)({
        rulesClient,
        savedObjectsClient,
        rule: existingRule
      });
      const rule = await (0, _update_rules.updateRules)({
        defaultOutputIndex: siemClient.getSignalsIndex(),
        rulesClient,
        existingRule: migratedRule,
        ruleUpdate: request.body
      });

      if (rule != null) {
        const ruleExecutionLog = ctx.securitySolution.getRuleExecutionLog();
        const ruleExecutionSummary = await ruleExecutionLog.getExecutionSummary(rule.id);
        const [validated, errors] = (0, _validate.transformValidate)(rule, ruleExecutionSummary);

        if (errors != null) {
          return siemResponse.error({
            statusCode: 500,
            body: errors
          });
        } else {
          return response.ok({
            body: validated !== null && validated !== void 0 ? validated : {}
          });
        }
      } else {
        const error = (0, _utils2.getIdError)({
          id: request.body.id,
          ruleId: request.body.rule_id
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

exports.updateRulesRoute = updateRulesRoute;