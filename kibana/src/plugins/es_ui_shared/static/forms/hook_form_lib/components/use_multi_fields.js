"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UseMultiFields = UseMultiFields;

var _react = _interopRequireDefault(require("react"));

var _use_field = require("./use_field");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Use this component to avoid nesting multiple <UseField />
  @example
```
// before
<UseField path="maxValue">
  {maxValueField => {
    return (
      <UseField path="minValue">
        {minValueField => {
          return (
            // The EuiDualRange handles 2 values (min and max) and thus
            // updates 2 fields in our form
            <EuiDualRange
              min={0}
              max={100}
              value={[minValueField.value, maxValueField.value]}
              onChange={([minValue, maxValue]) => {
                minValueField.setValue(minValue);
                maxValueField.setValue(maxValue);
              }}
            />
          )
        }}
      </UseField>
    )
  }}
</UseField>

// after
const fields = {
  min: {
    ... // any prop you would normally pass to <UseField />
    path: 'minValue',
    config: { ... } // FieldConfig
  },
  max: {
    path: 'maxValue',
  },
};

<UseMultiField fields={fields}>
  {({ min, max }) => {
    return (
      <EuiDualRange
        min={0}
        max={100}
        value={[min.value, max.value]}
        onChange={([minValue, maxValue]) => {
          min.setValue(minValue);
          max.setValue(maxValue);
        }}
      />
    );
  }}
</UseMultiField>
```
 */
function UseMultiFields({
  fields,
  children
}) {
  const fieldsArray = Object.entries(fields).reduce((acc, [fieldId, field]) => [...acc, {
    id: fieldId,
    ...field
  }], []);
  const hookFields = {};

  const renderField = index => {
    const {
      id
    } = fieldsArray[index];
    return /*#__PURE__*/_react.default.createElement(_use_field.UseField, fields[id], field => {
      hookFields[id] = field;
      return index === fieldsArray.length - 1 ? children(hookFields) : renderField(index + 1);
    });
  };

  if (!Boolean(fieldsArray.length)) {
    return null;
  }

  return renderField(0);
}