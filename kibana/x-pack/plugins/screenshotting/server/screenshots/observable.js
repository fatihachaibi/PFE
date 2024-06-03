"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScreenshotObservableHandler = void 0;

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _common = require("../../common");

var _browsers = require("../browsers");

var _config = require("../config");

var _event_logger = require("./event_logger");

var _get_element_position_data = require("./get_element_position_data");

var _get_number_of_items = require("./get_number_of_items");

var _get_pdf = require("./get_pdf");

var _get_render_errors = require("./get_render_errors");

var _get_screenshots = require("./get_screenshots");

var _get_time_range = require("./get_time_range");

var _inject_css = require("./inject_css");

var _open_url = require("./open_url");

var _wait_for_render = require("./wait_for_render");

var _wait_for_visualizations = require("./wait_for_visualizations");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getDefaultElementPosition = dimensions => {
  const height = (dimensions === null || dimensions === void 0 ? void 0 : dimensions.height) || _browsers.DEFAULT_VIEWPORT.height;
  const width = (dimensions === null || dimensions === void 0 ? void 0 : dimensions.width) || _browsers.DEFAULT_VIEWPORT.width;
  return [{
    position: {
      boundingClientRect: {
        top: 0,
        left: 0,
        height,
        width
      },
      scroll: {
        x: 0,
        y: 0
      }
    },
    attributes: {}
  }];
};

class ScreenshotObservableHandler {
  constructor(driver, config, eventLogger, layout, options) {
    this.driver = driver;
    this.config = config;
    this.eventLogger = eventLogger;
    this.layout = layout;
    this.options = options;
  }
  /*
   * Decorates a TimeoutError with context of the phase that has timed out.
   */


  waitUntil(timeoutValue, label) {
    return source => source.pipe((0, _operators.catchError)(error => {
      throw new Error(`The "${label}" phase encountered an error: ${error}`);
    }), (0, _operators.timeoutWith)(timeoutValue, (0, _rxjs.throwError)(new Error(`The "${label}" phase took longer than ${timeoutValue / 1000} seconds.`))));
  }

  openUrl(index, urlOrUrlWithContext) {
    return (0, _rxjs.defer)(() => {
      var _context, _this$options$headers;

      let url;
      let context;

      if (typeof urlOrUrlWithContext === 'string') {
        url = urlOrUrlWithContext;
      } else {
        [url, context] = urlOrUrlWithContext;
      }

      return (0, _open_url.openUrl)(this.driver, this.eventLogger, (0, _config.durationToNumber)(this.config.capture.timeouts.openUrl), index, url, { ...((_context = context) !== null && _context !== void 0 ? _context : {}),
        layout: this.layout.id
      }, (_this$options$headers = this.options.headers) !== null && _this$options$headers !== void 0 ? _this$options$headers : {});
    }).pipe(this.waitUntil((0, _config.durationToNumber)(this.config.capture.timeouts.openUrl), 'open URL'));
  }

  waitForElements() {
    const driver = this.driver;
    const waitTimeout = (0, _config.durationToNumber)(this.config.capture.timeouts.waitForElements);
    return (0, _rxjs.defer)(() => (0, _get_number_of_items.getNumberOfItems)(driver, this.eventLogger, waitTimeout, this.layout)).pipe((0, _operators.mergeMap)(itemsCount => (0, _wait_for_visualizations.waitForVisualizations)(driver, this.eventLogger, waitTimeout, itemsCount, this.layout)), this.waitUntil(waitTimeout, 'wait for elements'));
  }

  completeRender() {
    const driver = this.driver;
    const layout = this.layout;
    const eventLogger = this.eventLogger;
    return (0, _rxjs.defer)(async () => {
      // Waiting till _after_ elements have rendered before injecting our CSS
      // allows for them to be displayed properly in many cases
      await (0, _inject_css.injectCustomCss)(driver, eventLogger, layout);
      const spanEnd = this.eventLogger.logScreenshottingEvent('get positions of visualization elements', _event_logger.Actions.GET_ELEMENT_POSITION_DATA, 'read');

      try {
        var _layout$positionEleme; // position panel elements for print layout


        await ((_layout$positionEleme = layout.positionElements) === null || _layout$positionEleme === void 0 ? void 0 : _layout$positionEleme.call(layout, driver, eventLogger.kbnLogger));
        spanEnd();
      } catch (error) {
        eventLogger.error(error, _event_logger.Actions.GET_ELEMENT_POSITION_DATA);
        throw error;
      }

      await (0, _wait_for_render.waitForRenderComplete)(driver, eventLogger, (0, _config.durationToNumber)(this.config.capture.loadDelay), layout);
    }).pipe((0, _operators.mergeMap)(() => (0, _rxjs.forkJoin)({
      timeRange: (0, _get_time_range.getTimeRange)(driver, eventLogger, layout),
      elementsPositionAndAttributes: (0, _get_element_position_data.getElementPositionAndAttributes)(driver, eventLogger, layout),
      renderErrors: (0, _get_render_errors.getRenderErrors)(driver, eventLogger, layout)
    })), this.waitUntil((0, _config.durationToNumber)(this.config.capture.timeouts.renderComplete), 'render complete'));
  }

  setupPage(index, url) {
    return this.openUrl(index, url).pipe((0, _operators.switchMapTo)(this.waitForElements()), (0, _operators.switchMapTo)(this.completeRender()));
  }
  /**
   * Given a title and time range value look like:
   *
   * "[Logs] Web Traffic - Apr 14, 2022 @ 120742.318 to Apr 21, 2022 @ 120742.318"
   *
   * Otherwise closest thing to that or a blank string.
   */


  getTitle(timeRange) {
    var _title;

    return `${(_title = this.options.title) !== null && _title !== void 0 ? _title : ''} ${timeRange ? `- ${timeRange}` : ''}`.trim();
  }

  shouldCapturePdf() {
    return this.layout.id === _common.LayoutTypes.PRINT && this.options.format === 'pdf';
  }

  getScreenshots() {
    return withRenderComplete => withRenderComplete.pipe((0, _operators.mergeMap)(async data => {
      var _data$elementsPositio;

      this.checkPageIsOpen(); // fail the report job if the browser has closed

      const elements = (_data$elementsPositio = data.elementsPositionAndAttributes) !== null && _data$elementsPositio !== void 0 ? _data$elementsPositio : getDefaultElementPosition(this.layout.getViewport());
      let screenshots = [];

      try {
        screenshots = this.shouldCapturePdf() ? await (0, _get_pdf.getPdf)(this.driver, this.eventLogger, this.getTitle(data.timeRange), this.options.logo) : await (0, _get_screenshots.getScreenshots)(this.driver, this.eventLogger, elements, this.layout);
      } catch (e) {
        throw new _common.errors.FailedToCaptureScreenshot(e.message);
      }

      const {
        timeRange,
        error: setupError,
        renderErrors
      } = data;
      return {
        timeRange,
        screenshots,
        error: setupError,
        renderErrors,
        elementsPositionAndAttributes: elements
      };
    }));
  }

  checkPageIsOpen() {
    if (!this.driver.isPageOpen()) {
      throw (0, _browsers.getChromiumDisconnectedError)();
    }
  }

}

exports.ScreenshotObservableHandler = ScreenshotObservableHandler;