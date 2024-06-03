"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findRulesRoute = void 0;

var _securitysolutionEsUtils = require("@kbn/securitysolution-es-utils");

var _find_rules_type_dependents = require("../../../../../common/detection_engine/schemas/request/find_rules_type_dependents");

var _find_rules_schema = require("../../../../../common/detection_engine/schemas/request/find_rules_schema");

var _constants = require("../../../../../common/constants");

var _find_rules = require("../../rules/find_rules");

var _utils = require("../utils");

var _route_validation = require("../../../../utils/build_validation/route_validation");

var _utils2 = require("./utils");

var _legacy_get_bulk_rule_actions_saved_object = require("../../rule_actions/legacy_get_bulk_rule_actions_saved_object");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// eslint-disable-next-line no-restricted-imports


const findRulesRoute = (router, logger) => {
  router.get({
    path: `${_constants.DETECTION_ENGINE_RULES_URL}/_find`,
    validate: {
      query: (0, _route_validation.buildRouteValidation)(_find_rules_schema.findRulesSchema)
    },
    options: {
      tags: ['access:securitySolution']
    }
  }, async (context, request, response) => {
    const siemResponse = (0, _utils.buildSiemResponse)(response);
    const validationErrors = (0, _find_rules_type_dependents.findRuleValidateTypeDependents)(request.query);

    if (validationErrors.length) {
      return siemResponse.error({
        statusCode: 400,
        body: validationErrors
      });
    }

    try {
      const {
        query
      } = request;
      const ctx = await context.resolve(['core', 'securitySolution', 'alerting']);
      const rulesClient = ctx.alerting.getRulesClient();
      const ruleExecutionLog = ctx.securitySolution.getRuleExecutionLog();
      const savedObjectsClient = ctx.core.savedObjects.client;
      const rules = await (0, _find_rules.findRules)({
        rulesClient,
        perPage: query.per_page,
        page: query.page,
        sortField: query.sort_field,
        sortOrder: query.sort_order,
        filter: query.filter,
        fields: query.fields
      });
      const ruleIds = rules.data.map(rule => rule.id);
      const [ruleExecutionSummaries, ruleActions] = await Promise.all([ruleExecutionLog.getExecutionSummariesBulk(ruleIds), (0, _legacy_get_bulk_rule_actions_saved_object.legacyGetBulkRuleActionsSavedObject)({
        alertIds: ruleIds,
        savedObjectsClient,
        logger
      })]);
      const transformed = (0, _utils2.transformFindAlerts)(rules, ruleExecutionSummaries, ruleActions);

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
    } catch (err) {
      const error = (0, _securitysolutionEsUtils.transformError)(err);
      return siemResponse.error({
        body: error.message,
        statusCode: error.statusCode
      });
    }
  });
};

exports.findRulesRoute = findRulesRoute;