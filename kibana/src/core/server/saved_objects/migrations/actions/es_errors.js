"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWriteBlockException = exports.isIndexNotFoundException = exports.isIncompatibleMappingException = exports.isClusterShardLimitExceeded = void 0;

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const isWriteBlockException = errorCause => {
  return (errorCause === null || errorCause === void 0 ? void 0 : errorCause.type) === 'cluster_block_exception' && (errorCause === null || errorCause === void 0 ? void 0 : errorCause.reason.match(/index \[.+] blocked by: \[FORBIDDEN\/8\/.+ \(api\)\]/)) !== null;
};

exports.isWriteBlockException = isWriteBlockException;

const isIncompatibleMappingException = errorCause => {
  return (errorCause === null || errorCause === void 0 ? void 0 : errorCause.type) === 'strict_dynamic_mapping_exception' || (errorCause === null || errorCause === void 0 ? void 0 : errorCause.type) === 'mapper_parsing_exception';
};

exports.isIncompatibleMappingException = isIncompatibleMappingException;

const isIndexNotFoundException = errorCause => {
  return (errorCause === null || errorCause === void 0 ? void 0 : errorCause.type) === 'index_not_found_exception';
};

exports.isIndexNotFoundException = isIndexNotFoundException;

const isClusterShardLimitExceeded = errorCause => {
  return (errorCause === null || errorCause === void 0 ? void 0 : errorCause.type) === 'validation_exception' && (errorCause === null || errorCause === void 0 ? void 0 : errorCause.reason.match(/this action would add .* shards, but this cluster currently has .* maximum normal shards open/)) !== null;
};

exports.isClusterShardLimitExceeded = isClusterShardLimitExceeded;