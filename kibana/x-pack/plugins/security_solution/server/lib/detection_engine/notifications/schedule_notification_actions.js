"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduleNotificationActions = void 0;

var _fp = require("lodash/fp");

var _expand_dotted = require("../../../../common/utils/expand_dotted");

var _signal_aad_mapping = _interopRequireDefault(require("../routes/index/signal_aad_mapping.json"));

var _utils = require("../signals/utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const convertToLegacyAlert = alert => Object.entries(_signal_aad_mapping.default).reduce((acc, [legacyField, aadField]) => {
  const val = alert[aadField];

  if (val != null) {
    return { ...acc,
      [legacyField]: val
    };
  }

  return acc;
}, {});
/*
 * Formats alerts before sending to `scheduleActions`. We augment the context with
 * the equivalent "legacy" alert context so that pre-8.0 actions will continue to work.
 */


const formatAlertsForNotificationActions = alerts => {
  return alerts.map(alert => (0, _utils.isDetectionAlert)(alert) ? { ...(0, _expand_dotted.expandDottedObject)(convertToLegacyAlert(alert)),
    ...(0, _expand_dotted.expandDottedObject)(alert)
  } : alert);
};

const scheduleNotificationActions = ({
  alertInstance,
  signalsCount,
  resultsLink = '',
  ruleParams,
  signals
}) => alertInstance.replaceState({
  signals_count: signalsCount
}).scheduleActions('default', {
  results_link: resultsLink,
  rule: (0, _fp.mapKeys)(_fp.snakeCase, ruleParams),
  alerts: formatAlertsForNotificationActions(signals)
});

exports.scheduleNotificationActions = scheduleNotificationActions;