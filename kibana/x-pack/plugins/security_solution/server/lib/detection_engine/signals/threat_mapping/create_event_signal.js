"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEventSignal = void 0;

var _build_threat_mapping_filter = require("./build_threat_mapping_filter");

var _get_filter = require("../get_filter");

var _search_after_bulk_create = require("../search_after_bulk_create");

var _reason_formatters = require("../reason_formatters");

var _get_threat_list = require("./get_threat_list");

var _enrich_signal_threat_matches = require("./enrich_signal_threat_matches");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const createEventSignal = async ({
  alertId,
  buildRuleMessage,
  bulkCreate,
  completeRule,
  currentResult,
  currentEventList,
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
  threatMapping,
  tuple,
  type,
  wrapHits,
  threatQuery,
  threatFilters,
  threatLanguage,
  threatIndex,
  threatIndicatorPath,
  threatPitId,
  reassignThreatPitId
}) => {
  var _threatFilter$query;

  const threatFilter = (0, _build_threat_mapping_filter.buildThreatMappingFilter)({
    threatMapping,
    threatList: currentEventList,
    entryKey: 'field'
  });

  if (!threatFilter.query || ((_threatFilter$query = threatFilter.query) === null || _threatFilter$query === void 0 ? void 0 : _threatFilter$query.bool.should.length) === 0) {
    // empty event list and we do not want to return everything as being
    // a hit so opt to return the existing result.
    logger.debug(buildRuleMessage('Indicator items are empty after filtering for missing data, returning without attempting a match'));
    return currentResult;
  } else {
    var _threatFilter$query2;

    const threatListHits = await (0, _get_threat_list.getAllThreatListHits)({
      esClient: services.scopedClusterClient.asCurrentUser,
      exceptionItems,
      threatFilters: [...threatFilters, threatFilter],
      query: threatQuery,
      language: threatLanguage,
      index: threatIndex,
      logger,
      buildRuleMessage,
      threatListConfig: {
        _source: [`${threatIndicatorPath}.*`, 'threat.feed.*'],
        fields: undefined
      },
      pitId: threatPitId,
      reassignPitId: reassignThreatPitId,
      listClient
    });
    const signalMatches = (0, _enrich_signal_threat_matches.getSignalMatchesFromThreatList)(threatListHits);
    const ids = signalMatches.map(item => item.signalId);
    const indexFilter = {
      query: {
        bool: {
          filter: {
            ids: {
              values: ids
            }
          }
        }
      }
    };
    const esFilter = await (0, _get_filter.getFilter)({
      type,
      filters: [...filters, indexFilter],
      language,
      query,
      savedId,
      services,
      index: inputIndex,
      lists: exceptionItems
    });
    logger.debug(buildRuleMessage(`${ids === null || ids === void 0 ? void 0 : ids.length} matched signals found from ${threatListHits.length} indicators`));

    const threatEnrichment = signals => (0, _enrich_signal_threat_matches.enrichSignalThreatMatches)(signals, () => Promise.resolve(threatListHits), threatIndicatorPath, signalMatches);

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
    logger.debug(buildRuleMessage(`${(_threatFilter$query2 = threatFilter.query) === null || _threatFilter$query2 === void 0 ? void 0 : _threatFilter$query2.bool.should.length} items have completed match checks and the total times to search were ${result.searchAfterTimes.length !== 0 ? result.searchAfterTimes : '(unknown) '}ms`));
    return result;
  }
};

exports.createEventSignal = createEventSignal;