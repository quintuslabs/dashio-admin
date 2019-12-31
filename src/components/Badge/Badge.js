import React, { Component } from "react";

import PropTypes from "prop-types";
import "./StyleSheets/Badge.css";

const Badge = props => (
  <span className={props.className} onClick={props.onClick}>
    {props.title}
  </span>
);

Badge.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  className: PropTypes.string
};

// Specifies the default values for props:
Badge.defaultProps = {
  title: "Badge",
  className: "badge badge-primary badge-lg"
};

export default Badge;
