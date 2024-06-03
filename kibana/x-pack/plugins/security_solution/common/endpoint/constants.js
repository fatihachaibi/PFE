"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.telemetryIndexPattern = exports.policyIndexPattern = exports.metadataTransformPrefix = exports.metadataIndexPattern = exports.metadataCurrentIndexPattern = exports.failedFleetActionErrorCode = exports.eventsIndexPattern = exports.alertsIndexPattern = exports.UNISOLATE_HOST_ROUTE = exports.METADATA_UNITED_TRANSFORM = exports.METADATA_UNITED_INDEX = exports.METADATA_TRANSFORMS_STATUS_ROUTE = exports.METADATA_TRANSFORMS_PATTERN = exports.METADATA_DATASTREAM = exports.ISOLATE_HOST_ROUTE = exports.HOST_METADATA_LIST_ROUTE = exports.HOST_METADATA_GET_ROUTE = exports.ENDPOINT_DEFAULT_PAGE_SIZE = exports.ENDPOINT_DEFAULT_PAGE = exports.ENDPOINT_ACTION_RESPONSES_INDEX_PATTERN = exports.ENDPOINT_ACTION_RESPONSES_INDEX = exports.ENDPOINT_ACTION_RESPONSES_DS = exports.ENDPOINT_ACTION_LOG_ROUTE = exports.ENDPOINT_ACTIONS_INDEX = exports.ENDPOINT_ACTIONS_DS = exports.BASE_POLICY_ROUTE = exports.BASE_POLICY_RESPONSE_ROUTE = exports.BASE_ENDPOINT_ROUTE = exports.AGENT_POLICY_SUMMARY_ROUTE = exports.ACTION_STATUS_ROUTE = exports.ACTION_DETAILS_ROUTE = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/** endpoint data streams that are used for host isolation  */

/** for index patterns `.logs-endpoint.actions-* and .logs-endpoint.action.responses-*`*/

const ENDPOINT_ACTIONS_DS = '.logs-endpoint.actions';
exports.ENDPOINT_ACTIONS_DS = ENDPOINT_ACTIONS_DS;
const ENDPOINT_ACTIONS_INDEX = `${ENDPOINT_ACTIONS_DS}-default`;
exports.ENDPOINT_ACTIONS_INDEX = ENDPOINT_ACTIONS_INDEX;
const ENDPOINT_ACTION_RESPONSES_DS = '.logs-endpoint.action.responses';
exports.ENDPOINT_ACTION_RESPONSES_DS = ENDPOINT_ACTION_RESPONSES_DS;
const ENDPOINT_ACTION_RESPONSES_INDEX = `${ENDPOINT_ACTION_RESPONSES_DS}-default`; // search in all namespaces and not only in default

exports.ENDPOINT_ACTION_RESPONSES_INDEX = ENDPOINT_ACTION_RESPONSES_INDEX;
const ENDPOINT_ACTION_RESPONSES_INDEX_PATTERN = `${ENDPOINT_ACTION_RESPONSES_DS}-*`;
exports.ENDPOINT_ACTION_RESPONSES_INDEX_PATTERN = ENDPOINT_ACTION_RESPONSES_INDEX_PATTERN;
const eventsIndexPattern = 'logs-endpoint.events.*';
exports.eventsIndexPattern = eventsIndexPattern;
const alertsIndexPattern = 'logs-endpoint.alerts-*'; // metadata datastream

exports.alertsIndexPattern = alertsIndexPattern;
const METADATA_DATASTREAM = 'metrics-endpoint.metadata-default';
/** index pattern for the data source index (data stream) that the Endpoint streams documents to */

exports.METADATA_DATASTREAM = METADATA_DATASTREAM;
const metadataIndexPattern = 'metrics-endpoint.metadata-*';
/** index that the metadata transform writes to (destination) and that is used by endpoint APIs */

exports.metadataIndexPattern = metadataIndexPattern;
const metadataCurrentIndexPattern = 'metrics-endpoint.metadata_current_*';
/** The metadata Transform Name prefix with NO (package) version) */

exports.metadataCurrentIndexPattern = metadataCurrentIndexPattern;
const metadataTransformPrefix = 'endpoint.metadata_current-default'; // metadata transforms pattern for matching all metadata transform ids

exports.metadataTransformPrefix = metadataTransformPrefix;
const METADATA_TRANSFORMS_PATTERN = 'endpoint.metadata_*'; // united metadata transform id

exports.METADATA_TRANSFORMS_PATTERN = METADATA_TRANSFORMS_PATTERN;
const METADATA_UNITED_TRANSFORM = 'endpoint.metadata_united-default'; // united metadata transform destination index

exports.METADATA_UNITED_TRANSFORM = METADATA_UNITED_TRANSFORM;
const METADATA_UNITED_INDEX = '.metrics-endpoint.metadata_united_default';
exports.METADATA_UNITED_INDEX = METADATA_UNITED_INDEX;
const policyIndexPattern = 'metrics-endpoint.policy-*';
exports.policyIndexPattern = policyIndexPattern;
const telemetryIndexPattern = 'metrics-endpoint.telemetry-*';
exports.telemetryIndexPattern = telemetryIndexPattern;
const BASE_ENDPOINT_ROUTE = '/api/endpoint';
exports.BASE_ENDPOINT_ROUTE = BASE_ENDPOINT_ROUTE;
const HOST_METADATA_LIST_ROUTE = `${BASE_ENDPOINT_ROUTE}/metadata`;
exports.HOST_METADATA_LIST_ROUTE = HOST_METADATA_LIST_ROUTE;
const HOST_METADATA_GET_ROUTE = `${BASE_ENDPOINT_ROUTE}/metadata/{id}`;
exports.HOST_METADATA_GET_ROUTE = HOST_METADATA_GET_ROUTE;
const METADATA_TRANSFORMS_STATUS_ROUTE = `${BASE_ENDPOINT_ROUTE}/metadata/transforms`;
exports.METADATA_TRANSFORMS_STATUS_ROUTE = METADATA_TRANSFORMS_STATUS_ROUTE;
const BASE_POLICY_RESPONSE_ROUTE = `${BASE_ENDPOINT_ROUTE}/policy_response`;
exports.BASE_POLICY_RESPONSE_ROUTE = BASE_POLICY_RESPONSE_ROUTE;
const BASE_POLICY_ROUTE = `${BASE_ENDPOINT_ROUTE}/policy`;
exports.BASE_POLICY_ROUTE = BASE_POLICY_ROUTE;
const AGENT_POLICY_SUMMARY_ROUTE = `${BASE_POLICY_ROUTE}/summaries`;
/** Host Isolation Routes */

exports.AGENT_POLICY_SUMMARY_ROUTE = AGENT_POLICY_SUMMARY_ROUTE;
const ISOLATE_HOST_ROUTE = `${BASE_ENDPOINT_ROUTE}/isolate`;
exports.ISOLATE_HOST_ROUTE = ISOLATE_HOST_ROUTE;
const UNISOLATE_HOST_ROUTE = `${BASE_ENDPOINT_ROUTE}/unisolate`;
/** Endpoint Actions Routes */

exports.UNISOLATE_HOST_ROUTE = UNISOLATE_HOST_ROUTE;
const ENDPOINT_ACTION_LOG_ROUTE = `/api/endpoint/action_log/{agent_id}`;
exports.ENDPOINT_ACTION_LOG_ROUTE = ENDPOINT_ACTION_LOG_ROUTE;
const ACTION_STATUS_ROUTE = `/api/endpoint/action_status`;
exports.ACTION_STATUS_ROUTE = ACTION_STATUS_ROUTE;
const ACTION_DETAILS_ROUTE = `/api/endpoint/action/{action_id}`;
exports.ACTION_DETAILS_ROUTE = ACTION_DETAILS_ROUTE;
const failedFleetActionErrorCode = '424';
exports.failedFleetActionErrorCode = failedFleetActionErrorCode;
const ENDPOINT_DEFAULT_PAGE = 0;
exports.ENDPOINT_DEFAULT_PAGE = ENDPOINT_DEFAULT_PAGE;
const ENDPOINT_DEFAULT_PAGE_SIZE = 10;
exports.ENDPOINT_DEFAULT_PAGE_SIZE = ENDPOINT_DEFAULT_PAGE_SIZE;