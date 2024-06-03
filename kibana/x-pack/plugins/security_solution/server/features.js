"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKibanaPrivilegesFeaturePrivileges = exports.getCasesKibanaFeature = exports.getAlertsSubFeature = void 0;

var _i18n = require("@kbn/i18n");

var _server = require("../../../../src/core/server");

var _common = require("../../../../src/plugins/data_views/common");

var _constants = require("../common/constants");

var _saved_objects = require("./saved_objects");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getCasesKibanaFeature = () => ({
  id: _constants.CASES_FEATURE_ID,
  name: _i18n.i18n.translate('xpack.securitySolution.featureRegistry.linkSecuritySolutionCaseTitle', {
    defaultMessage: 'Cases'
  }),
  order: 1100,
  category: _server.DEFAULT_APP_CATEGORIES.security,
  app: [_constants.CASES_FEATURE_ID, 'kibana'],
  catalogue: [_constants.APP_ID],
  cases: [_constants.APP_ID],
  privileges: {
    all: {
      app: [_constants.CASES_FEATURE_ID, 'kibana'],
      catalogue: [_constants.APP_ID],
      cases: {
        all: [_constants.APP_ID]
      },
      api: [],
      savedObject: {
        all: [],
        read: []
      },
      ui: ['crud_cases', 'read_cases'] // uiCapabilities[CASES_FEATURE_ID].crud_cases or read_cases

    },
    read: {
      app: [_constants.CASES_FEATURE_ID, 'kibana'],
      catalogue: [_constants.APP_ID],
      cases: {
        read: [_constants.APP_ID]
      },
      api: [],
      savedObject: {
        all: [],
        read: []
      },
      ui: ['read_cases'] // uiCapabilities[CASES_FEATURE_ID].read_cases

    }
  }
});

exports.getCasesKibanaFeature = getCasesKibanaFeature;

const getAlertsSubFeature = ruleTypes => ({
  name: _i18n.i18n.translate('xpack.securitySolution.featureRegistry.manageAlertsName', {
    defaultMessage: 'Alerts'
  }),
  privilegeGroups: [{
    groupType: 'mutually_exclusive',
    privileges: [{
      id: 'alerts_all',
      name: _i18n.i18n.translate('xpack.securitySolution.featureRegistry.subfeature.alertsAllName', {
        defaultMessage: 'All'
      }),
      includeIn: 'all',
      alerting: {
        alert: {
          all: ruleTypes
        }
      },
      savedObject: {
        all: [],
        read: []
      },
      ui: ['crud_alerts', 'read_alerts']
    }, {
      id: 'alerts_read',
      name: _i18n.i18n.translate('xpack.securitySolution.featureRegistry.subfeature.alertsReadName', {
        defaultMessage: 'Read'
      }),
      includeIn: 'read',
      alerting: {
        alert: {
          read: ruleTypes
        }
      },
      savedObject: {
        all: [],
        read: []
      },
      ui: ['read_alerts']
    }]
  }]
});

exports.getAlertsSubFeature = getAlertsSubFeature;

const getKibanaPrivilegesFeaturePrivileges = ruleTypes => ({
  id: _constants.SERVER_APP_ID,
  name: _i18n.i18n.translate('xpack.securitySolution.featureRegistry.linkSecuritySolutionTitle', {
    defaultMessage: 'Security'
  }),
  order: 1100,
  category: _server.DEFAULT_APP_CATEGORIES.security,
  app: [_constants.APP_ID, 'kibana'],
  catalogue: [_constants.APP_ID],
  management: {
    insightsAndAlerting: ['triggersActions']
  },
  alerting: ruleTypes,
  subFeatures: [],
  privileges: {
    all: {
      app: [_constants.APP_ID, 'kibana'],
      catalogue: [_constants.APP_ID],
      api: [_constants.APP_ID, 'lists-all', 'lists-read', 'lists-summary', 'rac'],
      savedObject: {
        all: ['alert', 'exception-list', 'exception-list-agnostic', _common.DATA_VIEW_SAVED_OBJECT_TYPE, ..._saved_objects.savedObjectTypes],
        read: []
      },
      alerting: {
        rule: {
          all: ruleTypes
        },
        alert: {
          all: ruleTypes
        }
      },
      management: {
        insightsAndAlerting: ['triggersActions']
      },
      ui: ['show', 'crud']
    },
    read: {
      app: [_constants.APP_ID, 'kibana'],
      catalogue: [_constants.APP_ID],
      api: [_constants.APP_ID, 'lists-read', 'rac'],
      savedObject: {
        all: [],
        read: ['exception-list', 'exception-list-agnostic', _common.DATA_VIEW_SAVED_OBJECT_TYPE, ..._saved_objects.savedObjectTypes]
      },
      alerting: {
        rule: {
          read: ruleTypes
        },
        alert: {
          all: ruleTypes
        }
      },
      management: {
        insightsAndAlerting: ['triggersActions']
      },
      ui: ['show']
    }
  }
});

exports.getKibanaPrivilegesFeaturePrivileges = getKibanaPrivilegesFeaturePrivileges;