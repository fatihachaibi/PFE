"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Y_CONFIG = exports.YScaleTypes = exports.YAxisModes = exports.XY_VIS_RENDERER = exports.XY_VIS = exports.XYCurveTypes = exports.XScaleTypes = exports.ValueLabelModes = exports.TICK_LABELS_CONFIG = exports.SeriesTypes = exports.REFERENCE_LINE_Y_CONFIG = exports.REFERENCE_LINE_LAYER = exports.REFERENCE_LINE = exports.LineStyles = exports.LayerTypes = exports.LEGEND_CONFIG = exports.LAYERED_XY_VIS = exports.LABELS_ORIENTATION_CONFIG = exports.IconPositions = exports.GRID_LINES_CONFIG = exports.FittingFunctions = exports.FillStyles = exports.EndValues = exports.EXTENDED_Y_CONFIG = exports.EXTENDED_DATA_LAYER = exports.EXTENDED_ANNOTATION_LAYER = exports.DATA_LAYER = exports.AxisExtentModes = exports.AvailableReferenceLineIcons = exports.AXIS_TITLES_VISIBILITY_CONFIG = exports.AXIS_EXTENT_CONFIG = exports.ANNOTATION_LAYER = void 0;

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const XY_VIS = 'xyVis';
exports.XY_VIS = XY_VIS;
const LAYERED_XY_VIS = 'layeredXyVis';
exports.LAYERED_XY_VIS = LAYERED_XY_VIS;
const Y_CONFIG = 'yConfig';
exports.Y_CONFIG = Y_CONFIG;
const REFERENCE_LINE_Y_CONFIG = 'referenceLineYConfig';
exports.REFERENCE_LINE_Y_CONFIG = REFERENCE_LINE_Y_CONFIG;
const EXTENDED_Y_CONFIG = 'extendedYConfig';
exports.EXTENDED_Y_CONFIG = EXTENDED_Y_CONFIG;
const DATA_LAYER = 'dataLayer';
exports.DATA_LAYER = DATA_LAYER;
const EXTENDED_DATA_LAYER = 'extendedDataLayer';
exports.EXTENDED_DATA_LAYER = EXTENDED_DATA_LAYER;
const LEGEND_CONFIG = 'legendConfig';
exports.LEGEND_CONFIG = LEGEND_CONFIG;
const XY_VIS_RENDERER = 'xyVis';
exports.XY_VIS_RENDERER = XY_VIS_RENDERER;
const GRID_LINES_CONFIG = 'gridlinesConfig';
exports.GRID_LINES_CONFIG = GRID_LINES_CONFIG;
const ANNOTATION_LAYER = 'annotationLayer';
exports.ANNOTATION_LAYER = ANNOTATION_LAYER;
const EXTENDED_ANNOTATION_LAYER = 'extendedAnnotationLayer';
exports.EXTENDED_ANNOTATION_LAYER = EXTENDED_ANNOTATION_LAYER;
const TICK_LABELS_CONFIG = 'tickLabelsConfig';
exports.TICK_LABELS_CONFIG = TICK_LABELS_CONFIG;
const AXIS_EXTENT_CONFIG = 'axisExtentConfig';
exports.AXIS_EXTENT_CONFIG = AXIS_EXTENT_CONFIG;
const REFERENCE_LINE = 'referenceLine';
exports.REFERENCE_LINE = REFERENCE_LINE;
const REFERENCE_LINE_LAYER = 'referenceLineLayer';
exports.REFERENCE_LINE_LAYER = REFERENCE_LINE_LAYER;
const LABELS_ORIENTATION_CONFIG = 'labelsOrientationConfig';
exports.LABELS_ORIENTATION_CONFIG = LABELS_ORIENTATION_CONFIG;
const AXIS_TITLES_VISIBILITY_CONFIG = 'axisTitlesVisibilityConfig';
exports.AXIS_TITLES_VISIBILITY_CONFIG = AXIS_TITLES_VISIBILITY_CONFIG;
const LayerTypes = {
  DATA: 'data',
  REFERENCELINE: 'referenceLine',
  ANNOTATIONS: 'annotations'
};
exports.LayerTypes = LayerTypes;
const FittingFunctions = {
  NONE: 'None',
  ZERO: 'Zero',
  LINEAR: 'Linear',
  CARRY: 'Carry',
  LOOKAHEAD: 'Lookahead'
};
exports.FittingFunctions = FittingFunctions;
const EndValues = {
  NONE: 'None',
  ZERO: 'Zero',
  NEAREST: 'Nearest'
};
exports.EndValues = EndValues;
const YAxisModes = {
  AUTO: 'auto',
  LEFT: 'left',
  RIGHT: 'right',
  BOTTOM: 'bottom'
};
exports.YAxisModes = YAxisModes;
const AxisExtentModes = {
  FULL: 'full',
  CUSTOM: 'custom',
  DATA_BOUNDS: 'dataBounds'
};
exports.AxisExtentModes = AxisExtentModes;
const LineStyles = {
  SOLID: 'solid',
  DASHED: 'dashed',
  DOTTED: 'dotted'
};
exports.LineStyles = LineStyles;
const FillStyles = {
  NONE: 'none',
  ABOVE: 'above',
  BELOW: 'below'
};
exports.FillStyles = FillStyles;
const IconPositions = {
  AUTO: 'auto',
  LEFT: 'left',
  RIGHT: 'right',
  ABOVE: 'above',
  BELOW: 'below'
};
exports.IconPositions = IconPositions;
const SeriesTypes = {
  BAR: 'bar',
  LINE: 'line',
  AREA: 'area',
  BAR_STACKED: 'bar_stacked',
  AREA_STACKED: 'area_stacked',
  BAR_HORIZONTAL: 'bar_horizontal',
  BAR_PERCENTAGE_STACKED: 'bar_percentage_stacked',
  BAR_HORIZONTAL_STACKED: 'bar_horizontal_stacked',
  AREA_PERCENTAGE_STACKED: 'area_percentage_stacked',
  BAR_HORIZONTAL_PERCENTAGE_STACKED: 'bar_horizontal_percentage_stacked'
};
exports.SeriesTypes = SeriesTypes;
const YScaleTypes = {
  TIME: 'time',
  LINEAR: 'linear',
  LOG: 'log',
  SQRT: 'sqrt'
};
exports.YScaleTypes = YScaleTypes;
const XScaleTypes = {
  TIME: 'time',
  LINEAR: 'linear',
  ORDINAL: 'ordinal'
};
exports.XScaleTypes = XScaleTypes;
const XYCurveTypes = {
  LINEAR: 'LINEAR',
  CURVE_MONOTONE_X: 'CURVE_MONOTONE_X'
};
exports.XYCurveTypes = XYCurveTypes;
const ValueLabelModes = {
  HIDE: 'hide',
  SHOW: 'show'
};
exports.ValueLabelModes = ValueLabelModes;
const AvailableReferenceLineIcons = {
  EMPTY: 'empty',
  ASTERISK: 'asterisk',
  ALERT: 'alert',
  BELL: 'bell',
  BOLT: 'bolt',
  BUG: 'bug',
  CIRCLE: 'circle',
  EDITOR_COMMENT: 'editorComment',
  FLAG: 'flag',
  HEART: 'heart',
  MAP_MARKER: 'mapMarker',
  PIN_FILLED: 'pinFilled',
  STAR_EMPTY: 'starEmpty',
  TAG: 'tag',
  TRIANGLE: 'triangle'
};
exports.AvailableReferenceLineIcons = AvailableReferenceLineIcons;