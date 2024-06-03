"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlsPlugin = void 0;

var _options_list_suggestions_route = require("./control_types/options_list/options_list_suggestions_route");

var _control_group_container_factory = require("./control_group/control_group_container_factory");

var _options_list_embeddable_factory = require("./control_types/options_list/options_list_embeddable_factory");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
class ControlsPlugin {
  setup(core, {
    embeddable,
    unifiedSearch
  }) {
    embeddable.registerEmbeddableFactory((0, _options_list_embeddable_factory.optionsListPersistableStateServiceFactory)()); // Temporary disabling Time Slider
    // embeddable.registerEmbeddableFactory(timeSliderPersistableStateServiceFactory());

    embeddable.registerEmbeddableFactory((0, _control_group_container_factory.controlGroupContainerPersistableStateServiceFactory)(embeddable));
    (0, _options_list_suggestions_route.setupOptionsListSuggestionsRoute)(core, unifiedSearch.autocomplete.getAutocompleteSettings);
    return {};
  }

  start() {
    return {};
  }

  stop() {}

}

exports.ControlsPlugin = ControlsPlugin;