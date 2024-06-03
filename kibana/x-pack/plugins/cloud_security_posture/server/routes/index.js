"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defineRoutes = defineRoutes;

var _compliance_dashboard = require("./compliance_dashboard/compliance_dashboard");

var _benchmarks = require("./benchmarks/benchmarks");

var _update_rules_configuration = require("./configuration/update_rules_configuration");

var _setup_status = require("./setup_status/setup_status");

var _es_pit = require("./es_pit/es_pit");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function defineRoutes(router, cspContext) {
  (0, _compliance_dashboard.defineGetComplianceDashboardRoute)(router, cspContext);
  (0, _benchmarks.defineGetBenchmarksRoute)(router, cspContext);
  (0, _update_rules_configuration.defineUpdateRulesConfigRoute)(router, cspContext);
  (0, _setup_status.defineGetCspSetupStatusRoute)(router, cspContext);
  (0, _es_pit.defineEsPitRoute)(router, cspContext);
}