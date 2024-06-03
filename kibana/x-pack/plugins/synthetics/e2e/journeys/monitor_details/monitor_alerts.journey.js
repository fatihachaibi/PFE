"use strict";

var _synthetics = require("@elastic/synthetics");

var _lodash = require("lodash");

var _monitor_details = require("../../page_objects/monitor_details");

var _utils = require("../utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const dateRangeStart = '2019-09-10T12:40:08.078Z';
const dateRangeEnd = '2019-09-11T19:40:08.078Z';
const monitorId = '0000-intermittent';
const alertId = 'uptime-anomaly-alert';
const alertThreshold = 'major';
(0, _synthetics.journey)('MonitorAlerts', async ({
  page,
  params
}) => {
  const monitorDetails = (0, _monitor_details.monitorDetailsPageProvider)({
    page,
    kibanaUrl: params.kibanaUrl
  });
  (0, _synthetics.before)(async () => {
    await monitorDetails.waitForLoadingToFinish();
  });
  (0, _synthetics.step)('go to overview', async () => {
    await monitorDetails.navigateToOverviewPage({
      dateRangeEnd,
      dateRangeStart
    });
  });
  (0, _synthetics.step)('login to Kibana', async () => {
    await monitorDetails.loginToKibana();
  });
  (0, _synthetics.step)('go to monitor details', async () => {
    await monitorDetails.navigateToMonitorDetails(monitorId);
    await monitorDetails.waitForLoadingToFinish();
  });
  (0, _synthetics.step)('clean previous data if available', async () => {
    // Should only happen locally
    await monitorDetails.disableAnomalyDetectionAlert().catch(_lodash.noop);
    await monitorDetails.disableAnomalyDetection().catch(_lodash.noop);
  });
  (0, _synthetics.step)('open anomaly detection flyout', async () => {
    await monitorDetails.waitAndRefresh(5000);
    await monitorDetails.enableAnomalyDetection();
    await monitorDetails.ensureAnomalyDetectionFlyoutIsOpen();
  });
  (0, _synthetics.step)('can create job', async () => {
    const canCreateJob = await monitorDetails.canCreateJob();
    const missingLicense = await page.waitForSelector('uptimeMLLicenseInfo', {
      timeout: 10000
    }).then(() => true).catch(() => false);
    (0, _synthetics.expect)(canCreateJob).toBeTruthy();
    (0, _synthetics.expect)(missingLicense).toBeFalsy();
  });
  (0, _synthetics.step)('creates ML job', async () => {
    await page.click((0, _utils.byTestId)('uptimeMLCreateJobBtn'));
    await page.waitForSelector((0, _utils.byTestId)('uptimeMLJobSuccessfullyCreated'), {
      timeout: 30000
    });
    await page.click((0, _utils.byTestId)('toastCloseButton'));
  });
  (0, _synthetics.step)('close anomaly detection flyout', async () => {
    await page.click((0, _utils.byTestId)('cancelSaveRuleButton'));
  });
  (0, _synthetics.step)('open anomaly detection alert', async () => {
    await monitorDetails.waitAndRefresh(3000);
    await monitorDetails.openAnomalyDetectionMenu();
    await page.click((0, _utils.byTestId)('uptimeEnableAnomalyAlertBtn'));
  });
  (0, _synthetics.step)('update anomaly detection alert', async () => {
    await monitorDetails.updateAlert({
      id: alertId,
      threshold: alertThreshold
    });
  });
  (0, _synthetics.step)('save anomaly detection alert', async () => {
    await page.click((0, _utils.byTestId)('saveRuleButton'));
    await page.click((0, _utils.byTestId)('confirmModalConfirmButton'));
    await page.waitForSelector(`text=Created rule "${alertId}"`);
  });
  (0, _synthetics.step)('disable anomaly detection alert', async () => {
    await monitorDetails.waitAndRefresh(5000);
    await monitorDetails.disableAnomalyDetectionAlert();
    await (0, _utils.delay)(1000); // Menu has delay when closing

    await monitorDetails.disableAnomalyDetection();
  });
});