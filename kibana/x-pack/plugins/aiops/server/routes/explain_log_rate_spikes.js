"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defineExplainLogRateSpikesRoute = void 0;

var _rxjs = require("rxjs");

var _aiopsUtils = require("@kbn/aiops-utils");

var _explain_log_rate_spikes = require("../../common/api/explain_log_rate_spikes");

var _api = require("../../common/api");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const defineExplainLogRateSpikesRoute = (router, logger) => {
  router.post({
    path: _api.API_ENDPOINT.EXPLAIN_LOG_RATE_SPIKES,
    validate: {
      body: _explain_log_rate_spikes.aiopsExplainLogRateSpikesSchema
    }
  }, async (context, request, response) => {
    var _doc$_source;

    const index = request.body.index;
    const controller = new AbortController();
    let shouldStop = false;
    request.events.aborted$.subscribe(() => {
      shouldStop = true;
      controller.abort();
    });
    request.events.completed$.subscribe(() => {
      shouldStop = true;
      controller.abort();
    });
    const search = await context.search;
    const res = await (0, _rxjs.firstValueFrom)(search.search({
      params: {
        index,
        body: {
          size: 1
        }
      }
    }, {
      abortSignal: controller.signal
    }));
    const doc = res.rawResponse.hits.hits.pop();
    const fields = Object.keys((_doc$_source = doc === null || doc === void 0 ? void 0 : doc._source) !== null && _doc$_source !== void 0 ? _doc$_source : {});
    const {
      end,
      push,
      responseWithHeaders
    } = (0, _aiopsUtils.streamFactory)(request.headers);

    async function pushField() {
      setTimeout(() => {
        if (shouldStop) {
          end();
          return;
        }

        const field = fields.pop();

        if (field !== undefined) {
          push((0, _explain_log_rate_spikes.addFieldsAction)([field]));
          pushField();
        } else {
          end();
        } // This is just exemplary demo code so we're adding a random timout of 0-250ms to each
        // stream push to simulate string chunks appearing on the client with some randomness.

      }, Math.random() * 250);
    }

    pushField();
    return response.ok(responseWithHeaders);
  });
};

exports.defineExplainLogRateSpikesRoute = defineExplainLogRateSpikesRoute;