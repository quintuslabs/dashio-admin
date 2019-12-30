import React from "react";
import PropTypes from "prop-types";
import "./StyleSheets/TextInput.css";

const TextInput = props => (
  <div className={props.groupClassName}>
    <label className={props.labelClassName}>{props.label} </label>
    <input
      className={props.className}
      name={props.name}
      type={props.inputType}
      value={props.value}
      onChange={props.controlFunc}
      placeholder={props.placeholder}
    />
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
  labelClassName: PropTypes.string
};

// Specifies the default values for props:
TextInput.defaultProps = {
  inputType: "text",
  label: "Label",
  name: "text",
  placeholder: "Enter a Text",
  className: "form-control",
  groupClassName: "form-group",
  labelClassName: "form-label"
};

export default TextInput;
