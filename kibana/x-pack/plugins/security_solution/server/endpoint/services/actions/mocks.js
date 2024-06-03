"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createActionResponsesEsSearchResultsMock = exports.createActionRequestsEsSearchResultsMock = exports.applyActionsEsSearchMock = void 0;

var _common = require("../../../../../fleet/common");

var _endpoint_action_generator = require("../../../../common/endpoint/data_generators/endpoint_action_generator");

var _fleet_action_generator = require("../../../../common/endpoint/data_generators/fleet_action_generator");

var _constants = require("../../../../common/endpoint/constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const createActionRequestsEsSearchResultsMock = () => {
  const endpointActionGenerator = new _endpoint_action_generator.EndpointActionGenerator('seed');
  const fleetActionGenerator = new _fleet_action_generator.FleetActionGenerator('seed');
  return endpointActionGenerator.toEsSearchResponse([fleetActionGenerator.generateActionEsHit({
    action_id: '123',
    agents: ['agent-a'],
    '@timestamp': '2022-04-27T16:08:47.449Z'
  }), endpointActionGenerator.generateActionEsHit({
    EndpointActions: {
      action_id: '123'
    },
    agent: {
      id: 'agent-a'
    },
    '@timestamp': '2022-04-27T16:08:47.449Z'
  })]);
};

exports.createActionRequestsEsSearchResultsMock = createActionRequestsEsSearchResultsMock;

const createActionResponsesEsSearchResultsMock = () => {
  const endpointActionGenerator = new _endpoint_action_generator.EndpointActionGenerator('seed');
  const fleetActionGenerator = new _fleet_action_generator.FleetActionGenerator('seed');
  return endpointActionGenerator.toEsSearchResponse([fleetActionGenerator.generateResponseEsHit({
    action_id: '123',
    agent_id: 'agent-a',
    error: '',
    '@timestamp': '2022-04-30T16:08:47.449Z'
  }), endpointActionGenerator.generateResponseEsHit({
    agent: {
      id: 'agent-a'
    },
    EndpointActions: {
      action_id: '123'
    },
    '@timestamp': '2022-04-30T16:08:47.449Z'
  })]);
};
/**
 * Applies a mock implementation to the `esClient.search()` method that will return action requests or responses
 * depending on what indexes the `.search()` was called with.
 * @param esClient
 * @param actionRequests
 * @param actionResponses
 */


exports.createActionResponsesEsSearchResultsMock = createActionResponsesEsSearchResultsMock;

const applyActionsEsSearchMock = (esClient, actionRequests = createActionRequestsEsSearchResultsMock(), actionResponses = createActionResponsesEsSearchResultsMock()) => {
  const priorSearchMockImplementation = esClient.search.getMockImplementation();
  esClient.search.mockImplementation(async (...args) => {
    var _args$;

    const params = (_args$ = args[0]) !== null && _args$ !== void 0 ? _args$ : {};
    const indexes = Array.isArray(params.index) ? params.index : [params.index];

    if (indexes.includes(_common.AGENT_ACTIONS_INDEX) || indexes.includes(_constants.ENDPOINT_ACTIONS_INDEX)) {
      return actionRequests;
    } else if (indexes.includes(_common.AGENT_ACTIONS_RESULTS_INDEX) || indexes.includes(_constants.ENDPOINT_ACTION_RESPONSES_INDEX_PATTERN)) {
      return actionResponses;
    }

    if (priorSearchMockImplementation) {
      return priorSearchMockImplementation(...args);
    }

    return new _endpoint_action_generator.EndpointActionGenerator().toEsSearchResponse([]);
  });
};

exports.applyActionsEsSearchMock = applyActionsEsSearchMock;