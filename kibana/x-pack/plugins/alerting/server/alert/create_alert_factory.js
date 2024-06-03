"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAlertFactory = createAlertFactory;

var _alert = require("./alert");

var _lib = require("../lib");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function createAlertFactory({
  alerts,
  logger,
  canSetRecoveryContext = false
}) {
  // Keep track of which alerts we started with so we can determine which have recovered
  const initialAlertIds = new Set(Object.keys(alerts));
  let isDone = false;
  return {
    create: id => {
      if (isDone) {
        throw new Error(`Can't create new alerts after calling done() in AlertsFactory.`);
      }

      if (!alerts[id]) {
        alerts[id] = new _alert.Alert(id);
      }

      return alerts[id];
    },
    done: () => {
      isDone = true;
      return {
        getRecoveredAlerts: () => {
          if (!canSetRecoveryContext) {
            logger.debug(`Set doesSetRecoveryContext to true on rule type to get access to recovered alerts.`);
            return [];
          }

          const recoveredAlerts = (0, _lib.getRecoveredAlerts)(alerts, initialAlertIds);
          return Object.keys(recoveredAlerts !== null && recoveredAlerts !== void 0 ? recoveredAlerts : []).map(alertId => recoveredAlerts[alertId]);
        }
      };
    }
  };
}