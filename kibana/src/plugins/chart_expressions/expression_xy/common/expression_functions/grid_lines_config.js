"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gridlinesConfigFunction = void 0;

var _i18n = require("@kbn/i18n");

var _constants = require("../constants");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const gridlinesConfigFunction = {
  name: _constants.GRID_LINES_CONFIG,
  aliases: [],
  type: _constants.GRID_LINES_CONFIG,
  help: _i18n.i18n.translate('expressionXY.gridlinesConfig.help', {
    defaultMessage: `Configure the xy chart's gridlines appearance`
  }),
  inputTypes: ['null'],
  args: {
    x: {
      types: ['boolean'],
      help: _i18n.i18n.translate('expressionXY.gridlinesConfig.x.help', {
        defaultMessage: 'Specifies whether or not the gridlines of the x-axis are visible.'
      })
    },
    yLeft: {
      types: ['boolean'],
      help: _i18n.i18n.translate('expressionXY.gridlinesConfig.yLeft.help', {
        defaultMessage: 'Specifies whether or not the gridlines of the left y-axis are visible.'
      })
    },
    yRight: {
      types: ['boolean'],
      help: _i18n.i18n.translate('expressionXY.gridlinesConfig.yRight.help', {
        defaultMessage: 'Specifies whether or not the gridlines of the right y-axis are visible.'
      })
    }
  },

  fn(input, args) {
    return {
      type: _constants.GRID_LINES_CONFIG,
      ...args
    };
  }

};
exports.gridlinesConfigFunction = gridlinesConfigFunction;