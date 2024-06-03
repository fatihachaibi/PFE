"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchStatus = void 0;

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
let SearchStatus;
exports.SearchStatus = SearchStatus;

(function (SearchStatus) {
  SearchStatus["IN_PROGRESS"] = "in_progress";
  SearchStatus["ERROR"] = "error";
  SearchStatus["COMPLETE"] = "complete";
})(SearchStatus || (exports.SearchStatus = SearchStatus = {}));