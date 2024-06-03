"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRecoveredAlerts = getRecoveredAlerts;

var _lodash = require("lodash");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function getRecoveredAlerts(alerts, originalAlertIds) {
  return (0, _lodash.pickBy)(alerts, (alert, id) => !alert.hasScheduledActions() && originalAlertIds.has(id));
}