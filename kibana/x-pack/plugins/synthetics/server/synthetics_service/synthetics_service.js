"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyntheticsService = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _monitor_upgrade_sender = require("../routes/telemetry/monitor_upgrade_sender");

var _install_index_templates = require("../routes/synthetics_service/install_index_templates");

var _get_api_key = require("./get_api_key");

var _synthetics_monitor = require("../legacy_uptime/lib/saved_objects/synthetics_monitor");

var _get_es_hosts = require("./get_es_hosts");

var _service_api_client = require("./service_api_client");

var _format_configs = require("./formatters/format_configs");

var _runtime_types = require("../../common/runtime_types");

var _get_service_locations = require("./get_service_locations");

var _hydrate_saved_object = require("./hydrate_saved_object");

var _secrets = require("./utils/secrets");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/* eslint-disable max-classes-per-file */


const SYNTHETICS_SERVICE_SYNC_MONITORS_TASK_TYPE = 'UPTIME:SyntheticsService:Sync-Saved-Monitor-Objects';
const SYNTHETICS_SERVICE_SYNC_MONITORS_TASK_ID = 'UPTIME:SyntheticsService:sync-task';
const SYNTHETICS_SERVICE_SYNC_INTERVAL_DEFAULT = '5m';

class SyntheticsService {
  constructor(logger, server, config) {
    (0, _defineProperty2.default)(this, "logger", void 0);
    (0, _defineProperty2.default)(this, "server", void 0);
    (0, _defineProperty2.default)(this, "apiClient", void 0);
    (0, _defineProperty2.default)(this, "config", void 0);
    (0, _defineProperty2.default)(this, "esHosts", void 0);
    (0, _defineProperty2.default)(this, "apiKey", void 0);
    (0, _defineProperty2.default)(this, "locations", void 0);
    (0, _defineProperty2.default)(this, "throttling", void 0);
    (0, _defineProperty2.default)(this, "indexTemplateExists", void 0);
    (0, _defineProperty2.default)(this, "indexTemplateInstalling", void 0);
    (0, _defineProperty2.default)(this, "isAllowed", void 0);
    (0, _defineProperty2.default)(this, "signupUrl", void 0);
    (0, _defineProperty2.default)(this, "syncErrors", []);
    this.logger = logger;
    this.server = server;
    this.config = config;
    this.isAllowed = false;
    this.signupUrl = null;
    this.apiClient = new _service_api_client.ServiceAPIClient(logger, this.config, this.server);
    this.esHosts = (0, _get_es_hosts.getEsHosts)({
      config: this.config,
      cloud: server.cloud
    });
    this.locations = [];
  }

  async init() {
    await this.registerServiceLocations();
    const {
      allowed,
      signupUrl
    } = await this.apiClient.checkAccountAccessStatus();
    this.isAllowed = allowed;
    this.signupUrl = signupUrl;
  }

  setupIndexTemplates() {
    if (this.indexTemplateExists) {
      // if already installed, don't need to reinstall
      return;
    }

    if (!this.indexTemplateInstalling) {
      (0, _install_index_templates.installSyntheticsIndexTemplates)(this.server).then(result => {
        this.indexTemplateInstalling = false;

        if (result.name === 'synthetics' && result.install_status === 'installed') {
          this.logger.info('Installed synthetics index templates');
          this.indexTemplateExists = true;
        } else if (result.name === 'synthetics' && result.install_status === 'install_failed') {
          this.logger.warn(new IndexTemplateInstallationError());
          this.indexTemplateExists = false;
        }
      }, () => {
        this.indexTemplateInstalling = false;
        this.logger.warn(new IndexTemplateInstallationError());
      });
      this.indexTemplateInstalling = true;
    }
  }

  async registerServiceLocations() {
    const service = this;

    try {
      const result = await (0, _get_service_locations.getServiceLocations)(service.server);
      service.throttling = result.throttling;
      service.locations = result.locations;
      service.apiClient.locations = result.locations;
    } catch (e) {
      this.logger.error(e);
    }
  }

  registerSyncTask(taskManager) {
    const service = this;
    taskManager.registerTaskDefinitions({
      [SYNTHETICS_SERVICE_SYNC_MONITORS_TASK_TYPE]: {
        title: 'Synthetics Service - Sync Saved Monitors',
        description: 'This task periodically pushes saved monitors to Synthetics Service.',
        timeout: '1m',
        maxAttempts: 3,
        maxConcurrency: 1,
        createTaskRunner: ({
          taskInstance
        }) => {
          return {
            // Perform the work of the task. The return value should fit the TaskResult interface.
            async run() {
              const {
                state
              } = taskInstance;

              try {
                await service.registerServiceLocations();
                const {
                  allowed,
                  signupUrl
                } = await service.apiClient.checkAccountAccessStatus();
                service.isAllowed = allowed;
                service.signupUrl = signupUrl;

                if (service.isAllowed) {
                  service.setupIndexTemplates();
                  service.syncErrors = await service.pushConfigs();
                }
              } catch (e) {
                (0, _monitor_upgrade_sender.sendErrorTelemetryEvents)(service.logger, service.server.telemetry, {
                  reason: 'Failed to run scheduled sync task',
                  message: e === null || e === void 0 ? void 0 : e.message,
                  type: 'runTaskError',
                  code: e === null || e === void 0 ? void 0 : e.code,
                  status: e.status,
                  kibanaVersion: service.server.kibanaVersion
                });
                throw e;
              }

              return {
                state
              };
            },

            async cancel() {
              var _service$logger;

              (_service$logger = service.logger) === null || _service$logger === void 0 ? void 0 : _service$logger.warn(`Task ${SYNTHETICS_SERVICE_SYNC_MONITORS_TASK_ID} timed out`);
            }

          };
        }
      }
    });
  }

  async scheduleSyncTask(taskManager) {
    var _this$config$syncInte;

    const interval = (_this$config$syncInte = this.config.syncInterval) !== null && _this$config$syncInte !== void 0 ? _this$config$syncInte : SYNTHETICS_SERVICE_SYNC_INTERVAL_DEFAULT;

    try {
      var _this$logger, _taskInstance$schedul;

      await taskManager.removeIfExists(SYNTHETICS_SERVICE_SYNC_MONITORS_TASK_ID);
      const taskInstance = await taskManager.ensureScheduled({
        id: SYNTHETICS_SERVICE_SYNC_MONITORS_TASK_ID,
        taskType: SYNTHETICS_SERVICE_SYNC_MONITORS_TASK_TYPE,
        schedule: {
          interval
        },
        params: {},
        state: {},
        scope: ['uptime']
      });
      (_this$logger = this.logger) === null || _this$logger === void 0 ? void 0 : _this$logger.info(`Task ${SYNTHETICS_SERVICE_SYNC_MONITORS_TASK_ID} scheduled with interval ${(_taskInstance$schedul = taskInstance.schedule) === null || _taskInstance$schedul === void 0 ? void 0 : _taskInstance$schedul.interval}.`);
      return taskInstance;
    } catch (e) {
      var _e$message, _this$logger2, _e$message2;

      (0, _monitor_upgrade_sender.sendErrorTelemetryEvents)(this.logger, this.server.telemetry, {
        reason: 'Failed to schedule sync task',
        message: (_e$message = e === null || e === void 0 ? void 0 : e.message) !== null && _e$message !== void 0 ? _e$message : e,
        type: 'scheduleTaskError',
        code: e === null || e === void 0 ? void 0 : e.code,
        status: e.status,
        kibanaVersion: this.server.kibanaVersion
      });
      (_this$logger2 = this.logger) === null || _this$logger2 === void 0 ? void 0 : _this$logger2.error(`Error running task: ${SYNTHETICS_SERVICE_SYNC_MONITORS_TASK_ID}, `, (_e$message2 = e === null || e === void 0 ? void 0 : e.message) !== null && _e$message2 !== void 0 ? _e$message2 : e);
      return null;
    }
  }

  async getApiKey() {
    try {
      this.apiKey = await (0, _get_api_key.getAPIKeyForSyntheticsService)({
        server: this.server
      });
    } catch (err) {
      this.logger.error(err);
      throw err;
    }

    return this.apiKey;
  }

  async getOutput(apiKey) {
    return {
      hosts: this.esHosts,
      api_key: `${apiKey === null || apiKey === void 0 ? void 0 : apiKey.id}:${apiKey === null || apiKey === void 0 ? void 0 : apiKey.apiKey}`
    };
  }

  async addConfig(config) {
    const monitors = this.formatConfigs([config]);
    this.apiKey = await this.getApiKey();

    if (!this.apiKey) {
      return null;
    }

    const data = {
      monitors,
      output: await this.getOutput(this.apiKey)
    };
    this.logger.debug(`1 monitor will be pushed to synthetics service.`);

    try {
      this.syncErrors = await this.apiClient.post(data);
      return this.syncErrors;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  async pushConfigs(configs, isEdit) {
    const monitorConfigs = configs !== null && configs !== void 0 ? configs : await this.getMonitorConfigs();
    const monitors = this.formatConfigs(monitorConfigs);

    if (monitors.length === 0) {
      this.logger.debug('No monitor found which can be pushed to service.');
      return null;
    }

    if (!configs && monitorConfigs.length > 0) {
      const telemetry = this.getSyncTelemetry(monitorConfigs);
      (0, _monitor_upgrade_sender.sendSyncTelemetryEvents)(this.logger, this.server.telemetry, telemetry);
    }

    this.apiKey = await this.getApiKey();

    if (!this.apiKey) {
      return null;
    }

    const data = {
      monitors,
      output: await this.getOutput(this.apiKey),
      isEdit: !!isEdit
    };
    this.logger.debug(`${monitors.length} monitors will be pushed to synthetics service.`);

    try {
      this.syncErrors = await this.apiClient.put(data);
      return this.syncErrors;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  async runOnceConfigs(configs) {
    const monitors = this.formatConfigs(configs || (await this.getMonitorConfigs()));

    if (monitors.length === 0) {
      return;
    }

    this.apiKey = await this.getApiKey();

    if (!this.apiKey) {
      return null;
    }

    const data = {
      monitors,
      output: await this.getOutput(this.apiKey)
    };

    try {
      return await this.apiClient.runOnce(data);
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  async triggerConfigs(request, configs) {
    const monitors = this.formatConfigs(configs || (await this.getMonitorConfigs()));

    if (monitors.length === 0) {
      return;
    }

    this.apiKey = await this.getApiKey();

    if (!this.apiKey) {
      return null;
    }

    const data = {
      monitors,
      output: await this.getOutput(this.apiKey)
    };

    try {
      return await this.apiClient.runOnce(data);
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  async deleteConfigs(configs) {
    var _this$syncErrors;

    this.apiKey = await this.getApiKey();

    if (!this.apiKey) {
      return null;
    }

    const data = {
      monitors: this.formatConfigs(configs),
      output: await this.getOutput(this.apiKey)
    };
    const result = await this.apiClient.delete(data);

    if (this.syncErrors && ((_this$syncErrors = this.syncErrors) === null || _this$syncErrors === void 0 ? void 0 : _this$syncErrors.length) > 0) {
      this.syncErrors = await this.pushConfigs();
    }

    return result;
  }

  async deleteAllConfigs() {
    const configs = await this.getMonitorConfigs();
    return await this.deleteConfigs(configs);
  }

  async getMonitorConfigs() {
    const savedObjectsClient = this.server.savedObjectsClient;
    const encryptedClient = this.server.encryptedSavedObjects.getClient();

    if (!(savedObjectsClient !== null && savedObjectsClient !== void 0 && savedObjectsClient.find)) {
      return [];
    }

    const {
      saved_objects: encryptedMonitors
    } = await savedObjectsClient.find({
      type: _synthetics_monitor.syntheticsMonitorType,
      namespaces: ['*'],
      perPage: 10000
    });
    const start = performance.now();
    const monitors = await Promise.all(encryptedMonitors.map(monitor => {
      var _monitor$namespaces;

      return encryptedClient.getDecryptedAsInternalUser(_synthetics_monitor.syntheticsMonitor.name, monitor.id, {
        namespace: (_monitor$namespaces = monitor.namespaces) === null || _monitor$namespaces === void 0 ? void 0 : _monitor$namespaces[0]
      });
    }));
    const end = performance.now();
    const duration = end - start;
    this.logger.debug(`Decrypted ${monitors.length} monitors. Took ${duration} milliseconds`, {
      event: {
        duration
      },
      monitors: monitors.length
    });

    if (this.indexTemplateExists) {
      // without mapping, querying won't make sense
      (0, _hydrate_saved_object.hydrateSavedObjects)({
        monitors: monitors,
        server: this.server
      });
    }

    return (monitors !== null && monitors !== void 0 ? monitors : []).map(monitor => {
      const attributes = monitor.attributes;
      return (0, _format_configs.formatHeartbeatRequest)({
        monitor: (0, _secrets.normalizeSecrets)(monitor).attributes,
        monitorId: monitor.id,
        customHeartbeatId: attributes[_runtime_types.ConfigKey.CUSTOM_HEARTBEAT_ID]
      });
    });
  }

  formatConfigs(configs) {
    return configs.map(config => (0, _format_configs.formatMonitorConfig)(Object.keys(config), config));
  }

  getSyncTelemetry(monitors) {
    let totalRuns = 0;
    let browserTestRuns = 0;
    let httpTestRuns = 0;
    let icmpTestRuns = 0;
    let tcpTestRuns = 0;
    const locationRuns = {};
    const locationMonitors = {};

    const testRunsInDay = schedule => {
      return 24 * 60 / Number(schedule);
    };

    const monitorsByType = {
      browser: 0,
      http: 0,
      tcp: 0,
      icmp: 0
    };
    monitors.forEach(monitor => {
      var _monitorsByType$monit;

      if (monitor.schedule.number) {
        totalRuns += testRunsInDay(monitor.schedule.number);
      }

      switch (monitor.type) {
        case 'browser':
          browserTestRuns += testRunsInDay(monitor.schedule.number);
          break;

        case 'http':
          httpTestRuns += testRunsInDay(monitor.schedule.number);
          break;

        case 'icmp':
          icmpTestRuns += testRunsInDay(monitor.schedule.number);
          break;

        case 'tcp':
          tcpTestRuns += testRunsInDay(monitor.schedule.number);
          break;

        default:
          break;
      }

      monitorsByType[monitor.type] = ((_monitorsByType$monit = monitorsByType[monitor.type]) !== null && _monitorsByType$monit !== void 0 ? _monitorsByType$monit : 0) + 1;
      monitor.locations.forEach(({
        id
      }) => {
        var _locationRuns, _locationMonitors;

        locationRuns[id + 'Tests'] = ((_locationRuns = locationRuns[id + 'Tests']) !== null && _locationRuns !== void 0 ? _locationRuns : 0) + testRunsInDay(monitor.schedule.number);
        locationMonitors[id + 'Monitors'] = ((_locationMonitors = locationMonitors[id + 'Monitors']) !== null && _locationMonitors !== void 0 ? _locationMonitors : 0) + 1;
      });
    });
    return {
      total: monitors.length,
      totalTests: totalRuns,
      browserTests24h: browserTestRuns,
      httpTests24h: httpTestRuns,
      icmpTests24h: icmpTestRuns,
      tcpTests24h: tcpTestRuns,
      ...locationRuns,
      ...locationMonitors,
      ...monitorsByType
    };
  }

}

exports.SyntheticsService = SyntheticsService;

class IndexTemplateInstallationError extends Error {
  constructor() {
    super();
    this.message = 'Failed to install synthetics index templates.';
    this.name = 'IndexTemplateInstallationError';
  }

}