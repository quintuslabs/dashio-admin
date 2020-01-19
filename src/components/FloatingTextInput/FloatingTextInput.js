/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React from "react";
import PropTypes from "prop-types";
import "./StyleSheets/FloatingTextInput.css";

const FloatingTextInput = props => (
  <div className="user-input-wrp">
    <input
      type={props.inputType}
      name={props.name}
      value={props.value}
      onChange={props.controlFunc}
      className="inputText"
      required
    />
    <span className="floating-label">{props.label}</span>
  </div>
);

FloatingTextInput.propTypes = {
  inputType: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  controlFunc: PropTypes.func.isRequired,
  value: PropTypes.string
};

// Specifies the default values for props:
FloatingTextInput.defaultProps = {
  inputType: "text",
  label: "Label",
  name: "text"
};

export default FloatingTextInput;
