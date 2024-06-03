"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForRenderComplete = void 0;

var _constants = require("./constants");

var _event_logger = require("./event_logger");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const waitForRenderComplete = async (browser, eventLogger, loadDelay, layout) => {
  const spanEnd = eventLogger.logScreenshottingEvent('wait for render complete', _event_logger.Actions.WAIT_RENDER, 'wait');
  return await browser.evaluate({
    fn: (selector, visLoadDelay) => {
      // wait for visualizations to finish loading
      const visualizations = document.querySelectorAll(selector);
      const visCount = visualizations.length;
      const renderedTasks = [];

      function waitForRender(visualization) {
        return new Promise(resolve => {
          visualization.addEventListener('renderComplete', () => resolve());
        });
      }

      function waitForRenderDelay() {
        return new Promise(resolve => {
          setTimeout(resolve, visLoadDelay);
        });
      }

      for (let i = 0; i < visCount; i++) {
        const visualization = visualizations[i];
        const isRendered = visualization.getAttribute('data-render-complete');

        if (isRendered === 'disabled') {
          renderedTasks.push(waitForRenderDelay());
        } else if (isRendered === 'false') {
          renderedTasks.push(waitForRender(visualization));
        }
      } // The renderComplete fires before the visualizations are in the DOM, so
      // we wait for the event loop to flush before telling reporting to continue. This
      // seems to correct a timing issue that was causing reporting to occasionally
      // capture the first visualization before it was actually in the DOM.
      // Note: 100 proved too short, see https://github.com/elastic/kibana/issues/22581,
      // bumping to 250.


      const hackyWaitForVisualizations = () => new Promise(r => setTimeout(r, 250));

      return Promise.all(renderedTasks).then(hackyWaitForVisualizations);
    },
    args: [layout.selectors.renderComplete, loadDelay]
  }, {
    context: _constants.CONTEXT_WAITFORRENDER
  }, eventLogger.kbnLogger).then(() => {
    spanEnd();
  });
};

exports.waitForRenderComplete = waitForRenderComplete;