"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FleetActionGenerator = void 0;

var _lodash = require("lodash");

var _common = require("../../../../fleet/common");

var _base_data_generator = require("./base_data_generator");

var _types = require("../types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const ISOLATION_COMMANDS = ['isolate', 'unisolate'];

class FleetActionGenerator extends _base_data_generator.BaseDataGenerator {
  /** Generate a random endpoint Action (isolate or unisolate) */
  generate(overrides = {}) {
    const timeStamp = overrides['@timestamp'] ? new Date(overrides['@timestamp']) : new Date(this.randomPastDate());
    return (0, _lodash.merge)({
      action_id: this.seededUUIDv4(),
      '@timestamp': timeStamp.toISOString(),
      expiration: this.randomFutureDate(timeStamp),
      type: 'INPUT_ACTION',
      input_type: 'endpoint',
      agents: [this.seededUUIDv4()],
      user_id: 'elastic',
      data: {
        command: this.randomIsolateCommand(),
        comment: this.randomString(15)
      }
    }, overrides);
  }

  generateActionEsHit(overrides = {}) {
    return Object.assign(this.toEsSearchHit(this.generate(overrides)), {
      _index: _common.AGENT_ACTIONS_INDEX
    });
  }

  generateIsolateAction(overrides = {}) {
    return (0, _lodash.merge)(this.generate({
      data: {
        command: 'isolate'
      }
    }), overrides);
  }

  generateUnIsolateAction(overrides = {}) {
    return (0, _lodash.merge)(this.generate({
      data: {
        command: 'unisolate'
      }
    }), overrides);
  }
  /** Generates an endpoint action response */


  generateResponse(overrides = {}) {
    const timeStamp = overrides['@timestamp'] ? new Date(overrides['@timestamp']) : new Date();
    return (0, _lodash.merge)({
      action_data: {
        command: this.randomIsolateCommand(),
        comment: ''
      },
      action_id: this.seededUUIDv4(),
      agent_id: this.seededUUIDv4(),
      started_at: this.randomPastDate(),
      completed_at: timeStamp.toISOString(),
      error: 'some error happened',
      '@timestamp': timeStamp.toISOString()
    }, overrides);
  }

  generateResponseEsHit(overrides = {}) {
    return Object.assign(this.toEsSearchHit(this.generateResponse(overrides)), {
      _index: _common.AGENT_ACTIONS_RESULTS_INDEX
    });
  }
  /**
   * An Activity Log entry as returned by the Activity log API
   * @param overrides
   */


  generateActivityLogActionResponse(overrides = {}) {
    return (0, _lodash.merge)({
      type: _types.ActivityLogItemTypes.FLEET_RESPONSE,
      item: {
        id: this.seededUUIDv4(),
        data: this.generateResponse()
      }
    }, overrides);
  }

  randomFloat() {
    return this.random();
  }

  randomN(max) {
    return super.randomN(max);
  }

  randomIsolateCommand() {
    return this.randomChoice(ISOLATION_COMMANDS);
  }

}

exports.FleetActionGenerator = FleetActionGenerator;