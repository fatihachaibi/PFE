"use strict";

var _synthetics = require("@elastic/synthetics");

var _utils = require("./utils");

var _login = require("../page_objects/login");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


(0, _synthetics.journey)('StepsDuration', async ({
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
  const queryParams = new URLSearchParams({
    dateRangeStart: '2021-11-21T22:06:06.502Z',
    dateRangeEnd: '2021-11-21T22:10:08.203Z'
  }).toString();
  const baseUrl = `${params.kibanaUrl}/app/uptime`;
  (0, _synthetics.step)('Go to uptime', async () => {
    await page.goto(`${baseUrl}?${queryParams}`, {
      waitUntil: 'networkidle'
    });
    await login.loginToKibana();
  });
  (0, _synthetics.step)('Go to monitor details', async () => {
    await page.click('text=Dismiss');
    await page.click('button:has-text("test-monitor - inline")');
    (0, _synthetics.expect)(page.url()).toBe(`${baseUrl}/monitor/dGVzdC1tb25pdG9yLWlubGluZQ==/?${queryParams}`);
  });
  (0, _synthetics.step)('Go to journey details', async () => {
    await page.click('text=18 seconds');
    (0, _synthetics.expect)(page.url()).toBe(`${baseUrl}/journey/9f217c22-4b17-11ec-b976-aa665a54da40/steps`);
  });
  (0, _synthetics.step)('Check for monitor duration', async () => {
    await page.hover('text=8.9 sec');
    await page.waitForSelector('text=Explore');
    (0, _synthetics.expect)(await page.$('text=Explore')).toBeTruthy();
    await page.waitForSelector('text=area chart');
    (0, _synthetics.expect)(await page.$('text=area chart')).toBeTruthy();
  });
});