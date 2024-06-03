"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInternalRoutes = void 0;

var _bulk_create_attachments = require("./internal/bulk_create_attachments");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getInternalRoutes = () => [_bulk_create_attachments.bulkCreateAttachmentsRoute];

exports.getInternalRoutes = getInternalRoutes;