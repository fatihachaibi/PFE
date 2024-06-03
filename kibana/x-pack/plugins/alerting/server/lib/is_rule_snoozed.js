"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRuleSnoozeEndTime = getRuleSnoozeEndTime;
exports.isRuleSnoozed = isRuleSnoozed;

var _rrule = require("rrule");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function getRuleSnoozeEndTime(rule) {
  if (rule.snoozeSchedule == null) {
    return null;
  }

  const now = Date.now();

  for (const snooze of rule.snoozeSchedule) {
    const {
      duration,
      rRule
    } = snooze;
    const startTimeMS = Date.parse(rRule.dtstart);
    const initialEndTime = startTimeMS + duration; // If now is during the first occurrence of the snooze

    if (now >= startTimeMS && now < initialEndTime) return new Date(initialEndTime); // Check to see if now is during a recurrence of the snooze

    if (rRule) {
      try {
        const rRuleOptions = { ...rRule,
          dtstart: new Date(rRule.dtstart),
          until: rRule.until ? new Date(rRule.until) : null,
          wkst: rRule.wkst ? _rrule.Weekday.fromStr(rRule.wkst) : null,
          byweekday: rRule.byweekday ? parseByWeekday(rRule.byweekday) : null
        };
        const recurrenceRule = new _rrule.RRule(rRuleOptions);
        const lastOccurrence = recurrenceRule.before(new Date(now), true);
        if (!lastOccurrence) continue;
        const lastOccurrenceEndTime = lastOccurrence.getTime() + duration;
        if (now < lastOccurrenceEndTime) return new Date(lastOccurrenceEndTime);
      } catch (e) {
        throw new Error(`Failed to process RRule ${rRule}: ${e}`);
      }
    }
  }

  return null;
}

function isRuleSnoozed(rule) {
  if (rule.muteAll) {
    return true;
  }

  return Boolean(getRuleSnoozeEndTime(rule));
}

function parseByWeekday(byweekday) {
  const rRuleString = `RRULE:BYDAY=${byweekday.join(',')}`;
  const parsedRRule = (0, _rrule.rrulestr)(rRuleString);
  return parsedRRule.origOptions.byweekday;
}