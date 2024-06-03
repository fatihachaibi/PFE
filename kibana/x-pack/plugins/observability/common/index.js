"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ProgressiveLoadingQuality", {
  enumerable: true,
  get: function () {
    return _progressive_loading.ProgressiveLoadingQuality;
  }
});
Object.defineProperty(exports, "apmProgressiveLoading", {
  enumerable: true,
  get: function () {
    return _ui_settings_keys.apmProgressiveLoading;
  }
});
Object.defineProperty(exports, "apmServiceInventoryOptimizedSorting", {
  enumerable: true,
  get: function () {
    return _ui_settings_keys.apmServiceInventoryOptimizedSorting;
  }
});
Object.defineProperty(exports, "apmTraceExplorerTab", {
  enumerable: true,
  get: function () {
    return _ui_settings_keys.apmTraceExplorerTab;
  }
});
exports.casesPath = exports.casesFeatureId = void 0;
Object.defineProperty(exports, "defaultApmServiceEnvironment", {
  enumerable: true,
  get: function () {
    return _ui_settings_keys.defaultApmServiceEnvironment;
  }
});
Object.defineProperty(exports, "enableComparisonByDefault", {
  enumerable: true,
  get: function () {
    return _ui_settings_keys.enableComparisonByDefault;
  }
});
Object.defineProperty(exports, "enableInfrastructureView", {
  enumerable: true,
  get: function () {
    return _ui_settings_keys.enableInfrastructureView;
  }
});
Object.defineProperty(exports, "enableInspectEsQueries", {
  enumerable: true,
  get: function () {
    return _ui_settings_keys.enableInspectEsQueries;
  }
});
Object.defineProperty(exports, "formatDurationFromTimeUnitChar", {
  enumerable: true,
  get: function () {
    return _formatters.formatDurationFromTimeUnitChar;
  }
});
Object.defineProperty(exports, "getProbabilityFromProgressiveLoadingQuality", {
  enumerable: true,
  get: function () {
    return _progressive_loading.getProbabilityFromProgressiveLoadingQuality;
  }
});
Object.defineProperty(exports, "maxSuggestions", {
  enumerable: true,
  get: function () {
    return _ui_settings_keys.maxSuggestions;
  }
});
exports.uptimeOverviewLocatorID = exports.observabilityFeatureId = exports.observabilityAppId = void 0;

var _formatters = require("./utils/formatters");

var _ui_settings_keys = require("./ui_settings_keys");

var _progressive_loading = require("./progressive_loading");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const casesFeatureId = 'observabilityCases'; // The ID of the observability app. Should more appropriately be called
// 'observability' but it's used in telemetry by applicationUsage so we don't
// want to change it.

exports.casesFeatureId = casesFeatureId;
const observabilityAppId = 'observability-overview'; // Used by feature and "solution" registration

exports.observabilityAppId = observabilityAppId;
const observabilityFeatureId = 'observability'; // Used by Cases to install routes

exports.observabilityFeatureId = observabilityFeatureId;
const casesPath = '/cases'; // Name of a locator created by the uptime plugin. Intended for use
// by other plugins as well, so defined here to prevent cross-references.

exports.casesPath = casesPath;
const uptimeOverviewLocatorID = 'UPTIME_OVERVIEW_LOCATOR';
exports.uptimeOverviewLocatorID = uptimeOverviewLocatorID;