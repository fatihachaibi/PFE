"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkEditRules = void 0;

var _enrich_filter_with_rule_type_mappings = require("./enrich_filter_with_rule_type_mappings");

var _validation = require("../../machine_learning/validation");

var _rule_params_modifier = require("./bulk_edit/rule_params_modifier");

var _split_bulk_edit_actions = require("./bulk_edit/split_bulk_edit_actions");

var _action_to_rules_client_operation = require("./bulk_edit/action_to_rules_client_operation");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * calls rulesClient.bulkEdit
 * transforms bulk actions payload into rulesClient compatible operations
 * enriches query filter with rule types search queries
 * @param BulkEditRulesArguments
 * @returns edited rules and caught errors
 */


const bulkEditRules = ({
  rulesClient,
  ids,
  actions,
  filter,
  mlAuthz
}) => {
  const {
    attributesActions,
    paramsActions
  } = (0, _split_bulk_edit_actions.splitBulkEditActions)(actions);
  return rulesClient.bulkEdit({ ...(ids ? {
      ids
    } : {
      filter: (0, _enrich_filter_with_rule_type_mappings.enrichFilterWithRuleTypeMapping)(filter)
    }),
    operations: attributesActions.map(_action_to_rules_client_operation.bulkEditActionToRulesClientOperation),
    paramsModifier: async ruleParams => {
      (0, _validation.throwAuthzError)(await mlAuthz.validateRuleType(ruleParams.type));
      return (0, _rule_params_modifier.ruleParamsModifier)(ruleParams, paramsActions);
    }
  });
};

exports.bulkEditRules = bulkEditRules;