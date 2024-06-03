"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getActionDetailsById = void 0;

var _utils = require("./utils");

var _utils2 = require("../../utils");

var _errors = require("../../../../common/endpoint/errors");

var _errors2 = require("../../errors");

var _constants = require("./constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getActionDetailsById = async (esClient, actionId) => {
  let actionRequestsLogEntries;
  let normalizedActionRequest;
  let actionResponses;

  try {
    var _actionRequestEsSearc, _actionRequestEsSearc2, _actionRequestsLogEnt, _actionResponsesEsSea, _actionResponsesEsSea2; // Get both the Action Request(s) and action Response(s)


    const [actionRequestEsSearchResults, actionResponsesEsSearchResults] = await Promise.all([// Get the action request(s)
    esClient.search({
      index: _utils2.ACTION_REQUEST_INDICES,
      body: {
        query: {
          bool: {
            filter: [{
              term: {
                action_id: actionId
              }
            }, {
              term: {
                input_type: 'endpoint'
              }
            }, {
              term: {
                type: 'INPUT_ACTION'
              }
            }]
          }
        }
      }
    }, {
      ignore: [404]
    }).catch(_utils2.catchAndWrapError), // Get the Action Response(s)
    esClient.search({
      index: _utils2.ACTION_RESPONSE_INDICES,
      size: _constants.ACTIONS_SEARCH_PAGE_SIZE,
      body: {
        query: {
          bool: {
            filter: [{
              term: {
                action_id: actionId
              }
            }]
          }
        }
      }
    }, {
      ignore: [404]
    }).catch(_utils2.catchAndWrapError)]);
    actionRequestsLogEntries = (0, _utils2.getUniqueLogData)((0, _utils2.categorizeActionResults)({
      results: (_actionRequestEsSearc = actionRequestEsSearchResults === null || actionRequestEsSearchResults === void 0 ? void 0 : (_actionRequestEsSearc2 = actionRequestEsSearchResults.hits) === null || _actionRequestEsSearc2 === void 0 ? void 0 : _actionRequestEsSearc2.hits) !== null && _actionRequestEsSearc !== void 0 ? _actionRequestEsSearc : []
    })); // Multiple Action records could have been returned, but we only really
    // need one since they both hold similar data

    const actionDoc = (_actionRequestsLogEnt = actionRequestsLogEntries[0]) === null || _actionRequestsLogEnt === void 0 ? void 0 : _actionRequestsLogEnt.item.data;

    if (actionDoc) {
      normalizedActionRequest = (0, _utils.mapToNormalizedActionRequest)(actionDoc);
    }

    actionResponses = (0, _utils2.categorizeResponseResults)({
      results: (_actionResponsesEsSea = actionResponsesEsSearchResults === null || actionResponsesEsSearchResults === void 0 ? void 0 : (_actionResponsesEsSea2 = actionResponsesEsSearchResults.hits) === null || _actionResponsesEsSea2 === void 0 ? void 0 : _actionResponsesEsSea2.hits) !== null && _actionResponsesEsSea !== void 0 ? _actionResponsesEsSea : []
    });
  } catch (error) {
    throw new _errors.EndpointError(error.message, error);
  } // If action id was not found, error out


  if (!normalizedActionRequest) {
    throw new _errors2.NotFoundError(`Action with id '${actionId}' not found.`);
  }

  const {
    isCompleted,
    completedAt,
    wasSuccessful,
    errors
  } = (0, _utils.getActionCompletionInfo)(normalizedActionRequest.agents, actionResponses);
  const actionDetails = {
    id: actionId,
    agents: normalizedActionRequest.agents,
    command: normalizedActionRequest.command,
    startedAt: normalizedActionRequest.createdAt,
    logEntries: [...actionRequestsLogEntries, ...actionResponses],
    isCompleted,
    completedAt,
    wasSuccessful,
    errors,
    isExpired: !isCompleted && normalizedActionRequest.expiration < new Date().toISOString()
  };
  return actionDetails;
};

exports.getActionDetailsById = getActionDetailsById;