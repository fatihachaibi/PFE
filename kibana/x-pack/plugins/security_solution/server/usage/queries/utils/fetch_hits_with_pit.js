"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchHitsWithPit = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const fetchHitsWithPit = async ({
  esClient,
  index,
  searchRequest,
  maxSize,
  maxPerPage,
  logger
}) => {
  // default is from looking at Kibana saved objects and online documentation
  const keepAlive = '5m'; // create and assign an initial point in time

  let pitId = (await esClient.openPointInTime({
    index,
    keep_alive: '5m'
  })).id;
  let searchAfter;
  let hits = [];
  let fetchMore = true;

  while (fetchMore) {
    const ruleSearchOptions = { ...searchRequest,
      track_total_hits: false,
      search_after: searchAfter,
      sort: [{
        _shard_doc: 'desc'
      }],
      // TODO: Remove this "unknown" once it is typed correctly https://github.com/elastic/elasticsearch-js/issues/1589
      pit: {
        id: pitId
      },
      size: Math.min(maxPerPage, maxSize - hits.length)
    };
    logger.debug(`Getting hits with point in time (PIT) query of: ${JSON.stringify(ruleSearchOptions)}`);
    const body = await esClient.search(ruleSearchOptions);
    hits = [...hits, ...body.hits.hits];
    searchAfter = body.hits.hits.length !== 0 ? body.hits.hits[body.hits.hits.length - 1].sort : undefined;
    fetchMore = searchAfter != null && body.hits.hits.length > 0 && hits.length < maxSize;

    if (body.pit_id != null) {
      pitId = body.pit_id;
    }
  }

  try {
    await esClient.closePointInTime({
      id: pitId
    });
  } catch (error) {
    // Don't fail due to a bad point in time closure. We have seen failures in e2e tests during nominal operations.
    logger.warn(`Error trying to close point in time: "${pitId}", it will expire within "${keepAlive}". Error is: "${error}"`);
  }

  logger.debug(`Returning hits with point in time (PIT) length of: ${hits.length}`);
  return hits;
};

exports.fetchHitsWithPit = fetchHitsWithPit;