"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cli = void 0;

var _devCliRunner = require("@kbn/dev-cli-runner");

var _devCliErrors = require("@kbn/dev-cli-errors");

var _test = require("@kbn/test");

var _index_fleet_endpoint_policy = require("../../../common/endpoint/data_loaders/index_fleet_endpoint_policy");

var _setup_fleet_for_endpoint = require("../../../common/endpoint/data_loaders/setup_fleet_for_endpoint");

var _base_data_generator = require("../../../common/endpoint/data_generators/base_data_generator");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


class EndpointPolicyGenerator extends _base_data_generator.BaseDataGenerator {
  policyName(preFix = '') {
    return `${preFix}${preFix ? ' ' : ''}${this.randomString(5)} Endpoint Policy`;
  }

}

const generate = new EndpointPolicyGenerator();

const cli = () => {
  (0, _devCliRunner.run)(async ({
    log,
    flags: {
      kibana,
      count
    }
  }) => {
    const kbn = new _test.KbnClient({
      log,
      url: kibana
    });
    const max = Number(count);
    let created = 0;
    log.info(`Creating ${count} endpoint policies...`);

    try {
      const {
        endpointPackage
      } = await (0, _setup_fleet_for_endpoint.setupFleetForEndpoint)(kbn);

      while (created < max) {
        created++;
        await (0, _index_fleet_endpoint_policy.indexFleetEndpointPolicy)(kbn, generate.policyName(created), endpointPackage.version);
      }
    } catch (error) {
      log.error(error);
      throw (0, _devCliErrors.createFailError)(error.message);
    }

    log.success(`Done!`);
  }, {
    description: 'Load Endpoint Policies into fleet (also creates associated Agent Policies)',
    flags: {
      string: ['kibana'],
      default: {
        count: 15,
        kibana: 'http://elastic:changeme@localhost:5601'
      },
      help: `
        --count            Number of Endpoint Policies to create. Default: 15
        --kibana           The URL to kibana including credentials. Default: http://elastic:changeme@localhost:5601
      `
    }
  });
};

exports.cli = cli;