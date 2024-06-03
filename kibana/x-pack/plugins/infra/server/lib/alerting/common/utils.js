"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateIsStringElasticsearchJSONFilter = exports.oneOfLiterals = exports.getViewInAppUrlInventory = exports.getViewInAppUrl = exports.createScopedLogger = exports.UNGROUPED_FACTORY_KEY = void 0;

var _lodash = require("lodash");

var _configSchema = require("@kbn/config-schema");

var _ruleDataUtils = require("@kbn/rule-data-utils");

var _parse_technical_fields = require("../../../../../rule_registry/common/parse_technical_fields");

var _alert_link = require("../../../../common/alerting/metrics/alert_link");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const oneOfLiterals = arrayOfLiterals => _configSchema.schema.string({
  validate: value => arrayOfLiterals.includes(value) ? undefined : `must be one of ${arrayOfLiterals.join(' | ')}`
});

exports.oneOfLiterals = oneOfLiterals;

const validateIsStringElasticsearchJSONFilter = value => {
  if (value === '') {
    // Allow clearing the filter.
    return;
  }

  const errorMessage = 'filterQuery must be a valid Elasticsearch filter expressed in JSON';

  try {
    const parsedValue = JSON.parse(value);

    if (!(0, _lodash.isEmpty)(parsedValue.bool)) {
      return undefined;
    }

    return errorMessage;
  } catch (e) {
    return errorMessage;
  }
};

exports.validateIsStringElasticsearchJSONFilter = validateIsStringElasticsearchJSONFilter;
const UNGROUPED_FACTORY_KEY = '*';
exports.UNGROUPED_FACTORY_KEY = UNGROUPED_FACTORY_KEY;

const createScopedLogger = (logger, scope, alertExecutionDetails) => {
  const scopedLogger = logger.get(scope);

  const fmtMsg = msg => `[AlertId: ${alertExecutionDetails.alertId}][ExecutionId: ${alertExecutionDetails.executionId}] ${msg}`;

  return { ...scopedLogger,
    info: (msg, meta) => scopedLogger.info(fmtMsg(msg), meta),
    debug: (msg, meta) => scopedLogger.debug(fmtMsg(msg), meta),
    trace: (msg, meta) => scopedLogger.trace(fmtMsg(msg), meta),
    warn: (errorOrMessage, meta) => {
      if ((0, _lodash.isError)(errorOrMessage)) {
        scopedLogger.warn(errorOrMessage, meta);
      } else {
        scopedLogger.warn(fmtMsg(errorOrMessage), meta);
      }
    },
    error: (errorOrMessage, meta) => {
      if ((0, _lodash.isError)(errorOrMessage)) {
        scopedLogger.error(errorOrMessage, meta);
      } else {
        scopedLogger.error(fmtMsg(errorOrMessage), meta);
      }
    },
    fatal: (errorOrMessage, meta) => {
      if ((0, _lodash.isError)(errorOrMessage)) {
        scopedLogger.fatal(errorOrMessage, meta);
      } else {
        scopedLogger.fatal(fmtMsg(errorOrMessage), meta);
      }
    }
  };
};

exports.createScopedLogger = createScopedLogger;

const getViewInAppUrl = (basePath, relativeViewInAppUrl) => basePath.publicBaseUrl ? new URL(basePath.prepend(relativeViewInAppUrl), basePath.publicBaseUrl).toString() : relativeViewInAppUrl;

exports.getViewInAppUrl = getViewInAppUrl;

const getViewInAppUrlInventory = (criteria, nodeType, timestamp, basePath) => {
  const {
    metric,
    customMetric
  } = criteria[0];
  const fields = {
    [`${_ruleDataUtils.ALERT_RULE_PARAMETERS}.criteria.metric`]: [metric],
    [`${_ruleDataUtils.ALERT_RULE_PARAMETERS}.criteria.customMetric.id`]: [customMetric === null || customMetric === void 0 ? void 0 : customMetric.id],
    [`${_ruleDataUtils.ALERT_RULE_PARAMETERS}.criteria.customMetric.aggregation`]: [customMetric === null || customMetric === void 0 ? void 0 : customMetric.aggregation],
    [`${_ruleDataUtils.ALERT_RULE_PARAMETERS}.criteria.customMetric.field`]: [customMetric === null || customMetric === void 0 ? void 0 : customMetric.field],
    [`${_ruleDataUtils.ALERT_RULE_PARAMETERS}.nodeType`]: [nodeType],
    [_ruleDataUtils.TIMESTAMP]: timestamp
  };
  const relativeViewInAppUrl = (0, _alert_link.getInventoryViewInAppUrl)((0, _parse_technical_fields.parseTechnicalFields)(fields, true));
  return getViewInAppUrl(basePath, relativeViewInAppUrl);
};

exports.getViewInAppUrlInventory = getViewInAppUrlInventory;