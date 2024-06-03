"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSortedAndFilteredServices = getSortedAndFilteredServices;

var _elasticsearch_fieldnames = require("../../../../common/elasticsearch_fieldnames");

var _environment_filter_values = require("../../../../common/environment_filter_values");

var _processor_event = require("../../../../common/processor_event");

var _join_by_key = require("../../../../common/utils/join_by_key");

var _get_health_statuses = require("./get_health_statuses");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function getSortedAndFilteredServices({
  setup,
  start,
  end,
  environment,
  logger,
  serviceGroup
}) {
  const {
    apmEventClient
  } = setup;

  async function getServiceNamesFromTermsEnum() {
    if (environment !== _environment_filter_values.ENVIRONMENT_ALL.value) {
      return [];
    }

    const response = await apmEventClient.termsEnum('get_services_from_terms_enum', {
      apm: {
        events: [_processor_event.ProcessorEvent.transaction, _processor_event.ProcessorEvent.span, _processor_event.ProcessorEvent.metric, _processor_event.ProcessorEvent.error]
      },
      body: {
        size: 500,
        field: _elasticsearch_fieldnames.SERVICE_NAME
      }
    });
    return response.terms;
  }

  const [servicesWithHealthStatuses, selectedServices] = await Promise.all([(0, _get_health_statuses.getHealthStatuses)({
    setup,
    start,
    end,
    environment
  }).catch(error => {
    logger.error(error);
    return [];
  }), serviceGroup ? getServiceNamesFromServiceGroup(serviceGroup) : getServiceNamesFromTermsEnum()]);
  const services = (0, _join_by_key.joinByKey)([...servicesWithHealthStatuses, ...selectedServices.map(serviceName => ({
    serviceName
  }))], 'serviceName');
  return services;
}

async function getServiceNamesFromServiceGroup(serviceGroup) {
  return serviceGroup.serviceNames;
}