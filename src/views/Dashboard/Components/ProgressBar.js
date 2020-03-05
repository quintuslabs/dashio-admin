/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React from "react";
import "./StyleSheets/ProgressBar.css";

function ProgressBar(props) {
  return (
    <div className="progress-box progress-1">
      <h4 className="por-title">{props.progressTitle}</h4>
      <div className="por-txt">{props.progressDesc}</div>
      <div className="progress mb-2" style={{ height: 5 }}>
        <div
          className={`progress-bar ${props.color}`}
          role="progressbar"
          style={{ width: props.progress }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
