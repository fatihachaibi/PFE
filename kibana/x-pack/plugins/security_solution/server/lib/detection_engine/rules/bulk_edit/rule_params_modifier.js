"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ruleParamsModifier = exports.deleteItemsFromArray = exports.addItemsToArray = void 0;

var _schemas = require("../../../../../common/detection_engine/schemas/common/schemas");

var _invariant = require("../../../../../common/utils/invariant");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const addItemsToArray = (arr, items) => Array.from(new Set([...arr, ...items]));

exports.addItemsToArray = addItemsToArray;

const deleteItemsFromArray = (arr, items) => {
  const itemsSet = new Set(items);
  return arr.filter(item => !itemsSet.has(item));
};

exports.deleteItemsFromArray = deleteItemsFromArray;

const applyBulkActionEditToRuleParams = (existingRuleParams, action) => {
  var _ruleParams$index, _ruleParams$index2;

  let ruleParams = { ...existingRuleParams
  };

  switch (action.type) {
    // index_patterns actions
    // index pattern is not present in machine learning rule type, so we throw error on it
    case _schemas.BulkActionEditType.add_index_patterns:
      (0, _invariant.invariant)(ruleParams.type !== 'machine_learning', "Index patterns can't be added. Machine learning rule doesn't have index patterns property");
      ruleParams.index = addItemsToArray((_ruleParams$index = ruleParams.index) !== null && _ruleParams$index !== void 0 ? _ruleParams$index : [], action.value);
      break;

    case _schemas.BulkActionEditType.delete_index_patterns:
      (0, _invariant.invariant)(ruleParams.type !== 'machine_learning', "Index patterns can't be deleted. Machine learning rule doesn't have index patterns property");
      ruleParams.index = deleteItemsFromArray((_ruleParams$index2 = ruleParams.index) !== null && _ruleParams$index2 !== void 0 ? _ruleParams$index2 : [], action.value);
      break;

    case _schemas.BulkActionEditType.set_index_patterns:
      (0, _invariant.invariant)(ruleParams.type !== 'machine_learning', "Index patterns can't be overwritten. Machine learning rule doesn't have index patterns property");
      ruleParams.index = action.value;
      break;
    // timeline actions

    case _schemas.BulkActionEditType.set_timeline:
      ruleParams = { ...ruleParams,
        timelineId: action.value.timeline_id || undefined,
        timelineTitle: action.value.timeline_title || undefined
      };
      break;
  }

  return ruleParams;
};
/**
 * takes list of bulkEdit actions and apply them to rule.params by mutating it
 * @param existingRuleParams
 * @param actions
 * @returns mutated params
 */


const ruleParamsModifier = (existingRuleParams, actions) => {
  const modifiedParams = actions.reduce((acc, action) => ({ ...acc,
    ...applyBulkActionEditToRuleParams(acc, action)
  }), existingRuleParams); // increment version even if actions are empty, as attributes can be modified as well outside of ruleParamsModifier

  modifiedParams.version += 1;
  return modifiedParams;
};

exports.ruleParamsModifier = ruleParamsModifier;