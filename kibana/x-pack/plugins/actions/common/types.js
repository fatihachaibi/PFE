"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvalidEmailReason = void 0;
exports.isActionTypeExecutorResult = isActionTypeExecutorResult;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

let InvalidEmailReason;
exports.InvalidEmailReason = InvalidEmailReason;

(function (InvalidEmailReason) {
  InvalidEmailReason["invalid"] = "invalid";
  InvalidEmailReason["notAllowed"] = "notAllowed";
})(InvalidEmailReason || (exports.InvalidEmailReason = InvalidEmailReason = {})); // the result returned from an action type executor function


const ActionTypeExecutorResultStatusValues = ['ok', 'error'];

function isActionTypeExecutorResult(result) {
  const unsafeResult = result;
  return unsafeResult && typeof (unsafeResult === null || unsafeResult === void 0 ? void 0 : unsafeResult.actionId) === 'string' && ActionTypeExecutorResultStatusValues.includes(unsafeResult === null || unsafeResult === void 0 ? void 0 : unsafeResult.status);
}