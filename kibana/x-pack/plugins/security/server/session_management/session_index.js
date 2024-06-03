"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SessionIndex = void 0;
exports.getSessionIndexTemplate = getSessionIndexTemplate;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _audit = require("../audit");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Version of the current session index template.
 */


const SESSION_INDEX_TEMPLATE_VERSION = 1;
/**
 * Number of sessions to remove per batch during cleanup.
 */

const SESSION_INDEX_CLEANUP_BATCH_SIZE = 10_000;
/**
 * Maximum number of batches per cleanup.
 * If the batch size is 10,000 and this limit is 10, then Kibana will remove up to 100k sessions per cleanup.
 */

const SESSION_INDEX_CLEANUP_BATCH_LIMIT = 10;
/**
 * How long the session cleanup search point-in-time should be kept alive.
 */

const SESSION_INDEX_CLEANUP_KEEP_ALIVE = '5m';
/**
 * Returns index template that is used for the current version of the session index.
 */

function getSessionIndexTemplate(templateName, indexName) {
  return Object.freeze({
    name: templateName,
    index_patterns: [indexName],
    template: {
      settings: {
        index: {
          number_of_shards: 1,
          number_of_replicas: 0,
          auto_expand_replicas: '0-1',
          priority: 1000,
          refresh_interval: '1s',
          hidden: true
        }
      },
      mappings: {
        dynamic: 'strict',
        properties: {
          usernameHash: {
            type: 'keyword'
          },
          provider: {
            properties: {
              name: {
                type: 'keyword'
              },
              type: {
                type: 'keyword'
              }
            }
          },
          idleTimeoutExpiration: {
            type: 'date'
          },
          lifespanExpiration: {
            type: 'date'
          },
          accessAgreementAcknowledged: {
            type: 'boolean'
          },
          content: {
            type: 'binary'
          }
        }
      }
    }
  });
}
/**
 * Represents shape of the session value stored in the index.
 */


class SessionIndex {
  /**
   * Name of the index to store session information in.
   */

  /**
   * Promise that tracks session index initialization process. We'll need to get rid of this as soon
   * as Core provides support for plugin statuses (https://github.com/elastic/kibana/issues/41983).
   * With this we won't mark Security as `Green` until index is fully initialized and hence consumers
   * won't be able to call any APIs we provide.
   */
  constructor(options) {
    (0, _defineProperty2.default)(this, "indexName", void 0);
    (0, _defineProperty2.default)(this, "indexInitialization", void 0);
    this.options = options;
    this.indexName = `${this.options.kibanaIndexName}_security_session_${SESSION_INDEX_TEMPLATE_VERSION}`;
  }
  /**
   * Retrieves session value with the specified ID from the index. If session value isn't found
   * `null` will be returned.
   * @param sid Session ID.
   */


  async get(sid) {
    try {
      const {
        body: response,
        statusCode
      } = await this.options.elasticsearchClient.get({
        id: sid,
        index: this.indexName
      }, {
        ignore: [404],
        meta: true
      });
      const docNotFound = response.found === false;
      const indexNotFound = statusCode === 404;

      if (docNotFound || indexNotFound) {
        this.options.logger.debug('Cannot find session value with the specified ID.');
        return null;
      }

      return { ...response._source,
        sid,
        metadata: {
          primaryTerm: response._primary_term,
          sequenceNumber: response._seq_no
        }
      };
    } catch (err) {
      this.options.logger.error(`Failed to retrieve session value: ${err.message}`);
      throw err;
    }
  }
  /**
   * Creates a new document for the specified session value.
   * @param sessionValue Session index value.
   */


  async create(sessionValue) {
    if (this.indexInitialization) {
      this.options.logger.warn('Attempted to create a new session while session index is initializing.');
      await this.indexInitialization;
    }

    const {
      sid,
      ...sessionValueToStore
    } = sessionValue;

    try {
      const {
        _primary_term: primaryTerm,
        _seq_no: sequenceNumber
      } = await this.options.elasticsearchClient.create({
        id: sid,
        // We cannot control whether index is created automatically during this operation or not.
        // But we can reduce probability of getting into a weird state when session is being created
        // while session index is missing for some reason. This way we'll recreate index with a
        // proper name and alias. But this will only work if we still have a proper index template.
        index: this.indexName,
        body: sessionValueToStore,
        refresh: 'wait_for'
      });
      return { ...sessionValue,
        metadata: {
          primaryTerm,
          sequenceNumber
        }
      };
    } catch (err) {
      this.options.logger.error(`Failed to create session value: ${err.message}`);
      throw err;
    }
  }
  /**
   * Re-indexes updated session value.
   * @param sessionValue Session index value.
   */


  async update(sessionValue) {
    const {
      sid,
      metadata,
      ...sessionValueToStore
    } = sessionValue;

    try {
      const {
        body: response,
        statusCode
      } = await this.options.elasticsearchClient.index({
        id: sid,
        index: this.indexName,
        body: sessionValueToStore,
        if_seq_no: metadata.sequenceNumber,
        if_primary_term: metadata.primaryTerm,
        refresh: 'wait_for'
      }, {
        ignore: [409],
        meta: true
      }); // We don't want to override changes that were made after we fetched session value or
      // re-create it if has been deleted already. If we detect such a case we discard changes and
      // return latest copy of the session value instead or `null` if doesn't exist anymore.

      const sessionIndexValueUpdateConflict = statusCode === 409;

      if (sessionIndexValueUpdateConflict) {
        this.options.logger.debug('Cannot update session value due to conflict, session either does not exist or was already updated.');
        return await this.get(sid);
      }

      return { ...sessionValue,
        metadata: {
          primaryTerm: response._primary_term,
          sequenceNumber: response._seq_no
        }
      };
    } catch (err) {
      this.options.logger.error(`Failed to update session value: ${err.message}`);
      throw err;
    }
  }
  /**
   * Clears session value(s) determined by the specified filter.
   * @param filter Filter that narrows down the list of the session values that should be cleared.
   */


  async invalidate(filter) {
    if (filter.match === 'sid') {
      try {
        // We don't specify primary term and sequence number as delete should always take precedence
        // over any updates that could happen in the meantime.
        const {
          statusCode
        } = await this.options.elasticsearchClient.delete({
          id: filter.sid,
          index: this.indexName,
          refresh: 'wait_for'
        }, {
          ignore: [404],
          meta: true
        }); // 404 means the session with such SID wasn't found and hence nothing was removed.

        return statusCode !== 404 ? 1 : 0;
      } catch (err) {
        this.options.logger.error(`Failed to clear session value: ${err.message}`);
        throw err;
      }
    } // If filter is specified we should clear only session values that are matched by the filter.
    // Otherwise all session values should be cleared.


    let deleteQuery;

    if (filter.match === 'query') {
      deleteQuery = {
        bool: {
          must: [{
            term: {
              'provider.type': filter.query.provider.type
            }
          }, ...(filter.query.provider.name ? [{
            term: {
              'provider.name': filter.query.provider.name
            }
          }] : []), ...(filter.query.usernameHash ? [{
            term: {
              usernameHash: filter.query.usernameHash
            }
          }] : [])]
        }
      };
    } else {
      deleteQuery = {
        match_all: {}
      };
    }

    try {
      const response = await this.options.elasticsearchClient.deleteByQuery({
        index: this.indexName,
        refresh: true,
        body: {
          query: deleteQuery
        }
      });
      return response.deleted;
    } catch (err) {
      this.options.logger.error(`Failed to clear session value(s): ${err.message}`);
      throw err;
    }
  }
  /**
   * Initializes index that is used to store session values.
   */


  async initialize() {
    if (this.indexInitialization) {
      return await this.indexInitialization;
    }

    const sessionIndexTemplateName = `${this.options.kibanaIndexName}_security_session_index_template_${SESSION_INDEX_TEMPLATE_VERSION}`;
    return this.indexInitialization = new Promise(async (resolve, reject) => {
      try {
        // Check if legacy index template exists, and remove it if it does.
        let legacyIndexTemplateExists = false;

        try {
          legacyIndexTemplateExists = await this.options.elasticsearchClient.indices.existsTemplate({
            name: sessionIndexTemplateName
          });
        } catch (err) {
          this.options.logger.error(`Failed to check if session legacy index template exists: ${err.message}`);
          return reject(err);
        }

        if (legacyIndexTemplateExists) {
          try {
            await this.options.elasticsearchClient.indices.deleteTemplate({
              name: sessionIndexTemplateName
            });
            this.options.logger.debug('Successfully deleted session legacy index template.');
          } catch (err) {
            this.options.logger.error(`Failed to delete session legacy index template: ${err.message}`);
            return reject(err);
          }
        } // Check if required index template exists.


        let indexTemplateExists = false;

        try {
          indexTemplateExists = await this.options.elasticsearchClient.indices.existsIndexTemplate({
            name: sessionIndexTemplateName
          });
        } catch (err) {
          this.options.logger.error(`Failed to check if session index template exists: ${err.message}`);
          return reject(err);
        } // Create index template if it doesn't exist.


        if (indexTemplateExists) {
          this.options.logger.debug('Session index template already exists.');
        } else {
          try {
            await this.options.elasticsearchClient.indices.putIndexTemplate(getSessionIndexTemplate(sessionIndexTemplateName, this.indexName));
            this.options.logger.debug('Successfully created session index template.');
          } catch (err) {
            this.options.logger.error(`Failed to create session index template: ${err.message}`);
            return reject(err);
          }
        } // Check if required index exists. We cannot be sure that automatic creation of indices is
        // always enabled, so we create session index explicitly.


        let indexExists = false;

        try {
          indexExists = await this.options.elasticsearchClient.indices.exists({
            index: this.indexName
          });
        } catch (err) {
          this.options.logger.error(`Failed to check if session index exists: ${err.message}`);
          return reject(err);
        } // Create index if it doesn't exist.


        if (indexExists) {
          this.options.logger.debug('Session index already exists.');
        } else {
          try {
            await this.options.elasticsearchClient.indices.create({
              index: this.indexName
            });
            this.options.logger.debug('Successfully created session index.');
          } catch (err) {
            var _err$body, _err$body$error; // There can be a race condition if index is created by another Kibana instance.


            if ((err === null || err === void 0 ? void 0 : (_err$body = err.body) === null || _err$body === void 0 ? void 0 : (_err$body$error = _err$body.error) === null || _err$body$error === void 0 ? void 0 : _err$body$error.type) === 'resource_already_exists_exception') {
              this.options.logger.debug('Session index already exists.');
            } else {
              this.options.logger.error(`Failed to create session index: ${err.message}`);
              return reject(err);
            }
          }
        } // Notify any consumers that are awaiting on this promise and immediately reset it.


        resolve();
      } catch (error) {
        reject(error);
      }
    }).finally(() => {
      this.indexInitialization = undefined;
    });
  }
  /**
   * Trigger a removal of any outdated session values.
   */


  async cleanUp() {
    const {
      auditLogger,
      elasticsearchClient,
      logger
    } = this.options;
    logger.debug(`Running cleanup routine.`);
    let error;
    let indexNeedsRefresh = false;

    try {
      for await (const sessionValues of this.getSessionValuesInBatches()) {
        const operations = [];
        sessionValues.forEach(({
          _id,
          _source
        }) => {
          const {
            usernameHash,
            provider
          } = _source;
          auditLogger.log((0, _audit.sessionCleanupEvent)({
            sessionId: _id,
            usernameHash,
            provider
          }));
          operations.push({
            delete: {
              _id
            }
          });
        });

        if (operations.length > 0) {
          const bulkResponse = await elasticsearchClient.bulk({
            index: this.indexName,
            operations,
            refresh: false
          }, {
            ignore: [409, 404]
          });

          if (bulkResponse.errors) {
            const errorCount = bulkResponse.items.reduce((count, item) => item.delete.error ? count + 1 : count, 0);

            if (errorCount < bulkResponse.items.length) {
              logger.warn(`Failed to clean up ${errorCount} of ${bulkResponse.items.length} invalid or expired sessions. The remaining sessions were cleaned up successfully.`);
              indexNeedsRefresh = true;
            } else {
              logger.error(`Failed to clean up ${bulkResponse.items.length} invalid or expired sessions.`);
            }
          } else {
            logger.debug(`Cleaned up ${bulkResponse.items.length} invalid or expired sessions.`);
            indexNeedsRefresh = true;
          }
        }
      }
    } catch (err) {
      logger.error(`Failed to clean up sessions: ${err.message}`);
      error = err;
    }

    if (indexNeedsRefresh) {
      // Only refresh the index if we have actually deleted one or more sessions. The index will auto-refresh eventually anyway, this just
      // ensures that searches after the cleanup process are accurate, and this only impacts integration tests.
      try {
        await elasticsearchClient.indices.refresh({
          index: this.indexName
        });
        logger.debug(`Refreshed session index.`);
      } catch (err) {
        logger.error(`Failed to refresh session index: ${err.message}`);
      }
    }

    if (error) {
      // If we couldn't fetch or delete sessions, throw an error so the task will be retried.
      throw error;
    }
  }
  /**
   * Fetches session values from session index in batches of 10,000.
   */


  async *getSessionValuesInBatches() {
    const now = Date.now();
    const providersSessionConfig = this.options.config.authc.sortedProviders.map(provider => {
      return {
        boolQuery: {
          bool: {
            must: [{
              term: {
                'provider.type': provider.type
              }
            }, {
              term: {
                'provider.name': provider.name
              }
            }]
          }
        },
        ...this.options.config.session.getExpirationTimeouts(provider)
      };
    }); // Always try to delete sessions with expired lifespan (even if it's not configured right now).

    const deleteQueries = [{
      range: {
        lifespanExpiration: {
          lte: now
        }
      }
    }]; // If session belongs to a not configured provider we should also remove it.

    deleteQueries.push({
      bool: {
        must_not: {
          bool: {
            should: providersSessionConfig.map(({
              boolQuery
            }) => boolQuery),
            minimum_should_match: 1
          }
        }
      }
    });

    for (const {
      boolQuery,
      lifespan,
      idleTimeout
    } of providersSessionConfig) {
      // If lifespan is configured we should remove any sessions that were created without one.
      if (lifespan) {
        deleteQueries.push({
          bool: { ...boolQuery.bool,
            must_not: {
              exists: {
                field: 'lifespanExpiration'
              }
            }
          }
        });
      } // This timeout is intentionally larger than the timeout used in `Session` to update idle
      // timeout in the session index (idleTimeout * 2) to be sure that the session value is
      // definitely expired and may be safely cleaned up.


      const idleIndexCleanupTimeout = idleTimeout ? idleTimeout.asMilliseconds() * 3 : null;
      deleteQueries.push({
        bool: { ...boolQuery.bool,
          // If idle timeout is configured we should delete all sessions without specified idle timeout
          // or if that session hasn't been updated for a while meaning that session is expired. Otherwise
          // just delete all expired sessions that were previously created with the idle timeout.
          should: idleIndexCleanupTimeout ? [{
            range: {
              idleTimeoutExpiration: {
                lte: now - idleIndexCleanupTimeout
              }
            }
          }, {
            bool: {
              must_not: {
                exists: {
                  field: 'idleTimeoutExpiration'
                }
              }
            }
          }] : [{
            range: {
              idleTimeoutExpiration: {
                lte: now
              }
            }
          }],
          minimum_should_match: 1
        }
      });
    }

    const openPitResponse = await this.options.elasticsearchClient.openPointInTime({
      index: this.indexName,
      keep_alive: SESSION_INDEX_CLEANUP_KEEP_ALIVE
    });

    try {
      let searchAfter;

      for (let i = 0; i < SESSION_INDEX_CLEANUP_BATCH_LIMIT; i++) {
        const searchResponse = await this.options.elasticsearchClient.search({
          pit: {
            id: openPitResponse.id,
            keep_alive: SESSION_INDEX_CLEANUP_KEEP_ALIVE
          },
          _source_includes: 'usernameHash,provider',
          query: {
            bool: {
              should: deleteQueries
            }
          },
          search_after: searchAfter,
          size: SESSION_INDEX_CLEANUP_BATCH_SIZE,
          sort: '_shard_doc',
          track_total_hits: false // for performance

        });
        const {
          hits
        } = searchResponse.hits;

        if (hits.length > 0) {
          yield hits;
          searchAfter = hits[hits.length - 1].sort;
        }

        if (hits.length < SESSION_INDEX_CLEANUP_BATCH_SIZE) {
          break;
        }
      }
    } finally {
      await this.options.elasticsearchClient.closePointInTime({
        id: openPitResponse.id
      });
    }
  }

}

exports.SessionIndex = SessionIndex;