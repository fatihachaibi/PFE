"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CspPlugin = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _csp_app_services = require("./lib/csp_app_services");

var _routes = require("./routes");

var _csp_rule_template = require("./saved_objects/csp_rule_template");

var _csp_rule_type = require("./saved_objects/csp_rule_type");

var _create_indices = require("./create_indices/create_indices");

var _create_transforms = require("./create_transforms/create_transforms");

var _fleet_integration = require("./fleet_integration/fleet_integration");

var _constants = require("../common/constants");

var _update_rules_configuration = require("./routes/configuration/update_rules_configuration");

var _findings_stats_task = require("./tasks/findings_stats_task");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


class CspPlugin {
  constructor(initializerContext) {
    (0, _defineProperty2.default)(this, "logger", void 0);
    (0, _defineProperty2.default)(this, "CspAppService", new _csp_app_services.CspAppService());
    this.logger = initializerContext.logger.get();
  }

  setup(core, plugins) {
    const cspAppContext = {
      logger: this.logger,
      service: this.CspAppService
    };
    core.savedObjects.registerType(_csp_rule_type.cspRuleAssetType);
    core.savedObjects.registerType(_csp_rule_template.cspRuleTemplateAssetType);
    const router = core.http.createRouter(); // Register server side APIs

    (0, _routes.defineRoutes)(router, cspAppContext);
    const coreStartServices = core.getStartServices();
    this.setupCspTasks(plugins.taskManager, coreStartServices, this.logger);
    return {};
  }

  start(core, plugins) {
    this.CspAppService.start({ ...plugins.fleet
    });
    plugins.fleet.fleetSetupCompleted().then(async () => {
      const packageInfo = await plugins.fleet.packageService.asInternalUser.getInstallation(_constants.CLOUD_SECURITY_POSTURE_PACKAGE_NAME); // If package is installed we want to make sure all needed assets are installed

      if (packageInfo) {
        // noinspection ES6MissingAwait
        this.initialize(core, plugins.taskManager);
      }

      plugins.fleet.registerExternalCallback('packagePolicyPostCreate', async (packagePolicy, context, _) => {
        var _packagePolicy$packag;

        if (((_packagePolicy$packag = packagePolicy.package) === null || _packagePolicy$packag === void 0 ? void 0 : _packagePolicy$packag.name) === _constants.CLOUD_SECURITY_POSTURE_PACKAGE_NAME) {
          await this.initialize(core, plugins.taskManager);
          const soClient = (await context.core).savedObjects.client;
          const esClient = (await context.core).elasticsearch.client.asCurrentUser;
          await (0, _fleet_integration.onPackagePolicyPostCreateCallback)(this.logger, packagePolicy, soClient);
          const updatedPackagePolicy = await (0, _update_rules_configuration.updateAgentConfiguration)(plugins.fleet.packagePolicyService, packagePolicy, esClient, soClient);
          return updatedPackagePolicy;
        }

        return packagePolicy;
      });
      plugins.fleet.registerExternalCallback('postPackagePolicyDelete', async deletedPackagePolicies => {
        for (const deletedPackagePolicy of deletedPackagePolicies) {
          var _deletedPackagePolicy;

          if (((_deletedPackagePolicy = deletedPackagePolicy.package) === null || _deletedPackagePolicy === void 0 ? void 0 : _deletedPackagePolicy.name) === _constants.CLOUD_SECURITY_POSTURE_PACKAGE_NAME) {
            const soClient = core.savedObjects.createInternalRepository();
            await (0, _fleet_integration.removeCspRulesInstancesCallback)(deletedPackagePolicy, soClient, this.logger);
            const isPackageExists = await (0, _fleet_integration.isCspPackageInstalled)(soClient, this.logger);

            if (isPackageExists) {
              await this.uninstallResources(plugins.taskManager, this.logger);
            }
          }
        }
      });
    });
    return {};
  }

  stop() {}

  async initialize(core, taskManager) {
    this.logger.debug('initialize');
    await (0, _create_indices.initializeCspIndices)(core.elasticsearch.client.asInternalUser, this.logger);
    await (0, _create_transforms.initializeCspTransforms)(core.elasticsearch.client.asInternalUser, this.logger);
    await (0, _findings_stats_task.scheduleFindingsStatsTask)(taskManager, this.logger);
  }

  async uninstallResources(taskManager, logger) {
    await (0, _findings_stats_task.removeFindingsStatsTask)(taskManager, logger);
  }

  setupCspTasks(taskManager, coreStartServices, logger) {
    (0, _findings_stats_task.setupFindingsStatsTask)(taskManager, coreStartServices, logger);
  }

}

exports.CspPlugin = CspPlugin;