/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./StyleSheets/Alert.css";

function Alert(props) {
  const [dimisis, setDimisis] = useState(false);
  return (
    <div className={classNames("alert", props.className, { dimisis: dimisis })}>
      {props.children}
      {props.dismissible ? (
        <div>
          <button
            type="button"
            class="alert-dismissible close-btn"
            onClick={() => setDimisis(true)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

Alert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dismissible: PropTypes.bool
};

// Specifies the default values for props:
Alert.defaultProps = {
  className: "alert-primary",
  dismissible: false
};

export default Alert;
