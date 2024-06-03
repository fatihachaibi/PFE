"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createThreatSignal = void 0;

var _build_threat_mapping_filter = require("./build_threat_mapping_filter");

var _get_filter = require("../get_filter");

var _search_after_bulk_create = require("../search_after_bulk_create");

var _reason_formatters = require("../reason_formatters");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const createThreatSignal = async ({
  alertId,
  buildRuleMessage,
  bulkCreate,
  completeRule,
  currentResult,
  currentThreatList,
  eventsTelemetry,
  exceptionItems,
  filters,
  inputIndex,
  language,
  listClient,
  logger,
  outputIndex,
  query,
  savedId,
  searchAfterSize,
  services,
  threatEnrichment,
  threatMapping,
  tuple,
  type,
  wrapHits
}) => {
  var _threatFilter$query;

  const threatFilter = (0, _build_threat_mapping_filter.buildThreatMappingFilter)({
    threatMapping,
    threatList: currentThreatList,
    entryKey: 'value'
  });

  if (!threatFilter.query || ((_threatFilter$query = threatFilter.query) === null || _threatFilter$query === void 0 ? void 0 : _threatFilter$query.bool.should.length) === 0) {
    // empty threat list and we do not want to return everything as being
    // a hit so opt to return the existing result.
    logger.debug(buildRuleMessage('Indicator items are empty after filtering for missing data, returning without attempting a match'));
    return currentResult;
  } else {
    var _threatFilter$query2, _threatFilter$query3;

    const esFilter = await (0, _get_filter.getFilter)({
      type,
      filters: [...filters, threatFilter],
      language,
      query,
      savedId,
      services,
      index: inputIndex,
      lists: exceptionItems
    });
    logger.debug(buildRuleMessage(`${(_threatFilter$query2 = threatFilter.query) === null || _threatFilter$query2 === void 0 ? void 0 : _threatFilter$query2.bool.should.length} indicator items are being checked for existence of matches`));
    const result = await (0, _search_after_bulk_create.searchAfterAndBulkCreate)({
      buildReasonMessage: _reason_formatters.buildReasonMessageForThreatMatchAlert,
      buildRuleMessage,
      bulkCreate,
      completeRule,
      enrichment: threatEnrichment,
      eventsTelemetry,
      exceptionsList: exceptionItems,
      filter: esFilter,
      id: alertId,
      inputIndexPattern: inputIndex,
      listClient,
      logger,
      pageSize: searchAfterSize,
      services,
      sortOrder: 'desc',
      trackTotalHits: false,
      tuple,
      wrapHits
    });
    logger.debug(buildRuleMessage(`${(_threatFilter$query3 = threatFilter.query) === null || _threatFilter$query3 === void 0 ? void 0 : _threatFilter$query3.bool.should.length} items have completed match checks and the total times to search were ${result.searchAfterTimes.length !== 0 ? result.searchAfterTimes : '(unknown) '}ms`));
    return result;
  }
};

exports.createThreatSignal = createThreatSignal;