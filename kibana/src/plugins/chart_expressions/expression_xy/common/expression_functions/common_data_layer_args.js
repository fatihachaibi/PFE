"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonDataLayerArgs = void 0;

var _constants = require("../constants");

var _i18n = require("../i18n");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const commonDataLayerArgs = {
  hide: {
    types: ['boolean'],
    default: false,
    help: _i18n.strings.getHideHelp()
  },
  seriesType: {
    aliases: ['_'],
    types: ['string'],
    options: [...Object.values(_constants.SeriesTypes)],
    help: _i18n.strings.getSeriesTypeHelp(),
    required: true,
    strict: true
  },
  xScaleType: {
    options: [...Object.values(_constants.XScaleTypes)],
    help: _i18n.strings.getXScaleTypeHelp(),
    strict: true
  },
  isHistogram: {
    types: ['boolean'],
    default: false,
    help: _i18n.strings.getIsHistogramHelp()
  },
  lineWidth: {
    types: ['number'],
    help: _i18n.strings.getLineWidthHelp()
  },
  showPoints: {
    types: ['boolean'],
    help: _i18n.strings.getShowPointsHelp()
  },
  pointsRadius: {
    types: ['number'],
    help: _i18n.strings.getPointsRadiusHelp()
  },
  yConfig: {
    types: [_constants.Y_CONFIG],
    help: _i18n.strings.getYConfigHelp(),
    multi: true
  },
  columnToLabel: {
    types: ['string'],
    help: _i18n.strings.getColumnToLabelHelp()
  },
  palette: {
    types: ['palette', 'system_palette'],
    help: _i18n.strings.getPaletteHelp(),
    default: '{palette}'
  }
};
exports.commonDataLayerArgs = commonDataLayerArgs;