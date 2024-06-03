"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  getActionDetailsById: true
};
Object.defineProperty(exports, "getActionDetailsById", {
  enumerable: true,
  get: function () {
    return _action_details_by_id.getActionDetailsById;
  }
});

var _actions = require("./actions");

Object.keys(_actions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _actions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _actions[key];
    }
  });
});

var _action_details_by_id = require("./action_details_by_id");