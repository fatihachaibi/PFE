"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.threatMatchExecutor = void 0;

var _get_input_output_index = require("../get_input_output_index");

var _create_threat_signals = require("../threat_mapping/create_threat_signals");

var _with_security_span = require("../../../../utils/with_security_span");

var _constants = require("../../../../../common/constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const threatMatchExecutor = async ({
  completeRule,
  tuple,
  listClient,
  exceptionItems,
  services,
  version,
  searchAfterSize,
  logger,
  eventsTelemetry,
  experimentalFeatures,
  buildRuleMessage,
  bulkCreate,
  wrapHits
}) => {
  const ruleParams = completeRule.ruleParams;
  return (0, _with_security_span.withSecuritySpan)('threatMatchExecutor', async () => {
    var _ruleParams$concurren, _ruleParams$filters, _ruleParams$itemsPerS, _ruleParams$threatFil, _ruleParams$threatInd;

    const inputIndex = await (0, _get_input_output_index.getInputIndex)({
      experimentalFeatures,
      services,
      version,
      index: ruleParams.index
    });
    return (0, _create_threat_signals.createThreatSignals)({
      alertId: completeRule.alertId,
      buildRuleMessage,
      bulkCreate,
      completeRule,
      concurrentSearches: (_ruleParams$concurren = ruleParams.concurrentSearches) !== null && _ruleParams$concurren !== void 0 ? _ruleParams$concurren : 1,
      eventsTelemetry,
      exceptionItems,
      filters: (_ruleParams$filters = ruleParams.filters) !== null && _ruleParams$filters !== void 0 ? _ruleParams$filters : [],
      inputIndex,
      itemsPerSearch: (_ruleParams$itemsPerS = ruleParams.itemsPerSearch) !== null && _ruleParams$itemsPerS !== void 0 ? _ruleParams$itemsPerS : 9000,
      language: ruleParams.language,
      listClient,
      logger,
      outputIndex: ruleParams.outputIndex,
      query: ruleParams.query,
      savedId: ruleParams.savedId,
      searchAfterSize,
      services,
      threatFilters: (_ruleParams$threatFil = ruleParams.threatFilters) !== null && _ruleParams$threatFil !== void 0 ? _ruleParams$threatFil : [],
      threatIndex: ruleParams.threatIndex,
      threatIndicatorPath: (_ruleParams$threatInd = ruleParams.threatIndicatorPath) !== null && _ruleParams$threatInd !== void 0 ? _ruleParams$threatInd : _constants.DEFAULT_INDICATOR_SOURCE_PATH,
      threatLanguage: ruleParams.threatLanguage,
      threatMapping: ruleParams.threatMapping,
      threatQuery: ruleParams.threatQuery,
      tuple,
      type: ruleParams.type,
      wrapHits
    });
  });
};

exports.threatMatchExecutor = threatMatchExecutor;