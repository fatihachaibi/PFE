"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readWithPit = void 0;

var Either = _interopRequireWildcard(require("fp-ts/lib/Either"));

var _catch_retryable_es_client_errors = require("./catch_retryable_es_client_errors");

var _open_pit = require("./open_pit");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/*
 * Requests documents from the index using PIT mechanism.
 * */
const readWithPit = ({
  client,
  pitId,
  query,
  batchSize,
  searchAfter,
  seqNoPrimaryTerm
}) => () => {
  return client.search({
    allow_partial_search_results: false,
    seq_no_primary_term: seqNoPrimaryTerm,
    // Sort fields are required to use searchAfter
    sort: '_shard_doc:asc',
    pit: {
      id: pitId,
      keep_alive: _open_pit.pitKeepAlive
    },
    size: batchSize,
    search_after: searchAfter,

    /**
     * We want to know how many documents we need to process so we can log the progress.
     * But we also want to increase the performance of these requests,
     * so we ask ES to report the total count only on the first request (when searchAfter does not exist)
     */
    track_total_hits: typeof searchAfter === 'undefined',
    query
  }).then(body => {
    var _body$hits$total;

    const totalHits = typeof body.hits.total === 'number' ? body.hits.total // This format is to be removed in 8.0
    : (_body$hits$total = body.hits.total) === null || _body$hits$total === void 0 ? void 0 : _body$hits$total.value;
    const hits = body.hits.hits;

    if (hits.length > 0) {
      return Either.right({
        // @ts-expect-error @elastic/elasticsearch _source is optional
        outdatedDocuments: hits,
        lastHitSortValue: hits[hits.length - 1].sort,
        totalHits
      });
    }

    return Either.right({
      outdatedDocuments: [],
      lastHitSortValue: undefined,
      totalHits
    });
  }).catch(_catch_retryable_es_client_errors.catchRetryableEsClientErrors);
};

exports.readWithPit = readWithPit;