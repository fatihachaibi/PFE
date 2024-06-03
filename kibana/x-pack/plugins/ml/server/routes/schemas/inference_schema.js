"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putTrainedModelQuerySchema = exports.optionalModelIdSchema = exports.modelIdSchema = exports.inferTrainedModelQuery = exports.inferTrainedModelBody = exports.getInferenceQuerySchema = void 0;

var _configSchema = require("@kbn/config-schema");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const modelIdSchema = _configSchema.schema.object({
  /**
   * Model ID
   */
  modelId: _configSchema.schema.string()
});

exports.modelIdSchema = modelIdSchema;

const optionalModelIdSchema = _configSchema.schema.object({
  /**
   * Model ID
   */
  modelId: _configSchema.schema.maybe(_configSchema.schema.string())
});

exports.optionalModelIdSchema = optionalModelIdSchema;

const getInferenceQuerySchema = _configSchema.schema.object({
  size: _configSchema.schema.maybe(_configSchema.schema.string()),
  with_pipelines: _configSchema.schema.maybe(_configSchema.schema.string()),
  include: _configSchema.schema.maybe(_configSchema.schema.string())
});

exports.getInferenceQuerySchema = getInferenceQuerySchema;

const putTrainedModelQuerySchema = _configSchema.schema.object({
  defer_definition_decompression: _configSchema.schema.maybe(_configSchema.schema.boolean())
});

exports.putTrainedModelQuerySchema = putTrainedModelQuerySchema;

const inferTrainedModelQuery = _configSchema.schema.object({
  timeout: _configSchema.schema.maybe(_configSchema.schema.string())
});

exports.inferTrainedModelQuery = inferTrainedModelQuery;

const inferTrainedModelBody = _configSchema.schema.object({
  docs: _configSchema.schema.any(),
  inference_config: _configSchema.schema.maybe(_configSchema.schema.any())
});

exports.inferTrainedModelBody = inferTrainedModelBody;