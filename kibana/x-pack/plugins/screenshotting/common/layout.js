"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutTypes = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * @internal
 */

/**
 * @internal
 */

/**
 * Screenshot layout parameters.
 */

/**
 * Supported layout types.
 */

let LayoutTypes;
exports.LayoutTypes = LayoutTypes;

(function (LayoutTypes) {
  LayoutTypes["PRESERVE_LAYOUT"] = "preserve_layout";
  LayoutTypes["PRINT"] = "print";
  LayoutTypes["CANVAS"] = "canvas";
})(LayoutTypes || (exports.LayoutTypes = LayoutTypes = {}));