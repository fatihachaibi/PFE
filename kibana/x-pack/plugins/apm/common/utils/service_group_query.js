"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceGroupQuery = serviceGroupQuery;

var _elasticsearch_fieldnames = require("../elasticsearch_fieldnames");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function serviceGroupQuery(serviceGroup) {
  if (!serviceGroup) {
    return [];
  }

  return serviceGroup !== null && serviceGroup !== void 0 && serviceGroup.serviceNames ? [{
    terms: {
      [_elasticsearch_fieldnames.SERVICE_NAME]: serviceGroup.serviceNames
    }
  }] : [];
}