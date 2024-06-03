"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapToReportingError = mapToReportingError;

var _common = require("../../../screenshotting/common");

var _ = require(".");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function mapToReportingError(error) {
  if (error instanceof _.ReportingError) {
    return error;
  }

  switch (true) {
    case error instanceof _common.errors.BrowserClosedUnexpectedly:
      return new _.BrowserUnexpectedlyClosedError(error.message);

    case error instanceof _common.errors.FailedToCaptureScreenshot:
      return new _.BrowserScreenshotError(error.message);

    case error instanceof _common.errors.FailedToSpawnBrowserError:
      return new _.BrowserCouldNotLaunchError();

    case error instanceof _common.errors.PdfWorkerOutOfMemoryError:
      return new _.PdfWorkerOutOfMemoryError();

    case error instanceof _common.errors.InsufficientMemoryAvailableOnCloudError:
      return new _.VisualReportingSoftDisabledError();
  }

  return new _.UnknownError();
}