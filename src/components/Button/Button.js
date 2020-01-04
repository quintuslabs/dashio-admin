import React from "react";
import PropTypes from "prop-types";
import "./StyleSheets/Button.css";

const Button = props => (
  <button type={props.type} className={props.className} onClick={props.onClick}>
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
  className: "button button-primary button-lg"
};

export default Button;
