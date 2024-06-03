"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSuggestions = getSuggestions;

var _processor_event = require("../../../common/processor_event");

var _transactions = require("../../lib/helpers/transactions");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function getSuggestions({
  fieldName,
  fieldValue,
  searchAggregatedTransactions,
  setup,
  size,
  start,
  end
}) {
  const {
    apmEventClient
  } = setup;
  const response = await apmEventClient.termsEnum('get_suggestions', {
    apm: {
      events: [(0, _transactions.getProcessorEventForTransactions)(searchAggregatedTransactions), _processor_event.ProcessorEvent.error, _processor_event.ProcessorEvent.metric]
    },
    body: {
      case_insensitive: true,
      field: fieldName,
      size,
      string: fieldValue,
      index_filter: {
        range: {
          ['@timestamp']: {
            gte: start,
            lte: end,
            format: 'epoch_millis'
          }
        }
      }
    }
  });
  return {
    terms: response.terms
  };
}