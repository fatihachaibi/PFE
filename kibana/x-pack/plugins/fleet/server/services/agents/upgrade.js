"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentBulkUpgrades = getCurrentBulkUpgrades;
exports.sendUpgradeAgentAction = sendUpgradeAgentAction;
exports.sendUpgradeAgentsActions = sendUpgradeAgentsActions;

var _moment = _interopRequireDefault(require("moment"));

var _pMap = _interopRequireDefault(require("p-map"));

var _errors = require("../../errors");

var _services = require("../../../common/services");

var _app_context = require("../app_context");

var _common = require("../../../common");

var _actions = require("./actions");

var _crud = require("./crud");

var _helpers = require("./helpers");

var _hosted_agent = require("./hosted_agent");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const MINIMUM_EXECUTION_DURATION_SECONDS = 1800; // 30m

function isMgetDoc(doc) {
  return Boolean(doc && 'found' in doc);
}

async function sendUpgradeAgentAction({
  soClient,
  esClient,
  agentId,
  version,
  sourceUri
}) {
  const now = new Date().toISOString();
  const data = {
    version,
    source_uri: sourceUri
  };
  const agentPolicy = await (0, _crud.getAgentPolicyForAgent)(soClient, esClient, agentId);

  if (agentPolicy !== null && agentPolicy !== void 0 && agentPolicy.is_managed) {
    throw new _errors.HostedAgentPolicyRestrictionRelatedError(`Cannot upgrade agent ${agentId} in hosted agent policy ${agentPolicy.id}`);
  }

  await (0, _actions.createAgentAction)(esClient, {
    agents: [agentId],
    created_at: now,
    data,
    ack_data: data,
    type: 'UPGRADE'
  });
  await (0, _crud.updateAgent)(esClient, agentId, {
    upgraded_at: null,
    upgrade_started_at: now
  });
}

async function sendUpgradeAgentsActions(soClient, esClient, options) {
  // Full set of agents
  const outgoingErrors = {};
  let givenAgents = [];

  if ('agents' in options) {
    givenAgents = options.agents;
  } else if ('agentIds' in options) {
    const givenAgentsResults = await (0, _crud.getAgentDocuments)(esClient, options.agentIds);

    for (const agentResult of givenAgentsResults) {
      if (!isMgetDoc(agentResult) || agentResult.found === false) {
        outgoingErrors[agentResult._id] = new _errors.AgentReassignmentError(`Cannot find agent ${agentResult._id}`);
      } else {
        givenAgents.push((0, _helpers.searchHitToAgent)(agentResult));
      }
    }
  } else if ('kuery' in options) {
    var _options$showInactive;

    return await (0, _crud.processAgentsInBatches)(esClient, {
      kuery: options.kuery,
      showInactive: (_options$showInactive = options.showInactive) !== null && _options$showInactive !== void 0 ? _options$showInactive : false,
      batchSize: options.batchSize
    }, async (agents, skipSuccess) => await upgradeBatch(soClient, esClient, agents, outgoingErrors, options, skipSuccess));
  }

  return await upgradeBatch(soClient, esClient, givenAgents, outgoingErrors, options);
}

async function upgradeBatch(soClient, esClient, givenAgents, outgoingErrors, options, skipSuccess) {
  const errors = { ...outgoingErrors
  };
  const hostedPolicies = await (0, _hosted_agent.getHostedPolicies)(soClient, givenAgents); // results from getAgents with options.kuery '' (or even 'active:false') may include hosted agents
  // filter them out unless options.force

  const agentsToCheckUpgradeable = 'kuery' in options && !options.force ? givenAgents.filter(agent => !(0, _hosted_agent.isHostedAgent)(hostedPolicies, agent)) : givenAgents;

  const kibanaVersion = _app_context.appContextService.getKibanaVersion();

  const upgradeableResults = await Promise.allSettled(agentsToCheckUpgradeable.map(async agent => {
    // Filter out agents currently unenrolling, unenrolled, or not upgradeable b/c of version check
    const isNotAllowed = !options.force && !(0, _services.isAgentUpgradeable)(agent, kibanaVersion, options.version);

    if (isNotAllowed) {
      throw new _errors.IngestManagerError(`${agent.id} is not upgradeable`);
    }

    if (!options.force && (0, _hosted_agent.isHostedAgent)(hostedPolicies, agent)) {
      throw new _errors.HostedAgentPolicyRestrictionRelatedError(`Cannot upgrade agent in hosted agent policy ${agent.policy_id}`);
    }

    return agent;
  })); // Filter & record errors from results

  const agentsToUpdate = upgradeableResults.reduce((agents, result, index) => {
    if (result.status === 'fulfilled') {
      agents.push(result.value);
    } else {
      const id = givenAgents[index].id;
      errors[id] = result.reason;
    }

    return agents;
  }, []); // Create upgrade action for each agent

  const now = new Date().toISOString();
  const data = {
    version: options.version,
    source_uri: options.sourceUri
  };
  const rollingUpgradeOptions = getRollingUpgradeOptions(options === null || options === void 0 ? void 0 : options.startTime, options.upgradeDurationSeconds);
  await (0, _actions.createAgentAction)(esClient, {
    created_at: now,
    data,
    ack_data: data,
    type: 'UPGRADE',
    agents: agentsToUpdate.map(agent => agent.id),
    ...rollingUpgradeOptions
  });
  await (0, _crud.bulkUpdateAgents)(esClient, agentsToUpdate.map(agent => ({
    agentId: agent.id,
    data: {
      upgraded_at: null,
      upgrade_started_at: now
    }
  })));
  return {
    items: (0, _crud.errorsToResults)(givenAgents, errors, 'agentIds' in options ? options.agentIds : undefined, skipSuccess)
  };
}
/**
 * Return current bulk upgrades (non completed or cancelled)
 */


async function getCurrentBulkUpgrades(esClient, now = new Date().toISOString()) {
  // Fetch all non expired actions
  const [_upgradeActions, cancelledActionIds] = await Promise.all([_getUpgradeActions(esClient, now), _getCancelledActionId(esClient, now)]);

  let upgradeActions = _upgradeActions.filter(action => cancelledActionIds.indexOf(action.actionId) < 0); // Fetch acknowledged result for every upgrade action


  upgradeActions = await (0, _pMap.default)(upgradeActions, async upgradeAction => {
    const {
      count
    } = await esClient.count({
      index: _common.AGENT_ACTIONS_RESULTS_INDEX,
      ignore_unavailable: true,
      query: {
        bool: {
          must: [{
            term: {
              action_id: upgradeAction.actionId
            }
          }]
        }
      }
    });
    return { ...upgradeAction,
      nbAgentsAck: count,
      complete: upgradeAction.nbAgents <= count
    };
  }, {
    concurrency: 20
  });
  upgradeActions = upgradeActions.filter(action => !action.complete);
  return upgradeActions;
}

async function _getCancelledActionId(esClient, now = new Date().toISOString()) {
  const res = await esClient.search({
    index: _common.AGENT_ACTIONS_INDEX,
    ignore_unavailable: true,
    query: {
      bool: {
        must: [{
          term: {
            type: 'CANCEL'
          }
        }, {
          exists: {
            field: 'agents'
          }
        }, {
          range: {
            expiration: {
              gte: now
            }
          }
        }]
      }
    }
  });
  return res.hits.hits.map(hit => {
    var _hit$_source, _hit$_source$data;

    return (_hit$_source = hit._source) === null || _hit$_source === void 0 ? void 0 : (_hit$_source$data = _hit$_source.data) === null || _hit$_source$data === void 0 ? void 0 : _hit$_source$data.target_id;
  });
}

async function _getUpgradeActions(esClient, now = new Date().toISOString()) {
  const res = await esClient.search({
    index: _common.AGENT_ACTIONS_INDEX,
    ignore_unavailable: true,
    query: {
      bool: {
        must: [{
          term: {
            type: 'UPGRADE'
          }
        }, {
          exists: {
            field: 'agents'
          }
        }, {
          range: {
            expiration: {
              gte: now
            }
          }
        }]
      }
    }
  });
  return Object.values(res.hits.hits.reduce((acc, hit) => {
    var _hit$_source$agents$l, _hit$_source$agents;

    if (!hit._source || !hit._source.action_id) {
      return acc;
    }

    if (!acc[hit._source.action_id]) {
      var _hit$_source$data2, _hit$_source2;

      acc[hit._source.action_id] = {
        actionId: hit._source.action_id,
        nbAgents: 0,
        complete: false,
        nbAgentsAck: 0,
        version: (_hit$_source$data2 = hit._source.data) === null || _hit$_source$data2 === void 0 ? void 0 : _hit$_source$data2.version,
        startTime: (_hit$_source2 = hit._source) === null || _hit$_source2 === void 0 ? void 0 : _hit$_source2.start_time
      };
    }

    acc[hit._source.action_id].nbAgents += (_hit$_source$agents$l = (_hit$_source$agents = hit._source.agents) === null || _hit$_source$agents === void 0 ? void 0 : _hit$_source$agents.length) !== null && _hit$_source$agents$l !== void 0 ? _hit$_source$agents$l : 0;
    return acc;
  }, {}));
}

const getRollingUpgradeOptions = (startTime, upgradeDurationSeconds) => {
  const now = new Date().toISOString(); // Perform a rolling upgrade

  if (upgradeDurationSeconds) {
    return {
      start_time: startTime !== null && startTime !== void 0 ? startTime : now,
      minimum_execution_duration: MINIMUM_EXECUTION_DURATION_SECONDS,
      expiration: (0, _moment.default)(startTime !== null && startTime !== void 0 ? startTime : now).add(upgradeDurationSeconds, 'seconds').toISOString()
    };
  } // Schedule without rolling upgrade (Immediately after start_time)


  if (startTime && !upgradeDurationSeconds) {
    return {
      start_time: startTime !== null && startTime !== void 0 ? startTime : now,
      minimum_execution_duration: MINIMUM_EXECUTION_DURATION_SECONDS,
      expiration: (0, _moment.default)(startTime).add(MINIMUM_EXECUTION_DURATION_SECONDS, 'seconds').toISOString()
    };
  } else {
    // Regular bulk upgrade (non scheduled, non rolling)
    return {};
  }
};