"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEventList = exports.getEventCount = exports.MAX_PER_PAGE = void 0;

var _get_query_filter = require("../../../../../common/detection_engine/get_query_filter");

var _single_search_after = require("../single_search_after");

var _build_events_query = require("../build_events_query");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const MAX_PER_PAGE = 9000;
exports.MAX_PER_PAGE = MAX_PER_PAGE;

const getEventList = async ({
  services,
  query,
  language,
  index,
  perPage,
  searchAfter,
  exceptionItems,
  filters,
  buildRuleMessage,
  logger,
  tuple,
  timestampOverride
}) => {
  const calculatedPerPage = perPage !== null && perPage !== void 0 ? perPage : MAX_PER_PAGE;

  if (calculatedPerPage > 10000) {
    throw new TypeError('perPage cannot exceed the size of 10000');
  }

  logger.debug(buildRuleMessage(`Querying the events items from the index: "${index}" with searchAfter: "${searchAfter}" for up to ${calculatedPerPage} indicator items`));
  const filter = (0, _get_query_filter.getQueryFilter)(query, language !== null && language !== void 0 ? language : 'kuery', filters, index, exceptionItems);
  const {
    searchResult
  } = await (0, _single_search_after.singleSearchAfter)({
    buildRuleMessage,
    searchAfterSortIds: searchAfter,
    index,
    from: tuple.from.toISOString(),
    to: tuple.to.toISOString(),
    services,
    logger,
    filter,
    pageSize: Math.ceil(Math.min(tuple.maxSignals, calculatedPerPage)),
    timestampOverride,
    sortOrder: 'desc',
    trackTotalHits: false
  });
  logger.debug(buildRuleMessage(`Retrieved events items of size: ${searchResult.hits.hits.length}`));
  return searchResult;
};

exports.getEventList = getEventList;

const getEventCount = async ({
  esClient,
  query,
  language,
  filters,
  index,
  exceptionItems,
  tuple,
  timestampOverride
}) => {
  const filter = (0, _get_query_filter.getQueryFilter)(query, language !== null && language !== void 0 ? language : 'kuery', filters, index, exceptionItems);
  const eventSearchQueryBodyQuery = (0, _build_events_query.buildEventsSearchQuery)({
    index,
    from: tuple.from.toISOString(),
    to: tuple.to.toISOString(),
    filter,
    size: 0,
    timestampOverride,
    searchAfterSortIds: undefined
  }).body.query;
  const response = await esClient.count({
    body: {
      query: eventSearchQueryBodyQuery
    },
    ignore_unavailable: true,
    index
  });
  return response.count;
};

exports.getEventCount = getEventCount;