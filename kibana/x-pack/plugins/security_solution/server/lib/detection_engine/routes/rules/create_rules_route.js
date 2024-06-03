"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRulesRoute = void 0;

var _securitysolutionEsUtils = require("@kbn/securitysolution-es-utils");

var _route_validation = require("../../../../utils/build_validation/route_validation");

var _constants = require("../../../../../common/constants");

var _authz = require("../../../machine_learning/authz");

var _validation = require("../../../machine_learning/validation");

var _read_rules = require("../../rules/read_rules");

var _utils = require("../utils");

var _request = require("../../../../../common/detection_engine/schemas/request");

var _validate = require("./validate");

var _create_rules_type_dependents = require("../../../../../common/detection_engine/schemas/request/create_rules_type_dependents");

var _rule_converters = require("../../schemas/rule_converters");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const createRulesRoute = (router, ml) => {
  router.post({
    path: _constants.DETECTION_ENGINE_RULES_URL,
    validate: {
      body: (0, _route_validation.buildRouteValidation)(_request.createRulesSchema)
    },
    options: {
      tags: ['access:securitySolution']
    }
  }, async (context, request, response) => {
    const siemResponse = (0, _utils.buildSiemResponse)(response);
    const validationErrors = (0, _create_rules_type_dependents.createRuleValidateTypeDependents)(request.body);

    if (validationErrors.length) {
      return siemResponse.error({
        statusCode: 400,
        body: validationErrors
      });
    }

    try {
      var _ctx$lists;

      const ctx = await context.resolve(['core', 'securitySolution', 'licensing', 'alerting', 'lists']);
      const rulesClient = ctx.alerting.getRulesClient();
      const ruleExecutionLog = ctx.securitySolution.getRuleExecutionLog();
      const savedObjectsClient = ctx.core.savedObjects.client;
      const siemClient = ctx.securitySolution.getAppClient();

      if (request.body.rule_id != null) {
        const rule = await (0, _read_rules.readRules)({
          rulesClient,
          ruleId: request.body.rule_id,
          id: undefined
        });

        if (rule != null) {
          return siemResponse.error({
            statusCode: 409,
            body: `rule_id: "${request.body.rule_id}" already exists`
          });
        }
      }

      const internalRule = (0, _rule_converters.convertCreateAPIToInternalSchema)(request.body, siemClient);
      const mlAuthz = (0, _authz.buildMlAuthz)({
        license: ctx.licensing.license,
        ml,
        request,
        savedObjectsClient
      });
      (0, _validation.throwAuthzError)(await mlAuthz.validateRuleType(internalRule.params.type)); // This will create the endpoint list if it does not exist yet

      await ((_ctx$lists = ctx.lists) === null || _ctx$lists === void 0 ? void 0 : _ctx$lists.getExceptionListClient().createEndpointList());
      const createdRule = await rulesClient.create({
        data: internalRule
      }); // mutes if we are creating the rule with the explicit "no_actions"

      if (request.body.throttle === _constants.NOTIFICATION_THROTTLE_NO_ACTIONS) {
        await rulesClient.muteAll({
          id: createdRule.id
        });
      }

      const ruleExecutionSummary = await ruleExecutionLog.getExecutionSummary(createdRule.id);
      const [validated, errors] = (0, _validate.newTransformValidate)(createdRule, ruleExecutionSummary);

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
    } catch (err) {
      const error = (0, _securitysolutionEsUtils.transformError)(err);
      return siemResponse.error({
        body: error.message,
        statusCode: error.statusCode
      });
    }
  });
};

exports.createRulesRoute = createRulesRoute;