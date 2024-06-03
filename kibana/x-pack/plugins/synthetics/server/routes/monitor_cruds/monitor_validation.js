"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateMonitor = validateMonitor;
exports.validateProjectMonitor = validateProjectMonitor;

var _Either = require("fp-ts/lib/Either");

var _securitysolutionIoTsUtils = require("@kbn/securitysolution-io-ts-utils");

var _runtime_types = require("../../../common/runtime_types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const monitorTypeToCodecMap = {
  [_runtime_types.DataStream.ICMP]: _runtime_types.ICMPSimpleFieldsCodec,
  [_runtime_types.DataStream.TCP]: _runtime_types.TCPFieldsCodec,
  [_runtime_types.DataStream.HTTP]: _runtime_types.HTTPFieldsCodec,
  [_runtime_types.DataStream.BROWSER]: _runtime_types.BrowserFieldsCodec
};
/**
 * Validates monitor fields with respect to the relevant Codec identified by object's 'type' property.
 * @param monitorFields {MonitorFields} The mixed type representing the possible monitor payload from UI.
 */

function validateMonitor(monitorFields) {
  const {
    [_runtime_types.ConfigKey.MONITOR_TYPE]: monitorType
  } = monitorFields;

  const decodedType = _runtime_types.DataStreamCodec.decode(monitorType);

  if ((0, _Either.isLeft)(decodedType)) {
    return {
      valid: false,
      reason: `Monitor type is invalid`,
      details: (0, _securitysolutionIoTsUtils.formatErrors)(decodedType.left).join(' | '),
      payload: monitorFields
    };
  }

  const codec = monitorTypeToCodecMap[monitorType];

  if (!codec) {
    return {
      valid: false,
      reason: `Payload is not a valid monitor object`,
      details: '',
      payload: monitorFields
    };
  } // Cast it to ICMPCodec to satisfy typing. During runtime, correct codec will be used to decode.


  const decodedMonitor = codec.decode(monitorFields);

  if ((0, _Either.isLeft)(decodedMonitor)) {
    return {
      valid: false,
      reason: `Monitor is not a valid monitor of type ${monitorType}`,
      details: (0, _securitysolutionIoTsUtils.formatErrors)(decodedMonitor.left).join(' | '),
      payload: monitorFields
    };
  }

  return {
    valid: true,
    reason: '',
    details: '',
    payload: monitorFields
  };
}

function validateProjectMonitor(monitorFields, projectId) {
  const locationsError = monitorFields.locations && monitorFields.locations.length === 0 ? 'Invalid value "[]" supplied to field "locations"' : ''; // Cast it to ICMPCodec to satisfy typing. During runtime, correct codec will be used to decode.

  const decodedMonitor = _runtime_types.ProjectBrowserMonitorCodec.decode(monitorFields);

  if ((0, _Either.isLeft)(decodedMonitor)) {
    return {
      valid: false,
      reason: `Failed to save or update monitor. Configuration is not valid`,
      details: [...(0, _securitysolutionIoTsUtils.formatErrors)(decodedMonitor.left), locationsError].filter(error => error !== '').join(' | '),
      payload: monitorFields
    };
  }

  if (locationsError) {
    return {
      valid: false,
      reason: `Failed to save or update monitor. Configuration is not valid`,
      details: locationsError,
      payload: monitorFields
    };
  }

  return {
    valid: true,
    reason: '',
    details: '',
    payload: monitorFields
  };
}