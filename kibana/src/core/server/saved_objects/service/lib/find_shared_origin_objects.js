"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findSharedOriginObjects = findSharedOriginObjects;

var esKuery = _interopRequireWildcard(require("@kbn/es-query"));

var _internal_utils = require("./internal_utils");

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Fetches all objects with a shared origin, returning a map of the matching aliases and what space(s) they exist in.
 *
 * @internal
 */
async function findSharedOriginObjects(createPointInTimeFinder, objects, perPage) {
  if (!objects.length) {
    return new Map();
  }

  const uniqueObjectTypes = objects.reduce((acc, {
    type
  }) => acc.add(type), new Set());
  const filter = createAliasKueryFilter(objects);
  const finder = createPointInTimeFinder({
    type: [...uniqueObjectTypes],
    perPage,
    filter,
    fields: ['not-a-field'],
    // Specify a non-existent field to avoid fetching all type-level fields (we only care about root-level fields)
    namespaces: [_utils.ALL_NAMESPACES_STRING] // We need to search across all spaces to have accurate results

  }); // NOTE: this objectsMap is only used internally (not in an API that is documented for public consumption), and it contains the minimal
  // amount of information to satisfy our UI needs today. We will need to change this in the future when we implement merging in #130311.

  const objectsMap = new Map();
  let error;

  try {
    for await (const {
      saved_objects: savedObjects
    } of finder.find()) {
      for (const savedObject of savedObjects) {
        var _objectsMap$get;

        const {
          type,
          id,
          originId,
          namespaces = []
        } = savedObject;
        const key = (0, _internal_utils.getObjectKey)({
          type,
          id: originId || id
        });
        const val = (_objectsMap$get = objectsMap.get(key)) !== null && _objectsMap$get !== void 0 ? _objectsMap$get : new Set();
        const filteredNamespaces = namespaces.includes(_utils.ALL_NAMESPACES_STRING) || val.has(_utils.ALL_NAMESPACES_STRING) ? [_utils.ALL_NAMESPACES_STRING] : [...val, ...namespaces];
        objectsMap.set(key, new Set([...filteredNamespaces]));
      }
    }
  } catch (e) {
    error = e;
  }

  try {
    await finder.close();
  } catch (e) {
    if (!error) {
      error = e;
    }
  }

  if (error) {
    throw new Error(`Failed to retrieve shared origin objects: ${error.message}`);
  }

  return objectsMap;
}

function createAliasKueryFilter(objects) {
  const {
    buildNode
  } = esKuery.nodeTypes.function; // Note: these nodes include '.attributes' for type-level fields because these are eventually passed to `validateConvertFilterToKueryNode`, which requires it

  const kueryNodes = objects.reduce((acc, {
    type,
    origin
  }) => {
    // Escape Kuery values to prevent parsing errors and unintended behavior (object types/IDs can contain KQL special characters/operators)
    const match1 = buildNode('is', `${type}.id`, esKuery.escapeKuery(`${type}:${origin}`)); // here we are looking for the raw document `_id` field, which has a `type:` prefix

    const match2 = buildNode('is', `${type}.originId`, esKuery.escapeKuery(origin)); // here we are looking for the saved object's `originId` field, which does not have a `type:` prefix

    acc.push([match1, match2]);
    return acc;
  }, []).flat();
  return buildNode('or', kueryNodes);
}