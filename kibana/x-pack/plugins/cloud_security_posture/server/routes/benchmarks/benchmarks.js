"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCspRulesStatus = exports.getCspPackagePolicies = exports.getAgentPolicies = exports.defineGetBenchmarksRoute = exports.createBenchmarkEntry = exports.addPackagePolicyCspRules = exports.PACKAGE_POLICY_SAVED_OBJECT_TYPE = void 0;

var _lodash = require("lodash");

var _securitysolutionEsUtils = require("@kbn/securitysolution-es-utils");

var _constants = require("../../../common/constants");

var _benchmark = require("../../../common/schemas/benchmark");

var _helpers = require("../../../common/utils/helpers");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const PACKAGE_POLICY_SAVED_OBJECT_TYPE = 'ingest-package-policies';
exports.PACKAGE_POLICY_SAVED_OBJECT_TYPE = PACKAGE_POLICY_SAVED_OBJECT_TYPE;

const getPackageNameQuery = (packageName, benchmarkFilter) => {
  const integrationNameQuery = `${PACKAGE_POLICY_SAVED_OBJECT_TYPE}.package.name:${packageName}`;
  const kquery = benchmarkFilter ? `${integrationNameQuery} AND ${PACKAGE_POLICY_SAVED_OBJECT_TYPE}.name: *${benchmarkFilter}*` : integrationNameQuery;
  return kquery;
};

const getCspPackagePolicies = (soClient, packagePolicyService, packageName, queryParams) => {
  var _queryParams$sort_fie;

  if (!packagePolicyService) {
    throw new Error('packagePolicyService is undefined');
  }

  const sortField = (_queryParams$sort_fie = queryParams.sort_field) !== null && _queryParams$sort_fie !== void 0 && _queryParams$sort_fie.startsWith(_benchmark.BENCHMARK_PACKAGE_POLICY_PREFIX) ? queryParams.sort_field.substring(_benchmark.BENCHMARK_PACKAGE_POLICY_PREFIX.length) : queryParams.sort_field;
  return packagePolicyService === null || packagePolicyService === void 0 ? void 0 : packagePolicyService.list(soClient, {
    kuery: getPackageNameQuery(packageName, queryParams.benchmark_name),
    page: queryParams.page,
    perPage: queryParams.per_page,
    sortField,
    sortOrder: queryParams.sort_order
  });
};

exports.getCspPackagePolicies = getCspPackagePolicies;

const getAgentPolicies = async (soClient, packagePolicies, agentPolicyService) => {
  const agentPolicyIds = (0, _lodash.uniq)((0, _lodash.map)(packagePolicies, 'policy_id'));
  const agentPolicies = await agentPolicyService.getByIds(soClient, agentPolicyIds);
  return agentPolicies;
};

exports.getAgentPolicies = getAgentPolicies;

const addRunningAgentToAgentPolicy = async (agentService, agentPolicies) => {
  if (!(agentPolicies !== null && agentPolicies !== void 0 && agentPolicies.length)) return [];
  return Promise.all(agentPolicies.map(agentPolicy => agentService.asInternalUser.getAgentStatusForAgentPolicy(agentPolicy.id).then(agentStatus => ({ ...agentPolicy,
    agents: agentStatus.total
  }))));
};

const getCspRulesStatus = (soClient, packagePolicy) => {
  const cspRules = soClient.find({
    type: _constants.cspRuleAssetSavedObjectType,
    filter: `${_constants.cspRuleAssetSavedObjectType}.attributes.package_policy_id: ${packagePolicy.id} AND ${_constants.cspRuleAssetSavedObjectType}.attributes.policy_id: ${packagePolicy.policy_id}`,
    aggs: {
      enabled_status: {
        filter: {
          term: {
            [`${_constants.cspRuleAssetSavedObjectType}.attributes.enabled`]: true
          }
        }
      }
    },
    perPage: 0
  });
  return cspRules;
};

exports.getCspRulesStatus = getCspRulesStatus;

const addPackagePolicyCspRules = async (soClient, packagePolicy) => {
  var _rules$aggregations, _rules$aggregations2;

  const rules = await getCspRulesStatus(soClient, packagePolicy);
  const packagePolicyRules = {
    all: rules.total,
    enabled: ((_rules$aggregations = rules.aggregations) === null || _rules$aggregations === void 0 ? void 0 : _rules$aggregations.enabled_status.doc_count) || 0,
    disabled: rules.total - (((_rules$aggregations2 = rules.aggregations) === null || _rules$aggregations2 === void 0 ? void 0 : _rules$aggregations2.enabled_status.doc_count) || 0)
  };
  return packagePolicyRules;
};

exports.addPackagePolicyCspRules = addPackagePolicyCspRules;

const createBenchmarkEntry = (agentPolicy, packagePolicy, cspRulesStatus) => ({
  package_policy: {
    id: packagePolicy.id,
    name: packagePolicy.name,
    policy_id: packagePolicy.policy_id,
    namespace: packagePolicy.namespace,
    updated_at: packagePolicy.updated_at,
    updated_by: packagePolicy.updated_by,
    created_at: packagePolicy.created_at,
    created_by: packagePolicy.created_by,
    package: packagePolicy.package ? {
      name: packagePolicy.package.name,
      title: packagePolicy.package.title,
      version: packagePolicy.package.version
    } : undefined
  },
  agent_policy: {
    id: agentPolicy.id,
    name: agentPolicy.name,
    agents: agentPolicy.agents
  },
  rules: cspRulesStatus
});

exports.createBenchmarkEntry = createBenchmarkEntry;

const createBenchmarks = (soClient, agentPolicies, cspPackagePolicies) => {
  const cspPackagePoliciesMap = new Map(cspPackagePolicies.map(packagePolicy => [packagePolicy.id, packagePolicy]));
  return Promise.all(agentPolicies.flatMap(agentPolicy => {
    const cspPackagesOnAgent = agentPolicy.package_policies.map(pckPolicyId => {
      if (typeof pckPolicyId === 'string') return cspPackagePoliciesMap.get(pckPolicyId);
    }).filter(_helpers.isNonNullable);
    const benchmarks = cspPackagesOnAgent.map(async cspPackage => {
      const cspRulesStatus = await addPackagePolicyCspRules(soClient, cspPackage);
      const benchmark = createBenchmarkEntry(agentPolicy, cspPackage, cspRulesStatus);
      return benchmark;
    });
    return benchmarks;
  }));
};

const defineGetBenchmarksRoute = (router, cspContext) => router.get({
  path: _constants.BENCHMARKS_ROUTE_PATH,
  validate: {
    query: _benchmark.benchmarksInputSchema
  }
}, async (context, request, response) => {
  if (!(await context.fleet).authz.fleet.all) {
    return response.forbidden();
  }

  try {
    const soClient = (await context.core).savedObjects.client;
    const {
      query
    } = request;
    const agentService = cspContext.service.agentService;
    const agentPolicyService = cspContext.service.agentPolicyService;
    const packagePolicyService = cspContext.service.packagePolicyService;

    if (!agentPolicyService || !agentService || !packagePolicyService) {
      throw new Error(`Failed to get Fleet services`);
    }

    const cspPackagePolicies = await getCspPackagePolicies(soClient, packagePolicyService, _constants.CLOUD_SECURITY_POSTURE_PACKAGE_NAME, query);
    const agentPolicies = await getAgentPolicies(soClient, cspPackagePolicies.items, agentPolicyService);
    const enrichAgentPolicies = await addRunningAgentToAgentPolicy(agentService, agentPolicies);
    const benchmarks = await createBenchmarks(soClient, enrichAgentPolicies, cspPackagePolicies.items);
    return response.ok({
      body: { ...cspPackagePolicies,
        items: benchmarks
      }
    });
  } catch (err) {
    const error = (0, _securitysolutionEsUtils.transformError)(err);
    cspContext.logger.error(`Failed to fetch benchmarks ${err}`);
    return response.customError({
      body: {
        message: error.message
      },
      statusCode: error.statusCode
    });
  }
});

exports.defineGetBenchmarksRoute = defineGetBenchmarksRoute;