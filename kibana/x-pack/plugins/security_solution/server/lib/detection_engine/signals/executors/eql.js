"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eqlExecutor = void 0;

var _perf_hooks = require("perf_hooks");

var _build_events_query = require("../build_events_query");

var _utils = require("../../../../../common/detection_engine/utils");

var _get_input_output_index = require("../get_input_output_index");

var _utils2 = require("../utils");

var _reason_formatters = require("../reason_formatters");

var _with_security_span = require("../../../../utils/with_security_span");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const eqlExecutor = async ({
  completeRule,
  tuple,
  exceptionItems,
  experimentalFeatures,
  services,
  version,
  logger,
  bulkCreate,
  wrapHits,
  wrapSequences
}) => {
  const ruleParams = completeRule.ruleParams;
  return (0, _with_security_span.withSecuritySpan)('eqlExecutor', async () => {
    var _newSignals;

    const result = (0, _utils2.createSearchAfterReturnType)();

    if ((0, _utils.hasLargeValueItem)(exceptionItems)) {
      result.warningMessages.push('Exceptions that use "is in list" or "is not in list" operators are not applied to EQL rules');
      result.warning = true;
    }

    const inputIndex = await (0, _get_input_output_index.getInputIndex)({
      experimentalFeatures,
      services,
      version,
      index: ruleParams.index
    });
    const request = (0, _build_events_query.buildEqlSearchRequest)(ruleParams.query, inputIndex, tuple.from.toISOString(), tuple.to.toISOString(), completeRule.ruleParams.maxSignals, ruleParams.timestampOverride, exceptionItems, ruleParams.eventCategoryOverride, ruleParams.timestampField, ruleParams.tiebreakerField);

    const eqlSignalSearchStart = _perf_hooks.performance.now();

    logger.debug(`EQL query request: ${JSON.stringify(request)}`);
    const response = await services.scopedClusterClient.asCurrentUser.eql.search(request);

    const eqlSignalSearchEnd = _perf_hooks.performance.now();

    const eqlSearchDuration = (0, _utils2.makeFloatString)(eqlSignalSearchEnd - eqlSignalSearchStart);
    result.searchAfterTimes = [eqlSearchDuration];
    let newSignals;

    if (response.hits.sequences !== undefined) {
      newSignals = wrapSequences(response.hits.sequences, _reason_formatters.buildReasonMessageForEqlAlert);
    } else if (response.hits.events !== undefined) {
      newSignals = wrapHits(response.hits.events, _reason_formatters.buildReasonMessageForEqlAlert);
    } else {
      throw new Error('eql query response should have either `sequences` or `events` but had neither');
    }

    if ((_newSignals = newSignals) !== null && _newSignals !== void 0 && _newSignals.length) {
      const insertResult = await bulkCreate(newSignals);
      result.bulkCreateTimes.push(insertResult.bulkCreateDuration);
      result.createdSignalsCount += insertResult.createdItemsCount;
      result.createdSignals = insertResult.createdItems;
    }

    result.success = true;
    return result;
  });
};

exports.eqlExecutor = eqlExecutor;