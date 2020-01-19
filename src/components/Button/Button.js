/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React from "react";
import PropTypes from "prop-types";
import "./StyleSheets/Button.css";
import classNames from "classnames";

const Button = props => (
  <button
    type={props.type}
    className={classNames("button--button", props.className)}
    onClick={props.onClick}
    style={props.style}
  >
    {props.children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string
};

// Specifies the default values for props:
Button.defaultProps = {
  type: "button",
  className: "button-primary button-lg"
};

export default Button;
