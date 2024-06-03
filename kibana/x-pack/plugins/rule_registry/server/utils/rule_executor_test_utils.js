"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDefaultAlertExecutorOptions = void 0;

var _mocks = require("../../../../../src/core/server/mocks");

var _mocks2 = require("../../../alerting/server/mocks");

var _mocks3 = require("../../../../../src/plugins/data/common/search/search_source/mocks");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const createDefaultAlertExecutorOptions = ({
  alertId = 'ALERT_INSTANCE_ID',
  ruleName = 'ALERT_RULE_NAME',
  params,
  state,
  createdAt = new Date(),
  startedAt = new Date(),
  updatedAt = new Date(),
  shouldWriteAlerts = true
}) => ({
  alertId,
  createdBy: 'CREATED_BY',
  startedAt,
  name: ruleName,
  rule: {
    updatedBy: null,
    tags: [],
    name: ruleName,
    createdBy: null,
    actions: [],
    enabled: true,
    consumer: 'CONSUMER',
    producer: 'ALERT_PRODUCER',
    schedule: {
      interval: '1m'
    },
    throttle: null,
    createdAt,
    updatedAt,
    notifyWhen: null,
    ruleTypeId: 'RULE_TYPE_ID',
    ruleTypeName: 'RULE_TYPE_NAME'
  },
  tags: [],
  params,
  spaceId: 'SPACE_ID',
  services: {
    alertFactory: _mocks2.alertsMock.createRuleExecutorServices().alertFactory,
    savedObjectsClient: _mocks.savedObjectsClientMock.create(),
    uiSettingsClient: _mocks.uiSettingsServiceMock.createClient(),
    scopedClusterClient: _mocks.elasticsearchServiceMock.createScopedClusterClient(),
    shouldWriteAlerts: () => shouldWriteAlerts,
    shouldStopExecution: () => false,
    searchSourceClient: _mocks3.searchSourceCommonMock
  },
  state,
  updatedBy: null,
  previousStartedAt: null,
  namespace: undefined,
  executionId: 'b33f65d7-6e8b-4aae-8d20-c93613deb33f'
});

exports.createDefaultAlertExecutorOptions = createDefaultAlertExecutorOptions;