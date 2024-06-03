"use strict";

var _synthetics = require("@elastic/synthetics");

var _monitor_management = require("../../page_objects/monitor_management");

var _utils = require("../utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


(0, _synthetics.journey)('Monitor Management read only user', async ({
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
    await uptime.loginToKibana('obs_read_user', 'changeme');
  });
  (0, _synthetics.step)('Adding monitor is disabled', async () => {
    (0, _synthetics.expect)(await page.isEnabled((0, _utils.byTestId)('syntheticsAddMonitorBtn'))).toBeFalsy();
  });
});