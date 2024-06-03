"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _uuid = _interopRequireDefault(require("uuid"));

var _synthetics = require("@elastic/synthetics");

var _monitor_management = require("../page_objects/monitor_management");

var _monitor_management2 = require("../../common/runtime_types/monitor_management");

var _utils = require("./utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const customLocation = process.env.SYNTHETICS_TEST_LOCATION;
const basicMonitorDetails = {
  location: customLocation || 'US Central',
  schedule: '3'
};
const httpName = `http monitor ${_uuid.default.v4()}`;
const icmpName = `icmp monitor ${_uuid.default.v4()}`;
const tcpName = `tcp monitor ${_uuid.default.v4()}`;
const browserName = `browser monitor ${_uuid.default.v4()}`;
const configuration = {
  [_monitor_management2.DataStream.HTTP]: {
    monitorConfig: { ...basicMonitorDetails,
      name: httpName,
      url: 'https://elastic.co',
      locations: [basicMonitorDetails.location],
      apmServiceName: 'Sample APM Service'
    },
    monitorDetails: { ...basicMonitorDetails,
      name: httpName,
      url: 'https://elastic.co'
    }
  },
  [_monitor_management2.DataStream.TCP]: {
    monitorConfig: { ...basicMonitorDetails,
      name: tcpName,
      host: 'smtp.gmail.com:587',
      locations: [basicMonitorDetails.location],
      apmServiceName: 'Sample APM Service'
    },
    monitorDetails: { ...basicMonitorDetails,
      name: tcpName,
      host: 'smtp.gmail.com:587'
    }
  },
  [_monitor_management2.DataStream.ICMP]: {
    monitorConfig: { ...basicMonitorDetails,
      name: icmpName,
      host: '1.1.1.1',
      locations: [basicMonitorDetails.location],
      apmServiceName: 'Sample APM Service'
    },
    monitorDetails: { ...basicMonitorDetails,
      name: icmpName,
      hosts: '1.1.1.1'
    }
  },
  [_monitor_management2.DataStream.BROWSER]: {
    monitorConfig: { ...basicMonitorDetails,
      schedule: '10',
      name: browserName,
      inlineScript: 'step("test step", () => {})',
      locations: [basicMonitorDetails.location],
      apmServiceName: 'Sample APM Service'
    },
    monitorDetails: { ...basicMonitorDetails,
      schedule: '10',
      name: browserName
    }
  }
};

const createMonitorJourney = ({
  monitorName,
  monitorType,
  monitorConfig,
  monitorDetails
}) => {
  (0, _synthetics.journey)(`MonitorManagement-monitor-${monitorType}`, async ({
    page,
    params
  }) => {
    const uptime = (0, _monitor_management.monitorManagementPageProvider)({
      page,
      kibanaUrl: params.kibanaUrl
    });
    const isRemote = process.env.SYNTHETICS_REMOTE_ENABLED;
    (0, _synthetics.before)(async () => {
      await uptime.waitForLoadingToFinish();
    });
    (0, _synthetics.after)(async () => {
      await uptime.navigateToMonitorManagement();
      await uptime.enableMonitorManagement(false);
    });
    (0, _synthetics.step)('Go to monitor-management', async () => {
      await uptime.navigateToMonitorManagement();
    });
    (0, _synthetics.step)('login to Kibana', async () => {
      await uptime.loginToKibana();
      const invalid = await page.locator(`text=Username or password is incorrect. Please try again.`);
      (0, _synthetics.expect)(await invalid.isVisible()).toBeFalsy();
    });
    (0, _synthetics.step)(`create ${monitorType} monitor`, async () => {
      await uptime.enableMonitorManagement();
      await uptime.clickAddMonitor();
      await uptime.createMonitor({
        monitorConfig,
        monitorType
      });
      const isSuccessful = await uptime.confirmAndSave();
      (0, _synthetics.expect)(isSuccessful).toBeTruthy();
    });
    (0, _synthetics.step)(`view ${monitorType} details in Monitor Management UI`, async () => {
      await uptime.navigateToMonitorManagement();
      const hasFailure = await uptime.findMonitorConfiguration(monitorDetails);
      (0, _synthetics.expect)(hasFailure).toBeFalsy();
    });

    if (isRemote) {
      (0, _synthetics.step)('view results in overview page', async () => {
        await uptime.navigateToOverviewPage();
        await page.waitForSelector(`text=${monitorName}`, {
          timeout: 160 * 1000
        });
      });
    }

    (0, _synthetics.step)('delete monitor', async () => {
      await uptime.navigateToMonitorManagement();
      const isSuccessful = await uptime.deleteMonitors();
      (0, _synthetics.expect)(isSuccessful).toBeTruthy();
    });
  });
};

Object.keys(configuration).forEach(type => {
  createMonitorJourney({
    monitorType: type,
    monitorName: `${type} monitor`,
    monitorConfig: configuration[type].monitorConfig,
    monitorDetails: configuration[type].monitorDetails
  });
});
(0, _synthetics.journey)('Monitor Management breadcrumbs', async ({
  page,
  params
}) => {
  const uptime = (0, _monitor_management.monitorManagementPageProvider)({
    page,
    kibanaUrl: params.kibanaUrl
  });
  const defaultMonitorDetails = {
    name: `Sample monitor ${_uuid.default.v4()}`,
    location: 'US Central',
    schedule: '3',
    apmServiceName: 'service'
  };
  (0, _synthetics.before)(async () => {
    await uptime.waitForLoadingToFinish();
  });
  (0, _synthetics.after)(async () => {
    await uptime.enableMonitorManagement(false);
  });
  (0, _synthetics.step)('Go to monitor-management', async () => {
    await uptime.navigateToMonitorManagement();
  });
  (0, _synthetics.step)('login to Kibana', async () => {
    await uptime.loginToKibana();
  });
  (0, _synthetics.step)('Check breadcrumb', async () => {
    const lastBreadcrumb = await (await uptime.findByTestSubj('"breadcrumb last"')).textContent();
    (0, _synthetics.expect)(lastBreadcrumb).toEqual('Monitor Management');
  });
  (0, _synthetics.step)('check breadcrumbs', async () => {
    await uptime.enableMonitorManagement();
    await uptime.clickAddMonitor();
    const breadcrumbs = await page.$$('[data-test-subj="breadcrumb"]');
    (0, _synthetics.expect)(await breadcrumbs[1].textContent()).toEqual('Monitor Management');
    const lastBreadcrumb = await (await uptime.findByTestSubj('"breadcrumb last"')).textContent();
    (0, _synthetics.expect)(lastBreadcrumb).toEqual('Add monitor');
  });
  (0, _synthetics.step)('create monitor http monitor', async () => {
    const monitorDetails = { ...defaultMonitorDetails,
      url: 'https://elastic.co',
      locations: [basicMonitorDetails.location]
    };
    await uptime.createBasicHTTPMonitorDetails(monitorDetails);
    const isSuccessful = await uptime.confirmAndSave();
    (0, _synthetics.expect)(isSuccessful).toBeTruthy();
  });
  (0, _synthetics.step)('edit http monitor and check breadcrumb', async () => {
    await uptime.editMonitor(); // breadcrumb is available before edit page is loaded, make sure its edit view

    await page.waitForSelector((0, _utils.byTestId)('monitorManagementMonitorName'), {
      timeout: 60 * 1000
    });
    const breadcrumbs = await page.$$('[data-test-subj=breadcrumb]');
    (0, _synthetics.expect)(await breadcrumbs[1].textContent()).toEqual('Monitor Management');
    const lastBreadcrumb = await (await uptime.findByTestSubj('"breadcrumb last"')).textContent();
    (0, _synthetics.expect)(lastBreadcrumb).toEqual('Edit monitor');
  });
  (0, _synthetics.step)('delete monitor', async () => {
    await uptime.navigateToMonitorManagement();
    const isSuccessful = await uptime.deleteMonitors();
    (0, _synthetics.expect)(isSuccessful).toBeTruthy();
  });
});