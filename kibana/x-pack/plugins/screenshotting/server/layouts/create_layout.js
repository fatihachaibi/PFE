"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLayout = createLayout;

var _Record = require("fp-ts/lib/Record");

var _common = require("../../common");

var _canvas_layout = require("./canvas_layout");

var _preserve_layout = require("./preserve_layout");

var _print_layout = require("./print_layout");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * We naively round all numeric values in the object, this will break screenshotting
 * if ever a have a non-number set as a value, but this points to an issue
 * in the code responsible for creating the dimensions object.
 */


const roundNumbers = (0, _Record.map)(Math.round);

function createLayout({
  id,
  dimensions,
  selectors,
  ...config
}) {
  if (dimensions && id === _common.LayoutTypes.PRESERVE_LAYOUT) {
    return new _preserve_layout.PreserveLayout(roundNumbers(dimensions), selectors);
  }

  if (dimensions && id === _common.LayoutTypes.CANVAS) {
    return new _canvas_layout.CanvasLayout(roundNumbers(dimensions));
  } // layoutParams is optional as PrintLayout doesn't use it


  return new _print_layout.PrintLayout(config);
}