"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateValueLabels = exports.validateShowPointsForChartType = exports.validatePointsRadiusForChartType = exports.validateMinTimeBarInterval = exports.validateMarkSizeRatioWithAccessor = exports.validateMarkSizeRatioLimits = exports.validateMarkSizeForChartType = exports.validateLineWidthForChartType = exports.validateFillOpacity = exports.validateExtentForDataBounds = exports.validateExtent = exports.validateAddTimeMarker = exports.isValidExtentWithCustomMode = exports.hasHistogramBarLayer = exports.hasBarLayer = exports.hasAreaLayer = exports.errors = void 0;

var _i18n = require("@kbn/i18n");

var _common = require("../../../../data/common");

var _constants = require("../constants");

var _helpers = require("../helpers");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const errors = {
  markSizeAccessorForNonLineOrAreaChartsError: () => _i18n.i18n.translate('expressionXY.reusable.function.dataLayer.errors.markSizeAccessorForNonLineOrAreaChartsError', {
    defaultMessage: "`markSizeAccessor` can't be used. Dots are applied only for line or area charts"
  }),
  markSizeRatioLimitsError: () => _i18n.i18n.translate('expressionXY.reusable.function.xyVis.errors.markSizeLimitsError', {
    defaultMessage: 'Mark size ratio must be greater or equal to 1 and less or equal to 100'
  }),
  lineWidthForNonLineOrAreaChartError: () => _i18n.i18n.translate('expressionXY.reusable.function.xyVis.errors.lineWidthForNonLineOrAreaChartError', {
    defaultMessage: '`lineWidth` can be applied only for line or area charts'
  }),
  showPointsForNonLineOrAreaChartError: () => _i18n.i18n.translate('expressionXY.reusable.function.xyVis.errors.showPointsForNonLineOrAreaChartError', {
    defaultMessage: '`showPoints` can be applied only for line or area charts'
  }),
  pointsRadiusForNonLineOrAreaChartError: () => _i18n.i18n.translate('expressionXY.reusable.function.xyVis.errors.pointsRadiusForNonLineOrAreaChartError', {
    defaultMessage: '`pointsRadius` can be applied only for line or area charts'
  }),
  markSizeRatioWithoutAccessor: () => _i18n.i18n.translate('expressionXY.reusable.function.xyVis.errors.markSizeRatioWithoutAccessor', {
    defaultMessage: 'Mark size ratio can be applied only with `markSizeAccessor`'
  }),
  extendBoundsAreInvalidError: () => _i18n.i18n.translate('expressionXY.reusable.function.xyVis.errors.extendBoundsAreInvalidError', {
    defaultMessage: 'For area and bar modes, and custom extent mode, the lower bound should be less or greater than 0 and the upper bound - be greater or equal than 0'
  }),
  notUsedFillOpacityError: () => _i18n.i18n.translate('expressionXY.reusable.function.xyVis.errors.notUsedFillOpacityError', {
    defaultMessage: '`fillOpacity` argument is applicable only for area charts.'
  }),
  valueLabelsForNotBarsOrHistogramBarsChartsError: () => _i18n.i18n.translate('expressionXY.reusable.function.xyVis.errors.valueLabelsForNotBarsOrHistogramBarsChartsError', {
    defaultMessage: '`valueLabels` argument is applicable only for bar charts, which are not histograms.'
  }),
  dataBoundsForNotLineChartError: () => _i18n.i18n.translate('expressionXY.reusable.function.xyVis.errors.dataBoundsForNotLineChartError', {
    defaultMessage: 'Only line charts can be fit to the data bounds'
  }),
  timeMarkerForNotTimeChartsError: () => _i18n.i18n.translate('expressionXY.reusable.function.xyVis.errors.timeMarkerForNotTimeChartsError', {
    defaultMessage: 'Only time charts can have current time marker'
  }),
  isInvalidIntervalError: () => _i18n.i18n.translate('expressionXY.reusable.function.xyVis.errors.isInvalidIntervalError', {
    defaultMessage: 'Provided x-axis interval is invalid. The interval should include quantity and unit names. Examples: 1d, 24h, 1w.'
  }),
  minTimeBarIntervalNotForTimeBarChartError: () => _i18n.i18n.translate('expressionXY.reusable.function.xyVis.errors.minTimeBarIntervalNotForTimeBarChartError', {
    defaultMessage: '`minTimeBarInterval` argument is applicable only for time bar charts.'
  })
};
exports.errors = errors;

const hasBarLayer = layers => layers.filter(({
  seriesType
}) => seriesType.includes('bar')).length > 0;

exports.hasBarLayer = hasBarLayer;

const hasAreaLayer = layers => layers.filter(({
  seriesType
}) => seriesType.includes('area')).length > 0;

exports.hasAreaLayer = hasAreaLayer;

const hasHistogramBarLayer = layers => layers.filter(({
  seriesType,
  isHistogram
}) => seriesType.includes('bar') && isHistogram).length > 0;

exports.hasHistogramBarLayer = hasHistogramBarLayer;

const isValidExtentWithCustomMode = extent => {
  const isValidLowerBound = extent.lowerBound === undefined || extent.lowerBound !== undefined && extent.lowerBound <= 0;
  const isValidUpperBound = extent.upperBound === undefined || extent.upperBound !== undefined && extent.upperBound >= 0;
  return isValidLowerBound && isValidUpperBound;
};

exports.isValidExtentWithCustomMode = isValidExtentWithCustomMode;

const validateExtentForDataBounds = (extent, layers) => {
  const lineSeries = layers.filter(({
    seriesType
  }) => seriesType.includes('line'));

  if (!lineSeries.length && extent.mode === _constants.AxisExtentModes.DATA_BOUNDS) {
    throw new Error(errors.dataBoundsForNotLineChartError());
  }
};

exports.validateExtentForDataBounds = validateExtentForDataBounds;

const validateExtent = (extent, hasBarOrArea, dataLayers) => {
  if (extent.mode === _constants.AxisExtentModes.CUSTOM && hasBarOrArea && !isValidExtentWithCustomMode(extent)) {
    throw new Error(errors.extendBoundsAreInvalidError());
  }

  validateExtentForDataBounds(extent, dataLayers);
};

exports.validateExtent = validateExtent;

const validateFillOpacity = (fillOpacity, hasArea) => {
  if (fillOpacity !== undefined && !hasArea) {
    throw new Error(errors.notUsedFillOpacityError());
  }
};

exports.validateFillOpacity = validateFillOpacity;

const validateValueLabels = (valueLabels, hasBar, hasNotHistogramBars) => {
  if ((!hasBar || !hasNotHistogramBars) && valueLabels !== _constants.ValueLabelModes.HIDE) {
    throw new Error(errors.valueLabelsForNotBarsOrHistogramBarsChartsError());
  }
};

exports.validateValueLabels = validateValueLabels;

const isAreaOrLineChart = seriesType => seriesType.includes('line') || seriesType.includes('area');

const validateAddTimeMarker = (dataLayers, addTimeMarker) => {
  if (addTimeMarker && !(0, _helpers.isTimeChart)(dataLayers)) {
    throw new Error(errors.timeMarkerForNotTimeChartsError());
  }
};

exports.validateAddTimeMarker = validateAddTimeMarker;

const validateMarkSizeForChartType = (markSizeAccessor, seriesType) => {
  if (markSizeAccessor && !seriesType.includes('line') && !seriesType.includes('area')) {
    throw new Error(errors.markSizeAccessorForNonLineOrAreaChartsError());
  }
};

exports.validateMarkSizeForChartType = validateMarkSizeForChartType;

const validateMarkSizeRatioLimits = markSizeRatio => {
  if (markSizeRatio !== undefined && (markSizeRatio < 1 || markSizeRatio > 100)) {
    throw new Error(errors.markSizeRatioLimitsError());
  }
};

exports.validateMarkSizeRatioLimits = validateMarkSizeRatioLimits;

const validateLineWidthForChartType = (lineWidth, seriesType) => {
  if (lineWidth !== undefined && !isAreaOrLineChart(seriesType)) {
    throw new Error(errors.lineWidthForNonLineOrAreaChartError());
  }
};

exports.validateLineWidthForChartType = validateLineWidthForChartType;

const validateShowPointsForChartType = (showPoints, seriesType) => {
  if (showPoints !== undefined && !isAreaOrLineChart(seriesType)) {
    throw new Error(errors.showPointsForNonLineOrAreaChartError());
  }
};

exports.validateShowPointsForChartType = validateShowPointsForChartType;

const validatePointsRadiusForChartType = (pointsRadius, seriesType) => {
  if (pointsRadius !== undefined && !isAreaOrLineChart(seriesType)) {
    throw new Error(errors.pointsRadiusForNonLineOrAreaChartError());
  }
};

exports.validatePointsRadiusForChartType = validatePointsRadiusForChartType;

const validateMarkSizeRatioWithAccessor = (markSizeRatio, markSizeAccessor) => {
  if (markSizeRatio !== undefined && !markSizeAccessor) {
    throw new Error(errors.markSizeRatioWithoutAccessor());
  }
};

exports.validateMarkSizeRatioWithAccessor = validateMarkSizeRatioWithAccessor;

const validateMinTimeBarInterval = (dataLayers, hasBar, minTimeBarInterval) => {
  if (minTimeBarInterval) {
    if (!(0, _common.isValidInterval)(minTimeBarInterval)) {
      throw new Error(errors.isInvalidIntervalError());
    }

    if (!hasBar || !(0, _helpers.isTimeChart)(dataLayers)) {
      throw new Error(errors.minTimeBarIntervalNotForTimeBarChartError());
    }
  }
};

exports.validateMinTimeBarInterval = validateMinTimeBarInterval;