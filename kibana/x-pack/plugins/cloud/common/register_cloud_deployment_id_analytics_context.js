"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerCloudDeploymentIdAnalyticsContext = registerCloudDeploymentIdAnalyticsContext;

var _rxjs = require("rxjs");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function registerCloudDeploymentIdAnalyticsContext(analytics, cloudId) {
  if (!cloudId) {
    return;
  }

  analytics.registerContextProvider({
    name: 'Cloud Deployment ID',
    context$: (0, _rxjs.of)({
      cloudId
    }),
    schema: {
      cloudId: {
        type: 'keyword',
        _meta: {
          description: 'The Cloud Deployment ID'
        }
      }
    }
  });
}