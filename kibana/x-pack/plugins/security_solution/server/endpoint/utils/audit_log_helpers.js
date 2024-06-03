"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logsEndpointResponsesRegex = exports.logsEndpointActionsRegex = exports.getUniqueLogData = exports.getTimeSortedData = exports.getActionResponsesResult = exports.getActionRequestsResult = exports.categorizeResponseResults = exports.categorizeActionResults = exports.ACTION_RESPONSE_INDICES = exports.ACTION_REQUEST_INDICES = void 0;

var _common = require("../../../../fleet/common");

var _constants = require("../../../common/endpoint/constants");

var _types = require("../../../common/endpoint/types");

var _yes_no_data_stream = require("./yes_no_data_stream");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// eslint-disable-next-line @kbn/eslint/no-restricted-paths


const ACTION_REQUEST_INDICES = [_common.AGENT_ACTIONS_INDEX, _constants.ENDPOINT_ACTIONS_INDEX]; // search all responses indices irrelevant of namespace

exports.ACTION_REQUEST_INDICES = ACTION_REQUEST_INDICES;
const ACTION_RESPONSE_INDICES = [_common.AGENT_ACTIONS_RESULTS_INDEX, _constants.ENDPOINT_ACTION_RESPONSES_INDEX_PATTERN];
exports.ACTION_RESPONSE_INDICES = ACTION_RESPONSE_INDICES;
const logsEndpointActionsRegex = new RegExp(`(^\.ds-\.logs-endpoint\.actions-default-).+`); // matches index names like .ds-.logs-endpoint.action.responses-name_space---suffix-2022.01.25-000001

exports.logsEndpointActionsRegex = logsEndpointActionsRegex;
const logsEndpointResponsesRegex = new RegExp(`(^\.ds-\.logs-endpoint\.action\.responses-\\w+-).+`);
exports.logsEndpointResponsesRegex = logsEndpointResponsesRegex;
const queryOptions = {
  headers: {
    'X-elastic-product-origin': 'fleet'
  },
  ignore: [404]
};

const getDateFilters = ({
  startDate,
  endDate
}) => {
  return [{
    range: {
      '@timestamp': {
        gte: startDate
      }
    }
  }, {
    range: {
      '@timestamp': {
        lte: endDate
      }
    }
  }];
};

const getUniqueLogData = activityLogEntries => {
  // find the error responses for actions that didn't make it to fleet index
  const onlyResponsesForFleetErrors = activityLogEntries.filter(e => {
    var _e$item$data$error;

    return e.type === _types.ActivityLogItemTypes.RESPONSE && ((_e$item$data$error = e.item.data.error) === null || _e$item$data$error === void 0 ? void 0 : _e$item$data$error.code) === _constants.failedFleetActionErrorCode;
  }).map(e => e.item.data.EndpointActions.action_id); // all actions and responses minus endpoint actions.

  const nonEndpointActionsDocs = activityLogEntries.filter(e => e.type !== _types.ActivityLogItemTypes.ACTION); // only endpoint actions that match the error responses

  const onlyEndpointActionsDocWithoutFleetActions = activityLogEntries.filter(e => e.type === _types.ActivityLogItemTypes.ACTION).filter(e => onlyResponsesForFleetErrors.includes(e.item.data.EndpointActions.action_id)); // join the error actions and the rest

  return [...nonEndpointActionsDocs, ...onlyEndpointActionsDocWithoutFleetActions];
};

exports.getUniqueLogData = getUniqueLogData;

const categorizeResponseResults = ({
  results
}) => {
  return results !== null && results !== void 0 && results.length ? results === null || results === void 0 ? void 0 : results.map(e => {
    const isResponseDoc = matchesIndexPattern({
      regexPattern: logsEndpointResponsesRegex,
      index: e._index
    });
    return isResponseDoc ? {
      type: _types.ActivityLogItemTypes.RESPONSE,
      item: {
        id: e._id,
        data: e._source
      }
    } : {
      type: _types.ActivityLogItemTypes.FLEET_RESPONSE,
      item: {
        id: e._id,
        data: e._source
      }
    };
  }) : [];
};

exports.categorizeResponseResults = categorizeResponseResults;

const categorizeActionResults = ({
  results
}) => {
  return results !== null && results !== void 0 && results.length ? results === null || results === void 0 ? void 0 : results.map(e => {
    const isActionDoc = matchesIndexPattern({
      regexPattern: logsEndpointActionsRegex,
      index: e._index
    });
    return isActionDoc ? {
      type: _types.ActivityLogItemTypes.ACTION,
      item: {
        id: e._id,
        data: e._source
      }
    } : {
      type: _types.ActivityLogItemTypes.FLEET_ACTION,
      item: {
        id: e._id,
        data: e._source
      }
    };
  }) : [];
};

exports.categorizeActionResults = categorizeActionResults;

const getTimeSortedData = data => {
  return data.sort((a, b) => new Date(b.item.data['@timestamp']) > new Date(a.item.data['@timestamp']) ? 1 : -1);
};

exports.getTimeSortedData = getTimeSortedData;

const getActionRequestsResult = async ({
  context,
  logger,
  elasticAgentId,
  startDate,
  endDate,
  size,
  from
}) => {
  const dateFilters = getDateFilters({
    startDate,
    endDate
  });
  const baseActionFilters = [{
    term: {
      agents: elasticAgentId
    }
  }, {
    term: {
      input_type: 'endpoint'
    }
  }, {
    term: {
      type: 'INPUT_ACTION'
    }
  }];
  const actionsFilters = [...baseActionFilters, ...dateFilters];
  const hasLogsEndpointActionsIndex = await (0, _yes_no_data_stream.doesLogsEndpointActionsIndexExist)({
    context,
    logger,
    indexName: _constants.ENDPOINT_ACTIONS_INDEX
  });
  const actionsSearchQuery = {
    index: hasLogsEndpointActionsIndex ? ACTION_REQUEST_INDICES : _common.AGENT_ACTIONS_INDEX,
    size,
    from,
    body: {
      query: {
        bool: {
          filter: actionsFilters
        }
      },
      sort: [{
        '@timestamp': {
          order: 'desc'
        }
      }]
    }
  };
  let actionRequests;

  try {
    var _actionRequests, _actionRequests$body, _actionRequests$body$, _actionRequests$body$2;

    const esClient = (await context.core).elasticsearch.client.asInternalUser;
    actionRequests = await esClient.search(actionsSearchQuery, { ...queryOptions,
      meta: true
    });
    const actionIds = (_actionRequests = actionRequests) === null || _actionRequests === void 0 ? void 0 : (_actionRequests$body = _actionRequests.body) === null || _actionRequests$body === void 0 ? void 0 : (_actionRequests$body$ = _actionRequests$body.hits) === null || _actionRequests$body$ === void 0 ? void 0 : (_actionRequests$body$2 = _actionRequests$body$.hits) === null || _actionRequests$body$2 === void 0 ? void 0 : _actionRequests$body$2.map(e => {
      return logsEndpointActionsRegex.test(e._index) ? e._source.EndpointActions.action_id : e._source.action_id;
    });
    return {
      actionIds,
      actionRequests
    };
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

exports.getActionRequestsResult = getActionRequestsResult;

const getActionResponsesResult = async ({
  context,
  logger,
  elasticAgentId,
  actionIds,
  startDate,
  endDate
}) => {
  const dateFilters = getDateFilters({
    startDate,
    endDate
  });
  const baseResponsesFilter = [{
    term: {
      agent_id: elasticAgentId
    }
  }, {
    terms: {
      action_id: actionIds
    }
  }];
  const responsesFilters = [...baseResponsesFilter, ...dateFilters];
  const hasLogsEndpointActionResponsesIndex = await (0, _yes_no_data_stream.doesLogsEndpointActionsIndexExist)({
    context,
    logger,
    indexName: _constants.ENDPOINT_ACTION_RESPONSES_INDEX_PATTERN
  });
  const responsesSearchQuery = {
    index: hasLogsEndpointActionResponsesIndex ? ACTION_RESPONSE_INDICES : _common.AGENT_ACTIONS_RESULTS_INDEX,
    size: 1000,
    body: {
      query: {
        bool: {
          filter: responsesFilters
        }
      }
    }
  };
  let actionResponses;

  try {
    const esClient = (await context.core).elasticsearch.client.asInternalUser;
    actionResponses = await esClient.search(responsesSearchQuery, { ...queryOptions,
      meta: true
    });
  } catch (error) {
    logger.error(error);
    throw error;
  }

  return actionResponses;
};

exports.getActionResponsesResult = getActionResponsesResult;

const matchesIndexPattern = ({
  regexPattern,
  index
}) => regexPattern.test(index);