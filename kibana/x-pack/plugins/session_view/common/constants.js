"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SESSION_ENTRY_LEADERS_ROUTE = exports.QUERY_KEY_PROCESS_EVENTS = exports.QUERY_KEY_ALERTS = exports.PROCESS_EVENTS_ROUTE = exports.PROCESS_EVENTS_PER_PAGE = exports.PROCESS_EVENTS_INDEX = exports.PREVIEW_ALERTS_INDEX = exports.MOUSE_EVENT_PLACEHOLDER = exports.LOCAL_STORAGE_DISPLAY_OPTIONS_KEY = exports.ENTRY_SESSION_ENTITY_ID_PROPERTY = exports.DEBOUNCE_TIMEOUT = exports.ALERT_UUID_PROPERTY = exports.ALERT_STATUS_ROUTE = exports.ALERT_STATUS = exports.ALERT_ORIGINAL_TIME_PROPERTY = exports.ALERT_COUNT_THRESHOLD = exports.ALERTS_ROUTE = exports.ALERTS_PER_PROCESS_EVENTS_PAGE = exports.ALERTS_PER_PAGE = exports.ALERTS_IN_FIRST_PAGE = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const PROCESS_EVENTS_ROUTE = '/internal/session_view/process_events_route';
exports.PROCESS_EVENTS_ROUTE = PROCESS_EVENTS_ROUTE;
const ALERTS_ROUTE = '/internal/session_view/alerts_route';
exports.ALERTS_ROUTE = ALERTS_ROUTE;
const ALERT_STATUS_ROUTE = '/internal/session_view/alert_status_route';
exports.ALERT_STATUS_ROUTE = ALERT_STATUS_ROUTE;
const SESSION_ENTRY_LEADERS_ROUTE = '/internal/session_view/session_entry_leaders_route';
exports.SESSION_ENTRY_LEADERS_ROUTE = SESSION_ENTRY_LEADERS_ROUTE;
const PROCESS_EVENTS_INDEX = '*:logs-endpoint.events.process*,logs-endpoint.events.process*'; // match on both cross cluster and local indices

exports.PROCESS_EVENTS_INDEX = PROCESS_EVENTS_INDEX;
const PREVIEW_ALERTS_INDEX = '.preview.alerts-security.alerts-default';
exports.PREVIEW_ALERTS_INDEX = PREVIEW_ALERTS_INDEX;
const ENTRY_SESSION_ENTITY_ID_PROPERTY = 'process.entry_leader.entity_id';
exports.ENTRY_SESSION_ENTITY_ID_PROPERTY = ENTRY_SESSION_ENTITY_ID_PROPERTY;
const ALERT_UUID_PROPERTY = 'kibana.alert.uuid';
exports.ALERT_UUID_PROPERTY = ALERT_UUID_PROPERTY;
const ALERT_ORIGINAL_TIME_PROPERTY = 'kibana.alert.original_time';
exports.ALERT_ORIGINAL_TIME_PROPERTY = ALERT_ORIGINAL_TIME_PROPERTY;
const ALERT_STATUS = {
  OPEN: 'open',
  ACKNOWLEDGED: 'acknowledged',
  CLOSED: 'closed'
};
exports.ALERT_STATUS = ALERT_STATUS;
const PROCESS_EVENTS_PER_PAGE = 500;
exports.PROCESS_EVENTS_PER_PAGE = PROCESS_EVENTS_PER_PAGE;
const ALERTS_PER_PROCESS_EVENTS_PAGE = 1500;
exports.ALERTS_PER_PROCESS_EVENTS_PAGE = ALERTS_PER_PROCESS_EVENTS_PAGE;
const ALERTS_PER_PAGE = 100;
exports.ALERTS_PER_PAGE = ALERTS_PER_PAGE;
const ALERTS_IN_FIRST_PAGE = 8; // when showing the count of alerts in details panel tab, if the number
// exceeds ALERT_COUNT_THRESHOLD we put a + next to it, e.g  500+

exports.ALERTS_IN_FIRST_PAGE = ALERTS_IN_FIRST_PAGE;
const ALERT_COUNT_THRESHOLD = 500; // react-query caching keys

exports.ALERT_COUNT_THRESHOLD = ALERT_COUNT_THRESHOLD;
const QUERY_KEY_PROCESS_EVENTS = 'sessionViewProcessEvents';
exports.QUERY_KEY_PROCESS_EVENTS = QUERY_KEY_PROCESS_EVENTS;
const QUERY_KEY_ALERTS = 'sessionViewAlerts';
exports.QUERY_KEY_ALERTS = QUERY_KEY_ALERTS;
const LOCAL_STORAGE_DISPLAY_OPTIONS_KEY = 'sessionView:displayOptions';
exports.LOCAL_STORAGE_DISPLAY_OPTIONS_KEY = LOCAL_STORAGE_DISPLAY_OPTIONS_KEY;
const MOUSE_EVENT_PLACEHOLDER = {
  stopPropagation: () => undefined
};
exports.MOUSE_EVENT_PLACEHOLDER = MOUSE_EVENT_PLACEHOLDER;
const DEBOUNCE_TIMEOUT = 500;
exports.DEBOUNCE_TIMEOUT = DEBOUNCE_TIMEOUT;