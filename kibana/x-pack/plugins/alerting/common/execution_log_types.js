"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executionLogSortableColumns = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const executionLogSortableColumns = ['timestamp', 'execution_duration', 'total_search_duration', 'es_search_duration', 'schedule_delay', 'num_triggered_actions', 'num_generated_actions', 'num_active_alerts', 'num_recovered_alerts', 'num_new_alerts'];
exports.executionLogSortableColumns = executionLogSortableColumns;