"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RuleDataClient = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _elasticsearch = require("@elastic/elasticsearch");

var _Either = require("fp-ts/lib/Either");

var _server = require("../../../../../src/plugins/data/server");

var _errors = require("../rule_data_plugin_service/errors");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


class RuleDataClient {
  // Writers cached by namespace
  constructor(options) {
    (0, _defineProperty2.default)(this, "_isWriteEnabled", false);
    (0, _defineProperty2.default)(this, "_isWriterCacheEnabled", true);
    (0, _defineProperty2.default)(this, "writerCache", void 0);
    this.options = options;
    this.writeEnabled = this.options.isWriteEnabled;
    this.writerCacheEnabled = this.options.isWriterCacheEnabled;
    this.writerCache = new Map();
  }

  get indexName() {
    return this.options.indexInfo.baseName;
  }

  get kibanaVersion() {
    return this.options.indexInfo.kibanaVersion;
  }

  indexNameWithNamespace(namespace) {
    return this.options.indexInfo.getPrimaryAlias(namespace);
  }

  get writeEnabled() {
    return this._isWriteEnabled;
  }

  set writeEnabled(isEnabled) {
    this._isWriteEnabled = isEnabled;
  }

  isWriteEnabled() {
    return this.writeEnabled;
  }

  get writerCacheEnabled() {
    return this._isWriterCacheEnabled;
  }

  set writerCacheEnabled(isEnabled) {
    this._isWriterCacheEnabled = isEnabled;
  }

  getReader(options = {}) {
    const {
      indexInfo
    } = this.options;
    const indexPattern = indexInfo.getPatternForReading(options.namespace);

    const waitUntilReady = async () => {
      const result = await this.options.waitUntilReadyForReading;

      if ((0, _Either.isLeft)(result)) {
        throw result.left;
      } else {
        return result.right;
      }
    };

    return {
      search: async request => {
        const clusterClient = await waitUntilReady();
        const body = await clusterClient.search({ ...request,
          index: indexPattern
        });
        return body;
      },
      getDynamicIndexPattern: async () => {
        const clusterClient = await waitUntilReady();
        const indexPatternsFetcher = new _server.IndexPatternsFetcher(clusterClient);

        try {
          const fields = await indexPatternsFetcher.getFieldsForWildcard({
            pattern: indexPattern
          });
          return {
            fields,
            timeFieldName: '@timestamp',
            title: indexPattern
          };
        } catch (err) {
          var _err$output, _err$output$payload;

          if (((_err$output = err.output) === null || _err$output === void 0 ? void 0 : (_err$output$payload = _err$output.payload) === null || _err$output$payload === void 0 ? void 0 : _err$output$payload.code) === 'no_matching_indices') {
            return {
              fields: [],
              timeFieldName: '@timestamp',
              title: indexPattern
            };
          }

          throw err;
        }
      }
    };
  }

  getWriter(options = {}) {
    const namespace = options.namespace || 'default';
    const cachedWriter = this.writerCache.get(namespace);

    const isWriterCacheEnabled = () => this.writerCacheEnabled; // There is no cached writer, so we'll install / update the namespace specific resources now.


    if (!isWriterCacheEnabled() || !cachedWriter) {
      const writerForNamespace = this.initializeWriter(namespace);
      this.writerCache.set(namespace, writerForNamespace);
      return writerForNamespace;
    } else {
      return cachedWriter;
    }
  }

  initializeWriter(namespace) {
    const isWriteEnabled = () => this.writeEnabled;

    const turnOffWrite = () => this.writeEnabled = false;

    const {
      indexInfo,
      resourceInstaller
    } = this.options;
    const alias = indexInfo.getPrimaryAlias(namespace); // Wait until both index and namespace level resources have been installed / updated.

    const prepareForWriting = async () => {
      if (!isWriteEnabled()) {
        throw new _errors.RuleDataWriteDisabledError();
      }

      const indexLevelResourcesResult = await this.options.waitUntilReadyForWriting;

      if ((0, _Either.isLeft)(indexLevelResourcesResult)) {
        throw new _errors.RuleDataWriterInitializationError('index', indexInfo.indexOptions.registrationContext, indexLevelResourcesResult.left);
      } else {
        try {
          await resourceInstaller.installAndUpdateNamespaceLevelResources(indexInfo, namespace);
          return indexLevelResourcesResult.right;
        } catch (e) {
          throw new _errors.RuleDataWriterInitializationError('namespace', indexInfo.indexOptions.registrationContext, e);
        }
      }
    };

    const prepareForWritingResult = prepareForWriting().catch(error => {
      if (error instanceof _errors.RuleDataWriterInitializationError) {
        this.options.logger.error(error);
        this.options.logger.error(`The writer for the Rule Data Client for the ${indexInfo.indexOptions.registrationContext} registration context was not initialized properly, bulk() cannot continue, and writing will be disabled.`);
        turnOffWrite();
      } else if (error instanceof _errors.RuleDataWriteDisabledError) {
        this.options.logger.debug(`Writing is disabled, bulk() will not write any data.`);
      }

      return undefined;
    });
    return {
      bulk: async request => {
        try {
          const clusterClient = await prepareForWritingResult;

          if (clusterClient) {
            const requestWithDefaultParameters = { ...request,
              require_alias: true,
              index: alias
            };
            const response = await clusterClient.bulk(requestWithDefaultParameters, {
              meta: true
            });

            if (response.body.errors) {
              const error = new _elasticsearch.errors.ResponseError(response);
              this.options.logger.error(error);
            }

            return response;
          } else {
            this.options.logger.debug(`Writing is disabled, bulk() will not write any data.`);
          }

          return undefined;
        } catch (error) {
          this.options.logger.error(error);
          return undefined;
        }
      }
    };
  }

}

exports.RuleDataClient = RuleDataClient;