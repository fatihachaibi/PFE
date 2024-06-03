"use strict";

var _synthetics = require("@elastic/synthetics");

var _monitor_details = require("../../page_objects/monitor_details");

var _utils = require("../utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const dateRangeStart = '2019-09-10T12:40:08.078Z';
const dateRangeEnd = '2019-09-11T19:40:08.078Z';
const monitorId = '0000-intermittent';
(0, _synthetics.journey)('MonitorDetails', async ({
  page,
  params
}) => {
  const monitorDetails = (0, _monitor_details.monitorDetailsPageProvider)({
    page,
    kibanaUrl: params.kibanaUrl
  });
  (0, _synthetics.before)(async () => {
    await monitorDetails.waitForLoadingToFinish();
  });
  (0, _synthetics.step)('go to overview', async () => {
    await monitorDetails.navigateToOverviewPage({
      dateRangeEnd,
      dateRangeStart
    });
  });
  (0, _synthetics.step)('login to Kibana', async () => {
    await monitorDetails.loginToKibana();
  });
  (0, _synthetics.step)('go to monitor details', async () => {
    await monitorDetails.navigateToMonitorDetails(monitorId);
    await monitorDetails.waitForLoadingToFinish();
  });
  (0, _synthetics.step)('should select the ping list location filter', async () => {
    await monitorDetails.selectFilterItem('Location', 'mpls');
  });
  (0, _synthetics.step)('should set the status filter', async () => {
    await monitorDetails.setStatusFilterUp();
  });
  (0, _synthetics.step)('displays ping data as expected', async () => {
    await Promise.all(['XZtoHm0B0I9WX_CznN-6', '7ZtoHm0B0I9WX_CzJ96M', 'pptnHm0B0I9WX_Czst5X', 'I5tnHm0B0I9WX_CzPd46', 'y5tmHm0B0I9WX_Czx93x', 'XZtmHm0B0I9WX_CzUt3H', '-JtlHm0B0I9WX_Cz3dyX', 'k5tlHm0B0I9WX_CzaNxm', 'NZtkHm0B0I9WX_Cz89w9', 'zJtkHm0B0I9WX_CzftsN'].map(id => page.waitForSelector((0, _utils.byTestId)(`"xpack.synthetics.pingList.ping-${id}"`))));
  });
});