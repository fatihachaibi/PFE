"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpressionXyPlugin = void 0;

var _expression_functions = require("../common/expression_functions");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
class ExpressionXyPlugin {
  setup(core, {
    expressions
  }) {
    expressions.registerFunction(_expression_functions.yAxisConfigFunction);
    expressions.registerFunction(_expression_functions.extendedYAxisConfigFunction);
    expressions.registerFunction(_expression_functions.legendConfigFunction);
    expressions.registerFunction(_expression_functions.gridlinesConfigFunction);
    expressions.registerFunction(_expression_functions.extendedDataLayerFunction);
    expressions.registerFunction(_expression_functions.axisExtentConfigFunction);
    expressions.registerFunction(_expression_functions.tickLabelsConfigFunction);
    expressions.registerFunction(_expression_functions.annotationLayerFunction);
    expressions.registerFunction(_expression_functions.extendedAnnotationLayerFunction);
    expressions.registerFunction(_expression_functions.labelsOrientationConfigFunction);
    expressions.registerFunction(_expression_functions.referenceLineFunction);
    expressions.registerFunction(_expression_functions.referenceLineLayerFunction);
    expressions.registerFunction(_expression_functions.axisTitlesVisibilityConfigFunction);
    expressions.registerFunction(_expression_functions.xyVisFunction);
    expressions.registerFunction(_expression_functions.layeredXyVisFunction);
  }

  start(core) {}

  stop() {}

}

exports.ExpressionXyPlugin = ExpressionXyPlugin;