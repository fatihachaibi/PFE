"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyReindex = void 0;

var Either = _interopRequireWildcard(require("fp-ts/lib/Either"));

var _catch_retryable_es_client_errors = require("./catch_retryable_es_client_errors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const verifyReindex = ({
  client,
  sourceIndex,
  targetIndex
}) => () => {
  const count = index => client.count({
    index,
    // Return an error when targeting missing or closed indices
    allow_no_indices: false
  }).then(res => {
    return res.count;
  });

  return Promise.all([count(sourceIndex), count(targetIndex)]).then(([sourceCount, targetCount]) => {
    if (targetCount >= sourceCount) {
      return Either.right('verify_reindex_succeeded');
    } else {
      return Either.left({
        type: 'verify_reindex_failed'
      });
    }
  }).catch(_catch_retryable_es_client_errors.catchRetryableEsClientErrors);
};

exports.verifyReindex = verifyReindex;