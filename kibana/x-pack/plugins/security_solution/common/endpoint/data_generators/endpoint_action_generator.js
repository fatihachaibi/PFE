"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EndpointActionGenerator = void 0;

var _lodash = require("lodash");

var _constants = require("../constants");

var _base_data_generator = require("./base_data_generator");

var _types = require("../types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const ISOLATION_COMMANDS = ['isolate', 'unisolate'];

class EndpointActionGenerator extends _base_data_generator.BaseDataGenerator {
  /** Generate a random endpoint Action request (isolate or unisolate) */
  generate(overrides = {}) {
    const timeStamp = overrides['@timestamp'] ? new Date(overrides['@timestamp']) : new Date(this.randomPastDate());
    return (0, _lodash.merge)({
      '@timestamp': timeStamp.toISOString(),
      agent: {
        id: [this.seededUUIDv4()]
      },
      EndpointActions: {
        action_id: this.seededUUIDv4(),
        expiration: this.randomFutureDate(timeStamp),
        type: 'INPUT_ACTION',
        input_type: 'endpoint',
        data: {
          command: this.randomIsolateCommand(),
          comment: this.randomString(15)
        }
      },
      error: undefined,
      user: {
        id: this.randomUser()
      }
    }, overrides);
  }

  generateActionEsHit(overrides = {}) {
    return Object.assign(this.toEsSearchHit(this.generate(overrides)), {
      _index: `.ds-${_constants.ENDPOINT_ACTIONS_INDEX}-some_namespace`
    });
  }

  generateIsolateAction(overrides = {}) {
    return (0, _lodash.merge)(this.generate({
      EndpointActions: {
        data: {
          command: 'isolate'
        }
      }
    }), overrides);
  }

  generateUnIsolateAction(overrides = {}) {
    return (0, _lodash.merge)(this.generate({
      EndpointActions: {
        data: {
          command: 'unisolate'
        }
      }
    }), overrides);
  }
  /** Generates an endpoint action response */


  generateResponse(overrides = {}) {
    const timeStamp = overrides['@timestamp'] ? new Date(overrides['@timestamp']) : new Date();
    return (0, _lodash.merge)({
      '@timestamp': timeStamp.toISOString(),
      agent: {
        id: this.seededUUIDv4()
      },
      EndpointActions: {
        action_id: this.seededUUIDv4(),
        completed_at: timeStamp.toISOString(),
        data: {
          command: this.randomIsolateCommand(),
          comment: ''
        },
        started_at: this.randomPastDate()
      },
      error: undefined
    }, overrides);
  }

  generateResponseEsHit(overrides = {}) {
    return Object.assign(this.toEsSearchHit(this.generateResponse(overrides)), {
      _index: `.ds-${_constants.ENDPOINT_ACTION_RESPONSES_DS}-some_namespace-something`
    });
  }

  generateActionDetails(overrides = {}) {
    const details = {
      agents: ['agent-a'],
      command: 'isolate',
      completedAt: '2022-04-30T16:08:47.449Z',
      id: '123',
      isCompleted: true,
      isExpired: false,
      wasSuccessful: true,
      errors: undefined,
      logEntries: [{
        item: {
          data: {
            '@timestamp': '2022-04-27T16:08:47.449Z',
            action_id: '123',
            agents: ['agent-a'],
            data: {
              command: 'isolate',
              comment: '5wb6pu6kh2xix5i'
            },
            expiration: '2022-04-29T16:08:47.449Z',
            input_type: 'endpoint',
            type: 'INPUT_ACTION',
            user_id: 'elastic'
          },
          id: '44d8b915-c69c-4c48-8c86-b57d0bd631d0'
        },
        type: 'fleetAction'
      }, {
        item: {
          data: {
            '@timestamp': '2022-04-30T16:08:47.449Z',
            action_data: {
              command: 'unisolate',
              comment: ''
            },
            action_id: '123',
            agent_id: 'agent-a',
            completed_at: '2022-04-30T16:08:47.449Z',
            error: '',
            started_at: '2022-04-30T16:08:47.449Z'
          },
          id: '54-65-65-98'
        },
        type: 'fleetResponse'
      }, {
        item: {
          data: {
            '@timestamp': '2022-04-30T16:08:47.449Z',
            EndpointActions: {
              action_id: '123',
              completed_at: '2022-04-30T16:08:47.449Z',
              data: {
                command: 'unisolate',
                comment: ''
              },
              started_at: '2022-04-30T16:08:47.449Z'
            },
            agent: {
              id: 'agent-a'
            }
          },
          id: '32-65-98'
        },
        type: 'response'
      }],
      startedAt: '2022-04-27T16:08:47.449Z'
    };
    return (0, _lodash.merge)(details, overrides);
  }

  generateActivityLogActionResponse(overrides) {
    return (0, _lodash.merge)({
      type: _types.ActivityLogItemTypes.RESPONSE,
      item: {
        id: this.seededUUIDv4(),
        data: this.generateResponse()
      }
    }, overrides);
  }

  generateAgentPendingActionsSummary(overrides = {}) {
    return (0, _lodash.merge)({
      agent_id: this.seededUUIDv4(),
      pending_actions: {
        isolate: 2,
        unisolate: 0
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

exports.EndpointActionGenerator = EndpointActionGenerator;