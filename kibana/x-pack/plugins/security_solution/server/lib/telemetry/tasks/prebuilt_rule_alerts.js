"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTelemetryPrebuiltRuleAlertsTaskConfig = createTelemetryPrebuiltRuleAlertsTaskConfig;

var _constants = require("../constants");

var _helpers = require("../helpers");

var _filterlists = require("../filterlists");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function createTelemetryPrebuiltRuleAlertsTaskConfig(maxTelemetryBatch) {
  return {
    type: 'security:telemetry-prebuilt-rule-alerts',
    title: 'Security Solution - Prebuilt Rule and Elastic ML Alerts Telemetry',
    interval: '1h',
    timeout: '5m',
    version: '1.0.0',
    runTask: async (taskId, logger, receiver, sender, taskExecutionPeriod) => {
      try {
        const [clusterInfoPromise, licenseInfoPromise] = await Promise.allSettled([receiver.fetchClusterInfo(), receiver.fetchLicenseInfo()]);
        const clusterInfo = clusterInfoPromise.status === 'fulfilled' ? clusterInfoPromise.value : {};
        const licenseInfo = licenseInfoPromise.status === 'fulfilled' ? licenseInfoPromise.value : {};
        const telemetryEvents = await receiver.fetchPrebuiltRuleAlerts();

        if (telemetryEvents.length === 0) {
          logger.debug('no prebuilt rule alerts retrieved');
          return 0;
        }

        const processedAlerts = telemetryEvents.map(event => (0, _filterlists.copyAllowlistedFields)(_filterlists.prebuiltRuleAllowlistFields, event));
        const enrichedAlerts = processedAlerts.map(event => ({ ...event,
          licence_id: licenseInfo === null || licenseInfo === void 0 ? void 0 : licenseInfo.uid,
          cluster_uuid: clusterInfo === null || clusterInfo === void 0 ? void 0 : clusterInfo.cluster_uuid,
          cluster_name: clusterInfo === null || clusterInfo === void 0 ? void 0 : clusterInfo.cluster_name
        }));
        logger.debug(`sending ${enrichedAlerts.length} elastic prebuilt alerts`);
        const batches = (0, _helpers.batchTelemetryRecords)(enrichedAlerts, maxTelemetryBatch);

        for (const batch of batches) {
          await sender.sendOnDemand(_constants.TELEMETRY_CHANNEL_DETECTION_ALERTS, batch);
        }

        return enrichedAlerts.length;
      } catch (err) {
        logger.debug('could not complete prebuilt alerts telemetry task');
        return 0;
      }
    }
  };
}