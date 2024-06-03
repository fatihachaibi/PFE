"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cspRuleTemplateAssetType = void 0;

var _csp_rule_template = require("../../common/schemas/csp_rule_template");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const ruleTemplateAssetSavedObjectMappings = {
  dynamic: false,
  properties: {}
};
const cspRuleTemplateAssetType = {
  name: _csp_rule_template.cloudSecurityPostureRuleTemplateSavedObjectType,
  hidden: false,
  management: {
    importableAndExportable: true,
    visibleInManagement: true
  },
  namespaceType: 'agnostic',
  mappings: ruleTemplateAssetSavedObjectMappings
};
exports.cspRuleTemplateAssetType = cspRuleTemplateAssetType;