"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusService = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _util = require("util");

var _routes = require("./routes");

var _status_config = require("./status_config");

var _get_summary_status = require("./get_summary_status");

var _cached_plugins_status = require("./cached_plugins_status");

var _log_overall_status = require("./log_overall_status");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
class StatusService {
  constructor(coreContext) {
    (0, _defineProperty2.default)(this, "logger", void 0);
    (0, _defineProperty2.default)(this, "config$", void 0);
    (0, _defineProperty2.default)(this, "stop$", new _rxjs.Subject());
    (0, _defineProperty2.default)(this, "overall$", void 0);
    (0, _defineProperty2.default)(this, "pluginsStatus", void 0);
    (0, _defineProperty2.default)(this, "subscriptions", []);
    this.coreContext = coreContext;
    this.logger = coreContext.logger.get('status');
    this.config$ = coreContext.configService.atPath(_status_config.config.path);
  }

  async setup({
    analytics,
    elasticsearch,
    pluginDependencies,
    http,
    metrics,
    savedObjects,
    environment,
    coreUsageData
  }) {
    const statusConfig = await (0, _rxjs.firstValueFrom)(this.config$);
    const core$ = this.setupCoreStatus({
      elasticsearch,
      savedObjects
    });
    this.pluginsStatus = new _cached_plugins_status.PluginsStatusService({
      core$,
      pluginDependencies
    });
    this.overall$ = (0, _rxjs.combineLatest)([core$, this.pluginsStatus.getAll$()]).pipe( // Prevent many emissions at once from dependency status resolution from making this too noisy
    (0, _operators.debounceTime)(80), (0, _operators.map)(([coreStatus, pluginsStatus]) => {
      const summary = (0, _get_summary_status.getSummaryStatus)([...Object.entries(coreStatus), ...Object.entries(pluginsStatus)]);
      this.logger.debug(`Recalculated overall status`, {
        kibana: {
          status: summary
        }
      });
      return summary;
    }), (0, _operators.distinctUntilChanged)(_util.isDeepStrictEqual), (0, _operators.shareReplay)(1));
    this.setupAnalyticsContextAndEvents(analytics);
    const coreOverall$ = core$.pipe( // Prevent many emissions at once from dependency status resolution from making this too noisy
    (0, _operators.debounceTime)(25), (0, _operators.map)(coreStatus => {
      const coreOverall = (0, _get_summary_status.getSummaryStatus)([...Object.entries(coreStatus)]);
      this.logger.debug(`Recalculated core overall status`, {
        kibana: {
          status: coreOverall
        }
      });
      return coreOverall;
    }), (0, _operators.distinctUntilChanged)(_util.isDeepStrictEqual), (0, _operators.shareReplay)(1)); // Create unused subscriptions to ensure all underlying lazy observables are started.

    this.subscriptions.push(this.overall$.subscribe(), coreOverall$.subscribe());
    const commonRouteDeps = {
      config: {
        allowAnonymous: statusConfig.allowAnonymous,
        packageInfo: this.coreContext.env.packageInfo,
        serverName: http.getServerInfo().name,
        uuid: environment.instanceUuid
      },
      metrics,
      status: {
        overall$: this.overall$,
        plugins$: this.pluginsStatus.getAll$(),
        core$,
        coreOverall$
      },
      incrementUsageCounter: coreUsageData.incrementUsageCounter
    };
    const router = http.createRouter('');
    (0, _routes.registerStatusRoute)({
      router,
      ...commonRouteDeps
    });

    if (commonRouteDeps.config.allowAnonymous) {
      http.registerPrebootRoutes('', prebootRouter => {
        (0, _routes.registerStatusRoute)({
          router: prebootRouter,
          ...commonRouteDeps,
          config: { ...commonRouteDeps.config,
            allowAnonymous: true
          }
        });
      });
    }

    return {
      core$,
      coreOverall$,
      overall$: this.overall$,
      plugins: {
        set: this.pluginsStatus.set.bind(this.pluginsStatus),
        getDependenciesStatus$: this.pluginsStatus.getDependenciesStatus$.bind(this.pluginsStatus),
        getDerivedStatus$: this.pluginsStatus.getDerivedStatus$.bind(this.pluginsStatus)
      },
      isStatusPageAnonymous: () => statusConfig.allowAnonymous
    };
  }

  start() {
    if (!this.pluginsStatus || !this.overall$) {
      throw new Error(`StatusService#setup must be called before #start`);
    }

    this.pluginsStatus.blockNewRegistrations();
    (0, _log_overall_status.getOverallStatusChanges)(this.overall$, this.stop$).subscribe(message => {
      this.logger.info(message);
    });
  }

  stop() {
    var _this$pluginsStatus;

    this.stop$.next();
    this.stop$.complete();
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
    (_this$pluginsStatus = this.pluginsStatus) === null || _this$pluginsStatus === void 0 ? void 0 : _this$pluginsStatus.stop();
    this.subscriptions = [];
  }

  setupCoreStatus({
    elasticsearch,
    savedObjects
  }) {
    return (0, _rxjs.combineLatest)([elasticsearch.status$, savedObjects.status$]).pipe((0, _operators.map)(([elasticsearchStatus, savedObjectsStatus]) => ({
      elasticsearch: elasticsearchStatus,
      savedObjects: savedObjectsStatus
    })), (0, _operators.distinctUntilChanged)(_util.isDeepStrictEqual), (0, _operators.shareReplay)(1));
  }

  setupAnalyticsContextAndEvents(analytics) {
    // Set an initial "initializing" status, so we can attach it to early events.
    const context$ = new _rxjs.BehaviorSubject({
      overall_status_level: 'initializing',
      overall_status_summary: 'Kibana is starting up'
    }); // The schema is the same for the context and the events.

    const schema = {
      overall_status_level: {
        type: 'keyword',
        _meta: {
          description: 'The current availability level of the service.'
        }
      },
      overall_status_summary: {
        type: 'text',
        _meta: {
          description: 'A high-level summary of the service status.'
        }
      }
    };
    const overallStatusChangedEventName = 'core-overall_status_changed';
    analytics.registerEventType({
      eventType: overallStatusChangedEventName,
      schema
    });
    analytics.registerContextProvider({
      name: 'status info',
      context$,
      schema
    });
    this.overall$.pipe((0, _operators.takeUntil)(this.stop$), (0, _operators.map)(({
      level,
      summary
    }) => ({
      overall_status_level: level.toString(),
      overall_status_summary: summary
    })), // Emit the event before spreading the status to the context.
    // This way we see from the context the previous status and the current one.
    (0, _rxjs.tap)(statusPayload => analytics.reportEvent(overallStatusChangedEventName, statusPayload))).subscribe(context$);
  }

}

exports.StatusService = StatusService;