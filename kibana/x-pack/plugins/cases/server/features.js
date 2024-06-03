"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCasesKibanaFeature = void 0;

var _i18n = require("@kbn/i18n");

var _server = require("../../../../src/core/server");

var _constants = require("../common/constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * The order of appearance in the feature privilege page
 * under the management section. Cases should be under
 * the Actions and Connectors feature
 */


const FEATURE_ORDER = 3100;

const getCasesKibanaFeature = () => ({
  id: _constants.FEATURE_ID,
  name: _i18n.i18n.translate('xpack.cases.features.casesFeatureName', {
    defaultMessage: 'Cases'
  }),
  category: _server.DEFAULT_APP_CATEGORIES.management,
  app: [],
  order: FEATURE_ORDER,
  management: {
    insightsAndAlerting: [_constants.APP_ID]
  },
  cases: [_constants.APP_ID],
  privileges: {
    all: {
      cases: {
        all: [_constants.APP_ID]
      },
      management: {
        insightsAndAlerting: [_constants.APP_ID]
      },
      savedObject: {
        all: [],
        read: []
      },
      ui: ['crud_cases', 'read_cases']
    },
    read: {
      cases: {
        read: [_constants.APP_ID]
      },
      management: {
        insightsAndAlerting: [_constants.APP_ID]
      },
      savedObject: {
        all: [],
        read: []
      },
      ui: ['read_cases']
    }
  }
});

exports.getCasesKibanaFeature = getCasesKibanaFeature;