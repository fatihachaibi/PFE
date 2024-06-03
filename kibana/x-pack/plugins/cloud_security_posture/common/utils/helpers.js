"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNonNullable = exports.extractErrorMessage = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * @example
 * declare const foo: Array<string | undefined | null>
 * foo.filter(isNonNullable) // foo is Array<string>
 */

const isNonNullable = v => v !== null && v !== undefined;

exports.isNonNullable = isNonNullable;

const extractErrorMessage = (e, defaultMessage = 'Unknown Error') => {
  if (e instanceof Error) return e.message;
  if (typeof e === 'string') return e;
  return defaultMessage; // TODO: i18n
};

exports.extractErrorMessage = extractErrorMessage;