"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postClusterResponsePayloadRT = exports.postClusterRequestPayloadRT = exports.postClusterRequestParamsRT = void 0;

var rt = _interopRequireWildcard(require("io-ts"));

var _shared = require("../shared");

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


const postClusterRequestParamsRT = rt.type({
  clusterUuid: _shared.clusterUuidRT
});
exports.postClusterRequestParamsRT = postClusterRequestParamsRT;
const postClusterRequestPayloadRT = rt.intersection([rt.partial({
  ccs: _shared.ccsRT
}), rt.type({
  timeRange: _shared.timeRangeRT,
  codePaths: rt.array(rt.string)
})]);
exports.postClusterRequestPayloadRT = postClusterRequestPayloadRT;
const postClusterResponsePayloadRT = rt.type({// TODO: add payload entries
});
exports.postClusterResponsePayloadRT = postClusterResponsePayloadRT;