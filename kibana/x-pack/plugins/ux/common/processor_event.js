"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProcessorEvent = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

let ProcessorEvent;
exports.ProcessorEvent = ProcessorEvent;

(function (ProcessorEvent) {
  ProcessorEvent["transaction"] = "transaction";
  ProcessorEvent["error"] = "error";
  ProcessorEvent["metric"] = "metric";
  ProcessorEvent["span"] = "span";
  ProcessorEvent["profile"] = "profile";
})(ProcessorEvent || (exports.ProcessorEvent = ProcessorEvent = {}));