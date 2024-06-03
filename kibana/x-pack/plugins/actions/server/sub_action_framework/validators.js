"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildValidators = void 0;

var _configSchema = require("@kbn/config-schema");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const buildValidators = ({
  connector,
  configurationUtilities
}) => {
  return {
    config: connector.schema.config,
    secrets: connector.schema.secrets,
    params: _configSchema.schema.object({
      subAction: _configSchema.schema.string(),

      /**
       * With this validation we enforce the subActionParams to be an object.
       * Each sub action has different parameters and they are validated inside the executor
       * (x-pack/plugins/actions/server/sub_action_framework/executor.ts). For that reason,
       * we allow all unknowns at this level of validation as they are not known at this
       * time of execution.
       */
      subActionParams: _configSchema.schema.object({}, {
        unknowns: 'allow'
      })
    })
  };
};

exports.buildValidators = buildValidators;