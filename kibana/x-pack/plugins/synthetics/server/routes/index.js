"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syntheticsAppRestApiRoutes = void 0;

var _get_api_key = require("./monitor_cruds/get_api_key");

var _get_service_locations = require("./synthetics_service/get_service_locations");

var _delete_monitor = require("./monitor_cruds/delete_monitor");

var _enablement = require("./synthetics_service/enablement");

var _get_monitor = require("./monitor_cruds/get_monitor");

var _run_once_monitor = require("./synthetics_service/run_once_monitor");

var _get_service_allowed = require("./synthetics_service/get_service_allowed");

var _test_now_monitor = require("./synthetics_service/test_now_monitor");

var _install_index_templates = require("./synthetics_service/install_index_templates");

var _edit_monitor = require("./monitor_cruds/edit_monitor");

var _add_monitor = require("./monitor_cruds/add_monitor");

var _add_monitor_project = require("./monitor_cruds/add_monitor_project");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const syntheticsAppRestApiRoutes = [_add_monitor_project.addSyntheticsProjectMonitorRoute, _add_monitor.addSyntheticsMonitorRoute, _enablement.getSyntheticsEnablementRoute, _delete_monitor.deleteSyntheticsMonitorRoute, _enablement.disableSyntheticsRoute, _edit_monitor.editSyntheticsMonitorRoute, _enablement.enableSyntheticsRoute, _get_service_locations.getServiceLocationsRoute, _get_monitor.getSyntheticsMonitorRoute, _get_monitor.getAllSyntheticsMonitorRoute, _install_index_templates.installIndexTemplatesRoute, _run_once_monitor.runOnceSyntheticsMonitorRoute, _test_now_monitor.testNowMonitorRoute, _get_service_allowed.getServiceAllowedRoute, _get_api_key.getAPIKeySyntheticsRoute];
exports.syntheticsAppRestApiRoutes = syntheticsAppRestApiRoutes;