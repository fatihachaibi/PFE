"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indexEndpointAndFleetActionsForHost = exports.deleteIndexedEndpointAndFleetActions = void 0;

var _common = require("../../../../fleet/common");

var _constants = require("../constants");

var _fleet_action_generator = require("../data_generators/fleet_action_generator");

var _utils = require("./utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const defaultFleetActionGenerator = new _fleet_action_generator.FleetActionGenerator();
/**
 * Indexes a random number of Endpoint (via Fleet) Actions for a given host
 * (NOTE: ensure that fleet is setup first before calling this loading function)
 *
 * @param esClient
 * @param endpointHost
 * @param [fleetActionGenerator]
 */

const indexEndpointAndFleetActionsForHost = async (esClient, endpointHost, fleetActionGenerator = defaultFleetActionGenerator) => {
  const ES_INDEX_OPTIONS = {
    headers: {
      'X-elastic-product-origin': 'fleet'
    }
  };
  const agentId = endpointHost.elastic.agent.id;
  const total = fleetActionGenerator.randomN(5);
  const response = {
    actions: [],
    actionResponses: [],
    endpointActions: [],
    endpointActionResponses: [],
    actionsIndex: _common.AGENT_ACTIONS_INDEX,
    responsesIndex: _common.AGENT_ACTIONS_RESULTS_INDEX,
    endpointActionsIndex: _constants.ENDPOINT_ACTIONS_INDEX,
    endpointActionResponsesIndex: _constants.ENDPOINT_ACTION_RESPONSES_INDEX
  };

  for (let i = 0; i < total; i++) {
    // create an action
    const action = fleetActionGenerator.generate({
      data: {
        comment: 'data generator: this host is bad'
      }
    });
    action.agents = [agentId];
    const indexFleetActions = esClient.index({
      index: _common.AGENT_ACTIONS_INDEX,
      body: action,
      refresh: 'wait_for'
    }, ES_INDEX_OPTIONS).catch(_utils.wrapErrorAndRejectPromise);

    if (fleetActionGenerator.randomFloat() < 0.4) {
      const endpointActionsBody = {
        EndpointActions: { ...action,
          '@timestamp': undefined,
          user_id: undefined
        },
        agent: {
          id: [agentId]
        },
        '@timestamp': action['@timestamp'],
        user: {
          id: action.user_id
        }
      };
      await Promise.all([indexFleetActions, esClient.index({
        index: _constants.ENDPOINT_ACTIONS_INDEX,
        body: endpointActionsBody,
        refresh: 'wait_for'
      }).catch(_utils.wrapErrorAndRejectPromise)]);
    } else {
      await indexFleetActions;
    }

    const randomFloat = fleetActionGenerator.randomFloat(); // Create an action response for the above

    const actionResponse = fleetActionGenerator.generateResponse({
      action_id: action.action_id,
      agent_id: agentId,
      action_response: {
        endpoint: {
          // add ack to 2/5th of fleet response
          ack: randomFloat < 0.4 ? true : undefined
        }
      },
      // error for 3/10th of responses
      error: randomFloat < 0.3 ? 'some error happened' : undefined
    });
    const indexFleetResponses = esClient.index({
      index: _common.AGENT_ACTIONS_RESULTS_INDEX,
      body: actionResponse,
      refresh: 'wait_for'
    }, ES_INDEX_OPTIONS).catch(_utils.wrapErrorAndRejectPromise);

    if (randomFloat < 0.4) {
      const endpointActionResponseBody = {
        EndpointActions: { ...actionResponse,
          data: actionResponse.action_data,
          '@timestamp': undefined,
          action_data: undefined,
          agent_id: undefined,
          error: undefined
        },
        agent: {
          id: agentId
        },
        // error for 3/10th of responses
        error: randomFloat < 0.3 ? undefined : {
          message: actionResponse.error
        },
        '@timestamp': actionResponse['@timestamp']
      };
      await Promise.all([indexFleetResponses, esClient.index({
        index: _constants.ENDPOINT_ACTION_RESPONSES_INDEX,
        body: endpointActionResponseBody,
        refresh: 'wait_for'
      }).catch(_utils.wrapErrorAndRejectPromise)]);
    } else {
      await indexFleetResponses;
    }

    response.actions.push(action);
    response.actionResponses.push(actionResponse);
  } // Add edge cases (maybe)


  if (fleetActionGenerator.randomFloat() < 0.3) {
    const randomFloat = fleetActionGenerator.randomFloat(); // 60% of the time just add either an Isolate -OR- an UnIsolate action

    if (randomFloat < 0.6) {
      let action;

      if (randomFloat < 0.3) {
        // add a pending isolation
        action = fleetActionGenerator.generateIsolateAction({
          '@timestamp': new Date().toISOString()
        });
      } else {
        // add a pending UN-isolation
        action = fleetActionGenerator.generateUnIsolateAction({
          '@timestamp': new Date().toISOString()
        });
      }

      action.agents = [agentId];
      await esClient.index({
        index: _common.AGENT_ACTIONS_INDEX,
        body: action,
        refresh: 'wait_for'
      }, ES_INDEX_OPTIONS).catch(_utils.wrapErrorAndRejectPromise);
      response.actions.push(action);
    } else {
      // Else (40% of the time) add a pending isolate AND pending un-isolate
      const action1 = fleetActionGenerator.generateIsolateAction({
        '@timestamp': new Date().toISOString()
      });
      const action2 = fleetActionGenerator.generateUnIsolateAction({
        '@timestamp': new Date().toISOString()
      });
      action1.agents = [agentId];
      action2.agents = [agentId];
      await Promise.all([esClient.index({
        index: _common.AGENT_ACTIONS_INDEX,
        body: action1,
        refresh: 'wait_for'
      }, ES_INDEX_OPTIONS).catch(_utils.wrapErrorAndRejectPromise), esClient.index({
        index: _common.AGENT_ACTIONS_INDEX,
        body: action2,
        refresh: 'wait_for'
      }, ES_INDEX_OPTIONS).catch(_utils.wrapErrorAndRejectPromise)]);
      response.actions.push(action1, action2);
    }
  }

  return response;
};

exports.indexEndpointAndFleetActionsForHost = indexEndpointAndFleetActionsForHost;

const deleteIndexedEndpointAndFleetActions = async (esClient, indexedData) => {
  const response = {
    actions: undefined,
    responses: undefined,
    endpointActionRequests: undefined,
    endpointActionResponses: undefined
  };

  if (indexedData.actions.length) {
    [response.actions, response.endpointActionRequests] = await Promise.all([esClient.deleteByQuery({
      index: `${indexedData.actionsIndex}-*`,
      wait_for_completion: true,
      body: {
        query: {
          bool: {
            filter: [{
              terms: {
                action_id: indexedData.actions.map(action => action.action_id)
              }
            }]
          }
        }
      }
    }).catch(_utils.wrapErrorAndRejectPromise), esClient.deleteByQuery({
      index: `${indexedData.endpointActionsIndex}-*`,
      wait_for_completion: true,
      body: {
        query: {
          bool: {
            filter: [{
              terms: {
                action_id: indexedData.actions.map(action => action.action_id)
              }
            }]
          }
        }
      }
    }).catch(_utils.wrapErrorAndRejectPromise)]);
  }

  if (indexedData.actionResponses) {
    [response.responses, response.endpointActionResponses] = await Promise.all([esClient.deleteByQuery({
      index: `${indexedData.responsesIndex}-*`,
      wait_for_completion: true,
      body: {
        query: {
          bool: {
            filter: [{
              terms: {
                action_id: indexedData.actionResponses.map(action => action.action_id)
              }
            }]
          }
        }
      }
    }).catch(_utils.wrapErrorAndRejectPromise), esClient.deleteByQuery({
      index: `${indexedData.endpointActionResponsesIndex}-*`,
      wait_for_completion: true,
      body: {
        query: {
          bool: {
            filter: [{
              terms: {
                action_id: indexedData.actionResponses.map(action => action.action_id)
              }
            }]
          }
        }
      }
    }).catch(_utils.wrapErrorAndRejectPromise)]);
  }

  return response;
};

exports.deleteIndexedEndpointAndFleetActions = deleteIndexedEndpointAndFleetActions;