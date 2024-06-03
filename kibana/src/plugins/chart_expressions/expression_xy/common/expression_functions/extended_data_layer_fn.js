"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendedDataLayerFn = void 0;

var _utils = require("../../../../visualizations/common/utils");

var _constants = require("../constants");

var _helpers = require("../helpers");

var _validate = require("./validate");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const extendedDataLayerFn = async (data, args, context) => {
  var _args$table;

  const table = (_args$table = args.table) !== null && _args$table !== void 0 ? _args$table : data;
  const accessors = (0, _helpers.getAccessors)(args, table);
  (0, _utils.validateAccessor)(accessors.xAccessor, table.columns);
  (0, _utils.validateAccessor)(accessors.splitAccessor, table.columns);
  accessors.accessors.forEach(accessor => (0, _utils.validateAccessor)(accessor, table.columns));
  (0, _validate.validateMarkSizeForChartType)(args.markSizeAccessor, args.seriesType);
  (0, _utils.validateAccessor)(args.markSizeAccessor, table.columns);
  (0, _validate.validateLineWidthForChartType)(args.lineWidth, args.seriesType);
  (0, _validate.validateShowPointsForChartType)(args.showPoints, args.seriesType);
  (0, _validate.validatePointsRadiusForChartType)(args.pointsRadius, args.seriesType);
  const normalizedTable = (0, _helpers.normalizeTable)(table, accessors.xAccessor);
  return {
    type: _constants.EXTENDED_DATA_LAYER,
    ...args,
    layerType: _constants.LayerTypes.DATA,
    ...accessors,
    table: normalizedTable
  };
};

exports.extendedDataLayerFn = extendedDataLayerFn;