"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseExperimentalConfigValue = exports.isValidExperimentalValue = exports.getExperimentalAllowedValues = exports.allowedExperimentalValues = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * A list of allowed values that can be used in `xpack.securitySolution.enableExperimental`.
 * This object is then used to validate and parse the value entered.
 */

const allowedExperimentalValues = Object.freeze({
  tGridEnabled: true,
  tGridEventRenderedViewEnabled: true,
  excludePoliciesInFilterEnabled: false,
  usersEnabled: true,
  disableIsolationUIPendingStatuses: false,
  riskyHostsEnabled: false,
  riskyUsersEnabled: false,
  pendingActionResponsesWithAck: true,
  policyListEnabled: true,
  groupedNavigation: true,

  /**
   * This is used for enabling the end to end tests for the security_solution telemetry.
   * We disable the telemetry since we don't have specific roles or permissions around it and
   * we don't want people to be able to violate security by getting access to whole documents
   * around telemetry they should not.
   * @see telemetry_detection_rules_preview_route.ts
   * @see test/detection_engine_api_integration/security_and_spaces/tests/telemetry/README.md
   */
  previewTelemetryUrlEnabled: false,

  /**
   * Enables the Endpoint response actions console in various areas of the app
   */
  responseActionsConsoleEnabled: false
});
exports.allowedExperimentalValues = allowedExperimentalValues;
const SecuritySolutionInvalidExperimentalValue = class extends Error {};
const allowedKeys = Object.keys(allowedExperimentalValues);
/**
 * Parses the string value used in `xpack.securitySolution.enableExperimental` kibana configuration,
 * which should be a string of values delimited by a comma (`,`)
 *
 * @param configValue
 * @throws SecuritySolutionInvalidExperimentalValue
 */

const parseExperimentalConfigValue = configValue => {
  const enabledFeatures = {};

  for (const value of configValue) {
    if (!isValidExperimentalValue(value)) {
      throw new SecuritySolutionInvalidExperimentalValue(`[${value}] is not valid.`);
    }

    enabledFeatures[value] = true;
  }

  return { ...allowedExperimentalValues,
    ...enabledFeatures
  };
};

exports.parseExperimentalConfigValue = parseExperimentalConfigValue;

const isValidExperimentalValue = value => {
  return allowedKeys.includes(value);
};

exports.isValidExperimentalValue = isValidExperimentalValue;

const getExperimentalAllowedValues = () => [...allowedKeys];

exports.getExperimentalAllowedValues = getExperimentalAllowedValues;