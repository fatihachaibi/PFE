"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suggestionsRouteRepository = void 0;

var t = _interopRequireWildcard(require("io-ts"));

var _common = require("../../../../observability/common");

var _get_suggestions = require("./get_suggestions");

var _get_suggestions_with_terms_aggregation = require("./get_suggestions_with_terms_aggregation");

var _transactions = require("../../lib/helpers/transactions");

var _setup_request = require("../../lib/helpers/setup_request");

var _create_apm_server_route = require("../apm_routes/create_apm_server_route");

var _default_api_types = require("../default_api_types");

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const suggestionsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /internal/apm/suggestions',
  params: t.type({
    query: t.intersection([t.type({
      fieldName: t.string,
      fieldValue: t.string
    }), _default_api_types.rangeRt, t.partial({
      serviceName: t.string
    })])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      context,
      params
    } = resources;
    const {
      fieldName,
      fieldValue,
      serviceName,
      start,
      end
    } = params.query;
    const searchAggregatedTransactions = await (0, _transactions.getSearchAggregatedTransactions)({
      apmEventClient: setup.apmEventClient,
      config: setup.config,
      kuery: ''
    });
    const coreContext = await context.core;
    const size = await coreContext.uiSettings.client.get(_common.maxSuggestions);
    const suggestions = serviceName ? await (0, _get_suggestions_with_terms_aggregation.getSuggestionsWithTermsAggregation)({
      fieldName,
      fieldValue,
      searchAggregatedTransactions,
      serviceName,
      setup,
      size,
      start,
      end
    }) : await (0, _get_suggestions.getSuggestions)({
      fieldName,
      fieldValue,
      searchAggregatedTransactions,
      setup,
      size,
      start,
      end
    });
    return suggestions;
  }
});
const suggestionsRouteRepository = { ...suggestionsRoute
};
exports.suggestionsRouteRepository = suggestionsRouteRepository;