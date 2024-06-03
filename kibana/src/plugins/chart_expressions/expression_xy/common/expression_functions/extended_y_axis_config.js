"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendedYAxisConfigFunction = void 0;

var _i18n = require("@kbn/i18n");

var _constants = require("../constants");

var _i18n2 = require("../i18n");

var _common_y_config_args = require("./common_y_config_args");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const extendedYAxisConfigFunction = {
  name: _constants.EXTENDED_Y_CONFIG,
  aliases: [],
  type: _constants.EXTENDED_Y_CONFIG,
  help: _i18n2.strings.getYConfigFnHelp(),
  inputTypes: ['null'],
  args: { ..._common_y_config_args.commonYConfigArgs,
    lineStyle: {
      types: ['string'],
      options: [...Object.values(_constants.LineStyles)],
      help: _i18n.i18n.translate('expressionXY.yConfig.lineStyle.help', {
        defaultMessage: 'The style of the reference line'
      }),
      strict: true
    },
    lineWidth: {
      types: ['number'],
      help: _i18n.i18n.translate('expressionXY.yConfig.lineWidth.help', {
        defaultMessage: 'The width of the reference line'
      })
    },
    icon: {
      types: ['string'],
      help: _i18n.i18n.translate('expressionXY.yConfig.icon.help', {
        defaultMessage: 'An optional icon used for reference lines'
      }),
      options: [...Object.values(_constants.AvailableReferenceLineIcons)],
      strict: true
    },
    iconPosition: {
      types: ['string'],
      options: [...Object.values(_constants.IconPositions)],
      help: _i18n.i18n.translate('expressionXY.yConfig.iconPosition.help', {
        defaultMessage: 'The placement of the icon for the reference line'
      }),
      strict: true
    },
    textVisibility: {
      types: ['boolean'],
      help: _i18n.i18n.translate('expressionXY.yConfig.textVisibility.help', {
        defaultMessage: 'Visibility of the label on the reference line'
      })
    },
    fill: {
      types: ['string'],
      options: [...Object.values(_constants.FillStyles)],
      help: _i18n.i18n.translate('expressionXY.yConfig.fill.help', {
        defaultMessage: 'Fill'
      }),
      strict: true
    }
  },

  fn(input, args) {
    return {
      type: _constants.EXTENDED_Y_CONFIG,
      ...args
    };
  }

};
exports.extendedYAxisConfigFunction = extendedYAxisConfigFunction;