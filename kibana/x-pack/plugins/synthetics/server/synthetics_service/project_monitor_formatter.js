"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectMonitorFormatter = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = require("lodash");

var _runtime_types = require("../../common/runtime_types");

var _synthetics_monitor = require("../legacy_uptime/lib/saved_objects/synthetics_monitor");

var _browser = require("./normalizers/browser");

var _secrets = require("./utils/secrets");

var _add_monitor = require("../routes/monitor_cruds/add_monitor");

var _edit_monitor = require("../routes/monitor_cruds/edit_monitor");

var _delete_monitor = require("../routes/monitor_cruds/delete_monitor");

var _monitor_validation = require("../routes/monitor_cruds/monitor_validation");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


class ProjectMonitorFormatter {
  constructor({
    locations,
    keepStale,
    savedObjectsClient,
    encryptedSavedObjectsClient,
    projectId,
    spaceId,
    monitors,
    server
  }) {
    (0, _defineProperty2.default)(this, "projectId", void 0);
    (0, _defineProperty2.default)(this, "spaceId", void 0);
    (0, _defineProperty2.default)(this, "keepStale", void 0);
    (0, _defineProperty2.default)(this, "locations", void 0);
    (0, _defineProperty2.default)(this, "savedObjectsClient", void 0);
    (0, _defineProperty2.default)(this, "encryptedSavedObjectsClient", void 0);
    (0, _defineProperty2.default)(this, "staleMonitorsMap", {});
    (0, _defineProperty2.default)(this, "monitors", []);
    (0, _defineProperty2.default)(this, "createdMonitors", []);
    (0, _defineProperty2.default)(this, "deletedMonitors", []);
    (0, _defineProperty2.default)(this, "updatedMonitors", []);
    (0, _defineProperty2.default)(this, "staleMonitors", []);
    (0, _defineProperty2.default)(this, "failedMonitors", []);
    (0, _defineProperty2.default)(this, "failedStaleMonitors", []);
    (0, _defineProperty2.default)(this, "server", void 0);
    (0, _defineProperty2.default)(this, "projectFilter", void 0);
    (0, _defineProperty2.default)(this, "configureAllProjectMonitors", async () => {
      this.staleMonitorsMap = await this.getAllProjectMonitorsForProject();
      await Promise.all(this.monitors.map(monitor => this.configureProjectMonitor({
        monitor
      })));
      await this.handleStaleMonitors();
    });
    (0, _defineProperty2.default)(this, "configureProjectMonitor", async ({
      monitor
    }) => {
      try {
        // check to see if monitor already exists
        const normalizedMonitor = (0, _browser.normalizeProjectMonitor)({
          locations: this.locations,
          monitor,
          projectId: this.projectId,
          namespace: this.spaceId
        });
        const validationResult = (0, _monitor_validation.validateProjectMonitor)(monitor, this.projectId);

        if (!validationResult.valid) {
          const {
            reason: message,
            details,
            payload
          } = validationResult;
          this.failedMonitors.push({
            id: monitor.id,
            reason: message,
            details,
            payload
          });

          if (this.staleMonitorsMap[monitor.id]) {
            this.staleMonitorsMap[monitor.id].stale = false;
          }

          return null;
        }

        const previousMonitor = await this.getExistingMonitor(monitor.id);

        if (previousMonitor) {
          await this.updateMonitor(previousMonitor, normalizedMonitor);
          this.updatedMonitors.push(monitor.id);

          if (this.staleMonitorsMap[monitor.id]) {
            this.staleMonitorsMap[monitor.id].stale = false;
          }
        } else {
          const newMonitor = await this.savedObjectsClient.create(_synthetics_monitor.syntheticsMonitorType, (0, _secrets.formatSecrets)({ ...normalizedMonitor,
            revision: 1
          }));
          await (0, _add_monitor.syncNewMonitor)({
            server: this.server,
            monitor: normalizedMonitor,
            monitorSavedObject: newMonitor
          });
          this.createdMonitors.push(monitor.id);
        }
      } catch (e) {
        this.server.logger.error(e);
        this.failedMonitors.push({
          id: monitor.id,
          reason: 'Failed to create or update monitor',
          details: e.message,
          payload: monitor
        });
      }
    });
    (0, _defineProperty2.default)(this, "getAllProjectMonitorsForProject", async () => {
      const staleMonitors = {};
      let page = 1;
      let totalMonitors = 0;

      do {
        const {
          total,
          saved_objects: savedObjects
        } = await this.getProjectMonitorsForProject(page);
        savedObjects.forEach(savedObject => {
          const journeyId = savedObject.attributes[_runtime_types.ConfigKey.JOURNEY_ID];

          if (journeyId) {
            staleMonitors[journeyId] = {
              stale: true,
              savedObjectId: savedObject.id,
              journeyId
            };
          }
        });
        page++;
        totalMonitors = total;
      } while (Object.keys(staleMonitors).length < totalMonitors);

      return staleMonitors;
    });
    (0, _defineProperty2.default)(this, "getProjectMonitorsForProject", async page => {
      return await this.savedObjectsClient.find({
        type: _synthetics_monitor.syntheticsMonitorType,
        page,
        perPage: 500,
        filter: this.projectFilter
      });
    });
    (0, _defineProperty2.default)(this, "getExistingMonitor", async journeyId => {
      const filter = `${this.projectFilter} AND ${_synthetics_monitor.syntheticsMonitorType}.attributes.${_runtime_types.ConfigKey.JOURNEY_ID}: "${journeyId}"`;
      const {
        saved_objects: savedObjects
      } = await this.savedObjectsClient.find({
        type: _synthetics_monitor.syntheticsMonitorType,
        perPage: 1,
        filter
      });
      return savedObjects === null || savedObjects === void 0 ? void 0 : savedObjects[0];
    });
    (0, _defineProperty2.default)(this, "updateMonitor", async (previousMonitor, normalizedMonitor) => {
      var _previousMonitor$name;

      const decryptedPreviousMonitor = await this.encryptedSavedObjectsClient.getDecryptedAsInternalUser(_synthetics_monitor.syntheticsMonitor.name, previousMonitor.id, {
        namespace: (_previousMonitor$name = previousMonitor.namespaces) === null || _previousMonitor$name === void 0 ? void 0 : _previousMonitor$name[0]
      });
      const {
        attributes: {
          [_runtime_types.ConfigKey.REVISION]: _,
          ...normalizedPreviousMonitorAttributes
        }
      } = (0, _secrets.normalizeSecrets)(decryptedPreviousMonitor);
      const hasMonitorBeenEdited = !(0, _lodash.isEqual)(normalizedMonitor, normalizedPreviousMonitorAttributes);
      const monitorWithRevision = (0, _secrets.formatSecrets)({ ...normalizedPreviousMonitorAttributes,
        // ensures monitor AAD remains consistent in the event of field name changes
        ...normalizedMonitor,
        revision: hasMonitorBeenEdited ? (previousMonitor.attributes[_runtime_types.ConfigKey.REVISION] || 0) + 1 : previousMonitor.attributes[_runtime_types.ConfigKey.REVISION]
      });
      const editedMonitor = await this.savedObjectsClient.update(_synthetics_monitor.syntheticsMonitorType, previousMonitor.id, { ...monitorWithRevision,
        urls: ''
      });

      if (hasMonitorBeenEdited) {
        (0, _edit_monitor.syncEditedMonitor)({
          editedMonitor: normalizedMonitor,
          editedMonitorSavedObject: editedMonitor,
          previousMonitor,
          server: this.server
        });
      }

      return {
        editedMonitor,
        errors: []
      };
    });
    (0, _defineProperty2.default)(this, "handleStaleMonitors", async () => {
      try {
        const staleMonitorsData = Object.values(this.staleMonitorsMap).filter(monitor => monitor.stale === true);
        await Promise.all(staleMonitorsData.map(monitor => {
          if (!this.keepStale) {
            return this.deleteStaleMonitor({
              monitorId: monitor.savedObjectId,
              journeyId: monitor.journeyId
            });
          } else {
            this.staleMonitors.push(monitor.journeyId);
            return null;
          }
        }));
      } catch (e) {
        this.server.logger.error(e);
      }
    });
    (0, _defineProperty2.default)(this, "deleteStaleMonitor", async ({
      monitorId,
      journeyId
    }) => {
      try {
        await (0, _delete_monitor.deleteMonitor)({
          savedObjectsClient: this.savedObjectsClient,
          server: this.server,
          monitorId
        });
        this.deletedMonitors.push(journeyId);
      } catch (e) {
        this.failedStaleMonitors.push({
          id: monitorId,
          reason: 'Failed to delete stale monitor',
          details: e.message
        });
      }
    });
    this.projectId = projectId;
    this.spaceId = spaceId;
    this.locations = locations;
    this.keepStale = keepStale;
    this.savedObjectsClient = savedObjectsClient;
    this.encryptedSavedObjectsClient = encryptedSavedObjectsClient;
    this.monitors = monitors;
    this.server = server;
    this.projectFilter = `${_synthetics_monitor.syntheticsMonitorType}.attributes.${_runtime_types.ConfigKey.PROJECT_ID}: "${this.projectId}"`;
  }

}

exports.ProjectMonitorFormatter = ProjectMonitorFormatter;