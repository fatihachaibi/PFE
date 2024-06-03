"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.APMEventClient = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _server = require("../../../../../../observability/server");

var _with_apm_span = require("../../../../utils/with_apm_span");

var _call_async_with_debug = require("../call_async_with_debug");

var _cancel_es_request_on_abort = require("../cancel_es_request_on_abort");

var _unpack_processor_events = require("./unpack_processor_events");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


class APMEventClient {
  constructor(config) {
    (0, _defineProperty2.default)(this, "esClient", void 0);
    (0, _defineProperty2.default)(this, "debug", void 0);
    (0, _defineProperty2.default)(this, "request", void 0);
    (0, _defineProperty2.default)(this, "indices", void 0);
    (0, _defineProperty2.default)(this, "includeFrozen", void 0);
    this.esClient = config.esClient;
    this.debug = config.debug;
    this.request = config.request;
    this.indices = config.indices;
    this.includeFrozen = config.options.includeFrozen;
  }

  async search(operationName, params) {
    const withProcessorEventFilter = (0, _unpack_processor_events.unpackProcessorEvents)(params, this.indices);
    const searchParams = { ...withProcessorEventFilter,
      ...(this.includeFrozen ? {
        ignore_throttled: false
      } : {}),
      ignore_unavailable: true,
      preference: 'any'
    }; // only "search" operation is currently supported

    const requestType = 'search';
    return (0, _call_async_with_debug.callAsyncWithDebug)({
      cb: () => {
        const searchPromise = (0, _with_apm_span.withApmSpan)(operationName, () => {
          const controller = new AbortController();
          return (0, _cancel_es_request_on_abort.cancelEsRequestOnAbort)(this.esClient.search(searchParams, {
            signal: controller.signal,
            meta: true
          }), this.request, controller);
        });
        return (0, _server.unwrapEsResponse)(searchPromise);
      },
      getDebugMessage: () => ({
        body: (0, _call_async_with_debug.getDebugBody)({
          params: searchParams,
          requestType,
          operationName
        }),
        title: (0, _call_async_with_debug.getDebugTitle)(this.request)
      }),
      isCalledWithInternalUser: false,
      debug: this.debug,
      request: this.request,
      requestType,
      operationName,
      requestParams: searchParams
    });
  }

  async eqlSearch(operationName, params) {
    const requestType = 'eql_search';
    const index = (0, _unpack_processor_events.processorEventsToIndex)(params.apm.events, this.indices);
    return (0, _call_async_with_debug.callAsyncWithDebug)({
      cb: () => {
        const {
          apm,
          ...rest
        } = params;
        const eqlSearchPromise = (0, _with_apm_span.withApmSpan)(operationName, () => {
          const controller = new AbortController();
          return (0, _cancel_es_request_on_abort.cancelEsRequestOnAbort)(this.esClient.eql.search({
            index,
            ...rest
          }, {
            signal: controller.signal,
            meta: true
          }), this.request, controller);
        });
        return (0, _server.unwrapEsResponse)(eqlSearchPromise);
      },
      getDebugMessage: () => ({
        body: (0, _call_async_with_debug.getDebugBody)({
          params,
          requestType,
          operationName
        }),
        title: (0, _call_async_with_debug.getDebugTitle)(this.request)
      }),
      isCalledWithInternalUser: false,
      debug: this.debug,
      request: this.request,
      requestType,
      operationName,
      requestParams: params
    });
  }

  async termsEnum(operationName, params) {
    const requestType = 'terms_enum';
    const {
      index
    } = (0, _unpack_processor_events.unpackProcessorEvents)(params, this.indices);
    return (0, _call_async_with_debug.callAsyncWithDebug)({
      cb: () => {
        const {
          apm,
          ...rest
        } = params;
        const termsEnumPromise = (0, _with_apm_span.withApmSpan)(operationName, () => {
          const controller = new AbortController();
          return (0, _cancel_es_request_on_abort.cancelEsRequestOnAbort)(this.esClient.termsEnum({
            index: Array.isArray(index) ? index.join(',') : index,
            ...rest
          }, {
            signal: controller.signal,
            meta: true
          }), this.request, controller);
        });
        return (0, _server.unwrapEsResponse)(termsEnumPromise);
      },
      getDebugMessage: () => ({
        body: (0, _call_async_with_debug.getDebugBody)({
          params,
          requestType,
          operationName
        }),
        title: (0, _call_async_with_debug.getDebugTitle)(this.request)
      }),
      isCalledWithInternalUser: false,
      debug: this.debug,
      request: this.request,
      requestType,
      operationName,
      requestParams: params
    });
  }

}

exports.APMEventClient = APMEventClient;