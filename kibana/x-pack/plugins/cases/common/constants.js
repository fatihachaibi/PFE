"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUPPORTED_CONNECTORS = exports.STACK_APP_ID = exports.SECURITY_SOLUTION_OWNER = exports.SAVED_OBJECT_TYPES = exports.OWNER_INFO = exports.OBSERVABILITY_OWNER = exports.MAX_TITLE_LENGTH = exports.MAX_DOCS_PER_PAGE = exports.MAX_CONCURRENT_SEARCHES = exports.MAX_ALERTS_PER_CASE = exports.INTERNAL_BULK_CREATE_ATTACHMENTS_URL = exports.FEATURE_ID = exports.DEFAULT_FEATURES = exports.DEFAULT_DATE_FORMAT_TZ = exports.DEFAULT_DATE_FORMAT = exports.CONNECTORS_URL = exports.CASE_USER_ACTION_SAVED_OBJECT = exports.CASE_USER_ACTIONS_URL = exports.CASE_TELEMETRY_SAVED_OBJECT_ID = exports.CASE_TELEMETRY_SAVED_OBJECT = exports.CASE_TAGS_URL = exports.CASE_STATUS_URL = exports.CASE_SAVED_OBJECT = exports.CASE_REPORTERS_URL = exports.CASE_PUSH_URL = exports.CASE_METRICS_URL = exports.CASE_METRICS_DETAILS_URL = exports.CASE_FIND_URL = exports.CASE_DETAILS_URL = exports.CASE_DETAILS_ALERTS_URL = exports.CASE_CONNECTOR_MAPPINGS_SAVED_OBJECT = exports.CASE_CONFIGURE_URL = exports.CASE_CONFIGURE_SAVED_OBJECT = exports.CASE_CONFIGURE_DETAILS_URL = exports.CASE_CONFIGURE_CONNECTORS_URL = exports.CASE_COMMENT_SAVED_OBJECT = exports.CASE_COMMENT_DETAILS_URL = exports.CASE_COMMENT_DELETE_URL = exports.CASE_COMMENTS_URL = exports.CASE_ALERTS_URL = exports.CASES_URL = exports.CASES_TELEMETRY_TASK_NAME = exports.CASES_INTERNAL_URL = exports.APP_PATH = exports.APP_OWNER = exports.APP_ID = exports.ACTION_URL = exports.ACTION_TYPES_URL = void 0;

var _api = require("./api");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const DEFAULT_DATE_FORMAT = 'dateFormat';
exports.DEFAULT_DATE_FORMAT = DEFAULT_DATE_FORMAT;
const DEFAULT_DATE_FORMAT_TZ = 'dateFormat:tz';
/**
 * Application
 */

exports.DEFAULT_DATE_FORMAT_TZ = DEFAULT_DATE_FORMAT_TZ;
const APP_ID = 'cases';
exports.APP_ID = APP_ID;
const FEATURE_ID = 'generalCases';
exports.FEATURE_ID = FEATURE_ID;
const APP_OWNER = 'cases';
exports.APP_OWNER = APP_OWNER;
const APP_PATH = '/app/management/insightsAndAlerting/cases';
/**
 * The main Cases application is in the stack management under the
 * Alerts and Insights section. To do that, Cases registers to the management
 * application. This constant holds the application ID of the management plugin
 */

exports.APP_PATH = APP_PATH;
const STACK_APP_ID = 'management';
/**
 * Saved objects
 */

exports.STACK_APP_ID = STACK_APP_ID;
const CASE_SAVED_OBJECT = 'cases';
exports.CASE_SAVED_OBJECT = CASE_SAVED_OBJECT;
const CASE_CONNECTOR_MAPPINGS_SAVED_OBJECT = 'cases-connector-mappings';
exports.CASE_CONNECTOR_MAPPINGS_SAVED_OBJECT = CASE_CONNECTOR_MAPPINGS_SAVED_OBJECT;
const CASE_USER_ACTION_SAVED_OBJECT = 'cases-user-actions';
exports.CASE_USER_ACTION_SAVED_OBJECT = CASE_USER_ACTION_SAVED_OBJECT;
const CASE_COMMENT_SAVED_OBJECT = 'cases-comments';
exports.CASE_COMMENT_SAVED_OBJECT = CASE_COMMENT_SAVED_OBJECT;
const CASE_CONFIGURE_SAVED_OBJECT = 'cases-configure';
/**
 * If more values are added here please also add them here: x-pack/test/cases_api_integration/common/fixtures/plugins
 */

exports.CASE_CONFIGURE_SAVED_OBJECT = CASE_CONFIGURE_SAVED_OBJECT;
const SAVED_OBJECT_TYPES = [CASE_SAVED_OBJECT, CASE_CONNECTOR_MAPPINGS_SAVED_OBJECT, CASE_USER_ACTION_SAVED_OBJECT, CASE_COMMENT_SAVED_OBJECT, CASE_CONFIGURE_SAVED_OBJECT];
/**
 * Case routes
 */

exports.SAVED_OBJECT_TYPES = SAVED_OBJECT_TYPES;
const CASES_URL = '/api/cases';
exports.CASES_URL = CASES_URL;
const CASE_FIND_URL = `${CASES_URL}/_find`;
exports.CASE_FIND_URL = CASE_FIND_URL;
const CASE_DETAILS_URL = `${CASES_URL}/{case_id}`;
exports.CASE_DETAILS_URL = CASE_DETAILS_URL;
const CASE_CONFIGURE_URL = `${CASES_URL}/configure`;
exports.CASE_CONFIGURE_URL = CASE_CONFIGURE_URL;
const CASE_CONFIGURE_DETAILS_URL = `${CASES_URL}/configure/{configuration_id}`;
exports.CASE_CONFIGURE_DETAILS_URL = CASE_CONFIGURE_DETAILS_URL;
const CASE_CONFIGURE_CONNECTORS_URL = `${CASE_CONFIGURE_URL}/connectors`;
exports.CASE_CONFIGURE_CONNECTORS_URL = CASE_CONFIGURE_CONNECTORS_URL;
const CASE_COMMENTS_URL = `${CASE_DETAILS_URL}/comments`;
exports.CASE_COMMENTS_URL = CASE_COMMENTS_URL;
const CASE_COMMENT_DETAILS_URL = `${CASE_DETAILS_URL}/comments/{comment_id}`;
exports.CASE_COMMENT_DETAILS_URL = CASE_COMMENT_DETAILS_URL;
const CASE_COMMENT_DELETE_URL = `${CASE_DETAILS_URL}/comments/{comment_id}`;
exports.CASE_COMMENT_DELETE_URL = CASE_COMMENT_DELETE_URL;
const CASE_PUSH_URL = `${CASE_DETAILS_URL}/connector/{connector_id}/_push`;
exports.CASE_PUSH_URL = CASE_PUSH_URL;
const CASE_REPORTERS_URL = `${CASES_URL}/reporters`;
exports.CASE_REPORTERS_URL = CASE_REPORTERS_URL;
const CASE_STATUS_URL = `${CASES_URL}/status`;
exports.CASE_STATUS_URL = CASE_STATUS_URL;
const CASE_TAGS_URL = `${CASES_URL}/tags`;
exports.CASE_TAGS_URL = CASE_TAGS_URL;
const CASE_USER_ACTIONS_URL = `${CASE_DETAILS_URL}/user_actions`;
exports.CASE_USER_ACTIONS_URL = CASE_USER_ACTIONS_URL;
const CASE_ALERTS_URL = `${CASES_URL}/alerts/{alert_id}`;
exports.CASE_ALERTS_URL = CASE_ALERTS_URL;
const CASE_DETAILS_ALERTS_URL = `${CASE_DETAILS_URL}/alerts`;
exports.CASE_DETAILS_ALERTS_URL = CASE_DETAILS_ALERTS_URL;
const CASE_METRICS_URL = `${CASES_URL}/metrics`;
exports.CASE_METRICS_URL = CASE_METRICS_URL;
const CASE_METRICS_DETAILS_URL = `${CASES_URL}/metrics/{case_id}`;
/**
 * Internal routes
 */

exports.CASE_METRICS_DETAILS_URL = CASE_METRICS_DETAILS_URL;
const CASES_INTERNAL_URL = '/internal/cases';
exports.CASES_INTERNAL_URL = CASES_INTERNAL_URL;
const INTERNAL_BULK_CREATE_ATTACHMENTS_URL = `${CASES_INTERNAL_URL}/{case_id}/attachments/_bulk_create`;
/**
 * Action routes
 */

exports.INTERNAL_BULK_CREATE_ATTACHMENTS_URL = INTERNAL_BULK_CREATE_ATTACHMENTS_URL;
const ACTION_URL = '/api/actions';
exports.ACTION_URL = ACTION_URL;
const ACTION_TYPES_URL = `${ACTION_URL}/connector_types`;
exports.ACTION_TYPES_URL = ACTION_TYPES_URL;
const CONNECTORS_URL = `${ACTION_URL}/connectors`;
exports.CONNECTORS_URL = CONNECTORS_URL;
const SUPPORTED_CONNECTORS = [`${_api.ConnectorTypes.serviceNowITSM}`, `${_api.ConnectorTypes.serviceNowSIR}`, `${_api.ConnectorTypes.jira}`, `${_api.ConnectorTypes.resilient}`, `${_api.ConnectorTypes.swimlane}`];
/**
 * Alerts
 */

exports.SUPPORTED_CONNECTORS = SUPPORTED_CONNECTORS;
const MAX_ALERTS_PER_CASE = 1000;
/**
 * Owner
 */

exports.MAX_ALERTS_PER_CASE = MAX_ALERTS_PER_CASE;
const SECURITY_SOLUTION_OWNER = 'securitySolution';
exports.SECURITY_SOLUTION_OWNER = SECURITY_SOLUTION_OWNER;
const OBSERVABILITY_OWNER = 'observability';
exports.OBSERVABILITY_OWNER = OBSERVABILITY_OWNER;
const OWNER_INFO = {
  [SECURITY_SOLUTION_OWNER]: {
    label: 'Security',
    iconType: 'logoSecurity'
  },
  [OBSERVABILITY_OWNER]: {
    label: 'Observability',
    iconType: 'logoObservability'
  }
};
/**
 * Searching
 */

exports.OWNER_INFO = OWNER_INFO;
const MAX_DOCS_PER_PAGE = 10000;
exports.MAX_DOCS_PER_PAGE = MAX_DOCS_PER_PAGE;
const MAX_CONCURRENT_SEARCHES = 10;
/**
 * Validation
 */

exports.MAX_CONCURRENT_SEARCHES = MAX_CONCURRENT_SEARCHES;
const MAX_TITLE_LENGTH = 64;
/**
 * Cases features
 */

exports.MAX_TITLE_LENGTH = MAX_TITLE_LENGTH;
const DEFAULT_FEATURES = Object.freeze({
  alerts: {
    sync: true,
    enabled: true
  },
  metrics: []
});
/**
 * Task manager
 */

exports.DEFAULT_FEATURES = DEFAULT_FEATURES;
const CASES_TELEMETRY_TASK_NAME = 'cases-telemetry-task';
/**
 * Telemetry
 */

exports.CASES_TELEMETRY_TASK_NAME = CASES_TELEMETRY_TASK_NAME;
const CASE_TELEMETRY_SAVED_OBJECT = 'cases-telemetry';
exports.CASE_TELEMETRY_SAVED_OBJECT = CASE_TELEMETRY_SAVED_OBJECT;
const CASE_TELEMETRY_SAVED_OBJECT_ID = 'cases-telemetry';
exports.CASE_TELEMETRY_SAVED_OBJECT_ID = CASE_TELEMETRY_SAVED_OBJECT_ID;