"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeCspRulesInstancesCallback = exports.onPackagePolicyPostCreateCallback = exports.isCspPackageInstalled = void 0;

var _csp_rule_template = require("../../common/schemas/csp_rule_template");

var _constants = require("../../common/constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Callback to handle creation of PackagePolicies in Fleet
 */


const onPackagePolicyPostCreateCallback = async (logger, packagePolicy, savedObjectsClient) => {
  // Create csp-rules from the generic asset
  const existingRuleTemplates = await savedObjectsClient.find({
    type: _csp_rule_template.cloudSecurityPostureRuleTemplateSavedObjectType,
    perPage: 10000
  });

  if (existingRuleTemplates.total === 0) {
    return;
  }

  const cspRules = generateRulesFromTemplates(packagePolicy.id, packagePolicy.policy_id, existingRuleTemplates.saved_objects);

  try {
    await savedObjectsClient.bulkCreate(cspRules);
    logger.info(`Generated CSP rules for package ${packagePolicy.policy_id}`);
  } catch (e) {
    logger.error('failed to generate rules out of template');
    logger.error(e);
  }
};
/**
 * Callback to handle deletion of PackagePolicies in Fleet
 */


exports.onPackagePolicyPostCreateCallback = onPackagePolicyPostCreateCallback;

const removeCspRulesInstancesCallback = async (deletedPackagePolicy, soClient, logger) => {
  try {
    const {
      saved_objects: cspRules
    } = await soClient.find({
      type: _constants.cspRuleAssetSavedObjectType,
      filter: `${_constants.cspRuleAssetSavedObjectType}.attributes.package_policy_id: ${deletedPackagePolicy.id} AND ${_constants.cspRuleAssetSavedObjectType}.attributes.policy_id: ${deletedPackagePolicy.policy_id}`,
      perPage: 10000
    });
    await Promise.all(cspRules.map(rule => soClient.delete(_constants.cspRuleAssetSavedObjectType, rule.id)));
  } catch (e) {
    logger.error(`Failed to delete CSP rules after delete package ${deletedPackagePolicy.id}`);
    logger.error(e);
  }
};

exports.removeCspRulesInstancesCallback = removeCspRulesInstancesCallback;

const isCspPackageInstalled = async (soClient, logger) => {
  // TODO: check if CSP package installed via the Fleet API
  try {
    const {
      saved_objects: postDeleteRules
    } = await soClient.find({
      type: _constants.cspRuleAssetSavedObjectType
    });

    if (!postDeleteRules.length) {
      return true;
    }

    return false;
  } catch (e) {
    logger.error(e);
    return false;
  }
};

exports.isCspPackageInstalled = isCspPackageInstalled;

const generateRulesFromTemplates = (packagePolicyId, policyId, cspRuleTemplates) => cspRuleTemplates.map(template => ({
  type: _constants.cspRuleAssetSavedObjectType,
  attributes: { ...template.attributes,
    package_policy_id: packagePolicyId,
    policy_id: policyId
  }
}));