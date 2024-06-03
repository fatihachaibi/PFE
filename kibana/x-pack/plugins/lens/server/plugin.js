"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LensServerPlugin = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _routes = require("./routes");

var _ui_settings = require("./ui_settings");

var _usage = require("./usage");

var _saved_objects = require("./saved_objects");

var _expressions = require("./expressions");

var _make_lens_embeddable_factory = require("./embeddable/make_lens_embeddable_factory");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


class LensServerPlugin {
  constructor(initializerContext) {
    (0, _defineProperty2.default)(this, "telemetryLogger", void 0);
    (0, _defineProperty2.default)(this, "customVisualizationMigrations", {});
    this.initializerContext = initializerContext;
    this.telemetryLogger = initializerContext.logger.get('usage');
  }

  setup(core, plugins) {
    const getFilterMigrations = plugins.data.query.filterManager.getAllMigrations.bind(plugins.data.query.filterManager);
    (0, _saved_objects.setupSavedObjects)(core, getFilterMigrations, this.customVisualizationMigrations);
    (0, _routes.setupRoutes)(core, this.initializerContext.logger.get());
    (0, _expressions.setupExpressions)(core, plugins.expressions);
    core.uiSettings.register((0, _ui_settings.getUiSettings)());

    if (plugins.usageCollection && plugins.taskManager) {
      (0, _usage.registerLensUsageCollector)(plugins.usageCollection, core.getStartServices().then(([_, {
        taskManager
      }]) => taskManager));
      (0, _usage.initializeLensTelemetry)(this.telemetryLogger, core, plugins.taskManager);
    }

    const lensEmbeddableFactory = (0, _make_lens_embeddable_factory.makeLensEmbeddableFactory)(getFilterMigrations, this.customVisualizationMigrations);
    plugins.embeddable.registerEmbeddableFactory(lensEmbeddableFactory());
    return {
      lensEmbeddableFactory,
      registerVisualizationMigration: (id, migrationsGetter) => {
        if (this.customVisualizationMigrations[id]) {
          throw new Error(`Migrations object for visualization ${id} registered already`);
        }

        this.customVisualizationMigrations[id] = migrationsGetter;
      }
    };
  }

  start(core, plugins) {
    if (plugins.taskManager) {
      (0, _usage.scheduleLensTelemetry)(this.telemetryLogger, plugins.taskManager);
    }

    return {};
  }

  stop() {}

}

exports.LensServerPlugin = LensServerPlugin;