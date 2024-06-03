"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UseField = void 0;
exports.getUseField = getUseField;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _hooks = require("../hooks");

var _form_context = require("../form_context");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
function UseFieldComp(props) {
  const form = (0, _form_context.useFormContext)();
  const {
    getFieldDefaultValue,
    __readFieldConfigFromSchema,
    __updateDefaultValueAt
  } = form;
  const {
    path,
    config = __readFieldConfigFromSchema(props.path),
    defaultValue,
    component,
    componentProps,
    readDefaultValueOnForm = true,
    onChange,
    onError,
    children,
    validationData,
    validationDataProvider,
    ...rest
  } = props;
  const ComponentToRender = component !== null && component !== void 0 ? component : 'input';
  const propsToForward = { ...componentProps,
    ...rest
  };
  const initialValue = (0, _react.useMemo)(() => {
    // The initial value of the field.
    // Order in which we'll determine this value:
    // 1. The "defaultValue" passed through prop
    //    --> <UseField path="foo" defaultValue="bar" />
    // 2. A value declared in the "defaultValue" object passed to the form when initiating
    //    --> const { form } = useForm({ defaultValue: { foo: 'bar' } }))
    // 3. The "defaultValue" declared on the field "config". Either passed through prop or on the form schema
    //    a. --> <UseField path="foo" config={{ defaultValue: 'bar' }} />
    //    b. --> const formSchema = { foo: { defaultValue: 'bar' } }
    // 4. An empty string ("")
    if (defaultValue !== undefined) {
      return defaultValue; // defaultValue passed through props
    }

    let value;

    if (readDefaultValueOnForm) {
      // Check the "defaultValue" object passed to the form
      value = getFieldDefaultValue(path);
    }

    if (value === undefined) {
      // Check the field "config" object (passed through prop or declared on the form schema)
      value = config === null || config === void 0 ? void 0 : config.defaultValue;
    } // If still undefined return an empty string


    return value === undefined ? '' : value;
  }, [defaultValue, path, config, readDefaultValueOnForm, getFieldDefaultValue]);
  const fieldConfig = (0, _react.useMemo)(() => ({ ...config,
    initialValue
  }), [config, initialValue]);
  const fieldValidationData = (0, _react.useMemo)(() => ({
    validationData,
    validationDataProvider
  }), [validationData, validationDataProvider]);
  const field = (0, _hooks.useField)(form, path, fieldConfig, onChange, onError, fieldValidationData);
  (0, _react.useEffect)(() => {
    let needsCleanUp = false;

    if (defaultValue !== undefined) {
      needsCleanUp = true; // Update the form "defaultValue" ref object.
      // This allows us to reset the form and put back the defaultValue of each field

      __updateDefaultValueAt(path, defaultValue);
    }

    return () => {
      if (needsCleanUp) {
        __updateDefaultValueAt(path, undefined);
      }
    };
  }, [path, defaultValue, __updateDefaultValueAt]); // Children prevails over anything else provided.

  if (children) {
    return children(field);
  }

  if (ComponentToRender === 'input') {
    return /*#__PURE__*/_react.default.createElement(ComponentToRender, (0, _extends2.default)({
      type: field.type,
      onChange: field.onChange,
      value: field.value
    }, propsToForward));
  }

  return /*#__PURE__*/_react.default.createElement(ComponentToRender, (0, _extends2.default)({
    field
  }, propsToForward));
}

const UseField = /*#__PURE__*/_react.default.memo(UseFieldComp);
/**
 * Get a <UseField /> component providing some common props for all instances.
 * @param partialProps Partial props to apply to all <UseField /> instances
 *
 * @example
 *
 * // All the "MyUseField" are TextFields
 * const MyUseField = getUseField({ component: TextField });
 *
 * // JSX
 * <Form>
 *   <MyUseField path="textField_0" />
 *   <MyUseField path="textField_1" />
 *   <MyUseField path="textField_2" />
 * </Form>
 */


exports.UseField = UseField;

function getUseField(partialProps) {
  return function (props) {
    const componentProps = { ...partialProps,
      ...props
    };
    return /*#__PURE__*/_react.default.createElement(UseField, componentProps);
  };
}