"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrUpgradeSavedConfig = createOrUpgradeSavedConfig;

var _lodash = require("lodash");

var _std = require("@kbn/std");

var _saved_objects = require("../../saved_objects");

var _get_upgradeable_config = require("./get_upgradeable_config");

var _saved_objects2 = require("../saved_objects");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
async function createOrUpgradeSavedConfig(options) {
  const {
    savedObjectsClient,
    version,
    buildNum,
    log,
    handleWriteErrors
  } = options; // try to find an older config we can upgrade

  const upgradeableConfig = await (0, _get_upgradeable_config.getUpgradeableConfig)({
    savedObjectsClient,
    version
  });
  let transformDefaults = {};
  await (0, _std.asyncForEach)(_saved_objects2.transforms, async transformFn => {
    const result = await transformFn({
      savedObjectsClient,
      configAttributes: upgradeableConfig === null || upgradeableConfig === void 0 ? void 0 : upgradeableConfig.attributes
    });
    transformDefaults = { ...transformDefaults,
      ...result
    };
  }); // default to the attributes of the upgradeableConfig if available

  const attributes = (0, _lodash.defaults)({
    buildNum,
    ...transformDefaults // Any defaults that should be applied from transforms

  }, upgradeableConfig === null || upgradeableConfig === void 0 ? void 0 : upgradeableConfig.attributes);

  try {
    // create the new SavedConfig
    await savedObjectsClient.create('config', attributes, {
      id: version
    });
  } catch (error) {
    if (handleWriteErrors) {
      if (_saved_objects.SavedObjectsErrorHelpers.isConflictError(error)) {
        return;
      }

      if (_saved_objects.SavedObjectsErrorHelpers.isNotAuthorizedError(error) || _saved_objects.SavedObjectsErrorHelpers.isForbiddenError(error)) {
        return attributes;
      }
    }

    throw error;
  }

  if (upgradeableConfig) {
    log.debug(`Upgrade config from ${upgradeableConfig.id} to ${version}`, {
      kibana: {
        config: {
          prevVersion: upgradeableConfig.id,
          newVersion: version
        }
      }
    });
  }
}