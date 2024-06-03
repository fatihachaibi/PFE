"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventKind = exports.EventAction = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

let EventKind;
exports.EventKind = EventKind;

(function (EventKind) {
  EventKind["event"] = "event";
  EventKind["signal"] = "signal";
})(EventKind || (exports.EventKind = EventKind = {}));

let EventAction;
exports.EventAction = EventAction;

(function (EventAction) {
  EventAction["fork"] = "fork";
  EventAction["exec"] = "exec";
  EventAction["end"] = "end";
  EventAction["output"] = "output";
})(EventAction || (exports.EventAction = EventAction = {}));