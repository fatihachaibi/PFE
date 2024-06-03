"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  waitForFleetSetup: true,
  getSupertestWithAdminUser: true
};
exports.getSupertestWithAdminUser = getSupertestWithAdminUser;
exports.waitForFleetSetup = void 0;

var _test = require("@kbn/test");

var kbnTestServer = _interopRequireWildcard(require("../../../../../../src/core/test_helpers/kbn_server"));

var _docker_registry_helper = require("./docker_registry_helper");

Object.keys(_docker_registry_helper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _docker_registry_helper[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _docker_registry_helper[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const waitForFleetSetup = async root => {
  const isFleetSetupRunning = async () => {
    var _resp$body, _resp$body$status, _resp$body$status$plu, _fleetStatus$meta;

    const statusApi = getSupertestWithAdminUser(root, 'get', '/api/status');
    const resp = await statusApi.send();
    const fleetStatus = (_resp$body = resp.body) === null || _resp$body === void 0 ? void 0 : (_resp$body$status = _resp$body.status) === null || _resp$body$status === void 0 ? void 0 : (_resp$body$status$plu = _resp$body$status.plugins) === null || _resp$body$status$plu === void 0 ? void 0 : _resp$body$status$plu.fleet;

    if (fleetStatus !== null && fleetStatus !== void 0 && (_fleetStatus$meta = fleetStatus.meta) !== null && _fleetStatus$meta !== void 0 && _fleetStatus$meta.error) {
      throw new Error(`Setup failed: ${JSON.stringify(fleetStatus)}`);
    }

    return !fleetStatus || (fleetStatus === null || fleetStatus === void 0 ? void 0 : fleetStatus.summary) === 'Fleet is setting up';
  };

  while (await isFleetSetupRunning()) {
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
};

exports.waitForFleetSetup = waitForFleetSetup;

function getSupertestWithAdminUser(root, method, path) {
  const testUserCredentials = Buffer.from(`${_test.adminTestUser.username}:${_test.adminTestUser.password}`);
  return kbnTestServer.getSupertest(root, method, path).set('Authorization', `Basic ${testUserCredentials.toString('base64')}`);
}