"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collectDashboardTelemetry = collectDashboardTelemetry;
exports.getEmptyPanelTypeData = exports.getEmptyDashboardData = exports.collectPanelsByType = void 0;

var _lodash = require("lodash");

var _common = require("../../../controls/common");

var _server = require("../../../controls/server");

var _saved_dashboard_references = require("../../common/saved_dashboard_references");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const getEmptyDashboardData = () => ({
  panels: {
    total: 0,
    by_reference: 0,
    by_value: 0,
    by_type: {}
  },
  controls: (0, _server.initializeControlGroupTelemetry)({})
});

exports.getEmptyDashboardData = getEmptyDashboardData;

const getEmptyPanelTypeData = () => ({
  total: 0,
  by_reference: 0,
  by_value: 0,
  details: {}
});

exports.getEmptyPanelTypeData = getEmptyPanelTypeData;

const collectPanelsByType = (panels, collectorData, embeddableService) => {
  collectorData.panels.total += panels.length;

  for (const panel of panels) {
    const type = panel.type;

    if (!collectorData.panels.by_type[type]) {
      collectorData.panels.by_type[type] = getEmptyPanelTypeData();
    }

    collectorData.panels.by_type[type].total += 1;

    if (panel.id === undefined) {
      collectorData.panels.by_value += 1;
      collectorData.panels.by_type[type].by_value += 1;
    } else {
      collectorData.panels.by_reference += 1;
      collectorData.panels.by_type[type].by_reference += 1;
    } // the following "details" need a follow-up that will actually properly consolidate
    // the data from all embeddables - right now, the only data that is kept is the
    // telemetry for the **final** embeddable of that type


    collectorData.panels.by_type[type].details = embeddableService.telemetry({ ...panel.embeddableConfig,
      id: panel.id || '',
      type: panel.type
    }, collectorData.panels.by_type[type].details);
  }
};

exports.collectPanelsByType = collectPanelsByType;

async function collectDashboardTelemetry(savedObjectClient, embeddableService) {
  const collectorData = getEmptyDashboardData();
  const dashboards = await savedObjectClient.find({
    type: 'dashboard'
  });

  for (const dashboard of dashboards.saved_objects) {
    const attributes = (0, _saved_dashboard_references.injectReferences)(dashboard, {
      embeddablePersistableStateService: embeddableService
    });
    const controlGroupAttributes = attributes.controlGroupInput;

    if (!(0, _lodash.isEmpty)(controlGroupAttributes)) {
      collectorData.controls = embeddableService.telemetry({ ...controlGroupAttributes,
        type: _common.CONTROL_GROUP_TYPE,
        id: `DASHBOARD_${_common.CONTROL_GROUP_TYPE}`
      }, collectorData.controls);
    }

    const panels = JSON.parse(attributes.panelsJSON);
    collectPanelsByType(panels, collectorData, embeddableService);
  }

  return collectorData;
}