"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerAnalyticsContextProvider = registerAnalyticsContextProvider;

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Registers the Analytics context provider to enrich events with the cluster info.
 * @param analytics Analytics service.
 * @param context$ Observable emitting the cluster info.
 * @private
 */
function registerAnalyticsContextProvider(analytics, context$) {
  analytics.registerContextProvider({
    name: 'elasticsearch info',
    context$,
    schema: {
      cluster_name: {
        type: 'keyword',
        _meta: {
          description: 'The Cluster Name'
        }
      },
      cluster_uuid: {
        type: 'keyword',
        _meta: {
          description: 'The Cluster UUID'
        }
      },
      cluster_version: {
        type: 'keyword',
        _meta: {
          description: 'The Cluster version'
        }
      }
    }
  });
}