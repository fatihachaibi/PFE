"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xyVisFn = void 0;

var _utils = require("../../../../visualizations/common/utils");

var _constants = require("../constants");

var _helpers = require("../helpers");

var _utils2 = require("../utils");

var _validate = require("./validate");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const createDataLayer = (args, table) => {
  const accessors = (0, _helpers.getAccessors)(args, table);
  const normalizedTable = (0, _helpers.normalizeTable)(table, accessors.xAccessor);
  return {
    type: _constants.DATA_LAYER,
    seriesType: args.seriesType,
    hide: args.hide,
    columnToLabel: args.columnToLabel,
    xScaleType: args.xScaleType,
    isHistogram: args.isHistogram,
    palette: args.palette,
    yConfig: args.yConfig,
    showPoints: args.showPoints,
    pointsRadius: args.pointsRadius,
    lineWidth: args.lineWidth,
    layerType: _constants.LayerTypes.DATA,
    table: normalizedTable,
    ...accessors
  };
};

const xyVisFn = async (data, args, handlers) => {
  var _ref, _args$ariaLabel, _handlers$variables, _handlers$getExecutio, _handlers$getExecutio2;

  (0, _utils.validateAccessor)(args.splitRowAccessor, data.columns);
  (0, _utils.validateAccessor)(args.splitColumnAccessor, data.columns);
  const {
    referenceLines = [],
    annotationLayers = [],
    // data_layer args
    seriesType,
    accessors,
    xAccessor,
    hide,
    splitAccessor,
    columnToLabel,
    xScaleType,
    isHistogram,
    yConfig,
    palette,
    markSizeAccessor,
    showPoints,
    pointsRadius,
    lineWidth,
    ...restArgs
  } = args;
  const dataLayers = [createDataLayer(args, data)];
  (0, _utils.validateAccessor)(dataLayers[0].xAccessor, data.columns);
  (0, _utils.validateAccessor)(dataLayers[0].splitAccessor, data.columns);
  dataLayers[0].accessors.forEach(accessor => (0, _utils.validateAccessor)(accessor, data.columns));
  (0, _validate.validateMarkSizeForChartType)(dataLayers[0].markSizeAccessor, args.seriesType);
  (0, _utils.validateAccessor)(dataLayers[0].markSizeAccessor, data.columns);
  const layers = [...(0, _helpers.appendLayerIds)(dataLayers, 'dataLayers'), ...(0, _helpers.appendLayerIds)(referenceLines, 'referenceLines'), ...(0, _helpers.appendLayerIds)(annotationLayers, 'annotationLayers')];

  if (handlers.inspectorAdapters.tables) {
    handlers.inspectorAdapters.tables.reset();
    handlers.inspectorAdapters.tables.allowCsvExport = true;
    const layerDimensions = layers.reduce((dimensions, layer) => {
      if (layer.layerType === _constants.LayerTypes.ANNOTATIONS || layer.type === _constants.REFERENCE_LINE) {
        return dimensions;
      }

      return [...dimensions, ...(0, _utils2.getLayerDimensions)(layer)];
    }, []);
    const logTable = (0, _utils.prepareLogTable)(data, layerDimensions, true);
    handlers.inspectorAdapters.tables.logDatatable('default', logTable);
  }

  const hasBar = (0, _validate.hasBarLayer)(dataLayers);
  const hasArea = (0, _validate.hasAreaLayer)(dataLayers);
  (0, _validate.validateExtent)(args.yLeftExtent, hasBar || hasArea, dataLayers);
  (0, _validate.validateExtent)(args.yRightExtent, hasBar || hasArea, dataLayers);
  (0, _validate.validateFillOpacity)(args.fillOpacity, hasArea);
  (0, _validate.validateAddTimeMarker)(dataLayers, args.addTimeMarker);
  (0, _validate.validateMinTimeBarInterval)(dataLayers, hasBar, args.minTimeBarInterval);
  const hasNotHistogramBars = !(0, _validate.hasHistogramBarLayer)(dataLayers);
  (0, _validate.validateValueLabels)(args.valueLabels, hasBar, hasNotHistogramBars);
  (0, _validate.validateMarkSizeRatioWithAccessor)(args.markSizeRatio, dataLayers[0].markSizeAccessor);
  (0, _validate.validateMarkSizeRatioLimits)(args.markSizeRatio);
  (0, _validate.validateLineWidthForChartType)(lineWidth, args.seriesType);
  (0, _validate.validateShowPointsForChartType)(showPoints, args.seriesType);
  (0, _validate.validatePointsRadiusForChartType)(pointsRadius, args.seriesType);
  return {
    type: 'render',
    as: _constants.XY_VIS_RENDERER,
    value: {
      args: { ...restArgs,
        layers,
        markSizeRatio: dataLayers[0].markSizeAccessor && !args.markSizeRatio ? 10 : args.markSizeRatio,
        ariaLabel: (_ref = (_args$ariaLabel = args.ariaLabel) !== null && _args$ariaLabel !== void 0 ? _args$ariaLabel : (_handlers$variables = handlers.variables) === null || _handlers$variables === void 0 ? void 0 : _handlers$variables.embeddableTitle) !== null && _ref !== void 0 ? _ref : (_handlers$getExecutio = handlers.getExecutionContext) === null || _handlers$getExecutio === void 0 ? void 0 : (_handlers$getExecutio2 = _handlers$getExecutio.call(handlers)) === null || _handlers$getExecutio2 === void 0 ? void 0 : _handlers$getExecutio2.description
      }
    }
  };
};

exports.xyVisFn = xyVisFn;