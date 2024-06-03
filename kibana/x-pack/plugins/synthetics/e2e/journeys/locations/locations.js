"use strict";

var _synthetics = require("@elastic/synthetics");

var _make_checks = require("../../helpers/make_checks");

var _monitor_details = require("../../page_objects/monitor_details");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


(0, _synthetics.journey)('Observer location', async ({
  page,
  params
}) => {
  const monitorDetails = (0, _monitor_details.monitorDetailsPageProvider)({
    page,
    kibanaUrl: params.kibanaUrl
  });
  const NO_LOCATION_MONITOR_ID = 'location-testing-id';
  const LESS_AVAIL_MONITOR_ID = 'less-availability-monitor';

  const addMonitorWithNoLocation = async () => {
    /**
     * This mogrify function will strip the documents of their location
     * data (but preserve their location name), which is necessary for
     * this test to work as desired.
     * @param d current document
     */
    const mogrifyNoLocation = d => {
      var _d$observer, _d$observer$geo;

      if ((_d$observer = d.observer) !== null && _d$observer !== void 0 && (_d$observer$geo = _d$observer.geo) !== null && _d$observer$geo !== void 0 && _d$observer$geo.location) {
        d.observer.geo.location = undefined;
      }

      return d;
    };

    await (0, _make_checks.makeChecksWithStatus)(params.getService('es'), NO_LOCATION_MONITOR_ID, 5, 2, 10000, {}, 'up', mogrifyNoLocation);
  };

  const addLessAvailMonitor = async () => {
    await (0, _make_checks.makeChecksWithStatus)(params.getService('es'), LESS_AVAIL_MONITOR_ID, 5, 2, 10000, {}, 'up');
    await (0, _make_checks.makeChecksWithStatus)(params.getService('es'), LESS_AVAIL_MONITOR_ID, 5, 2, 10000, {}, 'down');
  };

  (0, _synthetics.before)(async () => {
    await addMonitorWithNoLocation();
    await addLessAvailMonitor();
  });
  (0, _synthetics.step)('navigate to overview', async () => {
    await monitorDetails.navigateToOverviewPage();
  });
  (0, _synthetics.step)('login to Kibana', async () => {
    await monitorDetails.loginToKibana();
  });
  (0, _synthetics.step)('navigate to monitor details for no locaiton monitor', async () => {
    await monitorDetails.navigateToMonitorDetails(NO_LOCATION_MONITOR_ID);
  });
  (0, _synthetics.step)('displays the overall availability', async () => {
    await monitorDetails.waitForLoadingToFinish();
    const availability = '100.00 %';
    await monitorDetails.assertText({
      text: availability
    });
  });
  (0, _synthetics.step)('displays less monitor availability', async () => {
    await monitorDetails.navigateToOverviewPage();
    await monitorDetails.navigateToMonitorDetails(LESS_AVAIL_MONITOR_ID);
    await monitorDetails.assertText({
      text: '50.00 %'
    });
  });
});