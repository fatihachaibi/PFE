"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AiopsPlugin = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _common = require("../common");

var _routes = require("./routes");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


class AiopsPlugin {
  constructor(initializerContext) {
    (0, _defineProperty2.default)(this, "logger", void 0);
    this.logger = initializerContext.logger.get();
  }

  setup(core, deps) {
    this.logger.debug('aiops: Setup');
    const router = core.http.createRouter(); // Register server side APIs

    if (_common.AIOPS_ENABLED) {
      core.getStartServices().then(([_, depsStart]) => {
        (0, _routes.defineExplainLogRateSpikesRoute)(router, this.logger);
      });
    }

    return {};
  }

  start(core) {
    this.logger.debug('aiops: Started');
    return {};
  }

  stop() {}

}

exports.AiopsPlugin = AiopsPlugin;