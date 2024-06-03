"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.format = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const format = theCase => {
  var _ref;

  const {
    caseId = theCase.id
  } = (_ref = theCase.connector.fields) !== null && _ref !== void 0 ? _ref : {};
  return {
    caseId
  };
};

exports.format = format;