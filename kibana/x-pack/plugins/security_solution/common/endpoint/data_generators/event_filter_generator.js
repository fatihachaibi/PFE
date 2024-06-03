"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventFilterGenerator = void 0;

var _securitysolutionListConstants = require("@kbn/securitysolution-list-constants");

var _base_data_generator = require("./base_data_generator");

var _exceptions_list_item_generator = require("./exceptions_list_item_generator");

var _artifacts = require("../service/artifacts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const EFFECT_SCOPE_TYPES = [_artifacts.BY_POLICY_ARTIFACT_TAG_PREFIX, _artifacts.GLOBAL_ARTIFACT_TAG];

class EventFilterGenerator extends _base_data_generator.BaseDataGenerator {
  generate(overrides = {}) {
    const eventFilterGenerator = new _exceptions_list_item_generator.ExceptionsListItemGenerator();
    const eventFilterData = eventFilterGenerator.generateEventFilter({
      name: `Generated event ${this.randomString(5)}`,
      item_id: `generator_endpoint_event_filter_${this.randomUUID()}`,
      list_id: _securitysolutionListConstants.ENDPOINT_EVENT_FILTERS_LIST_ID,
      os_types: [this.randomOSFamily()],
      tags: [this.randomChoice(EFFECT_SCOPE_TYPES)],
      _version: undefined,
      created_at: undefined,
      created_by: undefined,
      id: undefined,
      tie_breaker_id: undefined,
      updated_at: undefined,
      updated_by: undefined,
      ...overrides
    });
    return eventFilterData;
  }

}

exports.EventFilterGenerator = EventFilterGenerator;