"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.yAxisConfigFunction = void 0;

var _constants = require("../constants");

var _i18n = require("../i18n");

var _common_y_config_args = require("./common_y_config_args");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const yAxisConfigFunction = {
  name: _constants.Y_CONFIG,
  aliases: [],
  type: _constants.Y_CONFIG,
  help: _i18n.strings.getYConfigFnHelp(),
  inputTypes: ['null'],
  args: { ..._common_y_config_args.commonYConfigArgs
  },

  fn(input, args) {
    return {
      type: _constants.Y_CONFIG,
      ...args
    };
  }

};
exports.yAxisConfigFunction = yAxisConfigFunction;