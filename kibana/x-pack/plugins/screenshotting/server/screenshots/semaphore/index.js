"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Semaphore = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


class Semaphore {
  constructor(capacity) {
    (0, _defineProperty2.default)(this, "queue", []);
    this.capacity = capacity;
    this.release = this.release.bind(this);
  }

  acquire() {
    return inner => new _rxjs.Observable(outer => {
      const task = () => {
        /**
         * outer.remove(cancel);
         *
         * @todo Uncomment the line above when RxJS is bumped to at least 6.6.3.
         * @see https://github.com/ReactiveX/rxjs/pull/5659
         */
        outer.add(inner.pipe((0, _operators.finalize)(this.release)).subscribe(outer));
      };

      const cancel = this.cancel.bind(this, task);
      outer.add(cancel);
      this.schedule(task);
    });
  }

  release() {
    this.capacity++;
    this.next();
  }

  next() {
    if (this.capacity <= 0 || !this.queue.length) {
      return;
    }

    const task = this.queue.shift();
    this.capacity--;
    task();
  }

  schedule(task) {
    this.queue.push(task);
    this.next();
  }

  cancel(task) {
    const index = this.queue.indexOf(task);

    if (index < 0) {
      return;
    }

    this.queue.splice(index, 1);
  }

}

exports.Semaphore = Semaphore;