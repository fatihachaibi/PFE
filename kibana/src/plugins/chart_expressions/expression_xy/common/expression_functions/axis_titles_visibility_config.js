"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axisTitlesVisibilityConfigFunction = void 0;

var _i18n = require("@kbn/i18n");

var _constants = require("../constants");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const axisTitlesVisibilityConfigFunction = {
  name: _constants.AXIS_TITLES_VISIBILITY_CONFIG,
  aliases: [],
  type: _constants.AXIS_TITLES_VISIBILITY_CONFIG,
  help: _i18n.i18n.translate('expressionXY.axisTitlesVisibilityConfig.help', {
    defaultMessage: `Configure the xy chart's axis titles appearance`
  }),
  inputTypes: ['null'],
  args: {
    x: {
      types: ['boolean'],
      help: _i18n.i18n.translate('expressionXY.axisTitlesVisibilityConfig.x.help', {
        defaultMessage: 'Specifies whether or not the title of the x-axis are visible.'
      })
    },
    yLeft: {
      types: ['boolean'],
      help: _i18n.i18n.translate('expressionXY.axisTitlesVisibilityConfig.yLeft.help', {
        defaultMessage: 'Specifies whether or not the title of the left y-axis are visible.'
      })
    },
    yRight: {
      types: ['boolean'],
      help: _i18n.i18n.translate('expressionXY.axisTitlesVisibilityConfig.yRight.help', {
        defaultMessage: 'Specifies whether or not the title of the right y-axis are visible.'
      })
    }
  },

  fn(inputn, args) {
    return {
      type: _constants.AXIS_TITLES_VISIBILITY_CONFIG,
      ...args
    };
  }

};
exports.axisTitlesVisibilityConfigFunction = axisTitlesVisibilityConfigFunction;