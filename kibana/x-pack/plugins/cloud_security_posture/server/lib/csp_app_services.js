"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CspAppService = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


class CspAppService {
  constructor() {
    (0, _defineProperty2.default)(this, "agentService", void 0);
    (0, _defineProperty2.default)(this, "packageService", void 0);
    (0, _defineProperty2.default)(this, "packagePolicyService", void 0);
    (0, _defineProperty2.default)(this, "agentPolicyService", void 0);
  }

  start(dependencies) {
    this.agentService = dependencies.agentService;
    this.packageService = dependencies.packageService;
    this.packagePolicyService = dependencies.packagePolicyService;
    this.agentPolicyService = dependencies.agentPolicyService;
  }

  stop() {}

}

exports.CspAppService = CspAppService;