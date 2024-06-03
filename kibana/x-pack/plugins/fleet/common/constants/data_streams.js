"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetDataStreamsListRequestSchema = void 0;

var _configSchema = require("@kbn/config-schema");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const GetDataStreamsListRequestSchema = {
  params: _configSchema.schema.object({
    use_terms_enum: _configSchema.schema.boolean({
      defaultValue: false
    })
  })
};
exports.GetDataStreamsListRequestSchema = GetDataStreamsListRequestSchema;