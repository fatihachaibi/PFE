"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateReferences = validateReferences;

var _errors = require("../errors");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const REF_TYPES_TO_VALIDATE = ['index-pattern', 'search'];

function filterReferencesToValidate({
  type
}) {
  return REF_TYPES_TO_VALIDATE.includes(type);
}

const getObjectsToSkip = (retries = []) => retries.reduce((acc, {
  type,
  id,
  ignoreMissingReferences
}) => ignoreMissingReferences ? acc.add(`${type}:${id}`) : acc, new Set());

async function getNonExistingReferenceAsKeys({
  objects,
  savedObjectsClient,
  namespace,
  importStateMap,
  retries
}) {
  const objectsToSkip = getObjectsToSkip(retries);
  const collector = new Map(); // Collect all references within objects

  for (const object of objects) {
    if (objectsToSkip.has(`${object.type}:${object.id}`)) {
      // skip objects with retries that have specified `ignoreMissingReferences`, or that share an origin with an existing object that has a different ID
      continue;
    }

    const filteredReferences = (object.references || []).filter(filterReferencesToValidate);

    for (const {
      type,
      id
    } of filteredReferences) {
      var _importStateMap$get;

      const key = `${type}:${id}`;
      const {
        isOnlyReference,
        destinationId
      } = (_importStateMap$get = importStateMap.get(key)) !== null && _importStateMap$get !== void 0 ? _importStateMap$get : {};

      if (isOnlyReference && destinationId) {
        // We previously searched for this reference and found one with a matching origin, skip validating this
        continue;
      }

      collector.set(`${type}:${id}`, {
        type,
        id
      });
    }
  } // Remove objects that could be references


  for (const object of objects) {
    collector.delete(`${object.type}:${object.id}`);
  }

  if (collector.size === 0) {
    return [];
  } // Fetch references to see if they exist


  const bulkGetOpts = Array.from(collector.values()).map(obj => ({ ...obj,
    fields: ['id']
  }));
  const bulkGetResponse = await savedObjectsClient.bulkGet(bulkGetOpts, {
    namespace
  }); // Error handling

  const erroredObjects = bulkGetResponse.saved_objects.filter(obj => obj.error && obj.error.statusCode !== 404);

  if (erroredObjects.length) {
    throw _errors.SavedObjectsImportError.referencesFetchError(erroredObjects);
  } // Cleanup collector


  for (const savedObject of bulkGetResponse.saved_objects) {
    if (savedObject.error) {
      continue;
    }

    collector.delete(`${savedObject.type}:${savedObject.id}`);
  }

  return [...collector.keys()];
}

async function validateReferences(params) {
  const {
    objects,
    retries
  } = params;
  const objectsToSkip = getObjectsToSkip(retries);
  const errorMap = {};
  const nonExistingReferenceKeys = await getNonExistingReferenceAsKeys(params); // Filter out objects with missing references, add to error object

  objects.forEach(({
    type,
    id,
    references,
    attributes
  }) => {
    if (objectsToSkip.has(`${type}:${id}`)) {
      // skip objects with retries that have specified `ignoreMissingReferences`
      return;
    }

    const missingReferences = [];
    const enforcedTypeReferences = (references || []).filter(filterReferencesToValidate);

    for (const {
      type: refType,
      id: refId
    } of enforcedTypeReferences) {
      if (nonExistingReferenceKeys.includes(`${refType}:${refId}`)) {
        missingReferences.push({
          type: refType,
          id: refId
        });
      }
    }

    if (missingReferences.length === 0) {
      return;
    }

    const {
      title
    } = attributes;
    errorMap[`${type}:${id}`] = {
      id,
      type,
      meta: {
        title
      },
      error: {
        type: 'missing_references',
        references: missingReferences
      }
    };
  });
  return Object.values(errorMap);
}