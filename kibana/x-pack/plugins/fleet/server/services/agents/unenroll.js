"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forceUnenrollAgent = forceUnenrollAgent;
exports.invalidateAPIKeysForAgents = invalidateAPIKeysForAgents;
exports.unenrollAgent = unenrollAgent;
exports.unenrollAgents = unenrollAgents;

var _api_keys = require("../api_keys");

var _errors = require("../../errors");

var _actions = require("./actions");

var _crud = require("./crud");

var _hosted_agent = require("./hosted_agent");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function unenrollAgentIsAllowed(soClient, esClient, agentId) {
  const agentPolicy = await (0, _crud.getAgentPolicyForAgent)(soClient, esClient, agentId);

  if (agentPolicy !== null && agentPolicy !== void 0 && agentPolicy.is_managed) {
    throw new _errors.HostedAgentPolicyRestrictionRelatedError(`Cannot unenroll ${agentId} from a hosted agent policy ${agentPolicy.id}`);
  }

  return true;
}

async function unenrollAgent(soClient, esClient, agentId, options) {
  if (!(options !== null && options !== void 0 && options.force)) {
    await unenrollAgentIsAllowed(soClient, esClient, agentId);
  }

  if (options !== null && options !== void 0 && options.revoke) {
    return forceUnenrollAgent(soClient, esClient, agentId);
  }

  const now = new Date().toISOString();
  await (0, _actions.createAgentAction)(esClient, {
    agents: [agentId],
    created_at: now,
    type: 'UNENROLL'
  });
  await (0, _crud.updateAgent)(esClient, agentId, {
    unenrollment_started_at: now
  });
}

async function unenrollAgents(soClient, esClient, options) {
  var _options$showInactive;

  if ('agentIds' in options) {
    const givenAgents = await (0, _crud.getAgents)(esClient, options);
    return await unenrollBatch(soClient, esClient, givenAgents, options);
  }

  return await (0, _crud.processAgentsInBatches)(esClient, {
    kuery: options.kuery,
    showInactive: (_options$showInactive = options.showInactive) !== null && _options$showInactive !== void 0 ? _options$showInactive : false,
    batchSize: options.batchSize
  }, async (agents, skipSuccess) => await unenrollBatch(soClient, esClient, agents, options, skipSuccess));
}

async function unenrollBatch(soClient, esClient, givenAgents, options, skipSuccess) {
  // Filter to those not already unenrolled, or unenrolling
  const agentsEnrolled = givenAgents.filter(agent => {
    if (options.revoke) {
      return !agent.unenrolled_at;
    }

    return !agent.unenrollment_started_at && !agent.unenrolled_at;
  });
  const hostedPolicies = await (0, _hosted_agent.getHostedPolicies)(soClient, agentsEnrolled);
  const outgoingErrors = {}; // And which are allowed to unenroll

  const agentsToUpdate = options.force ? agentsEnrolled : agentsEnrolled.reduce((agents, agent, index) => {
    if ((0, _hosted_agent.isHostedAgent)(hostedPolicies, agent)) {
      const id = givenAgents[index].id;
      outgoingErrors[id] = new _errors.HostedAgentPolicyRestrictionRelatedError(`Cannot unenroll ${agent.id} from a hosted agent policy ${agent.policy_id}`);
    } else {
      agents.push(agent);
    }

    return agents;
  }, []);
  const now = new Date().toISOString();

  if (options.revoke) {
    // Get all API keys that need to be invalidated
    await invalidateAPIKeysForAgents(agentsToUpdate);
  } else {
    // Create unenroll action for each agent
    await (0, _actions.createAgentAction)(esClient, {
      agents: agentsToUpdate.map(agent => agent.id),
      created_at: now,
      type: 'UNENROLL'
    });
  } // Update the necessary agents


  const updateData = options.revoke ? {
    unenrolled_at: now,
    active: false
  } : {
    unenrollment_started_at: now
  };
  await (0, _crud.bulkUpdateAgents)(esClient, agentsToUpdate.map(({
    id
  }) => ({
    agentId: id,
    data: updateData
  })));
  return {
    items: (0, _crud.errorsToResults)(givenAgents, outgoingErrors, undefined, skipSuccess)
  };
}

async function invalidateAPIKeysForAgents(agents) {
  const apiKeys = agents.reduce((keys, agent) => {
    if (agent.access_api_key_id) {
      keys.push(agent.access_api_key_id);
    }

    if (agent.default_api_key_id) {
      keys.push(agent.default_api_key_id);
    }

    if (agent.default_api_key_history) {
      agent.default_api_key_history.forEach(apiKey => keys.push(apiKey.id));
    }

    return keys;
  }, []);

  if (apiKeys.length) {
    await (0, _api_keys.invalidateAPIKeys)(apiKeys);
  }
}

async function forceUnenrollAgent(soClient, esClient, agentIdOrAgent) {
  const agent = typeof agentIdOrAgent === 'string' ? await (0, _crud.getAgentById)(esClient, agentIdOrAgent) : agentIdOrAgent;
  await invalidateAPIKeysForAgents([agent]);
  await (0, _crud.updateAgent)(esClient, agent.id, {
    active: false,
    unenrolled_at: new Date().toISOString()
  });
}