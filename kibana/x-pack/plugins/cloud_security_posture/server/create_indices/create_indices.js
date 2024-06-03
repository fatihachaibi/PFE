"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeCspIndices = exports.createIndexIfNotExists = void 0;

var _securitysolutionEsUtils = require("@kbn/securitysolution-es-utils");

var _benchmark_score_mapping = require("./benchmark_score_mapping");

var _latest_findings_mapping = require("./latest_findings_mapping");

var _constants = require("../../common/constants");

var _create_processor = require("./create_processor");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// TODO: Add integration tests


const initializeCspIndices = async (esClient, logger) => {
  await (0, _create_processor.createPipelineIfNotExists)(esClient, _constants.CSP_INGEST_TIMESTAMP_PIPELINE, logger);
  return Promise.all([createIndexIfNotExists(esClient, _constants.LATEST_FINDINGS_INDEX_NAME, _constants.LATEST_FINDINGS_INDEX_DEFAULT_NS, _latest_findings_mapping.latestFindingsMapping, {}, logger), createIndexIfNotExists(esClient, _constants.BENCHMARK_SCORE_INDEX_NAME, _constants.BENCHMARK_SCORE_INDEX_DEFAULT_NS, _benchmark_score_mapping.benchmarkScoreMapping, {
    default_pipeline: _constants.CSP_INGEST_TIMESTAMP_PIPELINE
  }, logger)]);
};

exports.initializeCspIndices = initializeCspIndices;

const createIndexIfNotExists = async (esClient, indexTemplateName, indexPattern, mappings, settings, logger) => {
  try {
    const isLatestIndexExists = await esClient.indices.exists({
      index: indexPattern
    });

    if (!isLatestIndexExists) {
      await esClient.indices.putIndexTemplate({
        name: indexTemplateName,
        index_patterns: indexPattern,
        template: {
          mappings
        },
        priority: 500
      });
      await esClient.indices.create({
        index: indexPattern,
        mappings,
        settings
      });
    }
  } catch (err) {
    const error = (0, _securitysolutionEsUtils.transformError)(err);
    logger.error(`Failed to create the index template: ${indexTemplateName}`);
    logger.error(error.message);
  }
};

exports.createIndexIfNotExists = createIndexIfNotExists;