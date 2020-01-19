import React, { Component } from "react";
import classNames from "classnames";
/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import PropTypes from "prop-types";
import "./StyleSheets/Badge.css";

const Badge = props => (
  <span className={classNames("badge", props.className)}>{props.children}</span>
);

Badge.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
  className: PropTypes.string
};

// Specifies the default values for props:
Badge.defaultProps = {
  value: "0",
  className: "badge badge-primary badge-lg"
};

export default Badge;
