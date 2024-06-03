"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.evaluateRule = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _get_interval_in_seconds = require("../../../../utils/get_interval_in_seconds");

var _messages = require("../../common/messages");

var _create_timerange = require("./create_timerange");

var _get_data = require("./get_data");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const evaluateRule = async (esClient, params, config, compositeSize, alertOnGroupDisappear, logger, lastPeriodEnd, timeframe, missingGroups = []) => {
  const {
    criteria,
    groupBy,
    filterQuery
  } = params;
  return Promise.all(criteria.map(async criterion => {
    const interval = `${criterion.timeSize}${criterion.timeUnit}`;
    const intervalAsSeconds = (0, _get_interval_in_seconds.getIntervalInSeconds)(interval);
    const intervalAsMS = intervalAsSeconds * 1000;
    const calculatedTimerange = (0, _create_timerange.createTimerange)(intervalAsMS, criterion.aggType, timeframe, lastPeriodEnd);
    const currentValues = await (0, _get_data.getData)(esClient, criterion, config.metricAlias, groupBy, filterQuery, compositeSize, alertOnGroupDisappear, calculatedTimerange, logger, lastPeriodEnd);

    for (const missingGroup of missingGroups) {
      if (currentValues[missingGroup] == null) {
        currentValues[missingGroup] = {
          value: null,
          trigger: false,
          warn: false
        };
      }
    }

    const evaluations = {};

    for (const key of Object.keys(currentValues)) {
      const result = currentValues[key];

      if (result.trigger || result.warn || result.value === null) {
        var _criterion$metric;

        evaluations[key] = { ...criterion,
          metric: (_criterion$metric = criterion.metric) !== null && _criterion$metric !== void 0 ? _criterion$metric : _messages.DOCUMENT_COUNT_I18N,
          currentValue: result.value,
          timestamp: (0, _moment.default)(calculatedTimerange.end).toISOString(),
          shouldFire: result.trigger,
          shouldWarn: result.warn,
          isNoData: result.value === null
        };
      }
    }

    return evaluations;
  }));
};

exports.evaluateRule = evaluateRule;