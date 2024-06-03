"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _yargs = _interopRequireDefault(require("yargs"));

var _playwright_start = require("./playwright_start");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const {
  argv
} = (0, _yargs.default)(process.argv.slice(2)).option('headless', {
  default: true,
  type: 'boolean',
  description: 'Start in headless mode'
}).option('grep', {
  default: undefined,
  type: 'string',
  description: 'run only journeys with a name or tags that matches the glob'
}).help();
const {
  headless,
  grep
} = argv;

async function runE2ETests({
  readConfigFile
}) {
  const kibanaConfig = await readConfigFile(require.resolve('./config.ts'));
  return { ...kibanaConfig.getAll(),
    testRunner: (0, _playwright_start.playwrightRunTests)({
      headless,
      match: grep
    })
  };
} // eslint-disable-next-line import/no-default-export


var _default = runE2ETests;
exports.default = _default;
module.exports = exports.default;