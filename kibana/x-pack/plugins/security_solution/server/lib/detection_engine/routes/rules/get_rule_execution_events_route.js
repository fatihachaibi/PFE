"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRuleExecutionEventsRoute = void 0;

var _securitysolutionEsUtils = require("@kbn/securitysolution-es-utils");

var _route_validation = require("../../../../utils/build_validation/route_validation");

var _utils = require("../utils");

var _constants = require("../../../../../common/constants");

var _get_rule_execution_events_schema = require("../../../../../common/detection_engine/schemas/request/get_rule_execution_events_schema");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Returns execution events of a given rule (aggregated by executionId) from Event Log.
 * Accepts rule's saved object ID (`rule.id`), `start`, `end` and `filters` query params.
 */


const getRuleExecutionEventsRoute = router => {
  router.get({
    path: _constants.DETECTION_ENGINE_RULE_EXECUTION_EVENTS_URL,
    validate: {
      params: (0, _route_validation.buildRouteValidation)(_get_rule_execution_events_schema.GetRuleExecutionEventsRequestParams),
      query: (0, _route_validation.buildRouteValidation)(_get_rule_execution_events_schema.GetRuleExecutionEventsQueryParams)
    },
    options: {
      tags: ['access:securitySolution']
    }
  }, async (context, request, response) => {
    const {
      ruleId
    } = request.params;
    const {
      start,
      end,
      query_text: queryText,
      status_filters: statusFilters,
      page,
      per_page: perPage,
      sort_field: sortField,
      sort_order: sortOrder
    } = request.query;
    const siemResponse = (0, _utils.buildSiemResponse)(response);

    try {
      const executionLog = (await context.securitySolution).getRuleExecutionLog();
      const {
        events,
        total
      } = await executionLog.getAggregateExecutionEvents({
        ruleId,
        start,
        end,
        queryText,
        statusFilters,
        page,
        perPage,
        sortField,
        sortOrder
      });
      const responseBody = {
        events,
        total
      };
      return response.ok({
        body: responseBody
      });
    } catch (err) {
      const error = (0, _securitysolutionEsUtils.transformError)(err);
      return siemResponse.error({
        body: error.message,
        statusCode: error.statusCode
      });
    }
  });
};

exports.getRuleExecutionEventsRoute = getRuleExecutionEventsRoute;