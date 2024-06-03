"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _uuid = _interopRequireDefault(require("uuid"));

var _synthetics = require("@elastic/synthetics");

var _monitor_management = require("../page_objects/monitor_management");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


(0, _synthetics.journey)('MonitorDetails', async ({
  page,
  params
}) => {
  const uptime = (0, _monitor_management.monitorManagementPageProvider)({
    page,
    kibanaUrl: params.kibanaUrl
  });
  const name = `Test monitor ${_uuid.default.v4()}`;
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
  (0, _synthetics.step)('create basic monitor', async () => {
    await uptime.enableMonitorManagement();
    await uptime.clickAddMonitor();
    await uptime.createBasicHTTPMonitorDetails({
      name,
      locations: ['US Central'],
      apmServiceName: 'synthetics',
      url: 'https://www.google.com'
    });
    await uptime.confirmAndSave();
  });
  (0, _synthetics.step)('navigate to monitor details page', async () => {
    await uptime.assertText({
      text: name
    });
    await Promise.all([page.waitForNavigation(), page.click(`text=${name}`)]);
    await uptime.assertText({
      text: name
    });
    const url = await page.textContent('[data-test-subj="monitor-page-url"]');
    const type = await page.textContent('[data-test-subj="monitor-page-type"]');
    (0, _synthetics.expect)(url).toEqual('https://www.google.com(opens in a new tab or window)');
    (0, _synthetics.expect)(type).toEqual('HTTP');
  });
  (0, _synthetics.step)('delete monitor', async () => {
    await uptime.navigateToMonitorManagement();
    const isSuccessful = await uptime.deleteMonitors();
    (0, _synthetics.expect)(isSuccessful).toBeTruthy();
  });
});