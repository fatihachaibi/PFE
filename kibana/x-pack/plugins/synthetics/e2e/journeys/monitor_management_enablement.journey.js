"use strict";

var _synthetics = require("@elastic/synthetics");

var _monitor_management = require("../page_objects/monitor_management");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


(0, _synthetics.journey)('Monitor Management-enablement-superuser', async ({
  page,
  params
}) => {
  const uptime = (0, _monitor_management.monitorManagementPageProvider)({
    page,
    kibanaUrl: params.kibanaUrl
  });
  (0, _synthetics.before)(async () => {
    await uptime.waitForLoadingToFinish();
  });
  (0, _synthetics.after)(async () => {
    await uptime.enableMonitorManagement(false);
  });
  (0, _synthetics.step)('Go to monitor-management', async () => {
    await uptime.navigateToMonitorManagement();
  });
  (0, _synthetics.step)('login to Kibana', async () => {
    await uptime.loginToKibana();
    const invalid = await page.locator(`text=Username or password is incorrect. Please try again.`);
    (0, _synthetics.expect)(await invalid.isVisible()).toBeFalsy();
  });
  (0, _synthetics.step)('check add monitor button', async () => {
    (0, _synthetics.expect)(await uptime.checkIsEnabled()).toBe(false);
  });
  (0, _synthetics.step)('enable Monitor Management', async () => {
    await uptime.enableMonitorManagement();
    (0, _synthetics.expect)(await uptime.checkIsEnabled()).toBe(true);
  });
});
(0, _synthetics.journey)('MonitorManagement-enablement-obs-admin', async ({
  page,
  params
}) => {
  const uptime = (0, _monitor_management.monitorManagementPageProvider)({
    page,
    kibanaUrl: params.kibanaUrl
  });
  (0, _synthetics.before)(async () => {
    await uptime.waitForLoadingToFinish();
  });
  (0, _synthetics.step)('Go to monitor-management', async () => {
    await uptime.navigateToMonitorManagement();
  });
  (0, _synthetics.step)('login to Kibana', async () => {
    await uptime.loginToKibana('obs_admin_user', 'changeme');
    const invalid = await page.locator(`text=Username or password is incorrect. Please try again.`);
    (0, _synthetics.expect)(await invalid.isVisible()).toBeFalsy();
  });
  (0, _synthetics.step)('check add monitor button', async () => {
    (0, _synthetics.expect)(await uptime.checkIsEnabled()).toBe(false);
  });
  (0, _synthetics.step)('check that enabled toggle does not appear', async () => {
    (0, _synthetics.expect)(await page.$(`[data-test-subj=syntheticsEnableSwitch]`)).toBeFalsy();
  });
});