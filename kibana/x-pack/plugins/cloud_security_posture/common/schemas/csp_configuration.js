"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cspRulesConfigSchema = void 0;

var _configSchema = require("@kbn/config-schema");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// cspRulesConfigSchema have to be correspond to DataYaml struct in https://github.com/elastic/cloudbeat/blob/main/config/config.go#L44-L50


const cspRulesConfigSchema = _configSchema.schema.object({
  data_yaml: _configSchema.schema.object({
    activated_rules: _configSchema.schema.object({
      cis_k8s: _configSchema.schema.arrayOf(_configSchema.schema.string())
    })
  })
});

exports.cspRulesConfigSchema = cspRulesConfigSchema;