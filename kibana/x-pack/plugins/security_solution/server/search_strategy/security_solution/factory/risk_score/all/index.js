"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.riskScore = void 0;

var _build_query = require("../../../../../utils/build_query");

var _queryRisk_score = require("./query.risk_score.dsl");

var _constants = require("../../../../../../common/constants");

var _helpers = require("../../cti/event_enrichment/helpers");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const riskScore = {
  buildDsl: options => {
    if (options.pagination && options.pagination.querySize >= _constants.DEFAULT_MAX_TABLE_QUERY_SIZE) {
      throw new Error(`No query size above ${_constants.DEFAULT_MAX_TABLE_QUERY_SIZE}`);
    }

    return (0, _queryRisk_score.buildRiskScoreQuery)(options);
  },
  parse: async (options, response) => {
    const inspect = {
      dsl: [(0, _build_query.inspectStringifyObject)((0, _queryRisk_score.buildRiskScoreQuery)(options))]
    };
    const totalCount = (0, _helpers.getTotalCount)(response.rawResponse.hits.total);
    return { ...response,
      inspect,
      totalCount
    };
  }
};
exports.riskScore = riskScore;