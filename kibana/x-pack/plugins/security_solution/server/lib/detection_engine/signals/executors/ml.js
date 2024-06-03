"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mlExecutor = void 0;

var _helpers = require("../../../../../common/machine_learning/helpers");

var _bulk_create_ml_signals = require("../bulk_create_ml_signals");

var _filter_events_against_list = require("../filters/filter_events_against_list");

var _find_ml_signals = require("../find_ml_signals");

var _utils = require("../utils");

var _with_security_span = require("../../../../utils/with_security_span");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const mlExecutor = async ({
  completeRule,
  tuple,
  ml,
  listClient,
  exceptionItems,
  services,
  logger,
  buildRuleMessage,
  bulkCreate,
  wrapHits
}) => {
  const result = (0, _utils.createSearchAfterReturnType)();
  const ruleParams = completeRule.ruleParams;
  return (0, _with_security_span.withSecuritySpan)('mlExecutor', async () => {
    var _failures;

    if (ml == null) {
      throw new Error('ML plugin unavailable during rule execution');
    } // Using fake KibanaRequest as it is needed to satisfy the ML Services API, but can be empty as it is
    // currently unused by the jobsSummary function.


    const fakeRequest = {};
    const summaryJobs = await ml.jobServiceProvider(fakeRequest, services.savedObjectsClient).jobsSummary(ruleParams.machineLearningJobId);
    const jobSummaries = summaryJobs.filter(job => ruleParams.machineLearningJobId.includes(job.id));

    if (jobSummaries.length < 1 || jobSummaries.some(job => !(0, _helpers.isJobStarted)(job.jobState, job.datafeedState))) {
      const warningMessage = buildRuleMessage('Machine learning job(s) are not started:', ...jobSummaries.map(job => [`job id: "${job.id}"`, `job status: "${job.jobState}"`, `datafeed status: "${job.datafeedState}"`].join(', ')));
      result.warningMessages.push(warningMessage);
      logger.warn(warningMessage);
      result.warning = true;
    }

    const anomalyResults = await (0, _find_ml_signals.findMlSignals)({
      ml,
      // Using fake KibanaRequest as it is needed to satisfy the ML Services API, but can be empty as it is
      // currently unused by the mlAnomalySearch function.
      request: {},
      savedObjectsClient: services.savedObjectsClient,
      jobIds: ruleParams.machineLearningJobId,
      anomalyThreshold: ruleParams.anomalyThreshold,
      from: tuple.from.toISOString(),
      to: tuple.to.toISOString(),
      exceptionItems
    });
    const [filteredAnomalyHits, _] = await (0, _filter_events_against_list.filterEventsAgainstList)({
      listClient,
      exceptionsList: exceptionItems,
      logger,
      events: anomalyResults.hits.hits,
      buildRuleMessage
    });
    const anomalyCount = filteredAnomalyHits.length;

    if (anomalyCount) {
      logger.debug(buildRuleMessage(`Found ${anomalyCount} signals from ML anomalies.`));
    }

    const {
      success,
      errors,
      bulkCreateDuration,
      createdItemsCount,
      createdItems
    } = await (0, _bulk_create_ml_signals.bulkCreateMlSignals)({
      anomalyHits: filteredAnomalyHits,
      completeRule,
      services,
      logger,
      id: completeRule.alertId,
      signalsIndex: ruleParams.outputIndex,
      buildRuleMessage,
      bulkCreate,
      wrapHits
    }); // The legacy ES client does not define failures when it can be present on the structure, hence why I have the & { failures: [] }

    const shardFailures = (_failures = anomalyResults._shards.failures) !== null && _failures !== void 0 ? _failures : [];
    const searchErrors = (0, _utils.createErrorsFromShard)({
      errors: shardFailures
    });
    return (0, _utils.mergeReturns)([result, (0, _utils.createSearchAfterReturnType)({
      success: success && anomalyResults._shards.failed === 0,
      errors: [...errors, ...searchErrors],
      createdSignalsCount: createdItemsCount,
      createdSignals: createdItems,
      bulkCreateTimes: bulkCreateDuration ? [bulkCreateDuration] : []
    })]);
  });
};

exports.mlExecutor = mlExecutor;