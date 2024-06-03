"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _uuid = _interopRequireDefault(require("uuid"));

var _synthetics = require("@elastic/synthetics");

var _monitor_management = require("../page_objects/monitor_management");

var _utils = require("./utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


(0, _synthetics.journey)(`MonitorName`, async ({
  page,
  params
}) => {
  const name = `Test monitor ${_uuid.default.v4()}`;
  const uptime = (0, _monitor_management.monitorManagementPageProvider)({
    page,
    kibanaUrl: params.kibanaUrl
  });

  const createBasicMonitor = async () => {
    await uptime.createBasicHTTPMonitorDetails({
      name,
      locations: ['US Central'],
      apmServiceName: 'synthetics',
      url: 'https://www.google.com'
    });
  };

  (0, _synthetics.before)(async () => {
    await uptime.waitForLoadingToFinish();
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
    await createBasicMonitor();
    await uptime.confirmAndSave();
  });
  (0, _synthetics.step)(`shows error if name already exists`, async () => {
    await uptime.navigateToAddMonitor();
    await uptime.createBasicHTTPMonitorDetails({
      name,
      locations: ['US Central'],
      apmServiceName: 'synthetics',
      url: 'https://www.google.com'
    });
    await uptime.assertText({
      text: 'Monitor name already exists.'
    });
    (0, _synthetics.expect)(await page.isEnabled((0, _utils.byTestId)('monitorTestNowRunBtn'))).toBeFalsy();
  });
  (0, _synthetics.step)(`form becomes valid after change`, async () => {
    await uptime.createBasicMonitorDetails({
      name: 'Test monitor 2',
      locations: ['US Central'],
      apmServiceName: 'synthetics'
    });
    (0, _synthetics.expect)(await page.isEnabled((0, _utils.byTestId)('monitorTestNowRunBtn'))).toBeTruthy();
  });
  (0, _synthetics.step)('delete monitor', async () => {
    await uptime.navigateToMonitorManagement();
    await uptime.deleteMonitors();
    await uptime.enableMonitorManagement(false);
  });
});