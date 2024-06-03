"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_ACTION_NAME = void 0;
exports.addFieldsAction = addFieldsAction;
exports.aiopsExplainLogRateSpikesSchema = void 0;

var _configSchema = require("@kbn/config-schema");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const aiopsExplainLogRateSpikesSchema = _configSchema.schema.object({
  /** The index to query for log rate spikes */
  index: _configSchema.schema.string()
});

exports.aiopsExplainLogRateSpikesSchema = aiopsExplainLogRateSpikesSchema;
const API_ACTION_NAME = {
  ADD_FIELDS: 'add_fields'
};
exports.API_ACTION_NAME = API_ACTION_NAME;

function addFieldsAction(payload) {
  return {
    type: API_ACTION_NAME.ADD_FIELDS,
    payload
  };
}