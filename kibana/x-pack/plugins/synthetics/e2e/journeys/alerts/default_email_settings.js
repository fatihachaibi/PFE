"use strict";

var _synthetics = require("@elastic/synthetics");

var _utils = require("../utils");

var _settings = require("../../page_objects/settings");
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


(0, _synthetics.journey)('DefaultEmailSettings', async ({
  page,
  params
}) => {
  const settings = (0, _settings.settingsPageProvider)({
    page,
    kibanaUrl: params.kibanaUrl
  });
  (0, _synthetics.before)(async () => {
    await (0, _utils.waitForLoadingToFinish)({
      page
    });
  });
  const queryParams = new URLSearchParams({
    dateRangeStart: '2021-11-21T22:06:06.502Z',
    dateRangeEnd: '2021-11-21T22:10:08.203Z'
  }).toString();
  const baseUrl = `${params.kibanaUrl}/app/uptime/settings`;
  (0, _synthetics.step)('Go to uptime', async () => {
    await page.goto(`${baseUrl}?${queryParams}`, {
      waitUntil: 'networkidle'
    });
    await settings.loginToKibana();
  });
  (0, _synthetics.step)('clear existing settings', async () => {
    await settings.dismissSyntheticsCallout();
    await page.waitForSelector((0, _utils.byTestId)('"default-connectors-input-loaded"'));
    await page.waitForTimeout(10 * 1000);
    const toEmailInput = await page.$((0, _utils.byTestId)('toEmailAddressInput'));

    if (toEmailInput !== null) {
      await page.click(`${(0, _utils.byTestId)('toEmailAddressInput')} >> ${(0, _utils.byTestId)('comboBoxClearButton')}`);
      await page.click(`${(0, _utils.byTestId)('"default-connectors-input-loaded"')} >> ${(0, _utils.byTestId)('comboBoxClearButton')}`);
      await settings.saveSettings();
    }
  });
  (0, _synthetics.step)('Add email connector', async () => {
    await page.click((0, _utils.byTestId)('createConnectorButton'));
    await page.click((0, _utils.byTestId)('".email-card"'));
    await page.fill((0, _utils.byTestId)('nameInput'), 'Test connector');
    await page.fill((0, _utils.byTestId)('emailFromInput'), 'test@gmail.com');
    await page.selectOption((0, _utils.byTestId)('emailServiceSelectInput'), 'other');
    await page.fill((0, _utils.byTestId)('emailHostInput'), 'test');
    await page.fill((0, _utils.byTestId)('emailPortInput'), '1025');
    await page.click('text=Require authentication for this server');
    await page.click((0, _utils.byTestId)('saveNewActionButton'));
  });
  (0, _synthetics.step)('Select email connector', async () => {
    await (0, _utils.assertNotText)({
      page,
      text: 'Bcc'
    });
    await page.click((0, _utils.byTestId)('default-connectors-input-loaded'));
    await page.click((0, _utils.byTestId)('"Test connector"'));
    await (0, _utils.assertText)({
      page,
      text: 'Bcc'
    });
    await settings.assertText({
      text: 'To email is required for email connector'
    });
    await settings.assertApplyDisabled();
    await settings.fillToEmail('test@gmail.com');
    await settings.assertApplyEnabled();
  });
  (0, _synthetics.step)('Checks for invalid email', async () => {
    await settings.fillToEmail('test@gmail');
    await settings.assertText({
      text: 'test@gmail is not a valid email.'
    });
    await settings.assertApplyDisabled();
    await settings.removeInvalidEmail('test@gmail');
  });
  (0, _synthetics.step)('Save settings', async () => {
    await settings.saveSettings();
  });
});