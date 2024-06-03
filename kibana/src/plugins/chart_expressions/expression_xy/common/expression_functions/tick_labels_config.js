"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tickLabelsConfigFunction = void 0;

var _i18n = require("@kbn/i18n");

var _constants = require("../constants");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const tickLabelsConfigFunction = {
  name: _constants.TICK_LABELS_CONFIG,
  aliases: [],
  type: _constants.TICK_LABELS_CONFIG,
  help: _i18n.i18n.translate('expressionXY.tickLabelsConfig.help', {
    defaultMessage: `Configure the xy chart's tick labels appearance`
  }),
  inputTypes: ['null'],
  args: {
    x: {
      types: ['boolean'],
      help: _i18n.i18n.translate('expressionXY.tickLabelsConfig.x.help', {
        defaultMessage: 'Specifies whether or not the tick labels of the x-axis are visible.'
      })
    },
    yLeft: {
      types: ['boolean'],
      help: _i18n.i18n.translate('expressionXY.tickLabelsConfig.yLeft.help', {
        defaultMessage: 'Specifies whether or not the tick labels of the left y-axis are visible.'
      })
    },
    yRight: {
      types: ['boolean'],
      help: _i18n.i18n.translate('expressionXY.tickLabelsConfig.yRight.help', {
        defaultMessage: 'Specifies whether or not the tick labels of the right y-axis are visible.'
      })
    }
  },

  fn(input, args) {
    return {
      type: _constants.TICK_LABELS_CONFIG,
      ...args
    };
  }

};
exports.tickLabelsConfigFunction = tickLabelsConfigFunction;