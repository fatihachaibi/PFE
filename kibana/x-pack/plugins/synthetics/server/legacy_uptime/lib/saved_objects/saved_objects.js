"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.savedObjectsAdapter = exports.registerUptimeSavedObjects = void 0;

var _server = require("../../../../../../../src/core/server");

var _constants = require("../../../../common/constants");

var _monitor_management = require("../../../../common/constants/monitor_management");

var _uptime_settings = require("./uptime_settings");

var _synthetics_monitor = require("./synthetics_monitor");

var _service_api_key = require("./service_api_key");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const registerUptimeSavedObjects = (savedObjectsService, encryptedSavedObjects, isServiceEnabled) => {
  savedObjectsService.registerType(_uptime_settings.umDynamicSettings);

  if (isServiceEnabled) {
    savedObjectsService.registerType(_synthetics_monitor.syntheticsMonitor);
    savedObjectsService.registerType(_service_api_key.syntheticsServiceApiKey);
    encryptedSavedObjects.registerType({
      type: _service_api_key.syntheticsServiceApiKey.name,
      attributesToEncrypt: new Set(['apiKey'])
    });
    encryptedSavedObjects.registerType({
      type: _synthetics_monitor.syntheticsMonitor.name,
      attributesToEncrypt: new Set(['secrets',
      /* adding secretKeys to the list of attributes to encrypt ensures
       * that secrets are never stored on the resulting saved object,
       * even in the presence of developer error.
       *
       * In practice, all secrets should be stored as a single JSON
       * payload on the `secrets` key. This ensures performant decryption. */
      ..._monitor_management.secretKeys])
    });
  }
};

exports.registerUptimeSavedObjects = registerUptimeSavedObjects;
const savedObjectsAdapter = {
  config: null,
  getUptimeDynamicSettings: async client => {
    try {
      var _obj$attributes;

      const obj = await client.get(_uptime_settings.umDynamicSettings.name, _uptime_settings.settingsObjectId);
      return (_obj$attributes = obj === null || obj === void 0 ? void 0 : obj.attributes) !== null && _obj$attributes !== void 0 ? _obj$attributes : _constants.DYNAMIC_SETTINGS_DEFAULTS;
    } catch (getErr) {
      const config = savedObjectsAdapter.config;

      if (_server.SavedObjectsErrorHelpers.isNotFoundError(getErr)) {
        if (config !== null && config !== void 0 && config.index) {
          return { ..._constants.DYNAMIC_SETTINGS_DEFAULTS,
            heartbeatIndices: config.index
          };
        }

        return _constants.DYNAMIC_SETTINGS_DEFAULTS;
      }

      throw getErr;
    }
  },
  setUptimeDynamicSettings: async (client, settings) => {
    await client.create(_uptime_settings.umDynamicSettings.name, settings, {
      id: _uptime_settings.settingsObjectId,
      overwrite: true
    });
  }
};
exports.savedObjectsAdapter = savedObjectsAdapter;