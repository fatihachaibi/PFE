"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = void 0;
exports.streamReducer = streamReducer;

var _explain_log_rate_spikes = require("./explain_log_rate_spikes");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const initialState = {
  fields: []
};
exports.initialState = initialState;

function streamReducer(state, action) {
  if (Array.isArray(action)) {
    return action.reduce(streamReducer, state);
  }

  switch (action.type) {
    case _explain_log_rate_spikes.API_ACTION_NAME.ADD_FIELDS:
      return {
        fields: [...state.fields, ...action.payload]
      };

    default:
      return state;
  }
}