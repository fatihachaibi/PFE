"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strings = void 0;

var _i18n = require("@kbn/i18n");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const strings = {
  getXYHelp: () => _i18n.i18n.translate('expressionXY.xyVis.help', {
    defaultMessage: 'An X/Y chart'
  }),
  getMetricHelp: () => _i18n.i18n.translate('expressionXY.xyVis.logDatatable.metric', {
    defaultMessage: 'Vertical axis'
  }),
  getXAxisHelp: () => _i18n.i18n.translate('expressionXY.xyVis.logDatatable.x', {
    defaultMessage: 'Horizontal axis'
  }),
  getBreakdownHelp: () => _i18n.i18n.translate('expressionXY.xyVis.logDatatable.breakDown', {
    defaultMessage: 'Break down by'
  }),
  getReferenceLineHelp: () => _i18n.i18n.translate('expressionXY.xyVis.logDatatable.breakDown', {
    defaultMessage: 'Break down by'
  }),
  getXTitleHelp: () => _i18n.i18n.translate('expressionXY.xyVis.xTitle.help', {
    defaultMessage: 'X axis title'
  }),
  getYTitleHelp: () => _i18n.i18n.translate('expressionXY.xyVis.yLeftTitle.help', {
    defaultMessage: 'Y left axis title'
  }),
  getYRightTitleHelp: () => _i18n.i18n.translate('expressionXY.xyVis.yRightTitle.help', {
    defaultMessage: 'Y right axis title'
  }),
  getYLeftExtentHelp: () => _i18n.i18n.translate('expressionXY.xyVis.yLeftExtent.help', {
    defaultMessage: 'Y left axis extents'
  }),
  getYRightExtentHelp: () => _i18n.i18n.translate('expressionXY.xyVis.yRightExtent.help', {
    defaultMessage: 'Y right axis extents'
  }),
  getYLeftScaleTypeHelp: () => _i18n.i18n.translate('expressionXY.xyVis.yLeftScaleType.help', {
    defaultMessage: 'The scale type of the left y axis'
  }),
  getYRightScaleTypeHelp: () => _i18n.i18n.translate('expressionXY.xyVis.yRightScaleType.help', {
    defaultMessage: 'The scale type of the right y axis'
  }),
  getLegendHelp: () => _i18n.i18n.translate('expressionXY.xyVis.legend.help', {
    defaultMessage: 'Configure the chart legend.'
  }),
  getFittingFunctionHelp: () => _i18n.i18n.translate('expressionXY.xyVis.fittingFunction.help', {
    defaultMessage: 'Define how missing values are treated'
  }),
  getEndValueHelp: () => _i18n.i18n.translate('expressionXY.xyVis.endValue.help', {
    defaultMessage: 'End value'
  }),
  getValueLabelsHelp: () => _i18n.i18n.translate('expressionXY.xyVis.valueLabels.help', {
    defaultMessage: 'Value labels mode'
  }),
  getTickLabelsVisibilitySettingsHelp: () => _i18n.i18n.translate('expressionXY.xyVis.tickLabelsVisibilitySettings.help', {
    defaultMessage: 'Show x and y axes tick labels'
  }),
  getLabelsOrientationHelp: () => _i18n.i18n.translate('expressionXY.xyVis.labelsOrientation.help', {
    defaultMessage: 'Defines the rotation of the axis labels'
  }),
  getGridlinesVisibilitySettingsHelp: () => _i18n.i18n.translate('expressionXY.xyVis.gridlinesVisibilitySettings.help', {
    defaultMessage: 'Show x and y axes gridlines'
  }),
  getAxisTitlesVisibilitySettingsHelp: () => _i18n.i18n.translate('expressionXY.xyVis.axisTitlesVisibilitySettings.help', {
    defaultMessage: 'Show x and y axes titles'
  }),
  getDataLayerHelp: () => _i18n.i18n.translate('expressionXY.xyVis.dataLayer.help', {
    defaultMessage: 'Data layer of visual series'
  }),
  getReferenceLinesHelp: () => _i18n.i18n.translate('expressionXY.xyVis.referenceLines.help', {
    defaultMessage: 'Reference line'
  }),
  getAnnotationLayerHelp: () => _i18n.i18n.translate('expressionXY.xyVis.annotationLayer.help', {
    defaultMessage: 'Annotation layer'
  }),
  getCurveTypeHelp: () => _i18n.i18n.translate('expressionXY.xyVis.curveType.help', {
    defaultMessage: 'Define how curve type is rendered for a line chart'
  }),
  getFillOpacityHelp: () => _i18n.i18n.translate('expressionXY.xyVis.fillOpacity.help', {
    defaultMessage: 'Define the area chart fill opacity'
  }),
  getHideEndzonesHelp: () => _i18n.i18n.translate('expressionXY.xyVis.hideEndzones.help', {
    defaultMessage: 'Hide endzone markers for partial data'
  }),
  getValuesInLegendHelp: () => _i18n.i18n.translate('expressionXY.xyVis.valuesInLegend.help', {
    defaultMessage: 'Show values in legend'
  }),
  getAriaLabelHelp: () => _i18n.i18n.translate('expressionXY.xyVis.ariaLabel.help', {
    defaultMessage: 'Specifies the aria label of the xy chart'
  }),
  getAddTimeMakerHelp: () => _i18n.i18n.translate('expressionXY.xyVis.addTimeMaker.help', {
    defaultMessage: 'Show time marker'
  }),
  getMarkSizeRatioHelp: () => _i18n.i18n.translate('expressionXY.xyVis.markSizeRatio.help', {
    defaultMessage: 'Specifies the ratio of the dots at the line and area charts'
  }),
  getMinTimeBarIntervalHelp: () => _i18n.i18n.translate('expressionXY.xyVis.xAxisInterval.help', {
    defaultMessage: 'Specifies the min interval for time bar chart'
  }),
  getSplitColumnAccessorHelp: () => _i18n.i18n.translate('expressionXY.xyVis.splitColumnAccessor.help', {
    defaultMessage: 'Specifies split column of the xy chart'
  }),
  getSplitRowAccessorHelp: () => _i18n.i18n.translate('expressionXY.xyVis.splitRowAccessor.help', {
    defaultMessage: 'Specifies split row of the xy chart'
  }),
  getLayersHelp: () => _i18n.i18n.translate('expressionXY.layeredXyVis.layers.help', {
    defaultMessage: 'Layers of visual series'
  }),
  getDataLayerFnHelp: () => _i18n.i18n.translate('expressionXY.dataLayer.help', {
    defaultMessage: `Configure a layer in the xy chart`
  }),
  getHideHelp: () => _i18n.i18n.translate('expressionXY.dataLayer.hide.help', {
    defaultMessage: 'Show / hide axis'
  }),
  getXAccessorHelp: () => _i18n.i18n.translate('expressionXY.dataLayer.xAccessor.help', {
    defaultMessage: 'X-axis'
  }),
  getSeriesTypeHelp: () => _i18n.i18n.translate('expressionXY.dataLayer.seriesType.help', {
    defaultMessage: 'The type of chart to display.'
  }),
  getXScaleTypeHelp: () => _i18n.i18n.translate('expressionXY.dataLayer.xScaleType.help', {
    defaultMessage: 'The scale type of the x axis'
  }),
  getIsHistogramHelp: () => _i18n.i18n.translate('expressionXY.dataLayer.isHistogram.help', {
    defaultMessage: 'Whether to layout the chart as a histogram'
  }),
  getSplitAccessorHelp: () => _i18n.i18n.translate('expressionXY.dataLayer.splitAccessor.help', {
    defaultMessage: 'The column to split by'
  }),
  getAccessorsHelp: () => _i18n.i18n.translate('expressionXY.dataLayer.accessors.help', {
    defaultMessage: 'The columns to display on the y axis.'
  }),
  getMarkSizeAccessorHelp: () => _i18n.i18n.translate('expressionXY.dataLayer.markSizeAccessor.help', {
    defaultMessage: 'Mark size accessor'
  }),
  getLineWidthHelp: () => _i18n.i18n.translate('expressionXY.dataLayer.lineWidth.help', {
    defaultMessage: 'Line width'
  }),
  getShowPointsHelp: () => _i18n.i18n.translate('expressionXY.dataLayer.showPoints.help', {
    defaultMessage: 'Show points'
  }),
  getPointsRadiusHelp: () => _i18n.i18n.translate('expressionXY.dataLayer.pointsRadius.help', {
    defaultMessage: 'Points radius'
  }),
  getYConfigHelp: () => _i18n.i18n.translate('expressionXY.dataLayer.yConfig.help', {
    defaultMessage: 'Additional configuration for y axes'
  }),
  getColumnToLabelHelp: () => _i18n.i18n.translate('expressionXY.layer.columnToLabel.help', {
    defaultMessage: 'JSON key-value pairs of column ID to label'
  }),
  getPaletteHelp: () => _i18n.i18n.translate('expressionXY.dataLayer.palette.help', {
    defaultMessage: 'Palette'
  }),
  getTableHelp: () => _i18n.i18n.translate('expressionXY.layers.table.help', {
    defaultMessage: 'Table'
  }),
  getLayerIdHelp: () => _i18n.i18n.translate('expressionXY.layers.layerId.help', {
    defaultMessage: 'Layer ID'
  }),
  getRLAccessorsHelp: () => _i18n.i18n.translate('expressionXY.referenceLineLayer.accessors.help', {
    defaultMessage: 'The columns to display on the y axis.'
  }),
  getRLYConfigHelp: () => _i18n.i18n.translate('expressionXY.referenceLineLayer.yConfig.help', {
    defaultMessage: 'Additional configuration for y axes'
  }),
  getRLHelp: () => _i18n.i18n.translate('expressionXY.referenceLineLayer.help', {
    defaultMessage: `Configure a reference line in the xy chart`
  }),
  getYConfigFnHelp: () => _i18n.i18n.translate('expressionXY.yConfig.help', {
    defaultMessage: `Configure the behavior of a xy chart's y axis metric`
  }),
  getForAccessorHelp: () => _i18n.i18n.translate('expressionXY.yConfig.forAccessor.help', {
    defaultMessage: 'The accessor this configuration is for'
  }),
  getAxisModeHelp: () => _i18n.i18n.translate('expressionXY.yConfig.axisMode.help', {
    defaultMessage: 'The axis mode of the metric'
  }),
  getColorHelp: () => _i18n.i18n.translate('expressionXY.yConfig.color.help', {
    defaultMessage: 'The color of the series'
  }),
  getAnnotationLayerFnHelp: () => _i18n.i18n.translate('expressionXY.annotationLayer.help', {
    defaultMessage: `Configure an annotation layer in the xy chart`
  }),
  getAnnotationLayerHideHelp: () => _i18n.i18n.translate('expressionXY.annotationLayer.hide.help', {
    defaultMessage: 'Show / hide details'
  }),
  getAnnotationLayerAnnotationsHelp: () => _i18n.i18n.translate('expressionXY.annotationLayer.annotations.help', {
    defaultMessage: 'Annotations'
  }),
  getReferenceLineNameHelp: () => _i18n.i18n.translate('expressionXY.referenceLine.name.help', {
    defaultMessage: 'Reference line name'
  }),
  getReferenceLineValueHelp: () => _i18n.i18n.translate('expressionXY.referenceLine.Value.help', {
    defaultMessage: 'Reference line value'
  })
};
exports.strings = strings;