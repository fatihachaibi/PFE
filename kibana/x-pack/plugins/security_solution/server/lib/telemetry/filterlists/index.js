"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyAllowlistedFields = copyAllowlistedFields;
Object.defineProperty(exports, "endpointAllowlistFields", {
  enumerable: true,
  get: function () {
    return _endpoint_alerts.endpointAllowlistFields;
  }
});
Object.defineProperty(exports, "exceptionListAllowlistFields", {
  enumerable: true,
  get: function () {
    return _exception_lists.exceptionListAllowlistFields;
  }
});
Object.defineProperty(exports, "prebuiltRuleAllowlistFields", {
  enumerable: true,
  get: function () {
    return _prebuilt_rules_alerts.prebuiltRuleAllowlistFields;
  }
});

var _endpoint_alerts = require("./endpoint_alerts");

var _exception_lists = require("./exception_lists");

var _prebuilt_rules_alerts = require("./prebuilt_rules_alerts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Filters out Key/Values not required for downstream analysis
 * @returns TelemetryEvent with explicitly required fields
 */


function copyAllowlistedFields(allowlist, event) {
  return Object.entries(allowlist).reduce((newEvent, [allowKey, allowValue]) => {
    const eventValue = event[allowKey];

    if (eventValue !== null && eventValue !== undefined) {
      if (allowValue === true) {
        return { ...newEvent,
          [allowKey]: eventValue
        };
      } else if (typeof allowValue === 'object' && Array.isArray(eventValue)) {
        const subValues = eventValue.filter(v => typeof v === 'object');
        return { ...newEvent,
          [allowKey]: subValues.map(v => copyAllowlistedFields(allowValue, v))
        };
      } else if (typeof allowValue === 'object' && typeof eventValue === 'object') {
        const values = copyAllowlistedFields(allowValue, eventValue);
        return { ...newEvent,
          ...(Object.keys(values).length > 0 ? {
            [allowKey]: values
          } : {})
        };
      }
    }

    return newEvent;
  }, {});
}