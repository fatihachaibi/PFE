"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServiceAllowedRoute = void 0;

var _constants = require("../../../common/constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getServiceAllowedRoute = () => ({
  method: 'GET',
  path: _constants.API_URLS.SERVICE_ALLOWED,
  validate: {},
  handler: async ({
    server
  }) => {
    return {
      serviceAllowed: server.syntheticsService.isAllowed,
      signupUrl: server.syntheticsService.signupUrl
    };
  }
});

exports.getServiceAllowedRoute = getServiceAllowedRoute;