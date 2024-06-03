"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetupGuide = exports.RequiredFieldArray = exports.RequiredField = exports.RelatedIntegrationArray = exports.RelatedIntegration = void 0;

var t = _interopRequireWildcard(require("io-ts"));

var _securitysolutionIoTsTypes = require("@kbn/securitysolution-io-ts-types");

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


const RelatedIntegration = t.exact(t.intersection([t.type({
  package: _securitysolutionIoTsTypes.NonEmptyString,
  version: _securitysolutionIoTsTypes.NonEmptyString
}), t.partial({
  integration: _securitysolutionIoTsTypes.NonEmptyString
})]));
/**
 * Array of related integrations.
 *
 * @example
 * const x: RelatedIntegrationArray = [
 *   {
 *     package: 'windows',
 *     version: '1.5.x',
 *   },
 *   {
 *     package: 'azure',
 *     version: '~1.1.6',
 *     integration: 'activitylogs',
 *   },
 * ];
 */

exports.RelatedIntegration = RelatedIntegration;
const RelatedIntegrationArray = t.array(RelatedIntegration); // -------------------------------------------------------------------------------------------------
// Required fields

/**
 * Almost all types of Security rules check source event documents for a match to some kind of
 * query or filter. If a document has certain field with certain values, then it's a match and
 * the rule will generate an alert.
 *
 * Required field is an event field that must be present in the source indices of a given rule.
 *
 * @example
 * const standardEcsField: RequiredField = {
 *   name: 'event.action',
 *   type: 'keyword',
 *   ecs: true,
 * };
 *
 * @example
 * const nonEcsField: RequiredField = {
 *   name: 'winlog.event_data.AttributeLDAPDisplayName',
 *   type: 'keyword',
 *   ecs: false,
 * };
 */

exports.RelatedIntegrationArray = RelatedIntegrationArray;
const RequiredField = t.exact(t.type({
  name: _securitysolutionIoTsTypes.NonEmptyString,
  type: _securitysolutionIoTsTypes.NonEmptyString,
  ecs: t.boolean
}));
/**
 * Array of event fields that must be present in the source indices of a given rule.
 *
 * @example
 * const x: RequiredFieldArray = [
 *   {
 *     name: 'event.action',
 *     type: 'keyword',
 *     ecs: true,
 *   },
 *   {
 *     name: 'event.code',
 *     type: 'keyword',
 *     ecs: true,
 *   },
 *   {
 *     name: 'winlog.event_data.AttributeLDAPDisplayName',
 *     type: 'keyword',
 *     ecs: false,
 *   },
 * ];
 */

exports.RequiredField = RequiredField;
const RequiredFieldArray = t.array(RequiredField); // -------------------------------------------------------------------------------------------------
// Setup guide

/**
 * Any instructions for the user for setting up their environment in order to start receiving
 * source events for a given rule.
 *
 * It's a multiline text. Markdown is supported.
 */

exports.RequiredFieldArray = RequiredFieldArray;
const SetupGuide = t.string;
exports.SetupGuide = SetupGuide;