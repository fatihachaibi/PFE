"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildThreatEnrichment = void 0;

var _enrich_signal_threat_matches = require("./enrich_signal_threat_matches");

var _get_threat_list = require("./get_threat_list");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const buildThreatEnrichment = ({
  buildRuleMessage,
  exceptionItems,
  logger,
  services,
  threatFilters,
  threatIndex,
  threatIndicatorPath,
  threatLanguage,
  threatQuery,
  pitId,
  reassignPitId,
  listClient
}) => {
  const getMatchedThreats = async ids => {
    const matchedThreatsFilter = {
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
    const threatResponse = await (0, _get_threat_list.getThreatList)({
      esClient: services.scopedClusterClient.asCurrentUser,
      exceptionItems,
      threatFilters: [...threatFilters, matchedThreatsFilter],
      query: threatQuery,
      language: threatLanguage,
      index: threatIndex,
      searchAfter: undefined,
      logger,
      buildRuleMessage,
      perPage: undefined,
      threatListConfig: {
        _source: [`${threatIndicatorPath}.*`, 'threat.feed.*'],
        fields: undefined
      },
      pitId,
      reassignPitId,
      listClient
    });
    return threatResponse.hits.hits;
  };

  return signals => (0, _enrich_signal_threat_matches.enrichSignalThreatMatches)(signals, getMatchedThreats, threatIndicatorPath);
};

exports.buildThreatEnrichment = buildThreatEnrichment;