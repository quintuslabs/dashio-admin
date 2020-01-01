import React, { Component } from "react";

import PropTypes from "prop-types";
import "./StyleSheets/Badge.css";

const Badge = props => <span className={props.class}>{props.value}</span>;

Badge.propTypes = {
  value: PropTypes.string,
  class: PropTypes.string
};

// Specifies the default values for props:
Badge.defaultProps = {
  value: "0",
  class: "badge badge-primary badge-lg"
};

export default Badge;
