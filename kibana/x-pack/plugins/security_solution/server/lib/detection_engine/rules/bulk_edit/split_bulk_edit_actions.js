"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitBulkEditActions = void 0;

var _schemas = require("../../../../../common/detection_engine/schemas/common/schemas");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Split bulk edit actions in 2 chunks: actions applied to params and
 * actions applied to attributes
 * @param actions BulkActionEditPayload[]
 * @returns lists of split actions
 */


const splitBulkEditActions = actions => {
  const splitActions = {
    attributesActions: [],
    paramsActions: []
  };
  return actions.reduce((acc, action) => {
    switch (action.type) {
      case _schemas.BulkActionEditType.add_tags:
      case _schemas.BulkActionEditType.set_tags:
      case _schemas.BulkActionEditType.delete_tags:
        acc.attributesActions.push(action);
        break;

      default:
        acc.paramsActions.push(action);
    }

    return acc;
  }, splitActions);
};

exports.splitBulkEditActions = splitBulkEditActions;