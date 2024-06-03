"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeProjectMonitors = exports.normalizeProjectMonitor = void 0;

var _monitor_defaults = require("../../../common/constants/monitor_defaults");

var _monitor_management = require("../../../common/runtime_types/monitor_management");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const normalizeProjectMonitor = ({
  locations = [],
  monitor,
  projectId,
  namespace
}) => {
  var _monitor$locations, _monitor$throttling, _monitor$throttling2, _monitor$throttling3, _monitor$filter, _monitor$enabled;

  const defaultFields = _monitor_defaults.DEFAULT_FIELDS[_monitor_management.DataStream.BROWSER];
  const normalizedFields = {
    [_monitor_management.ConfigKey.MONITOR_TYPE]: _monitor_management.DataStream.BROWSER,
    [_monitor_management.ConfigKey.MONITOR_SOURCE_TYPE]: _monitor_management.SourceType.PROJECT,
    [_monitor_management.ConfigKey.NAME]: monitor.name || '',
    [_monitor_management.ConfigKey.SCHEDULE]: {
      number: `${monitor.schedule}`,
      unit: _monitor_management.ScheduleUnit.MINUTES
    },
    [_monitor_management.ConfigKey.PROJECT_ID]: projectId || defaultFields[_monitor_management.ConfigKey.PROJECT_ID],
    [_monitor_management.ConfigKey.JOURNEY_ID]: monitor.id || defaultFields[_monitor_management.ConfigKey.JOURNEY_ID],
    [_monitor_management.ConfigKey.SOURCE_PROJECT_CONTENT]: monitor.content || defaultFields[_monitor_management.ConfigKey.SOURCE_PROJECT_CONTENT],
    [_monitor_management.ConfigKey.LOCATIONS]: (_monitor$locations = monitor.locations) === null || _monitor$locations === void 0 ? void 0 : _monitor$locations.map(key => {
      return locations.find(location => location.id === key);
    }).filter(location => location !== undefined),
    [_monitor_management.ConfigKey.THROTTLING_CONFIG]: monitor.throttling ? `${monitor.throttling.download}d/${monitor.throttling.upload}u/${monitor.throttling.latency}l` : defaultFields[_monitor_management.ConfigKey.THROTTLING_CONFIG],
    [_monitor_management.ConfigKey.DOWNLOAD_SPEED]: `${((_monitor$throttling = monitor.throttling) === null || _monitor$throttling === void 0 ? void 0 : _monitor$throttling.download) || defaultFields[_monitor_management.ConfigKey.DOWNLOAD_SPEED]}`,
    [_monitor_management.ConfigKey.UPLOAD_SPEED]: `${((_monitor$throttling2 = monitor.throttling) === null || _monitor$throttling2 === void 0 ? void 0 : _monitor$throttling2.upload) || defaultFields[_monitor_management.ConfigKey.UPLOAD_SPEED]}`,
    [_monitor_management.ConfigKey.IS_THROTTLING_ENABLED]: Boolean(monitor.throttling) || defaultFields[_monitor_management.ConfigKey.IS_THROTTLING_ENABLED],
    [_monitor_management.ConfigKey.LATENCY]: `${((_monitor$throttling3 = monitor.throttling) === null || _monitor$throttling3 === void 0 ? void 0 : _monitor$throttling3.latency) || defaultFields[_monitor_management.ConfigKey.LATENCY]}`,
    [_monitor_management.ConfigKey.APM_SERVICE_NAME]: monitor.apmServiceName || defaultFields[_monitor_management.ConfigKey.APM_SERVICE_NAME],
    [_monitor_management.ConfigKey.IGNORE_HTTPS_ERRORS]: monitor.ignoreHTTPSErrors || defaultFields[_monitor_management.ConfigKey.IGNORE_HTTPS_ERRORS],
    [_monitor_management.ConfigKey.SCREENSHOTS]: monitor.screenshot || defaultFields[_monitor_management.ConfigKey.SCREENSHOTS],
    [_monitor_management.ConfigKey.TAGS]: monitor.tags || defaultFields[_monitor_management.ConfigKey.TAGS],
    [_monitor_management.ConfigKey.PLAYWRIGHT_OPTIONS]: Object.keys(monitor.playwrightOptions || {}).length ? JSON.stringify(monitor.playwrightOptions) : defaultFields[_monitor_management.ConfigKey.PLAYWRIGHT_OPTIONS],
    [_monitor_management.ConfigKey.PARAMS]: Object.keys(monitor.params || {}).length ? JSON.stringify(monitor.params) : defaultFields[_monitor_management.ConfigKey.PARAMS],
    [_monitor_management.ConfigKey.JOURNEY_FILTERS_MATCH]: ((_monitor$filter = monitor.filter) === null || _monitor$filter === void 0 ? void 0 : _monitor$filter.match) || defaultFields[_monitor_management.ConfigKey.JOURNEY_FILTERS_MATCH],
    [_monitor_management.ConfigKey.NAMESPACE]: namespace || defaultFields[_monitor_management.ConfigKey.NAMESPACE],
    [_monitor_management.ConfigKey.ORIGINAL_SPACE]: namespace || defaultFields[_monitor_management.ConfigKey.ORIGINAL_SPACE],
    [_monitor_management.ConfigKey.CUSTOM_HEARTBEAT_ID]: `${monitor.id}-${projectId}-${namespace}`,
    [_monitor_management.ConfigKey.TIMEOUT]: null,
    [_monitor_management.ConfigKey.ENABLED]: (_monitor$enabled = monitor.enabled) !== null && _monitor$enabled !== void 0 ? _monitor$enabled : defaultFields[_monitor_management.ConfigKey.ENABLED]
  };
  return { ..._monitor_defaults.DEFAULT_FIELDS[_monitor_management.DataStream.BROWSER],
    ...normalizedFields
  };
};

exports.normalizeProjectMonitor = normalizeProjectMonitor;

const normalizeProjectMonitors = ({
  locations = [],
  monitors = [],
  projectId,
  namespace
}) => {
  return monitors.map(monitor => {
    return normalizeProjectMonitor({
      monitor,
      locations,
      projectId,
      namespace
    });
  });
};

exports.normalizeProjectMonitors = normalizeProjectMonitors;