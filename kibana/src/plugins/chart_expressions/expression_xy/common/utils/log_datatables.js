"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logDatatables = exports.getLayerDimensions = void 0;

var _utils = require("../../../../visualizations/common/utils");

var _constants = require("../constants");

var _i18n = require("../i18n");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const logDatatables = (layers, handlers) => {
  var _handlers$inspectorAd;

  if (!(handlers !== null && handlers !== void 0 && (_handlers$inspectorAd = handlers.inspectorAdapters) !== null && _handlers$inspectorAd !== void 0 && _handlers$inspectorAd.tables)) {
    return;
  }

  handlers.inspectorAdapters.tables.reset();
  handlers.inspectorAdapters.tables.allowCsvExport = true;
  layers.forEach(layer => {
    if (layer.layerType === _constants.LayerTypes.ANNOTATIONS || layer.type === _constants.REFERENCE_LINE) {
      return;
    }

    const logTable = (0, _utils.prepareLogTable)(layer.table, getLayerDimensions(layer), true);
    handlers.inspectorAdapters.tables.logDatatable(layer.layerId, logTable);
  });
};

exports.logDatatables = logDatatables;

const getLayerDimensions = layer => {
  let xAccessor;
  let splitAccessor;

  if (layer.layerType === _constants.LayerTypes.DATA) {
    xAccessor = layer.xAccessor;
    splitAccessor = layer.splitAccessor;
  }

  const {
    accessors,
    layerType
  } = layer;
  return [[accessors ? accessors : undefined, layerType === _constants.LayerTypes.DATA ? _i18n.strings.getMetricHelp() : _i18n.strings.getReferenceLineHelp()], [xAccessor ? [xAccessor] : undefined, _i18n.strings.getXAxisHelp()], [splitAccessor ? [splitAccessor] : undefined, _i18n.strings.getBreakdownHelp()]];
};

exports.getLayerDimensions = getLayerDimensions;