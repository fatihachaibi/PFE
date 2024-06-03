"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCommonDefaultAsyncGetParams = getCommonDefaultAsyncGetParams;
exports.getCommonDefaultAsyncSubmitParams = getCommonDefaultAsyncSubmitParams;

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 @internal
 */
function getCommonDefaultAsyncSubmitParams(searchSessionsConfig, options) {
  const useSearchSessions = (searchSessionsConfig === null || searchSessionsConfig === void 0 ? void 0 : searchSessionsConfig.enabled) && !!options.sessionId;
  const keepAlive = useSearchSessions ? `${searchSessionsConfig.defaultExpiration.asMilliseconds()}ms` : '1m';
  return {
    // Wait up to 100ms for the response to return
    wait_for_completion_timeout: '100ms',
    // If search sessions are used, store and get an async ID even for short running requests.
    keep_on_completion: useSearchSessions,
    // The initial keepalive is as defined in defaultExpiration if search sessions are used or 1m otherwise.
    keep_alive: keepAlive
  };
}
/**
 @internal
 */


function getCommonDefaultAsyncGetParams(searchSessionsConfig, options) {
  const useSearchSessions = (searchSessionsConfig === null || searchSessionsConfig === void 0 ? void 0 : searchSessionsConfig.enabled) && !!options.sessionId;
  return {
    // Wait up to 100ms for the response to return
    wait_for_completion_timeout: '100ms',
    ...(useSearchSessions ? // Don't change the expiration of search requests that are tracked in a search session
    undefined : {
      // We still need to do polling for searches not within the context of a search session or when search session disabled
      keep_alive: '1m'
    })
  };
}