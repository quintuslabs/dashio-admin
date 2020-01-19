/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./StyleSheets/TextInput.css";

const TextInput = props => (
  <div className={classNames("form-group", props.groupClassName)}>
    <label
      className={classNames("form-label", props.labelClassName, {
        error: props.labelError
      })}
    >
      {props.label}
    </label>
    <input
      className={classNames("form-control", props.className, {
        "form--error": props.error
      })}
      name={props.name}
      type={props.inputType}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      required={props.required}
      maxLength={props.maxLength}
      minLength={props.minLength}
      disabled={props.disabled}
    />
    {props.error ? <p className="error--message">{props.errorText}</p> : ""}
  </div>
);

TextInput.propTypes = {
  inputType: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  groupClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  errorText: PropTypes.string,
  labelError: PropTypes.bool
};

// Specifies the default values for props:
TextInput.defaultProps = {
  inputType: "text",
  label: "Label",
  name: "text",
  required: false,
  labelError: false,
  error: false
};

export default TextInput;
