"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRoutes = void 0;

var _process_events_route = require("./process_events_route");

var _alerts_route = require("./alerts_route");

var _alert_status_route = require("./alert_status_route");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const registerRoutes = (router, ruleRegistry) => {
  (0, _process_events_route.registerProcessEventsRoute)(router, ruleRegistry);
  (0, _alerts_route.registerAlertsRoute)(router, ruleRegistry);
  (0, _alert_status_route.registerAlertStatusRoute)(router, ruleRegistry);
};

exports.registerRoutes = registerRoutes;