"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sqlSearchStrategyProvider = void 0;

var _operators = require("rxjs/operators");

var _server = require("../../../../../kibana_utils/server");

var _common = require("../../../../common");

var _request_utils = require("./request_utils");

var _response_utils = require("./response_utils");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const sqlSearchStrategyProvider = (logger, useInternalUser = false) => {
  async function cancelAsyncSearch(id, esClient) {
    try {
      const client = useInternalUser ? esClient.asInternalUser : esClient.asCurrentUser;
      await client.sql.deleteAsync({
        id
      });
    } catch (e) {
      throw (0, _server.getKbnServerError)(e);
    }
  }

  function asyncSearch({
    id,
    ...request
  }, options, {
    esClient
  }) {
    const client = useInternalUser ? esClient.asInternalUser : esClient.asCurrentUser; // disable search sessions until session task manager supports SQL
    // https://github.com/elastic/kibana/issues/127880
    // const sessionConfig = searchSessionsClient.getConfig();

    const sessionConfig = null;

    const search = async () => {
      if (id) {
        var _request$params$forma, _request$params;

        const params = {
          format: (_request$params$forma = (_request$params = request.params) === null || _request$params === void 0 ? void 0 : _request$params.format) !== null && _request$params$forma !== void 0 ? _request$params$forma : 'json',
          ...(0, _request_utils.getDefaultAsyncGetParams)(sessionConfig, options),
          id
        };
        const {
          body,
          headers
        } = await client.sql.getAsync(params, {
          signal: options.abortSignal,
          meta: true
        });
        return (0, _response_utils.toAsyncKibanaSearchResponse)(body, headers === null || headers === void 0 ? void 0 : headers.warning);
      } else {
        var _request$params$forma2, _request$params2;

        const params = {
          format: (_request$params$forma2 = (_request$params2 = request.params) === null || _request$params2 === void 0 ? void 0 : _request$params2.format) !== null && _request$params$forma2 !== void 0 ? _request$params$forma2 : 'json',
          ...(0, _request_utils.getDefaultAsyncSubmitParams)(sessionConfig, options),
          ...request.params
        };
        const {
          headers,
          body
        } = await client.sql.query(params, {
          signal: options.abortSignal,
          meta: true
        });
        return (0, _response_utils.toAsyncKibanaSearchResponse)(body, headers === null || headers === void 0 ? void 0 : headers.warning);
      }
    };

    const cancel = async () => {
      if (id) {
        await cancelAsyncSearch(id, esClient);
      }
    };

    return (0, _common.pollSearch)(search, cancel, options).pipe((0, _operators.tap)(response => id = response.id), (0, _operators.catchError)(e => {
      throw (0, _server.getKbnServerError)(e);
    }));
  }

  return {
    /**
     * @param request
     * @param options
     * @param deps `SearchStrategyDependencies`
     * @returns `Observable<IEsSearchResponse<any>>`
     * @throws `KbnServerError`
     */
    search: (request, options, deps) => {
      logger.debug(`sql search: search request=${JSON.stringify(request)}`);
      return asyncSearch(request, options, deps);
    },

    /**
     * @param id async search ID to cancel, as returned from _async_search API
     * @param options
     * @param deps `SearchStrategyDependencies`
     * @returns `Promise<void>`
     * @throws `KbnServerError`
     */
    cancel: async (id, options, {
      esClient
    }) => {
      logger.debug(`sql search: cancel async_search_id=${id}`);
      await cancelAsyncSearch(id, esClient);
    },

    /**
     *
     * @param id async search ID to extend, as returned from _async_search API
     * @param keepAlive
     * @param options
     * @param deps `SearchStrategyDependencies`
     * @returns `Promise<void>`
     * @throws `KbnServerError`
     */
    extend: async (id, keepAlive, options, {
      esClient
    }) => {
      logger.debug(`sql search: extend async_search_id=${id}  keep_alive=${keepAlive}`);

      try {
        const client = useInternalUser ? esClient.asInternalUser : esClient.asCurrentUser;
        await client.sql.getAsync({
          id,
          keep_alive: keepAlive
        });
      } catch (e) {
        throw (0, _server.getKbnServerError)(e);
      }
    }
  };
};

exports.sqlSearchStrategyProvider = sqlSearchStrategyProvider;