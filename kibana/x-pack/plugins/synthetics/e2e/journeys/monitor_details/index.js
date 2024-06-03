"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _monitor_details = require("./monitor_details.journey");

Object.keys(_monitor_details).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _monitor_details[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _monitor_details[key];
    }
  });
});

var _monitor_alerts = require("./monitor_alerts.journey");

Object.keys(_monitor_alerts).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _monitor_alerts[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _monitor_alerts[key];
    }
  });
});

var _ping_redirects = require("./ping_redirects.journey");

Object.keys(_ping_redirects).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ping_redirects[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ping_redirects[key];
    }
  });
});