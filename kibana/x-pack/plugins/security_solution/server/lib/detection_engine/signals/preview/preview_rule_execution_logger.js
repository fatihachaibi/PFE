"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPreviewRuleExecutionLogger = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const createPreviewRuleExecutionLogger = loggedStatusChanges => {
  const factory = (savedObjectsClient, eventLogService, logger, context) => {
    return {
      context,

      logStatusChange(args) {
        loggedStatusChanges.push({ ...context,
          ...args
        });
        return Promise.resolve();
      }

    };
  };

  return {
    factory
  };
};

exports.createPreviewRuleExecutionLogger = createPreviewRuleExecutionLogger;