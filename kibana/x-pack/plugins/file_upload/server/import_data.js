"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.importDataProvider = importDataProvider;

var _constants = require("../common/constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function importDataProvider({
  asCurrentUser
}) {
  async function importData(id, index, settings, mappings, ingestPipeline, data) {
    let createdIndex;
    let createdPipelineId;
    const docCount = data.length;

    try {
      const {
        id: pipelineId,
        pipeline
      } = ingestPipeline;

      if (id === undefined) {
        // first chunk of data, create the index and id to return
        id = generateId();
        await createIndex(index, settings, mappings);
        createdIndex = index; // create the pipeline if one has been supplied

        if (pipelineId !== undefined) {
          const resp = await createPipeline(pipelineId, pipeline);

          if (resp.acknowledged !== true) {
            throw resp;
          }
        }

        createdPipelineId = pipelineId;
      } else {
        createdIndex = index;
        createdPipelineId = pipelineId;
      }

      let failures = [];

      if (data.length) {
        const resp = await indexData(index, createdPipelineId, data);

        if (resp.success === false) {
          if (resp.ingestError) {
            // all docs failed, abort
            throw resp;
          } else {
            // some docs failed.
            // still report success but with a list of failures
            failures = resp.failures || [];
          }
        }
      }

      return {
        success: true,
        id,
        index: createdIndex,
        pipelineId: createdPipelineId,
        docCount,
        failures
      };
    } catch (error) {
      return {
        success: false,
        id: id,
        index: createdIndex,
        pipelineId: createdPipelineId,
        error: error.body !== undefined ? error.body : error,
        docCount,
        ingestError: error.ingestError,
        failures: error.failures || []
      };
    }
  }

  async function createIndex(index, settings, mappings) {
    const body = {
      mappings: {
        _meta: {
          created_by: _constants.INDEX_META_DATA_CREATED_BY
        },
        properties: mappings.properties
      }
    };

    if (settings && Object.keys(settings).length) {
      body.settings = settings;
    } // @ts-expect-error settings.index is not compatible


    await asCurrentUser.indices.create({
      index,
      body
    }, {
      maxRetries: 0
    });
  }

  async function indexData(index, pipelineId, data) {
    try {
      const body = [];

      for (let i = 0; i < data.length; i++) {
        body.push({
          index: {}
        });
        body.push(data[i]);
      }

      const settings = {
        index,
        body
      };

      if (pipelineId !== undefined) {
        settings.pipeline = pipelineId;
      }

      const resp = await asCurrentUser.bulk(settings, {
        maxRetries: 0
      });

      if (resp.errors) {
        throw resp;
      } else {
        return {
          success: true,
          docs: data.length,
          failures: []
        };
      }
    } catch (error) {
      let failures = [];
      let ingestError = false;

      if (error.errors !== undefined && Array.isArray(error.items)) {
        // an expected error where some or all of the bulk request
        // docs have failed to be ingested.
        failures = getFailures(error.items, data);
      } else {
        // some other error has happened.
        ingestError = true;
      }

      return {
        success: false,
        error,
        docCount: data.length,
        failures,
        ingestError
      };
    }
  }

  async function createPipeline(id, pipeline) {
    return await asCurrentUser.ingest.putPipeline({
      id,
      body: pipeline
    });
  }

  function getFailures(items, data) {
    const failures = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.index && item.index.error) {
        failures.push({
          item: i,
          reason: item.index.error.reason,
          caused_by: item.index.error.caused_by,
          doc: data[i]
        });
      }
    }

    return failures;
  }

  return {
    importData
  };
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}