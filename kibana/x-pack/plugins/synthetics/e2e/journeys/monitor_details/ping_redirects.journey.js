"use strict";

var _synthetics = require("@elastic/synthetics");

var _make_checks = require("../../helpers/make_checks");

var _monitor_details = require("../../page_objects/monitor_details");

var _utils = require("../utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


(0, _synthetics.journey)('MonitorPingRedirects', async ({
  page,
  params
}) => {
  const monitorDetails = (0, _monitor_details.monitorDetailsPageProvider)({
    page,
    kibanaUrl: params.kibanaUrl
  });
  const testMonitor = {
    id: '0000-intermittent',
    start: 'now-15m',
    end: 'now',
    redirects: ['http://localhost:3000/first', 'https://www.washingtonpost.com/']
  };
  (0, _synthetics.before)(async () => {
    await monitorDetails.waitForLoadingToFinish();
    await (0, _make_checks.makeChecksWithStatus)(params.getService('es'), testMonitor.id, 5, 2, 10000, {
      http: {
        rtt: {
          total: {
            us: 157784
          }
        },
        response: {
          status_code: 200,
          redirects: testMonitor.redirects,
          body: {
            bytes: 642102,
            hash: '597a8cfb33ff8e09bff16283306553c3895282aaf5386e1843d466d44979e28a'
          }
        }
      }
    }, 'up');
    await (0, _utils.delay)(5000);
  });
  (0, _synthetics.step)('go to monitor-management', async () => {
    await monitorDetails.navigateToOverviewPage({
      dateRangeEnd: testMonitor.end,
      dateRangeStart: testMonitor.start
    });
  });
  (0, _synthetics.step)('login to Kibana', async () => {
    await monitorDetails.loginToKibana();
  });
  (0, _synthetics.step)('go to monitor details', async () => {
    await monitorDetails.navigateToMonitorDetails(testMonitor.id);
  });
  (0, _synthetics.step)('displays redirect info in detail panel', async () => {
    await monitorDetails.waitForLoadingToFinish();
    (0, _synthetics.expect)(await monitorDetails.getMonitorRedirects()).toEqual(`${testMonitor.redirects.length}`);
  });
  (0, _synthetics.step)('displays redirects in ping list expand row', async () => {
    await monitorDetails.expandPingDetails();
    await monitorDetails.waitForLoadingToFinish();
    await page.waitForSelector((0, _utils.byTestId)('uptimeMonitorPingListRedirectInfo'));
  });
});