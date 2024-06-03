"use strict";

var _synthetics = require("@elastic/synthetics");

var _call_kibana = require("../../../apm/scripts/create_apm_users_and_roles/helpers/call_kibana");

var _utils = require("./utils");

var _login = require("../page_objects/login");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


(0, _synthetics.journey)('DataViewPermissions', async ({
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

    try {
      await (0, _call_kibana.callKibana)({
        elasticsearch: {
          username: 'elastic',
          password: 'changeme'
        },
        kibana: {
          hostname: params.kibanaUrl,
          roleSuffix: ''
        },
        options: {
          method: 'DELETE',
          url: '/api/saved_objects/index-pattern/synthetics_static_index_pattern_id_heartbeat_?force=false'
        }
      }); // eslint-disable-next-line no-empty
    } catch (e) {}
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
    await login.loginToKibana('obs_read_user', 'changeme');
  });
  (0, _synthetics.step)('Click explore data button', async () => {
    await page.click((0, _utils.byTestId)('uptimeExploreDataButton'));
    await (0, _utils.waitForLoadingToFinish)({
      page
    });
    await page.waitForSelector(`text=${permissionError}`);
    (0, _synthetics.expect)(await page.$(`text=${permissionError}`)).toBeTruthy();
  });
});
const permissionError = "Unable to create Data View. You don't have the required permission, please contact your admin.";