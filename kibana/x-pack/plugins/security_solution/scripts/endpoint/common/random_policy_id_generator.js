"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomPolicyIdGenerator = void 0;

var _constants = require("../../../../fleet/common/constants");

var _index_fleet_endpoint_policy = require("../../../common/endpoint/data_loaders/index_fleet_endpoint_policy");

var _setup_fleet_for_endpoint = require("../../../common/endpoint/data_loaders/setup_fleet_for_endpoint");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const fetchEndpointPolicies = kbnClient => {
  return kbnClient.request({
    method: 'GET',
    path: _constants.PACKAGE_POLICY_API_ROUTES.LIST_PATTERN,
    query: {
      perPage: 100,
      kuery: `${_constants.PACKAGE_POLICY_SAVED_OBJECT_TYPE}.package.name: endpoint`
    }
  });
}; // Setup a list of real endpoint policies and return a method to randomly select one


const randomPolicyIdGenerator = async (kbn, log) => {
  log.info('Setting up fleet');
  const fleetResponse = await (0, _setup_fleet_for_endpoint.setupFleetForEndpoint)(kbn);
  log.info('Generarting test policies...');

  const randomN = max => Math.floor(Math.random() * max);

  const policyIds = (await fetchEndpointPolicies(kbn)).data.items.map(policy => policy.id) || []; // If the number of existing policies is less than 5, then create some more policies

  if (policyIds.length < 5) {
    for (let i = 0, t = 5 - policyIds.length; i < t; i++) {
      policyIds.push((await (0, _index_fleet_endpoint_policy.indexFleetEndpointPolicy)(kbn, `Policy for exceptions assignment ${i + 1}`, fleetResponse.endpointPackage.version)).integrationPolicies[0].id);
    }
  }

  return () => policyIds[randomN(policyIds.length)];
};

exports.randomPolicyIdGenerator = randomPolicyIdGenerator;