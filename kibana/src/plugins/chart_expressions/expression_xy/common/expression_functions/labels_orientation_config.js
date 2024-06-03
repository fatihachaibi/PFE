"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.labelsOrientationConfigFunction = void 0;

var _i18n = require("@kbn/i18n");

var _constants = require("../constants");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const labelsOrientationConfigFunction = {
  name: _constants.LABELS_ORIENTATION_CONFIG,
  aliases: [],
  type: _constants.LABELS_ORIENTATION_CONFIG,
  help: _i18n.i18n.translate('expressionXY.labelsOrientationConfig.help', {
    defaultMessage: `Configure the xy chart's tick labels orientation`
  }),
  inputTypes: ['null'],
  args: {
    x: {
      types: ['number'],
      options: [0, -90, -45],
      help: _i18n.i18n.translate('expressionXY.labelsOrientationConfig.x.help', {
        defaultMessage: 'Specifies the labels orientation of the x-axis.'
      })
    },
    yLeft: {
      types: ['number'],
      options: [0, -90, -45],
      help: _i18n.i18n.translate('expressionXY.labelsOrientationConfig.yLeft.help', {
        defaultMessage: 'Specifies the labels orientation of the left y-axis.'
      })
    },
    yRight: {
      types: ['number'],
      options: [0, -90, -45],
      help: _i18n.i18n.translate('expressionXY.labelsOrientationConfig.yRight.help', {
        defaultMessage: 'Specifies the labels orientation of the right y-axis.'
      })
    }
  },

  fn(input, args) {
    return {
      type: _constants.LABELS_ORIENTATION_CONFIG,
      ...args
    };
  }

};
exports.labelsOrientationConfigFunction = labelsOrientationConfigFunction;