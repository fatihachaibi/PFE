"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAgentConfiguration = exports.setVarToPackagePolicy = exports.getPackagePolicy = exports.getCspRules = exports.defineUpdateRulesConfigRoute = exports.createRulesConfig = exports.convertRulesConfigToYaml = exports.configurationUpdateInputSchema = void 0;

var _configSchema = require("@kbn/config-schema");

var _securitysolutionEsUtils = require("@kbn/securitysolution-es-utils");

var _immer = require("immer");

var _lodash = require("lodash");

var _jsYaml = _interopRequireDefault(require("js-yaml"));

var _constants = require("../../../common/constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getPackagePolicy = async (soClient, packagePolicyService, packagePolicyId) => {
  var _packagePolicies$0$pa;

  const packagePolicies = await packagePolicyService.getByIDs(soClient, [packagePolicyId]); // PackagePolicies always contains one element, even when package does not exist

  if (!packagePolicies || !packagePolicies[0].version) {
    throw new Error(`package policy Id '${packagePolicyId}' is not exist`);
  }

  if (((_packagePolicies$0$pa = packagePolicies[0].package) === null || _packagePolicies$0$pa === void 0 ? void 0 : _packagePolicies$0$pa.name) !== _constants.CLOUD_SECURITY_POSTURE_PACKAGE_NAME) {
    throw new Error(`Package Policy Id '${packagePolicyId}' is not of type cloud security posture package`);
  }

  return packagePolicies[0];
};

exports.getPackagePolicy = getPackagePolicy;

const getCspRules = (soClient, packagePolicy) => {
  return soClient.find({
    type: _constants.cspRuleAssetSavedObjectType,
    filter: `${_constants.cspRuleAssetSavedObjectType}.attributes.package_policy_id: ${packagePolicy.id} AND ${_constants.cspRuleAssetSavedObjectType}.attributes.policy_id: ${packagePolicy.policy_id}`,
    searchFields: ['name'],
    // TODO: research how to get all rules
    perPage: 10000
  });
};

exports.getCspRules = getCspRules;

const createRulesConfig = cspRules => {
  const activatedRules = cspRules.saved_objects.filter(cspRule => cspRule.attributes.enabled);
  const config = {
    data_yaml: {
      activated_rules: {
        cis_k8s: activatedRules.map(activatedRule => activatedRule.attributes.rego_rule_id)
      }
    }
  };
  return config;
};

exports.createRulesConfig = createRulesConfig;

const convertRulesConfigToYaml = config => {
  return _jsYaml.default.safeDump(config);
};

exports.convertRulesConfigToYaml = convertRulesConfigToYaml;

const setVarToPackagePolicy = (packagePolicy, dataYaml) => {
  const configFile = {
    dataYaml: {
      type: 'yaml',
      value: dataYaml
    }
  };
  const updatedPackagePolicy = (0, _immer.produce)(packagePolicy, draft => {
    (0, _lodash.unset)(draft, 'id');

    if (draft.vars) {
      draft.vars.dataYaml = configFile.dataYaml;
    } else {
      draft.vars = configFile;
    }
  });
  return updatedPackagePolicy;
};

exports.setVarToPackagePolicy = setVarToPackagePolicy;

const updateAgentConfiguration = async (packagePolicyService, packagePolicy, esClient, soClient) => {
  const cspRules = await getCspRules(soClient, packagePolicy);
  const rulesConfig = createRulesConfig(cspRules);
  const dataYaml = convertRulesConfigToYaml(rulesConfig);
  const updatedPackagePolicy = setVarToPackagePolicy(packagePolicy, dataYaml);
  return packagePolicyService.update(soClient, esClient, packagePolicy.id, updatedPackagePolicy);
};

exports.updateAgentConfiguration = updateAgentConfiguration;

const defineUpdateRulesConfigRoute = (router, cspContext) => router.post({
  path: _constants.UPDATE_RULES_CONFIG_ROUTE_PATH,
  validate: {
    body: configurationUpdateInputSchema
  }
}, async (context, request, response) => {
  if (!(await context.fleet).authz.fleet.all) {
    return response.forbidden();
  }

  try {
    const coreContext = await context.core;
    const esClient = coreContext.elasticsearch.client.asCurrentUser;
    const soClient = coreContext.savedObjects.client;
    const packagePolicyService = cspContext.service.packagePolicyService;
    const packagePolicyId = request.body.package_policy_id;

    if (!packagePolicyService) {
      throw new Error(`Failed to get Fleet services`);
    }

    const packagePolicy = await getPackagePolicy(soClient, packagePolicyService, packagePolicyId);
    const updatedPackagePolicy = await updateAgentConfiguration(packagePolicyService, packagePolicy, esClient, soClient);
    return response.ok({
      body: updatedPackagePolicy
    });
  } catch (err) {
    const error = (0, _securitysolutionEsUtils.transformError)(err);
    cspContext.logger.error(`Failed to update rules configuration on package policy ${error.message}`);
    return response.customError({
      body: {
        message: error.message
      },
      statusCode: error.statusCode
    });
  }
});

exports.defineUpdateRulesConfigRoute = defineUpdateRulesConfigRoute;

const configurationUpdateInputSchema = _configSchema.schema.object({
  /**
   * CSP integration instance ID
   */
  package_policy_id: _configSchema.schema.string()
});

exports.configurationUpdateInputSchema = configurationUpdateInputSchema;