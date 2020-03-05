/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React from "react";
import PropTypes from "prop-types";
import "./StyleSheets/LoadingButton.css";
import classNames from "classnames";

const LoadingButton = props => (
  <div className="buttonContainer">
    <div
      className={classNames("dsButtonAnim", props.status, props.className)}
      onClick={props.onClick}
    >
      <span>{props.children}</span>
    </div>
  </div>
);

LoadingButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  status: PropTypes.string
};

// Specifies the default values for props:
LoadingButton.defaultProps = {
  title: "Button"
};

export default LoadingButton;
