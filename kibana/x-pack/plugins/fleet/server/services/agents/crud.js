"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkUpdateAgents = bulkUpdateAgents;
exports.closeAgentsPointInTime = closeAgentsPointInTime;
exports.countInactiveAgents = countInactiveAgents;
exports.deleteAgent = deleteAgent;
exports.errorsToResults = errorsToResults;
exports.getAgentByAccessAPIKeyId = getAgentByAccessAPIKeyId;
exports.getAgentById = getAgentById;
exports.getAgentDocuments = getAgentDocuments;
exports.getAgentPolicyForAgent = getAgentPolicyForAgent;
exports.getAgents = getAgents;
exports.getAgentsById = getAgentsById;
exports.getAgentsByKuery = getAgentsByKuery;
exports.getAgentsByKueryPit = getAgentsByKueryPit;
exports.getAllAgentsByKuery = getAllAgentsByKuery;
exports.isAgentDocument = isAgentDocument;
exports.openAgentsPointInTime = openAgentsPointInTime;
exports.processAgentsInBatches = processAgentsInBatches;
exports.removeSOAttributes = removeSOAttributes;
exports.updateAgent = updateAgent;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _esQuery = require("@kbn/es-query");

var _ = require("..");

var _common = require("../../../common");

var _constants = require("../../constants");

var _saved_object = require("../saved_object");

var _errors = require("../../errors");

var _helpers = require("./helpers");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const ACTIVE_AGENT_CONDITION = 'active:true';
const INACTIVE_AGENT_CONDITION = `NOT (${ACTIVE_AGENT_CONDITION})`;

function _joinFilters(filters) {
  try {
    return filters.filter(filter => filter !== undefined).reduce((acc, kuery) => {
      if (kuery === undefined) {
        return acc;
      }

      const kueryNode = typeof kuery === 'string' ? (0, _esQuery.fromKueryExpression)(removeSOAttributes(kuery)) : kuery;

      if (!acc) {
        return kueryNode;
      }

      return {
        type: 'function',
        function: 'and',
        arguments: [acc, kueryNode]
      };
    }, undefined);
  } catch (err) {
    throw new _errors.IngestManagerError(`Kuery is malformed: ${err.message}`);
  }
}

function removeSOAttributes(kuery) {
  return kuery.replace(/attributes\./g, '').replace(/fleet-agents\./g, '');
}

async function getAgents(esClient, options) {
  let agents = [];

  if ('agentIds' in options) {
    agents = await getAgentsById(esClient, options.agentIds);
  } else if ('kuery' in options) {
    var _options$showInactive;

    agents = (await getAllAgentsByKuery(esClient, {
      kuery: options.kuery,
      showInactive: (_options$showInactive = options.showInactive) !== null && _options$showInactive !== void 0 ? _options$showInactive : false
    })).agents;
  } else {
    throw new _errors.IngestManagerError('Either options.agentIds or options.kuery are required to get agents');
  }

  return agents;
}

async function getAgentsByKueryPit(esClient, options) {
  const {
    page = 1,
    perPage = 20,
    sortField = 'enrolled_at',
    sortOrder = 'desc',
    kuery,
    showInactive = false,
    showUpgradeable,
    searchAfter
  } = options;
  const {
    pitId
  } = options;
  const filters = [];

  if (kuery && kuery !== '') {
    filters.push(kuery);
  }

  if (showInactive === false) {
    filters.push(ACTIVE_AGENT_CONDITION);
  }

  const kueryNode = _joinFilters(filters);

  const body = kueryNode ? {
    query: (0, _esQuery.toElasticsearchQuery)(kueryNode)
  } : {};

  const queryAgents = async (from, size) => {
    return esClient.search({
      from,
      size,
      track_total_hits: true,
      rest_total_hits_as_int: true,
      body: { ...body,
        sort: [{
          [sortField]: {
            order: sortOrder
          }
        }]
      },
      pit: {
        id: pitId,
        keep_alive: '1m'
      },
      ...(searchAfter ? {
        search_after: searchAfter,
        from: 0
      } : {})
    });
  };

  const res = await queryAgents((page - 1) * perPage, perPage);
  let agents = res.hits.hits.map(_helpers.searchHitToAgent);
  let total = res.hits.total; // filtering for a range on the version string will not work,
  // nor does filtering on a flattened field (local_metadata), so filter here

  if (showUpgradeable) {
    // query all agents, then filter upgradeable, and return the requested page and correct total
    // if there are more than SO_SEARCH_LIMIT agents, the logic falls back to same as before
    if (total < _common.SO_SEARCH_LIMIT) {
      const response = await queryAgents(0, _common.SO_SEARCH_LIMIT);
      agents = response.hits.hits.map(_helpers.searchHitToAgent).filter(agent => (0, _common.isAgentUpgradeable)(agent, _.appContextService.getKibanaVersion()));
      total = agents.length;
      const start = (page - 1) * perPage;
      agents = agents.slice(start, start + perPage);
    } else {
      agents = agents.filter(agent => (0, _common.isAgentUpgradeable)(agent, _.appContextService.getKibanaVersion()));
    }
  }

  return {
    agents,
    total,
    page,
    perPage
  };
}

async function openAgentsPointInTime(esClient) {
  const pitKeepAlive = '10m';
  const pitRes = await esClient.openPointInTime({
    index: _constants.AGENTS_INDEX,
    keep_alive: pitKeepAlive
  });
  return pitRes.id;
}

async function closeAgentsPointInTime(esClient, pitId) {
  try {
    await esClient.closePointInTime({
      id: pitId
    });
  } catch (error) {
    _.appContextService.getLogger().warn(`Error closing point in time with id: ${pitId}. Error: ${error.message}`);
  }
}

async function getAgentsByKuery(esClient, options) {
  const {
    page = 1,
    perPage = 20,
    sortField = 'enrolled_at',
    sortOrder = 'desc',
    kuery,
    showInactive = false,
    showUpgradeable
  } = options;
  const filters = [];

  if (kuery && kuery !== '') {
    filters.push(kuery);
  }

  if (showInactive === false) {
    filters.push(ACTIVE_AGENT_CONDITION);
  }

  const kueryNode = _joinFilters(filters);

  const body = kueryNode ? {
    query: (0, _esQuery.toElasticsearchQuery)(kueryNode)
  } : {};
  const isDefaultSort = sortField === 'enrolled_at' && sortOrder === 'desc'; // if using default sorting (enrolled_at), adding a secondary sort on hostname, so that the results are not changing randomly in case many agents were enrolled at the same time

  const secondarySort = isDefaultSort ? [{
    'local_metadata.host.hostname.keyword': {
      order: 'asc'
    }
  }] : [];

  const queryAgents = async (from, size) => esClient.search({
    index: _constants.AGENTS_INDEX,
    from,
    size,
    track_total_hits: true,
    rest_total_hits_as_int: true,
    ignore_unavailable: true,
    body: { ...body,
      sort: [{
        [sortField]: {
          order: sortOrder
        }
      }, ...secondarySort]
    }
  });

  const res = await queryAgents((page - 1) * perPage, perPage);
  let agents = res.hits.hits.map(_helpers.searchHitToAgent);
  let total = res.hits.total; // filtering for a range on the version string will not work,
  // nor does filtering on a flattened field (local_metadata), so filter here

  if (showUpgradeable) {
    // fixing a bug where upgradeable filter was not returning right results https://github.com/elastic/kibana/issues/117329
    // query all agents, then filter upgradeable, and return the requested page and correct total
    // if there are more than SO_SEARCH_LIMIT agents, the logic falls back to same as before
    if (total < _common.SO_SEARCH_LIMIT) {
      const response = await queryAgents(0, _common.SO_SEARCH_LIMIT);
      agents = response.hits.hits.map(_helpers.searchHitToAgent).filter(agent => (0, _common.isAgentUpgradeable)(agent, _.appContextService.getKibanaVersion()));
      total = agents.length;
      const start = (page - 1) * perPage;
      agents = agents.slice(start, start + perPage);
    } else {
      agents = agents.filter(agent => (0, _common.isAgentUpgradeable)(agent, _.appContextService.getKibanaVersion()));
    }
  }

  return {
    agents,
    total,
    page,
    perPage
  };
}

async function processAgentsInBatches(esClient, options, processAgents) {
  var _options$batchSize;

  const pitId = await openAgentsPointInTime(esClient);
  const perPage = (_options$batchSize = options.batchSize) !== null && _options$batchSize !== void 0 ? _options$batchSize : _common.SO_SEARCH_LIMIT;
  const res = await getAgentsByKueryPit(esClient, { ...options,
    page: 1,
    perPage,
    pitId
  });
  let currentAgents = res.agents; // include successful agents if total agents does not exceed 10k

  const skipSuccess = res.total > _common.SO_SEARCH_LIMIT;
  let results = await processAgents(currentAgents, skipSuccess);
  let allAgentsProcessed = currentAgents.length;

  while (allAgentsProcessed < res.total) {
    const lastAgent = currentAgents[currentAgents.length - 1];
    const nextPage = await getAgentsByKueryPit(esClient, { ...options,
      page: 1,
      perPage,
      pitId,
      searchAfter: lastAgent.sort
    });
    currentAgents = nextPage.agents;
    const currentResults = await processAgents(currentAgents, skipSuccess);
    results = {
      items: results.items.concat(currentResults.items)
    };
    allAgentsProcessed += currentAgents.length;
  }

  await closeAgentsPointInTime(esClient, pitId);
  return results;
}

function errorsToResults(agents, errors, agentIds, skipSuccess) {
  if (!skipSuccess) {
    const givenOrder = agentIds ? agentIds : agents.map(agent => agent.id);
    return givenOrder.map(agentId => {
      const hasError = (agentId in errors);
      const result = {
        id: agentId,
        success: !hasError
      };

      if (hasError) {
        result.error = errors[agentId];
      }

      return result;
    });
  } else {
    return Object.entries(errors).map(([agentId, error]) => ({
      id: agentId,
      success: false,
      error
    }));
  }
}

async function getAllAgentsByKuery(esClient, options) {
  const res = await getAgentsByKuery(esClient, { ...options,
    page: 1,
    perPage: _common.SO_SEARCH_LIMIT
  });
  return {
    agents: res.agents,
    total: res.total
  };
}

async function countInactiveAgents(esClient, options) {
  const {
    kuery
  } = options;
  const filters = [INACTIVE_AGENT_CONDITION];

  if (kuery && kuery !== '') {
    filters.push((0, _saved_object.normalizeKuery)(_constants.AGENTS_PREFIX, kuery));
  }

  const kueryNode = _joinFilters(filters);

  const body = kueryNode ? {
    query: (0, _esQuery.toElasticsearchQuery)(kueryNode)
  } : {};
  const res = await esClient.search({
    index: _constants.AGENTS_INDEX,
    size: 0,
    track_total_hits: true,
    rest_total_hits_as_int: true,
    filter_path: 'hits.total',
    ignore_unavailable: true,
    body
  });
  return res.hits.total || 0;
}

async function getAgentById(esClient, agentId) {
  const agentNotFoundError = new _errors.AgentNotFoundError(`Agent ${agentId} not found`);

  try {
    const agentHit = await esClient.get({
      index: _constants.AGENTS_INDEX,
      id: agentId
    });

    if (agentHit.found === false) {
      throw agentNotFoundError;
    }

    return (0, _helpers.searchHitToAgent)(agentHit);
  } catch (err) {
    if ((0, _errors.isESClientError)(err) && err.meta.statusCode === 404) {
      throw agentNotFoundError;
    }

    throw err;
  }
}

function isAgentDocument(maybeDocument) {
  return '_id' in maybeDocument && '_source' in maybeDocument;
}

async function getAgentDocuments(esClient, agentIds) {
  const res = await esClient.mget({
    index: _constants.AGENTS_INDEX,
    body: {
      docs: agentIds.map(_id => ({
        _id
      }))
    }
  });
  return res.docs || [];
}

async function getAgentsById(esClient, agentIds) {
  const allDocs = await getAgentDocuments(esClient, agentIds);
  const agents = allDocs.reduce((results, doc) => {
    if (isAgentDocument(doc)) {
      results.push((0, _helpers.searchHitToAgent)(doc));
    }

    return results;
  }, []);
  return agents;
}

async function getAgentByAccessAPIKeyId(esClient, accessAPIKeyId) {
  const res = await esClient.search({
    index: _constants.AGENTS_INDEX,
    ignore_unavailable: true,
    q: `access_api_key_id:${(0, _saved_object.escapeSearchQueryPhrase)(accessAPIKeyId)}`
  });
  const searchHit = res.hits.hits[0];
  const agent = searchHit && (0, _helpers.searchHitToAgent)(searchHit);

  if (!searchHit || !agent) {
    throw new _errors.AgentNotFoundError('Agent not found');
  }

  if (agent.access_api_key_id !== accessAPIKeyId) {
    throw new Error('Agent api key id is not matching');
  }

  if (!agent.active) {
    throw _boom.default.forbidden('Agent inactive');
  }

  return agent;
}

async function updateAgent(esClient, agentId, data) {
  await esClient.update({
    id: agentId,
    index: _constants.AGENTS_INDEX,
    body: {
      doc: (0, _helpers.agentSOAttributesToFleetServerAgentDoc)(data)
    },
    refresh: 'wait_for'
  });
}

async function bulkUpdateAgents(esClient, updateData) {
  if (updateData.length === 0) {
    return {
      items: []
    };
  }

  const body = updateData.flatMap(({
    agentId,
    data
  }) => [{
    update: {
      _id: agentId
    }
  }, {
    doc: { ...(0, _helpers.agentSOAttributesToFleetServerAgentDoc)(data)
    }
  }]);
  const res = await esClient.bulk({
    body,
    index: _constants.AGENTS_INDEX,
    refresh: 'wait_for'
  });
  return {
    items: res.items.map(item => ({
      id: item.update._id,
      success: !item.update.error,
      // @ts-expect-error it not assignable to ErrorCause
      error: item.update.error
    }))
  };
}

async function deleteAgent(esClient, agentId) {
  try {
    await esClient.update({
      id: agentId,
      index: _constants.AGENTS_INDEX,
      body: {
        doc: {
          active: false
        }
      }
    });
  } catch (err) {
    if ((0, _errors.isESClientError)(err) && err.meta.statusCode === 404) {
      throw new _errors.AgentNotFoundError('Agent not found');
    }

    throw err;
  }
}

async function getAgentPolicyForAgent(soClient, esClient, agentId) {
  const agent = await getAgentById(esClient, agentId);

  if (!agent.policy_id) {
    return;
  }

  const agentPolicy = await _.agentPolicyService.get(soClient, agent.policy_id, false);

  if (agentPolicy) {
    return agentPolicy;
  }
}