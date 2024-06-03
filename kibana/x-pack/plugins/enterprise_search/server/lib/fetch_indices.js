"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchIndices = void 0;

var _configSchema = require("@kbn/config-schema");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const fetchIndices = async client => {
  const indexNamesString = 'search-*';
  const indexNamesRegEx = /^search-*/; // This call retrieves alias and settings information about indices

  const indices = await client.asCurrentUser.indices.get({
    index: indexNamesString,
    expand_wildcards: ['open'],
    // only get specified index properties from ES to keep the response under 536MB
    // node.js string length limit: https://github.com/nodejs/node/issues/33960
    filter_path: ['*.aliases'],
    // for better performance only compute aliases and settings of indices but not mappings
    features: ['aliases', 'settings']
  });

  if (!Object.keys(indices).length) {
    return [];
  }

  const {
    indices: indicesStats = {}
  } = await client.asCurrentUser.indices.stats({
    index: indexNamesString,
    expand_wildcards: ['open'],
    metric: ['docs', 'store']
  });
  const indicesNames = Object.keys(indices);
  return indicesNames.map(indexName => {
    var _indexStats$total$sto, _indexStats$total, _indexStats$total$sto2, _indexStats$total$doc, _indexStats$total2, _indexStats$total2$do, _indexStats$total$doc2, _indexStats$total3, _indexStats$total3$do;

    const indexData = indices[indexName];
    const indexStats = indicesStats[indexName];
    const aliases = Object.keys(indexData.aliases);
    const sizeInBytes = new _configSchema.ByteSizeValue((_indexStats$total$sto = indexStats === null || indexStats === void 0 ? void 0 : (_indexStats$total = indexStats.total) === null || _indexStats$total === void 0 ? void 0 : (_indexStats$total$sto2 = _indexStats$total.store) === null || _indexStats$total$sto2 === void 0 ? void 0 : _indexStats$total$sto2.size_in_bytes) !== null && _indexStats$total$sto !== void 0 ? _indexStats$total$sto : 0).toString();
    const docCount = (_indexStats$total$doc = indexStats === null || indexStats === void 0 ? void 0 : (_indexStats$total2 = indexStats.total) === null || _indexStats$total2 === void 0 ? void 0 : (_indexStats$total2$do = _indexStats$total2.docs) === null || _indexStats$total2$do === void 0 ? void 0 : _indexStats$total2$do.count) !== null && _indexStats$total$doc !== void 0 ? _indexStats$total$doc : 0;
    const docDeleted = (_indexStats$total$doc2 = indexStats === null || indexStats === void 0 ? void 0 : (_indexStats$total3 = indexStats.total) === null || _indexStats$total3 === void 0 ? void 0 : (_indexStats$total3$do = _indexStats$total3.docs) === null || _indexStats$total3$do === void 0 ? void 0 : _indexStats$total3$do.deleted) !== null && _indexStats$total$doc2 !== void 0 ? _indexStats$total$doc2 : 0;
    const total = {
      docs: {
        count: docCount,
        deleted: docDeleted
      },
      store: {
        size_in_bytes: sizeInBytes
      }
    };
    return {
      health: indexStats === null || indexStats === void 0 ? void 0 : indexStats.health,
      status: indexStats === null || indexStats === void 0 ? void 0 : indexStats.status,
      name: indexName,
      uuid: indexStats === null || indexStats === void 0 ? void 0 : indexStats.uuid,
      total,
      aliases
    };
  }).flatMap(({
    name,
    aliases,
    ...engineData
  }) => {
    const engines = [];
    engines.push({
      name,
      ...engineData
    });
    aliases.forEach(alias => {
      engines.push({
        name: alias,
        ...engineData
      });
    });
    return engines;
  }).filter(({
    name
  }) => name.match(indexNamesRegEx));
};

exports.fetchIndices = fetchIndices;