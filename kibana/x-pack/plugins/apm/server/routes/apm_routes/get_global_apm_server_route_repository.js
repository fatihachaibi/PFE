"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGlobalApmServerRouteRepository = void 0;

var _route = require("../correlations/route");

var _route2 = require("../alerts/route");

var _route3 = require("../backends/route");

var _route4 = require("../environments/route");

var _route5 = require("../errors/route");

var _route6 = require("../infrastructure/route");

var _route7 = require("../fleet/route");

var _route8 = require("../data_view/route");

var _route9 = require("../latency_distribution/route");

var _route10 = require("../metrics/route");

var _route11 = require("../observability_overview/route");

var _route12 = require("../rum_client/route");

var _route13 = require("../fallback_to_transactions/route");

var _route14 = require("../services/route");

var _route15 = require("../service_groups/route");

var _route16 = require("../service_map/route");

var _route17 = require("../service_nodes/route");

var _route18 = require("../settings/agent_configuration/route");

var _route19 = require("../settings/anomaly_detection/route");

var _route20 = require("../settings/apm_indices/route");

var _route21 = require("../settings/custom_link/route");

var _route22 = require("../source_maps/route");

var _route23 = require("../traces/route");

var _route24 = require("../transactions/route");

var _route25 = require("../historical_data/route");

var _route26 = require("../event_metadata/route");

var _route27 = require("../suggestions/route");

var _route28 = require("../agent_keys/route");

var _route29 = require("../span_links/route");

var _route30 = require("../debug_telemetry/route");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function getTypedGlobalApmServerRouteRepository() {
  const repository = { ..._route8.dataViewRouteRepository,
    ..._route4.environmentsRouteRepository,
    ..._route5.errorsRouteRepository,
    ..._route9.latencyDistributionRouteRepository,
    ..._route10.metricsRouteRepository,
    ..._route11.observabilityOverviewRouteRepository,
    ..._route12.rumRouteRepository,
    ..._route16.serviceMapRouteRepository,
    ..._route17.serviceNodeRouteRepository,
    ..._route14.serviceRouteRepository,
    ..._route15.serviceGroupRouteRepository,
    ..._route27.suggestionsRouteRepository,
    ..._route23.traceRouteRepository,
    ..._route24.transactionRouteRepository,
    ..._route2.alertsChartPreviewRouteRepository,
    ..._route18.agentConfigurationRouteRepository,
    ..._route19.anomalyDetectionRouteRepository,
    ..._route20.apmIndicesRouteRepository,
    ..._route21.customLinkRouteRepository,
    ..._route22.sourceMapsRouteRepository,
    ..._route7.apmFleetRouteRepository,
    ..._route3.backendsRouteRepository,
    ..._route.correlationsRouteRepository,
    ..._route13.fallbackToTransactionsRouteRepository,
    ..._route25.historicalDataRouteRepository,
    ..._route26.eventMetadataRouteRepository,
    ..._route28.agentKeysRouteRepository,
    ..._route29.spanLinksRouteRepository,
    ..._route6.infrastructureRouteRepository,
    ..._route30.debugTelemetryRoute
  };
  return repository;
}

const getGlobalApmServerRouteRepository = () => {
  return getTypedGlobalApmServerRouteRepository();
};

exports.getGlobalApmServerRouteRepository = getGlobalApmServerRouteRepository;

function assertType() {} // if any endpoint has an array-like return type, the assertion below will fail


assertType();