"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getting_started = require("./getting_started.journey");

Object.keys(_getting_started).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getting_started[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getting_started[key];
    }
  });
});