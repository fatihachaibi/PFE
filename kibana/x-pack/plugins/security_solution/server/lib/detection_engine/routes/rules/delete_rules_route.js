"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRulesRoute = void 0;

var _securitysolutionEsUtils = require("@kbn/securitysolution-es-utils");

var _query_rules_type_dependents = require("../../../../../common/detection_engine/schemas/request/query_rules_type_dependents");

var _query_rules_schema = require("../../../../../common/detection_engine/schemas/request/query_rules_schema");

var _route_validation = require("../../../../utils/build_validation/route_validation");

var _constants = require("../../../../../common/constants");

var _delete_rules = require("../../rules/delete_rules");

var _utils = require("./utils");

var _utils2 = require("../utils");

var _read_rules = require("../../rules/read_rules");

var _utils3 = require("../../rules/utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const deleteRulesRoute = router => {
  router.delete({
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

    try {
      const {
        id,
        rule_id: ruleId
      } = request.query;
      const ctx = await context.resolve(['core', 'securitySolution', 'alerting']);
      const rulesClient = ctx.alerting.getRulesClient();
      const ruleExecutionLog = ctx.securitySolution.getRuleExecutionLog();
      const savedObjectsClient = ctx.core.savedObjects.client;
      const rule = await (0, _read_rules.readRules)({
        rulesClient,
        id,
        ruleId
      });
      const migratedRule = await (0, _utils3.legacyMigrate)({
        rulesClient,
        savedObjectsClient,
        rule
      });

      if (!migratedRule) {
        const error = (0, _utils.getIdError)({
          id,
          ruleId
        });
        return siemResponse.error({
          body: error.message,
          statusCode: error.statusCode
        });
      }

      const ruleExecutionSummary = await ruleExecutionLog.getExecutionSummary(migratedRule.id);
      await (0, _delete_rules.deleteRules)({
        ruleId: migratedRule.id,
        rulesClient,
        ruleExecutionLog
      });
      const transformed = (0, _utils.transform)(migratedRule, ruleExecutionSummary);

      if (transformed == null) {
        return siemResponse.error({
          statusCode: 500,
          body: 'failed to transform alert'
        });
      } else {
        return response.ok({
          body: transformed !== null && transformed !== void 0 ? transformed : {}
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

exports.deleteRulesRoute = deleteRulesRoute;