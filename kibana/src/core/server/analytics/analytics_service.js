"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsService = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _analyticsClient = require("@kbn/analytics-client");

var _rxjs = require("rxjs");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
class AnalyticsService {
  constructor(core) {
    (0, _defineProperty2.default)(this, "analyticsClient", void 0);
    this.analyticsClient = (0, _analyticsClient.createAnalytics)({
      isDev: core.env.mode.dev,
      logger: core.logger.get('analytics'),
      // TODO: We need to be able to edit sendTo once we resolve the telemetry config.
      //  For now, we are relying on whether it's a distributable or running from source.
      sendTo: core.env.packageInfo.dist ? 'production' : 'staging'
    });
    this.registerBuildInfoAnalyticsContext(core);
  }

  preboot() {
    return {
      optIn: this.analyticsClient.optIn,
      registerContextProvider: this.analyticsClient.registerContextProvider,
      removeContextProvider: this.analyticsClient.removeContextProvider,
      registerEventType: this.analyticsClient.registerEventType,
      registerShipper: this.analyticsClient.registerShipper,
      reportEvent: this.analyticsClient.reportEvent,
      telemetryCounter$: this.analyticsClient.telemetryCounter$
    };
  }

  setup() {
    return {
      optIn: this.analyticsClient.optIn,
      registerContextProvider: this.analyticsClient.registerContextProvider,
      removeContextProvider: this.analyticsClient.removeContextProvider,
      registerEventType: this.analyticsClient.registerEventType,
      registerShipper: this.analyticsClient.registerShipper,
      reportEvent: this.analyticsClient.reportEvent,
      telemetryCounter$: this.analyticsClient.telemetryCounter$
    };
  }

  start() {
    return {
      optIn: this.analyticsClient.optIn,
      reportEvent: this.analyticsClient.reportEvent,
      telemetryCounter$: this.analyticsClient.telemetryCounter$
    };
  }

  stop() {
    this.analyticsClient.shutdown();
  }
  /**
   * Enriches the event with the build information.
   * @param core The core context.
   * @private
   */


  registerBuildInfoAnalyticsContext(core) {
    this.analyticsClient.registerContextProvider({
      name: 'build info',
      context$: (0, _rxjs.of)({
        isDev: core.env.mode.dev,
        isDistributable: core.env.packageInfo.dist,
        version: core.env.packageInfo.version,
        branch: core.env.packageInfo.branch,
        buildNum: core.env.packageInfo.buildNum,
        buildSha: core.env.packageInfo.buildSha
      }),
      schema: {
        isDev: {
          type: 'boolean',
          _meta: {
            description: 'Is it running in development mode?'
          }
        },
        isDistributable: {
          type: 'boolean',
          _meta: {
            description: 'Is it running from a distributable?'
          }
        },
        version: {
          type: 'keyword',
          _meta: {
            description: 'Version of the Kibana instance.'
          }
        },
        branch: {
          type: 'keyword',
          _meta: {
            description: 'Branch of source running Kibana from.'
          }
        },
        buildNum: {
          type: 'long',
          _meta: {
            description: 'Build number of the Kibana instance.'
          }
        },
        buildSha: {
          type: 'keyword',
          _meta: {
            description: 'Build SHA of the Kibana instance.'
          }
        }
      }
    });
  }

}

exports.AnalyticsService = AnalyticsService;