"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSnoozeDate = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const validateSnoozeDate = date => {
  const parsedValue = Date.parse(date);
  if (isNaN(parsedValue)) return `Invalid date: ${date}`;
  if (parsedValue <= Date.now()) return `Invalid snooze date as it is in the past: ${date}`;
  return;
};

exports.validateSnoozeDate = validateSnoozeDate;