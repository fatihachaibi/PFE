"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.referenceLineFunction = void 0;

var _i18n = require("@kbn/i18n");

var _constants = require("../constants");

var _i18n2 = require("../i18n");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const referenceLineFunction = {
  name: _constants.REFERENCE_LINE,
  aliases: [],
  type: _constants.REFERENCE_LINE,
  help: _i18n2.strings.getRLHelp(),
  inputTypes: ['datatable', 'null'],
  args: {
    name: {
      types: ['string'],
      help: _i18n2.strings.getReferenceLineNameHelp()
    },
    value: {
      types: ['number'],
      help: _i18n2.strings.getReferenceLineValueHelp(),
      required: true
    },
    axisMode: {
      types: ['string'],
      options: [...Object.values(_constants.YAxisModes)],
      help: _i18n2.strings.getAxisModeHelp(),
      default: _constants.YAxisModes.AUTO,
      strict: true
    },
    color: {
      types: ['string'],
      help: _i18n2.strings.getColorHelp()
    },
    lineStyle: {
      types: ['string'],
      options: [...Object.values(_constants.LineStyles)],
      help: _i18n.i18n.translate('expressionXY.yConfig.lineStyle.help', {
        defaultMessage: 'The style of the reference line'
      }),
      default: _constants.LineStyles.SOLID,
      strict: true
    },
    lineWidth: {
      types: ['number'],
      help: _i18n.i18n.translate('expressionXY.yConfig.lineWidth.help', {
        defaultMessage: 'The width of the reference line'
      }),
      default: 1
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
      default: _constants.IconPositions.AUTO,
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
      default: _constants.FillStyles.NONE,
      strict: true
    }
  },

  fn(table, args) {
    var _table$rows$length;

    const textVisibility = args.name !== undefined && args.textVisibility === undefined ? true : args.name === undefined ? false : args.textVisibility;
    return {
      type: _constants.REFERENCE_LINE,
      layerType: _constants.LayerTypes.REFERENCELINE,
      lineLength: (_table$rows$length = table === null || table === void 0 ? void 0 : table.rows.length) !== null && _table$rows$length !== void 0 ? _table$rows$length : 0,
      yConfig: [{ ...args,
        textVisibility,
        type: _constants.REFERENCE_LINE_Y_CONFIG
      }]
    };
  }

};
exports.referenceLineFunction = referenceLineFunction;