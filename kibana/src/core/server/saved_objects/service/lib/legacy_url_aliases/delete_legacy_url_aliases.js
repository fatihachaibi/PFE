"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createKueryNode = createKueryNode;
exports.deleteLegacyUrlAliases = deleteLegacyUrlAliases;

var esKuery = _interopRequireWildcard(require("@kbn/es-query"));

var _elasticsearch = require("../../../../elasticsearch");

var _object_types = require("../../../object_types");

var _search_dsl = require("../search_dsl");

var _utils = require("../utils");

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
 * Deletes legacy URL aliases that point to a given object.
 *
 * Note that aliases are only created when an object is converted to become share-capable, and each targetId is deterministically generated
 * with uuidv5 -- this means that the chances of there actually being _multiple_ legacy URL aliases that target a given type/ID are slim to
 * none. However, we don't always know exactly what space an alias could be in (if an object exists in multiple spaces, or in all spaces),
 * so the most straightforward way for us to ensure that aliases are reliably deleted is to use updateByQuery, which is what this function
 * does.
 *
 * @internal
 */
async function deleteLegacyUrlAliases(params) {
  const {
    mappings,
    registry,
    client,
    getIndexForType,
    type,
    id,
    namespaces,
    deleteBehavior
  } = params;

  if (namespaces.includes(_utils.ALL_NAMESPACES_STRING)) {
    throwError(type, id, '"namespaces" cannot include the * string');
  }

  if (!namespaces.length && deleteBehavior === 'inclusive') {
    // nothing to do, return early
    return;
  }

  try {
    await client.updateByQuery({
      index: getIndexForType(_object_types.LEGACY_URL_ALIAS_TYPE),
      refresh: false,
      // This could be called many times in succession, intentionally do not wait for a refresh
      body: { ...(0, _search_dsl.getSearchDsl)(mappings, registry, {
          type: _object_types.LEGACY_URL_ALIAS_TYPE,
          kueryNode: createKueryNode(type, id)
        }),
        script: {
          // Intentionally use one script source with variable params to take advantage of ES script caching
          source: `
              if (params['namespaces'].indexOf(ctx._source['${_object_types.LEGACY_URL_ALIAS_TYPE}']['targetNamespace']) > -1) {
                ctx.op = params['matchTargetNamespaceOp'];
              } else {
                ctx.op = params['notMatchTargetNamespaceOp'];
              }
            `,
          params: {
            namespaces,
            matchTargetNamespaceOp: deleteBehavior === 'inclusive' ? 'delete' : 'noop',
            notMatchTargetNamespaceOp: deleteBehavior === 'inclusive' ? 'noop' : 'delete'
          },
          lang: 'painless'
        },
        conflicts: 'proceed'
      }
    }, {
      ignore: [404]
    });
  } catch (err) {
    const errorMessage = (0, _elasticsearch.getErrorMessage)(err);
    throwError(type, id, `${errorMessage}`);
  }
}

function throwError(type, id, message) {
  throw new Error(`Failed to delete legacy URL aliases for ${type}/${id}: ${message}`);
}

function getKueryKey(attribute) {
  // Note: these node keys do NOT include '.attributes' for type-level fields because we are using the query in the ES client (instead of the SO client)
  return `${_object_types.LEGACY_URL_ALIAS_TYPE}.${attribute}`;
}

function createKueryNode(type, id) {
  const {
    buildNode
  } = esKuery.nodeTypes.function; // Escape Kuery values to prevent parsing errors and unintended behavior (object types/IDs can contain KQL special characters/operators)

  const match1 = buildNode('is', getKueryKey('targetType'), esKuery.escapeKuery(type));
  const match2 = buildNode('is', getKueryKey('targetId'), esKuery.escapeKuery(id));
  const kueryNode = buildNode('and', [match1, match2]);
  return kueryNode;
}