"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformValidateBulkError = exports.transformValidate = exports.newTransformValidate = void 0;

var _securitysolutionIoTsUtils = require("@kbn/securitysolution-io-ts-utils");

var _request = require("../../../../../common/detection_engine/schemas/request");

var _rules_schema = require("../../../../../common/detection_engine/schemas/response/rules_schema");

var _types = require("../../rules/types");

var _utils = require("../utils");

var _utils2 = require("./utils");

var _rule_converters = require("../../schemas/rule_converters");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const transformValidate = (rule, ruleExecutionSummary, legacyRuleActions) => {
  const transformed = (0, _utils2.transform)(rule, ruleExecutionSummary, legacyRuleActions);

  if (transformed == null) {
    return [null, 'Internal error transforming'];
  } else {
    return (0, _securitysolutionIoTsUtils.validateNonExact)(transformed, _rules_schema.rulesSchema);
  }
};

exports.transformValidate = transformValidate;

const newTransformValidate = (rule, ruleExecutionSummary, legacyRuleActions) => {
  const transformed = (0, _utils2.transform)(rule, ruleExecutionSummary, legacyRuleActions);

  if (transformed == null) {
    return [null, 'Internal error transforming'];
  } else {
    return (0, _securitysolutionIoTsUtils.validateNonExact)(transformed, _request.fullResponseSchema);
  }
};

exports.newTransformValidate = newTransformValidate;

const transformValidateBulkError = (ruleId, rule, ruleExecutionSummary) => {
  if ((0, _types.isAlertType)(rule)) {
    const transformed = (0, _rule_converters.internalRuleToAPIResponse)(rule, ruleExecutionSummary);
    const [validated, errors] = (0, _securitysolutionIoTsUtils.validateNonExact)(transformed, _rules_schema.rulesSchema);

    if (errors != null || validated == null) {
      return (0, _utils.createBulkErrorObject)({
        ruleId,
        statusCode: 500,
        message: errors !== null && errors !== void 0 ? errors : 'Internal error transforming'
      });
    } else {
      return validated;
    }
  } else {
    return (0, _utils.createBulkErrorObject)({
      ruleId,
      statusCode: 500,
      message: 'Internal error transforming'
    });
  }
};

exports.transformValidateBulkError = transformValidateBulkError;