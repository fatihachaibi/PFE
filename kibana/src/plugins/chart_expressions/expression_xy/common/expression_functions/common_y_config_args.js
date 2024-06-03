"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonYConfigArgs = void 0;

var _constants = require("../constants");

var _i18n = require("../i18n");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const commonYConfigArgs = {
  forAccessor: {
    types: ['string'],
    help: _i18n.strings.getForAccessorHelp()
  },
  axisMode: {
    types: ['string'],
    options: [...Object.values(_constants.YAxisModes)],
    help: _i18n.strings.getAxisModeHelp(),
    strict: true
  },
  color: {
    types: ['string'],
    help: _i18n.strings.getColorHelp()
  }
};
exports.commonYConfigArgs = commonYConfigArgs;