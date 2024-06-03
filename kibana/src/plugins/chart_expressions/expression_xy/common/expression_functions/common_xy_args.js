"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonXYArgs = void 0;

var _constants = require("../constants");

var _i18n = require("../i18n");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const commonXYArgs = {
  xTitle: {
    types: ['string'],
    help: _i18n.strings.getXTitleHelp()
  },
  yTitle: {
    types: ['string'],
    help: _i18n.strings.getYTitleHelp()
  },
  yRightTitle: {
    types: ['string'],
    help: _i18n.strings.getYRightTitleHelp()
  },
  yLeftExtent: {
    types: [_constants.AXIS_EXTENT_CONFIG],
    help: _i18n.strings.getYLeftExtentHelp(),
    default: `{${_constants.AXIS_EXTENT_CONFIG}}`
  },
  yRightExtent: {
    types: [_constants.AXIS_EXTENT_CONFIG],
    help: _i18n.strings.getYRightExtentHelp(),
    default: `{${_constants.AXIS_EXTENT_CONFIG}}`
  },
  yLeftScale: {
    options: [...Object.values(_constants.YScaleTypes)],
    help: _i18n.strings.getYLeftScaleTypeHelp(),
    default: _constants.YScaleTypes.LINEAR,
    strict: true
  },
  yRightScale: {
    options: [...Object.values(_constants.YScaleTypes)],
    help: _i18n.strings.getYRightScaleTypeHelp(),
    default: _constants.YScaleTypes.LINEAR,
    strict: true
  },
  legend: {
    types: [_constants.LEGEND_CONFIG],
    help: _i18n.strings.getLegendHelp(),
    default: `{${_constants.LEGEND_CONFIG}}`
  },
  fittingFunction: {
    types: ['string'],
    options: [...Object.values(_constants.FittingFunctions)],
    help: _i18n.strings.getFittingFunctionHelp(),
    strict: true
  },
  endValue: {
    types: ['string'],
    options: [...Object.values(_constants.EndValues)],
    help: _i18n.strings.getEndValueHelp(),
    strict: true
  },
  emphasizeFitting: {
    types: ['boolean'],
    default: false,
    help: ''
  },
  valueLabels: {
    types: ['string'],
    options: [...Object.values(_constants.ValueLabelModes)],
    help: _i18n.strings.getValueLabelsHelp(),
    strict: true,
    default: _constants.ValueLabelModes.HIDE
  },
  tickLabelsVisibilitySettings: {
    types: [_constants.TICK_LABELS_CONFIG],
    help: _i18n.strings.getTickLabelsVisibilitySettingsHelp()
  },
  labelsOrientation: {
    types: [_constants.LABELS_ORIENTATION_CONFIG],
    help: _i18n.strings.getLabelsOrientationHelp()
  },
  gridlinesVisibilitySettings: {
    types: [_constants.GRID_LINES_CONFIG],
    help: _i18n.strings.getGridlinesVisibilitySettingsHelp()
  },
  axisTitlesVisibilitySettings: {
    types: [_constants.AXIS_TITLES_VISIBILITY_CONFIG],
    help: _i18n.strings.getAxisTitlesVisibilitySettingsHelp()
  },
  curveType: {
    types: ['string'],
    options: [...Object.values(_constants.XYCurveTypes)],
    help: _i18n.strings.getCurveTypeHelp(),
    strict: true
  },
  fillOpacity: {
    types: ['number'],
    help: _i18n.strings.getFillOpacityHelp()
  },
  hideEndzones: {
    types: ['boolean'],
    default: false,
    help: _i18n.strings.getHideEndzonesHelp()
  },
  valuesInLegend: {
    types: ['boolean'],
    default: false,
    help: _i18n.strings.getValuesInLegendHelp()
  },
  ariaLabel: {
    types: ['string'],
    help: _i18n.strings.getAriaLabelHelp()
  },
  addTimeMarker: {
    types: ['boolean'],
    default: false,
    help: _i18n.strings.getAddTimeMakerHelp()
  },
  markSizeRatio: {
    types: ['number'],
    help: _i18n.strings.getMarkSizeRatioHelp()
  },
  minTimeBarInterval: {
    types: ['string'],
    help: _i18n.strings.getMinTimeBarIntervalHelp()
  }
};
exports.commonXYArgs = commonXYArgs;