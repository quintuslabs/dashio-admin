/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./StyleSheets/ProgressBar.css";

const ProgressBar = props => (
  <div class="progress mb-2" style={{ height: props.height }}>
    <div
      className={classNames("progress-bar", props.className)}
      style={{ width: props.value + "%" }}
      aria-valuenow={props.value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      {props.children}
    </div>
  </div>
);

ProgressBar.propTypes = {
  value: PropTypes.number,
  className: PropTypes.string,
  height: PropTypes.string
};

// Specifies the default values for props:
ProgressBar.defaultProps = {
  value: "0",
  className: "badge badge-primary badge-lg"
};

export default ProgressBar;
