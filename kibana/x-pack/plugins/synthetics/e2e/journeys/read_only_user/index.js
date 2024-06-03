"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _monitor_management = require("./monitor_management");

Object.keys(_monitor_management).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _monitor_management[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _monitor_management[key];
    }
  });
});