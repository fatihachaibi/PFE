"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonitoringCollectionPlugin = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _routes = require("./routes");

var _constants = require("./constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


class MonitoringCollectionPlugin {
  constructor(initializerContext) {
    (0, _defineProperty2.default)(this, "initializerContext", void 0);
    (0, _defineProperty2.default)(this, "logger", void 0);
    (0, _defineProperty2.default)(this, "metrics", {});
    this.initializerContext = initializerContext;
    this.logger = initializerContext.logger.get();
  }

  async getMetric(type) {
    if (this.metrics.hasOwnProperty(type)) {
      return await this.metrics[type].fetch();
    }

    this.logger.warn(`Call to 'getMetric' failed because type '${type}' does not exist.`);
    return undefined;
  }

  setup(core) {
    const router = core.http.createRouter();
    const kibanaIndex = core.savedObjects.getKibanaIndex();
    let status;
    core.status.overall$.subscribe(newStatus => {
      status = newStatus;
    });
    (0, _routes.registerDynamicRoute)({
      router,
      config: {
        kibanaIndex,
        kibanaVersion: this.initializerContext.env.packageInfo.version,
        server: core.http.getServerInfo(),
        uuid: this.initializerContext.env.instanceUuid
      },
      getStatus: () => status,
      getMetric: async type => {
        return await this.getMetric(type);
      }
    });
    return {
      registerMetric: metric => {
        if (this.metrics.hasOwnProperty(metric.type)) {
          this.logger.warn(`Skipping registration of metric type '${metric.type}'. This type has already been registered.`);
          return;
        }

        if (!_constants.TYPE_ALLOWLIST.includes(metric.type)) {
          this.logger.warn(`Skipping registration of metric type '${metric.type}'. This type is not supported in the allowlist.`);
          return;
        }

        this.metrics[metric.type] = metric;
      }
    };
  }

  start() {}

  stop() {}

}

exports.MonitoringCollectionPlugin = MonitoringCollectionPlugin;