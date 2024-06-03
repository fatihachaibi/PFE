"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetRuleExecutionEventsRequestParams = exports.GetRuleExecutionEventsQueryParams = exports.DefaultStatusFiltersStringArray = exports.DefaultSortOrder = exports.DefaultSortField = void 0;

var t = _interopRequireWildcard(require("io-ts"));

var _securitysolutionIoTsAlertingTypes = require("@kbn/securitysolution-io-ts-alerting-types");

var _securitysolutionIoTsTypes = require("@kbn/securitysolution-io-ts-types");

var _common = require("../common");

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Types the DefaultStatusFiltersStringArray as:
 *   - If undefined, then a default array will be set
 *   - If an array is sent in, then the array will be validated to ensure all elements are a ruleExecutionStatus (or that the array is empty)
 */


const DefaultStatusFiltersStringArray = new t.Type('DefaultStatusFiltersStringArray', t.array(_common.ruleExecutionStatus).is, (input, context) => {
  if (input == null) {
    return t.success([]);
  } else if (typeof input === 'string') {
    if (input === '') {
      return t.success([]);
    } else {
      return t.array(_common.ruleExecutionStatus).validate(input.split(','), context);
    }
  } else {
    return t.array(_common.ruleExecutionStatus).validate(input, context);
  }
}, t.identity);
/**
 * Types the DefaultSortField as:
 *   - If undefined, then a default sort field of 'timestamp' will be set
 *  - If a string is sent in, then the string will be validated to ensure it is as valid sortFields
 */

exports.DefaultStatusFiltersStringArray = DefaultStatusFiltersStringArray;
const DefaultSortField = new t.Type('DefaultSortField', _common.executionLogTableSortColumns.is, (input, context) => input == null ? t.success('timestamp') : _common.executionLogTableSortColumns.validate(input, context), t.identity);
exports.DefaultSortField = DefaultSortField;
const sortOrder = t.keyof({
  asc: null,
  desc: null
});
/**
 * Types the DefaultSortOrder as:
 *   - If undefined, then a default sort order of 'desc' will be set
 *   - If a string is sent in, then the string will be validated to ensure it is as valid sortOrder
 */

const DefaultSortOrder = new t.Type('DefaultSortOrder', sortOrder.is, (input, context) => input == null ? t.success('desc') : sortOrder.validate(input, context), t.identity);
/**
 * Route Request Params
 */

exports.DefaultSortOrder = DefaultSortOrder;
const GetRuleExecutionEventsRequestParams = t.exact(t.type({
  ruleId: t.string
}));
/**
 * Route Query Params (as constructed from the above codecs)
 */

exports.GetRuleExecutionEventsRequestParams = GetRuleExecutionEventsRequestParams;
const GetRuleExecutionEventsQueryParams = t.exact(t.type({
  start: _securitysolutionIoTsTypes.IsoDateString,
  end: _securitysolutionIoTsTypes.IsoDateString,
  query_text: _securitysolutionIoTsTypes.DefaultEmptyString,
  // default to "" if not sent in during decode
  status_filters: DefaultStatusFiltersStringArray,
  // defaults to empty array if not sent in during decode
  per_page: _securitysolutionIoTsAlertingTypes.DefaultPerPage,
  // defaults to "20" if not sent in during decode
  page: _securitysolutionIoTsAlertingTypes.DefaultPage,
  // defaults to "1" if not sent in during decode
  sort_field: DefaultSortField,
  // defaults to "desc" if not sent in during decode
  sort_order: DefaultSortOrder // defaults to "timestamp" if not sent in during decode

}));
exports.GetRuleExecutionEventsQueryParams = GetRuleExecutionEventsQueryParams;