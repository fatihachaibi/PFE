"use strict";

var _synthetics = require("@elastic/synthetics");

var _synthetics_app = require("../../page_objects/synthetics_app");

var _utils = require("../utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


(0, _synthetics.journey)(`Getting Started Page`, async ({
  page,
  params
}) => {
  const syntheticsApp = (0, _synthetics_app.syntheticsAppPageProvider)({
    page,
    kibanaUrl: params.kibanaUrl
  });

  const createBasicMonitor = async () => {
    await syntheticsApp.fillFirstMonitorDetails({
      url: 'https://www.elastic.co',
      locations: ['us_central'],
      apmServiceName: 'synthetics'
    });
  };

  (0, _synthetics.before)(async () => {
    await syntheticsApp.waitForLoadingToFinish();
  });
  (0, _synthetics.step)('Go to monitor-management', async () => {
    await syntheticsApp.navigateToMonitorManagement();
  });
  (0, _synthetics.step)('login to Kibana', async () => {
    await syntheticsApp.loginToKibana();
    const invalid = await page.locator(`text=Username or password is incorrect. Please try again.`);
    (0, _synthetics.expect)(await invalid.isVisible()).toBeFalsy();
  });
  (0, _synthetics.step)('shows validation error on touch', async () => {
    await page.click((0, _utils.byTestId)('urls-input'));
    await page.click((0, _utils.byTestId)('comboBoxInput'));
    (0, _synthetics.expect)(await page.isVisible('text=URL is required')).toBeTruthy();
  });
  (0, _synthetics.step)('create basic monitor', async () => {
    await createBasicMonitor();
    await syntheticsApp.confirmAndSave();
  });
  (0, _synthetics.step)('it navigates to details page after saving', async () => {
    await page.click('text=Dismiss');
    (0, _synthetics.expect)(await page.isVisible('text=My first monitor')).toBeTruthy();
  });
});