"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMetadataFromTermsEnum = getMetadataFromTermsEnum;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

async function getMetadataFromTermsEnum({
  dataStreamName,
  esClient
}) {
  var _maxEventIngestedResp, _namespaceResponse$te, _datasetResponse$term, _typeResponse$terms$;

  const [maxEventIngestedResponse, namespaceResponse, datasetResponse, typeResponse, serviceNameResponse, environmentResponse] = await Promise.all([esClient.search({
    size: 1,
    index: dataStreamName,
    sort: {
      // @ts-expect-error Type '{ 'event.ingested': string; }' is not assignable to type 'string | string[] | undefined'.
      'event.ingested': 'desc'
    },
    _source: false,
    fields: ['event.ingested']
  }), esClient.termsEnum({
    index: dataStreamName,
    field: 'data_stream.namespace'
  }), esClient.termsEnum({
    index: dataStreamName,
    field: 'data_stream.dataset'
  }), esClient.termsEnum({
    index: dataStreamName,
    field: 'data_stream.type'
  }), esClient.termsEnum({
    index: dataStreamName,
    field: 'service.name',
    size: 2
  }), esClient.termsEnum({
    index: dataStreamName,
    field: 'service.environment',
    size: 2
  })]);
  const maxIngested = new Date((_maxEventIngestedResp = maxEventIngestedResponse.hits.hits[0]) === null || _maxEventIngestedResp === void 0 ? void 0 : _maxEventIngestedResp.fields['event.ingested']).getTime();
  const namespace = (_namespaceResponse$te = namespaceResponse.terms[0]) !== null && _namespaceResponse$te !== void 0 ? _namespaceResponse$te : '';
  const dataset = (_datasetResponse$term = datasetResponse.terms[0]) !== null && _datasetResponse$term !== void 0 ? _datasetResponse$term : '';
  const type = (_typeResponse$terms$ = typeResponse.terms[0]) !== null && _typeResponse$terms$ !== void 0 ? _typeResponse$terms$ : '';
  const serviceNames = serviceNameResponse.terms;
  const environments = environmentResponse.terms.length > 0 ? environmentResponse.terms : ['ENVIRONMENT_NOT_DEFINED'];
  return {
    maxIngested,
    namespace,
    dataset,
    type,
    serviceNames,
    environments
  };
}