"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeConfig = void 0;

var _std = require("@kbn/std");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const mergeConfig = (baseConfig, configOverrides) => {
  // note: spreading the source is sufficient because we're only removing keys
  // if we were to perform more complex operations, a deep copy would be required here
  const writableBaseConfig = { ...baseConfig
  };

  if (configOverrides.serviceAccountToken) {
    delete writableBaseConfig.username;
    delete writableBaseConfig.password;
  } else if (configOverrides.username && configOverrides.password) {
    delete writableBaseConfig.serviceAccountToken;
  }

  return (0, _std.merge)(writableBaseConfig, configOverrides);
};

exports.mergeConfig = mergeConfig;