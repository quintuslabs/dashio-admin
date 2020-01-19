/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */
import React from "react";
import PropTypes from "prop-types";
import "./StyleSheets/TextInputArea.css";

const TextInputArea = props => (
  <div className={props.groupClassName}>
    <label className={props.labelClassName}>{props.label}</label>
    <textarea
      className={props.className}
      style={props.resize ? null : { resize: "none" }}
      name={props.name}
      rows={props.rows}
      value={props.value}
      onChange={props.controlFunc}
      placeholder={props.placeholder}
    />
  </div>
);

TextInputArea.propTypes = {
  label: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  controlFunc: PropTypes.func.isRequired,
  resize: PropTypes.bool,
  value: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  groupClassName: PropTypes.string,
  labelClassName: PropTypes.string
};

// Specifies the default values for props:
TextInputArea.defaultProps = {
  inputType: "text",
  rows: 3,
  label: "Label",
  name: "text",
  placeholder: "Enter a Text",
  className: "form-control",
  groupClassName: "form-group",
  labelClassName: "form-label"
};

export default TextInputArea;
