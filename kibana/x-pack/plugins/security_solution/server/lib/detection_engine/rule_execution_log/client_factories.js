"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ruleExecutionLogForRoutesFactory = exports.ruleExecutionLogForExecutorsFactory = void 0;

var _client = require("./client_for_routes/client");

var _client2 = require("./client_for_executors/client");

var _event_log_reader = require("./event_log/event_log_reader");

var _event_log_writer = require("./event_log/event_log_writer");

var _saved_objects_client = require("./execution_saved_object/saved_objects_client");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const ruleExecutionLogForRoutesFactory = (savedObjectsClient, eventLogClient, logger) => {
  const soClient = (0, _saved_objects_client.createRuleExecutionSavedObjectsClient)(savedObjectsClient, logger);
  const eventLogReader = (0, _event_log_reader.createEventLogReader)(eventLogClient);
  return (0, _client.createClientForRoutes)(soClient, eventLogReader, logger);
};

exports.ruleExecutionLogForRoutesFactory = ruleExecutionLogForRoutesFactory;

const ruleExecutionLogForExecutorsFactory = (savedObjectsClient, eventLogService, logger, context) => {
  const soClient = (0, _saved_objects_client.createRuleExecutionSavedObjectsClient)(savedObjectsClient, logger);
  const eventLogWriter = (0, _event_log_writer.createEventLogWriter)(eventLogService);
  return (0, _client2.createClientForExecutors)(soClient, eventLogWriter, logger, context);
};

exports.ruleExecutionLogForExecutorsFactory = ruleExecutionLogForExecutorsFactory;