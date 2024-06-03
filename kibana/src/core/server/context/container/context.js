"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextContainer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = require("lodash");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/** @internal */
class ContextContainer {
  /**
   * Used to map contexts to their providers and associated plugin. In registration order which is tightly coupled to
   * plugin load order.
   */

  /** Used to keep track of which plugins registered which contexts for dependency resolution. */

  /**
   * @param pluginDependencies - A map of plugins to an array of their dependencies.
   */
  constructor(pluginDependencies, coreId) {
    (0, _defineProperty2.default)(this, "contextProviders", new Map());
    (0, _defineProperty2.default)(this, "contextNamesBySource", void 0);
    (0, _defineProperty2.default)(this, "registerContext", (source, name, provider) => {
      const contextName = name;

      if (contextName === 'resolve') {
        throw new Error(`Cannot register a provider for ${contextName}, it is a reserved keyword.`);
      }

      if (this.contextProviders.has(contextName)) {
        throw new Error(`Context provider for ${contextName} has already been registered.`);
      }

      if (source !== this.coreId && !this.pluginDependencies.has(source)) {
        throw new Error(`Cannot register context for unknown plugin: ${source.toString()}`);
      }

      this.contextProviders.set(contextName, {
        provider,
        source
      });
      this.contextNamesBySource.set(source, [...(this.contextNamesBySource.get(source) || []), contextName]);
      return this;
    });
    (0, _defineProperty2.default)(this, "createHandler", (source, handler) => {
      if (source !== this.coreId && !this.pluginDependencies.has(source)) {
        throw new Error(`Cannot create handler for unknown plugin: ${source.toString()}`);
      }

      return async (...args) => {
        const context = this.buildContext(source, ...args);
        return handler(context, ...args);
      };
    });
    this.pluginDependencies = pluginDependencies;
    this.coreId = coreId;
    this.contextNamesBySource = new Map([[coreId, []]]);
  }

  buildContext(source, ...contextArgs) {
    const contextsToBuild = new Set(this.getContextNamesForSource(source));
    const builtContextPromises = {};
    const builtContext = {};

    builtContext.resolve = async keys => {
      const resolved = await Promise.all(keys.map(async key => {
        return [key, await builtContext[key]];
      }));
      return Object.fromEntries(resolved);
    };

    return [...this.contextProviders].sort(sortByCoreFirst(this.coreId)).filter(([contextName]) => contextsToBuild.has(contextName)).reduce((contextAccessors, [contextName, {
      provider,
      source: providerSource
    }]) => {
      const exposedContext = createExposedContext({
        currentContextName: contextName,
        exposedContextNames: [...this.getContextNamesForSource(providerSource)],
        contextAccessors
      });
      Object.defineProperty(contextAccessors, contextName, {
        get: async () => {
          const contextKey = contextName;

          if (!builtContextPromises[contextKey]) {
            builtContextPromises[contextKey] = provider(exposedContext, ...contextArgs);
          }

          return await builtContextPromises[contextKey];
        }
      });
      return contextAccessors;
    }, builtContext);
  }

  getContextNamesForSource(source) {
    if (source === this.coreId) {
      return this.getContextNamesForCore();
    } else {
      return this.getContextNamesForPluginId(source);
    }
  }

  getContextNamesForCore() {
    return new Set(this.contextNamesBySource.get(this.coreId));
  }

  getContextNamesForPluginId(pluginId) {
    // If the source is a plugin...
    const pluginDeps = this.pluginDependencies.get(pluginId);

    if (!pluginDeps) {
      // This case should never be hit, but let's be safe.
      throw new Error(`Cannot create context for unknown plugin: ${pluginId.toString()}`);
    }

    return new Set([// Core contexts
    ...this.contextNamesBySource.get(this.coreId), // Contexts source created
    ...(this.contextNamesBySource.get(pluginId) || []), // Contexts sources's dependencies created
    ...(0, _lodash.flatten)(pluginDeps.map(p => this.contextNamesBySource.get(p) || []))]);
  }

}
/** Sorts context provider pairs by core pairs first. */


exports.ContextContainer = ContextContainer;

const sortByCoreFirst = coreId => ([leftName, leftProvider], [rightName, rightProvider]) => {
  if (leftProvider.source === coreId) {
    return rightProvider.source === coreId ? 0 : -1;
  } else {
    return rightProvider.source === coreId ? 1 : 0;
  }
};

const createExposedContext = ({
  currentContextName,
  exposedContextNames,
  contextAccessors
}) => {
  const exposedContext = {};
  exposedContext.resolve = contextAccessors.resolve;

  for (const contextName of exposedContextNames) {
    if (contextName === currentContextName) {
      continue;
    }

    const descriptor = Object.getOwnPropertyDescriptor(contextAccessors, contextName);

    if (descriptor) {
      Object.defineProperty(exposedContext, contextName, descriptor);
    }
  }

  return exposedContext;
};