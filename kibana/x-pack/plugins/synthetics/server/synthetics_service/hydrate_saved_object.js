"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hydrateSavedObjects = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _constants = require("../../common/constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const hydrateSavedObjects = async ({
  monitors,
  server
}) => {
  try {
    const {
      uptimeEsClient
    } = server;

    if (!uptimeEsClient) {
      return;
    }

    const {
      has_all_requested: hasAllPrivileges
    } = await uptimeEsClient.baseESClient.security.hasPrivileges({
      body: {
        index: [{
          names: ['synthetics-*'],
          privileges: ['read']
        }]
      }
    });

    if (!hasAllPrivileges) {
      return;
    }

    const missingInfoIds = monitors.filter(monitor => {
      const isBrowserMonitor = monitor.attributes.type === 'browser';
      const isHTTPMonitor = monitor.attributes.type === 'http';
      const isTCPMonitor = monitor.attributes.type === 'tcp';
      const monitorAttributes = monitor.attributes;
      const isMissingUrls = !monitorAttributes || !monitorAttributes.urls;
      const isMissingPort = !monitorAttributes || !monitorAttributes['url.port'];
      const isEnrichableBrowserMonitor = isBrowserMonitor && (isMissingUrls || isMissingPort);
      const isEnrichableHttpMonitor = isHTTPMonitor && isMissingPort;
      const isEnrichableTcpMonitor = isTCPMonitor && isMissingPort;
      return isEnrichableBrowserMonitor || isEnrichableHttpMonitor || isEnrichableTcpMonitor;
    }).map(({
      id
    }) => id);

    if (missingInfoIds.length > 0 && server.uptimeEsClient) {
      var _server$authSavedObje;

      const esDocs = await fetchSampleMonitorDocuments(server.uptimeEsClient, missingInfoIds);
      const updatedObjects = [];
      monitors.filter(monitor => missingInfoIds.includes(monitor.id)).forEach(monitor => {
        let resultAttributes = monitor.attributes;
        let isUpdated = false;
        esDocs.forEach(doc => {
          var _doc$url, _doc$url3; // to make sure the document is ingested after the latest update of the monitor


          const documentIsAfterLatestUpdate = (0, _moment.default)(monitor.updated_at).isBefore((0, _moment.default)(doc.timestamp));
          if (!documentIsAfterLatestUpdate) return monitor;
          if (doc.config_id !== monitor.id) return monitor;

          if ((_doc$url = doc.url) !== null && _doc$url !== void 0 && _doc$url.full) {
            var _doc$url2;

            isUpdated = true;
            resultAttributes = { ...resultAttributes,
              urls: (_doc$url2 = doc.url) === null || _doc$url2 === void 0 ? void 0 : _doc$url2.full
            };
          }

          if ((_doc$url3 = doc.url) !== null && _doc$url3 !== void 0 && _doc$url3.port) {
            var _doc$url4;

            isUpdated = true;
            resultAttributes = { ...resultAttributes,
              ['url.port']: (_doc$url4 = doc.url) === null || _doc$url4 === void 0 ? void 0 : _doc$url4.port
            };
          }
        });

        if (isUpdated) {
          updatedObjects.push({ ...monitor,
            attributes: resultAttributes
          });
        }
      });
      await ((_server$authSavedObje = server.authSavedObjectsClient) === null || _server$authSavedObje === void 0 ? void 0 : _server$authSavedObje.bulkUpdate(updatedObjects));
    }
  } catch (e) {
    server.logger.error(e);
  }
};

exports.hydrateSavedObjects = hydrateSavedObjects;

const fetchSampleMonitorDocuments = async (esClient, configIds) => {
  const data = await esClient.search({
    body: {
      query: {
        bool: {
          filter: [{
            range: {
              '@timestamp': {
                gte: 'now-15m',
                lt: 'now'
              }
            }
          }, {
            terms: {
              config_id: configIds
            }
          }, {
            exists: {
              field: 'summary'
            }
          }, {
            bool: {
              minimum_should_match: 1,
              should: [{
                exists: {
                  field: 'url.full'
                }
              }, {
                exists: {
                  field: 'url.port'
                }
              }]
            }
          }]
        }
      },
      _source: ['url', 'config_id', '@timestamp'],
      collapse: {
        field: 'config_id'
      }
    }
  }, 'getHydrateQuery', _constants.SYNTHETICS_INDEX_PATTERN);
  return data.body.hits.hits.map(({
    _source: doc
  }) => ({ ...doc,
    timestamp: doc['@timestamp']
  }));
};