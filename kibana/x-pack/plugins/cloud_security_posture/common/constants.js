"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cspRuleAssetSavedObjectType = exports.UPDATE_RULES_CONFIG_ROUTE_PATH = exports.STATS_ROUTE_PATH = exports.RULE_PASSED = exports.RULE_FAILED = exports.LATEST_FINDINGS_INDEX_NAME = exports.LATEST_FINDINGS_INDEX_DEFAULT_NS = exports.INTERNAL_FEATURE_FLAGS = exports.INFO_ROUTE_PATH = exports.FINDINGS_INDEX_PATTERN = exports.ES_PIT_ROUTE_PATH = exports.CSP_LATEST_FINDINGS_DATA_VIEW = exports.CSP_INGEST_TIMESTAMP_PIPELINE = exports.CLOUD_SECURITY_POSTURE_PACKAGE_NAME = exports.BENCHMARK_SCORE_INDEX_NAME = exports.BENCHMARK_SCORE_INDEX_DEFAULT_NS = exports.BENCHMARKS_ROUTE_PATH = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const INFO_ROUTE_PATH = '/internal/cloud_security_posture/setup_status';
exports.INFO_ROUTE_PATH = INFO_ROUTE_PATH;
const STATS_ROUTE_PATH = '/internal/cloud_security_posture/stats';
exports.STATS_ROUTE_PATH = STATS_ROUTE_PATH;
const BENCHMARKS_ROUTE_PATH = '/internal/cloud_security_posture/benchmarks';
exports.BENCHMARKS_ROUTE_PATH = BENCHMARKS_ROUTE_PATH;
const UPDATE_RULES_CONFIG_ROUTE_PATH = '/internal/cloud_security_posture/update_rules_config';
exports.UPDATE_RULES_CONFIG_ROUTE_PATH = UPDATE_RULES_CONFIG_ROUTE_PATH;
const ES_PIT_ROUTE_PATH = '/internal/cloud_security_posture/es_pit';
exports.ES_PIT_ROUTE_PATH = ES_PIT_ROUTE_PATH;
const CLOUD_SECURITY_POSTURE_PACKAGE_NAME = 'cloud_security_posture';
exports.CLOUD_SECURITY_POSTURE_PACKAGE_NAME = CLOUD_SECURITY_POSTURE_PACKAGE_NAME;
const CSP_LATEST_FINDINGS_DATA_VIEW = 'logs-cloud_security_posture.findings_latest-*';
exports.CSP_LATEST_FINDINGS_DATA_VIEW = CSP_LATEST_FINDINGS_DATA_VIEW;
const FINDINGS_INDEX_PATTERN = 'logs-cloud_security_posture.findings-default*';
exports.FINDINGS_INDEX_PATTERN = FINDINGS_INDEX_PATTERN;
const LATEST_FINDINGS_INDEX_NAME = 'cloud_security_posture.findings_latest';
exports.LATEST_FINDINGS_INDEX_NAME = LATEST_FINDINGS_INDEX_NAME;
const LATEST_FINDINGS_INDEX_DEFAULT_NS = 'logs-' + LATEST_FINDINGS_INDEX_NAME + '-default';
exports.LATEST_FINDINGS_INDEX_DEFAULT_NS = LATEST_FINDINGS_INDEX_DEFAULT_NS;
const BENCHMARK_SCORE_INDEX_NAME = 'cloud_security_posture.scores';
exports.BENCHMARK_SCORE_INDEX_NAME = BENCHMARK_SCORE_INDEX_NAME;
const BENCHMARK_SCORE_INDEX_DEFAULT_NS = 'logs-' + BENCHMARK_SCORE_INDEX_NAME + '-default';
exports.BENCHMARK_SCORE_INDEX_DEFAULT_NS = BENCHMARK_SCORE_INDEX_DEFAULT_NS;
const CSP_INGEST_TIMESTAMP_PIPELINE = 'cloud_security_posture_add_ingest_timestamp_pipeline';
exports.CSP_INGEST_TIMESTAMP_PIPELINE = CSP_INGEST_TIMESTAMP_PIPELINE;
const RULE_PASSED = `passed`;
exports.RULE_PASSED = RULE_PASSED;
const RULE_FAILED = `failed`; // A mapping of in-development features to their status. These features should be hidden from users but can be easily
// activated via a simple code change in a single location.

exports.RULE_FAILED = RULE_FAILED;
const INTERNAL_FEATURE_FLAGS = {
  showBenchmarks: true,
  showManageRulesMock: false,
  showFindingsGroupBy: true
};
exports.INTERNAL_FEATURE_FLAGS = INTERNAL_FEATURE_FLAGS;
const cspRuleAssetSavedObjectType = 'csp_rule';
exports.cspRuleAssetSavedObjectType = cspRuleAssetSavedObjectType;