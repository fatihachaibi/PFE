"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRulesBulkRoute = void 0;

var _securitysolutionIoTsUtils = require("@kbn/securitysolution-io-ts-utils");

var _create_rules_type_dependents = require("../../../../../common/detection_engine/schemas/request/create_rules_type_dependents");

var _create_rules_bulk_schema = require("../../../../../common/detection_engine/schemas/request/create_rules_bulk_schema");

var _rules_bulk_schema = require("../../../../../common/detection_engine/schemas/response/rules_bulk_schema");

var _constants = require("../../../../../common/constants");

var _authz = require("../../../machine_learning/authz");

var _validation = require("../../../machine_learning/validation");

var _read_rules = require("../../rules/read_rules");

var _utils = require("./utils");

var _validate = require("./validate");

var _route_validation = require("../../../../utils/build_validation/route_validation");

var _utils2 = require("../utils");

var _rule_converters = require("../../schemas/rule_converters");

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


const createRulesBulkRoute = (router, ml, logger) => {
  router.post({
    path: _constants.DETECTION_ENGINE_RULES_BULK_CREATE,
    validate: {
      body: (0, _route_validation.buildRouteValidation)(_create_rules_bulk_schema.createRulesBulkSchema)
    },
    options: {
      tags: ['access:securitySolution']
    }
  }, async (context, request, response) => {
    (0, _deprecation.logDeprecatedBulkEndpoint)(logger, _constants.DETECTION_ENGINE_RULES_BULK_CREATE);
    const siemResponse = (0, _utils2.buildSiemResponse)(response);
    const ctx = await context.resolve(['core', 'securitySolution', 'licensing', 'alerting']);
    const rulesClient = ctx.alerting.getRulesClient();
    const savedObjectsClient = ctx.core.savedObjects.client;
    const siemClient = ctx.securitySolution.getAppClient();
    const mlAuthz = (0, _authz.buildMlAuthz)({
      license: ctx.licensing.license,
      ml,
      request,
      savedObjectsClient
    });
    const ruleDefinitions = request.body;
    const dupes = (0, _utils.getDuplicates)(ruleDefinitions, 'rule_id');
    const rules = await Promise.all(ruleDefinitions.filter(rule => rule.rule_id == null || !dupes.includes(rule.rule_id)).map(async payloadRule => {
      if (payloadRule.rule_id != null) {
        const rule = await (0, _read_rules.readRules)({
          id: undefined,
          rulesClient,
          ruleId: payloadRule.rule_id
        });

        if (rule != null) {
          return (0, _utils2.createBulkErrorObject)({
            ruleId: payloadRule.rule_id,
            statusCode: 409,
            message: `rule_id: "${payloadRule.rule_id}" already exists`
          });
        }
      }

      const internalRule = (0, _rule_converters.convertCreateAPIToInternalSchema)(payloadRule, siemClient);

      try {
        const validationErrors = (0, _create_rules_type_dependents.createRuleValidateTypeDependents)(payloadRule);

        if (validationErrors.length) {
          return (0, _utils2.createBulkErrorObject)({
            ruleId: internalRule.params.ruleId,
            statusCode: 400,
            message: validationErrors.join()
          });
        }

        (0, _validation.throwAuthzError)(await mlAuthz.validateRuleType(internalRule.params.type));
        const createdRule = await rulesClient.create({
          data: internalRule
        }); // mutes if we are creating the rule with the explicit "no_actions"

        if (payloadRule.throttle === _constants.NOTIFICATION_THROTTLE_NO_ACTIONS) {
          await rulesClient.muteAll({
            id: createdRule.id
          });
        }

        return (0, _validate.transformValidateBulkError)(internalRule.params.ruleId, createdRule, null);
      } catch (err) {
        return (0, _utils2.transformBulkError)(internalRule.params.ruleId, err);
      }
    }));
    const rulesBulk = [...rules, ...dupes.map(ruleId => (0, _utils2.createBulkErrorObject)({
      ruleId,
      statusCode: 409,
      message: `rule_id: "${ruleId}" already exists`
    }))];
    const [validated, errors] = (0, _securitysolutionIoTsUtils.validate)(rulesBulk, _rules_bulk_schema.rulesBulkSchema);

    if (errors != null) {
      return siemResponse.error({
        statusCode: 500,
        body: errors,
        headers: (0, _deprecation.getDeprecatedBulkEndpointHeader)(_constants.DETECTION_ENGINE_RULES_BULK_CREATE)
      });
    } else {
      return response.ok({
        body: validated !== null && validated !== void 0 ? validated : {},
        headers: (0, _deprecation.getDeprecatedBulkEndpointHeader)(_constants.DETECTION_ENGINE_RULES_BULK_CREATE)
      });
    }
  });
};

exports.createRulesBulkRoute = createRulesBulkRoute;