"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerV1ApmRoutes = registerV1ApmRoutes;

var _instance = require("./instance");

var _instances = require("./instances");

var _overview = require("./overview");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function registerV1ApmRoutes(server) {
  (0, _instance.apmInstanceRoute)(server);
  (0, _instances.apmInstancesRoute)(server);
  (0, _overview.apmOverviewRoute)(server);
}