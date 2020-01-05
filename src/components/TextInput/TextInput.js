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
        error: props.error
      })}
      name={props.name}
      type={props.inputType}
      value={props.value}
      onChange={props.controlFunc}
      placeholder={props.placeholder}
    />
    <p>{props.errorText}</p>
  </div>
);

TextInput.propTypes = {
  inputType: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  controlFunc: PropTypes.func.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  groupClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  errorText: PropTypes.string,
  error: PropTypes.bool,
  labelError: PropTypes.bool
};

// Specifies the default values for props:
TextInput.defaultProps = {
  inputType: "text",
  label: "Label",
  name: "text",
  placeholder: "Enter a Text",
  labelError: false,
  error: false
};

export default TextInput;
