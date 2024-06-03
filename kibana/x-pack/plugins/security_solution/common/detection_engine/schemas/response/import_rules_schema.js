"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.importRulesSchema = void 0;

var _securitysolutionIoTsTypes = require("@kbn/securitysolution-io-ts-types");

var t = _interopRequireWildcard(require("io-ts"));

var _schemas = require("../common/schemas");

var _error_schema = require("./error_schema");

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


const importRulesSchema = t.exact(t.type({
  exceptions_success: t.boolean,
  exceptions_success_count: _securitysolutionIoTsTypes.PositiveInteger,
  exceptions_errors: t.array(_error_schema.errorSchema),
  rules_count: _securitysolutionIoTsTypes.PositiveInteger,
  success: _schemas.success,
  success_count: _schemas.success_count,
  errors: t.array(_error_schema.errorSchema)
}));
exports.importRulesSchema = importRulesSchema;