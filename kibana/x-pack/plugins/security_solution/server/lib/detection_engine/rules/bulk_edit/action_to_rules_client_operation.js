"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkEditActionToRulesClientOperation = void 0;

var _schemas = require("../../../../../common/detection_engine/schemas/common/schemas");

var _utility_types = require("../../../../../common/utility_types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * converts bulk edit action to format of rulesClient.bulkEdit operation
 * @param action BulkActionEditForRuleAttributes
 * @returns rulesClient BulkEditOperation
 */


const bulkEditActionToRulesClientOperation = action => {
  switch (action.type) {
    // tags actions
    case _schemas.BulkActionEditType.add_tags:
      return {
        field: 'tags',
        operation: 'add',
        value: action.value
      };

    case _schemas.BulkActionEditType.delete_tags:
      return {
        field: 'tags',
        operation: 'delete',
        value: action.value
      };

    case _schemas.BulkActionEditType.set_tags:
      return {
        field: 'tags',
        operation: 'set',
        value: action.value
      };

    default:
      return (0, _utility_types.assertUnreachable)(action.type);
  }
};

exports.bulkEditActionToRulesClientOperation = bulkEditActionToRulesClientOperation;