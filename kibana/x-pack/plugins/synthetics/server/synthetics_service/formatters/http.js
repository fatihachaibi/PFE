"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.httpFormatters = void 0;

var _common = require("./common");

var _tls = require("./tls");

var _monitor_management = require("../../../common/runtime_types/monitor_management");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const httpFormatters = {
  [_monitor_management.ConfigKey.METADATA]: fields => (0, _common.objectFormatter)(fields[_monitor_management.ConfigKey.METADATA]),
  [_monitor_management.ConfigKey.URLS]: null,
  [_monitor_management.ConfigKey.MAX_REDIRECTS]: null,
  [_monitor_management.ConfigKey.USERNAME]: null,
  [_monitor_management.ConfigKey.PASSWORD]: null,
  [_monitor_management.ConfigKey.PROXY_URL]: null,
  [_monitor_management.ConfigKey.RESPONSE_BODY_CHECK_NEGATIVE]: fields => (0, _common.arrayFormatter)(fields[_monitor_management.ConfigKey.RESPONSE_BODY_CHECK_NEGATIVE]),
  [_monitor_management.ConfigKey.RESPONSE_BODY_CHECK_POSITIVE]: fields => (0, _common.arrayFormatter)(fields[_monitor_management.ConfigKey.RESPONSE_BODY_CHECK_POSITIVE]),
  [_monitor_management.ConfigKey.RESPONSE_BODY_INDEX]: null,
  [_monitor_management.ConfigKey.RESPONSE_HEADERS_CHECK]: fields => (0, _common.objectFormatter)(fields[_monitor_management.ConfigKey.RESPONSE_HEADERS_CHECK]),
  [_monitor_management.ConfigKey.RESPONSE_HEADERS_INDEX]: null,
  [_monitor_management.ConfigKey.RESPONSE_STATUS_CHECK]: fields => (0, _common.arrayFormatter)(fields[_monitor_management.ConfigKey.RESPONSE_STATUS_CHECK]),
  [_monitor_management.ConfigKey.REQUEST_BODY_CHECK]: fields => {
    var _fields$ConfigKey$REQ;

    return ((_fields$ConfigKey$REQ = fields[_monitor_management.ConfigKey.REQUEST_BODY_CHECK]) === null || _fields$ConfigKey$REQ === void 0 ? void 0 : _fields$ConfigKey$REQ.value) || null;
  },
  [_monitor_management.ConfigKey.REQUEST_HEADERS_CHECK]: fields => (0, _common.objectFormatter)(fields[_monitor_management.ConfigKey.REQUEST_HEADERS_CHECK]),
  [_monitor_management.ConfigKey.REQUEST_METHOD_CHECK]: null,
  ..._tls.tlsFormatters,
  ..._common.commonFormatters
};
exports.httpFormatters = httpFormatters;