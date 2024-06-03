"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.importMonitors = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _path = _interopRequireDefault(require("path"));

var _formData = _interopRequireDefault(require("form-data"));

var fs = _interopRequireWildcard(require("fs"));

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


const importMonitors = async ({
  kibanaUrl,
  username,
  password
}) => {
  // eslint-disable-next-line no-console
  console.log('Loading sample monitors');
  const form = new _formData.default();
  const file = fs.readFileSync(_path.default.join(__dirname, './uptime_monitor.ndjson'));
  form.append('file', file, 'uptime_monitor.ndjson');

  try {
    _axios.default.request({
      method: 'post',
      url: kibanaUrl + '/api/saved_objects/_import?overwrite=true',
      auth: {
        username: username !== null && username !== void 0 ? username : 'elastic',
        password: password !== null && password !== void 0 ? password : 'changeme'
      },
      headers: {
        'kbn-xsrf': 'true',
        ...form.getHeaders()
      },
      data: form
    }).then(({
      data
    }) => {
      if (data.successCount === 2) {
        // eslint-disable-next-line no-console
        console.log('Successfully imported 2 monitors');
      }
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

exports.importMonitors = importMonitors;