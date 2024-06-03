"use strict";

var _synthetics = require("@elastic/synthetics");

var _utils = require("../utils");

var _login = require("../../page_objects/login");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


(0, _synthetics.journey)('TlsFlyoutInAlertingApp', async ({
  page,
  params
}) => {
  const login = (0, _login.loginPageProvider)({
    page
  });
  (0, _synthetics.before)(async () => {
    await (0, _utils.waitForLoadingToFinish)({
      page
    });
  });
  const baseUrl = `${params.kibanaUrl}/app/management/insightsAndAlerting/triggersActions/rules`;
  (0, _synthetics.step)('Go to Alerting app', async () => {
    await page.goto(`${baseUrl}`, {
      waitUntil: 'networkidle'
    });
    await login.loginToKibana();
  });
  (0, _synthetics.step)('Open tls alert flyout', async () => {
    await page.click((0, _utils.byTestId)('createFirstRuleButton'));
    await (0, _utils.waitForLoadingToFinish)({
      page
    });
    await page.click((0, _utils.byTestId)('"xpack.uptime.alerts.tlsCertificate-SelectOption"'));
    await (0, _utils.waitForLoadingToFinish)({
      page
    });
    await (0, _utils.assertText)({
      page,
      text: 'has a certificate expiring within'
    });
  });
  (0, _synthetics.step)('Tls alert flyout has setting values', async () => {
    await (0, _utils.assertText)({
      page,
      text: '30 days'
    });
    await (0, _utils.assertText)({
      page,
      text: '730 days'
    });
  });
});