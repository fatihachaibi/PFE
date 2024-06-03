"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createFeatureUsageServiceMock", {
  enumerable: true,
  get: function () {
    return _mocks.createFeatureUsageServiceMock;
  }
});
Object.defineProperty(exports, "createMockPolicyData", {
  enumerable: true,
  get: function () {
    return _mocks.createMockPolicyData;
  }
});
exports.featureUsageService = void 0;

var _service = require("./service");

var _mocks = require("./mocks");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const featureUsageService = new _service.FeatureUsageService();
exports.featureUsageService = featureUsageService;