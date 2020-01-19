/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React from "react";
import PropTypes from "prop-types";
import "./StyleSheets/FloatingButton.css";

const FloatingButton = props => (
  <div className="floating-container">
    <div className="floating-button" onClick={props.onClick}>
      +
    </div>
  </div>
);

FloatingButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  className: PropTypes.string
};

// Specifies the default values for props:
FloatingButton.defaultProps = {
  type: "button",
  title: "Button",
  className: "button button-primary button-lg"
};

export default FloatingButton;
