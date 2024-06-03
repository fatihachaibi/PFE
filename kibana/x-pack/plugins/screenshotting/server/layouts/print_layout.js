"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrintLayout = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _ = require(".");

var _common = require("../../common");

var _browsers = require("../browsers");

var _base_layout = require("./base_layout");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


class PrintLayout extends _base_layout.BaseLayout {
  constructor({
    zoom = 1
  }) {
    super(_common.LayoutTypes.PRINT);
    (0, _defineProperty2.default)(this, "selectors", { ..._.DEFAULT_SELECTORS,
      screenshot: '[data-shared-item]' // override '[data-shared-items-container]'

    });
    (0, _defineProperty2.default)(this, "groupCount", 2);
    (0, _defineProperty2.default)(this, "viewport", _browsers.DEFAULT_VIEWPORT);
    (0, _defineProperty2.default)(this, "zoom", void 0);
    this.zoom = zoom;
  }

  getCssOverridesPath() {
    return undefined;
  }

  getBrowserViewport() {
    return this.viewport;
  }

  getBrowserZoom() {
    return this.zoom;
  }

  getViewport(itemsCount = 1) {
    return {
      zoom: this.zoom,
      width: this.viewport.width,
      height: this.viewport.height * itemsCount
    };
  }

  getPdfImageSize() {
    return {
      width: 500
    };
  }

  getPdfPageOrientation() {
    return 'portrait';
  }

  getPdfPageSize() {
    return 'A4';
  }

}

exports.PrintLayout = PrintLayout;