"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryStateToExpressionAst = queryStateToExpressionAst;

var _common = require("../../../expressions/common");

var _ = require("..");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Converts QueryState to expression AST
 * @param filters array of kibana filters
 * @param query kibana query
 * @param time kibana time range
 */
function queryStateToExpressionAst({
  filters,
  query,
  time
}) {
  const kibana = (0, _common.buildExpressionFunction)('kibana', {});
  const kibanaContext = (0, _common.buildExpressionFunction)('kibana_context', {
    q: query && (0, _.queryToAst)(query),
    filters: filters && (0, _.filtersToAst)(filters),
    timeRange: time && (0, _.timerangeToAst)(time)
  });
  const ast = (0, _common.buildExpression)([kibana, kibanaContext]);
  return ast;
}