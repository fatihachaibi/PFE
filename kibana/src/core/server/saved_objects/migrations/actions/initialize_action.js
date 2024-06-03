"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAction = exports.checkClusterRoutingAllocationEnabledTask = void 0;

var TaskEither = _interopRequireWildcard(require("fp-ts/lib/TaskEither"));

var Either = _interopRequireWildcard(require("fp-ts/lib/Either"));

var _pipeable = require("fp-ts/lib/pipeable");

var _catch_retryable_es_client_errors = require("./catch_retryable_es_client_errors");

var _fetch_indices = require("./fetch_indices");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const routingAllocationEnable = 'cluster.routing.allocation.enable';

const checkClusterRoutingAllocationEnabledTask = ({
  client
}) => () => {
  return client.cluster.getSettings({
    flat_settings: true
  }).then(settings => {
    var _settings$transient$r, _settings$transient, _settings$persistent;

    // transient settings take preference over persistent settings
    const clusterRoutingAllocation = (_settings$transient$r = settings === null || settings === void 0 ? void 0 : (_settings$transient = settings.transient) === null || _settings$transient === void 0 ? void 0 : _settings$transient[routingAllocationEnable]) !== null && _settings$transient$r !== void 0 ? _settings$transient$r : settings === null || settings === void 0 ? void 0 : (_settings$persistent = settings.persistent) === null || _settings$persistent === void 0 ? void 0 : _settings$persistent[routingAllocationEnable];
    const clusterRoutingAllocationEnabledIsAll = clusterRoutingAllocation === undefined || clusterRoutingAllocation === 'all';

    if (!clusterRoutingAllocationEnabledIsAll) {
      return Either.left({
        type: 'incompatible_cluster_routing_allocation'
      });
    } else {
      return Either.right({});
    }
  }).catch(_catch_retryable_es_client_errors.catchRetryableEsClientErrors);
};

exports.checkClusterRoutingAllocationEnabledTask = checkClusterRoutingAllocationEnabledTask;

const initAction = ({
  client,
  indices
}) => {
  return (0, _pipeable.pipe)(checkClusterRoutingAllocationEnabledTask({
    client
  }), TaskEither.chainW(value => {
    return (0, _fetch_indices.fetchIndices)({
      client,
      indices
    });
  }));
};

exports.initAction = initAction;