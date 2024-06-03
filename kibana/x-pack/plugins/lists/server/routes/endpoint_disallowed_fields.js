"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endpointDisallowedFields = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const endpointDisallowedFields = ['file.Ext.quarantine_path', 'file.Ext.quarantine_result', 'process.entity_id', 'process.parent.entity_id', 'process.ancestry'];
exports.endpointDisallowedFields = endpointDisallowedFields;