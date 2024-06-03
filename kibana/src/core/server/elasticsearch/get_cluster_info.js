"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClusterInfo$ = getClusterInfo$;

var _rxjs = require("rxjs");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Returns the cluster info from the Elasticsearch cluster.
 * @param internalClient Elasticsearch client
 * @private
 */
function getClusterInfo$(internalClient) {
  return (0, _rxjs.defer)(() => internalClient.info()).pipe((0, _rxjs.map)(info => ({
    cluster_name: info.cluster_name,
    cluster_uuid: info.cluster_uuid,
    cluster_version: info.version.number
  })), (0, _rxjs.retry)({
    delay: 1000
  }), (0, _rxjs.shareReplay)(1));
}