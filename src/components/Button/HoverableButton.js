import React, { Component } from "react";

import PropTypes from "prop-types";
import "./StyleSheets/HoverableButton.css";

const HoverableButton = props => (
  <button class={props.className} type={props.type}>
    {props.title}
  </button>
);

HoverableButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  className: PropTypes.string
};

// Specifies the default values for props:
HoverableButton.defaultProps = {
  type: "button",
  title: "Button: Slide Left",
  className: "btn btn-primary slide_right"
};

export default HoverableButton;
