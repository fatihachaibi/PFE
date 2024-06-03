"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layeredXyVisFn = void 0;

var _constants = require("../constants");

var _utils = require("../utils");

var _validate = require("./validate");

var _helpers = require("../helpers");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const layeredXyVisFn = async (data, args, handlers) => {
  var _args$layers, _ref, _args$ariaLabel, _handlers$variables, _handlers$getExecutio, _handlers$getExecutio2;

  const layers = (0, _helpers.appendLayerIds)((_args$layers = args.layers) !== null && _args$layers !== void 0 ? _args$layers : [], 'layers');
  (0, _utils.logDatatables)(layers, handlers);
  const dataLayers = (0, _helpers.getDataLayers)(layers);
  const hasBar = (0, _validate.hasBarLayer)(dataLayers);
  (0, _validate.validateAddTimeMarker)(dataLayers, args.addTimeMarker);
  (0, _validate.validateMarkSizeRatioLimits)(args.markSizeRatio);
  (0, _validate.validateMinTimeBarInterval)(dataLayers, hasBar, args.minTimeBarInterval);
  const hasMarkSizeAccessors = dataLayers.filter(dataLayer => dataLayer.markSizeAccessor !== undefined).length > 0;

  if (!hasMarkSizeAccessors && args.markSizeRatio !== undefined) {
    throw new Error(_validate.errors.markSizeRatioWithoutAccessor());
  }

  return {
    type: 'render',
    as: _constants.XY_VIS_RENDERER,
    value: {
      args: { ...args,
        layers,
        markSizeRatio: hasMarkSizeAccessors && !args.markSizeRatio ? 10 : args.markSizeRatio,
        ariaLabel: (_ref = (_args$ariaLabel = args.ariaLabel) !== null && _args$ariaLabel !== void 0 ? _args$ariaLabel : (_handlers$variables = handlers.variables) === null || _handlers$variables === void 0 ? void 0 : _handlers$variables.embeddableTitle) !== null && _ref !== void 0 ? _ref : (_handlers$getExecutio = handlers.getExecutionContext) === null || _handlers$getExecutio === void 0 ? void 0 : (_handlers$getExecutio2 = _handlers$getExecutio.call(handlers)) === null || _handlers$getExecutio2 === void 0 ? void 0 : _handlers$getExecutio2.description
      }
    }
  };
};

exports.layeredXyVisFn = layeredXyVisFn;