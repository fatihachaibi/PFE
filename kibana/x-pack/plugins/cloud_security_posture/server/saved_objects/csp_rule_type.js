"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ruleAssetSavedObjectMappings = exports.cspRuleAssetType = void 0;

var _i18n = require("@kbn/i18n");

var _constants = require("../../common/constants");

var _csp_rule = require("../../common/schemas/csp_rule");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const validationMap = {
  '1.0.0': _csp_rule.cspRuleSchema
};
const ruleAssetSavedObjectMappings = {
  dynamic: false,
  properties: {
    name: {
      type: 'text',
      // search
      fields: {
        // TODO: how is fields mapping shared with UI ?
        raw: {
          type: 'keyword' // sort

        }
      }
    },
    package_policy_id: {
      type: 'keyword'
    },
    policy_id: {
      type: 'keyword'
    },
    description: {
      type: 'text'
    },
    enabled: {
      type: 'boolean',
      fields: {
        keyword: {
          type: 'keyword' // sort

        }
      }
    }
  }
};
exports.ruleAssetSavedObjectMappings = ruleAssetSavedObjectMappings;
const cspRuleAssetType = {
  name: _constants.cspRuleAssetSavedObjectType,
  hidden: false,
  namespaceType: 'agnostic',
  mappings: ruleAssetSavedObjectMappings,
  schemas: validationMap,
  // migrations: {}
  management: {
    importableAndExportable: true,
    visibleInManagement: true,
    getTitle: savedObject => `${_i18n.i18n.translate('xpack.csp.cspSettings.rules', {
      defaultMessage: `CSP Security Rules - `
    })} ${savedObject.attributes.benchmark.name} ${savedObject.attributes.benchmark.version} ${savedObject.attributes.name}`
  }
};
exports.cspRuleAssetType = cspRuleAssetType;