"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listConfigurations = listConfigurations;

var _convert_settings_to_string = require("./convert_settings_to_string");

var _get_config_applied_to_agent_through_fleet = require("./get_config_applied_to_agent_through_fleet");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function listConfigurations({
  setup
}) {
  const {
    internalClient,
    indices
  } = setup;
  const params = {
    index: indices.apmAgentConfigurationIndex,
    size: 200
  };
  const [agentConfigs, configsAppliedToAgentsThroughFleet] = await Promise.all([internalClient.search('list_agent_configuration', params), (0, _get_config_applied_to_agent_through_fleet.getConfigsAppliedToAgentsThroughFleet)({
    setup
  })]);
  return agentConfigs.hits.hits.map(_convert_settings_to_string.convertConfigSettingsToString).map(hit => {
    return { ...hit._source,
      applied_by_agent: hit._source.applied_by_agent || configsAppliedToAgentsThroughFleet.hasOwnProperty(hit._source.etag)
    };
  });
}