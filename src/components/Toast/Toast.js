import React, { useState } from "react";
import "./StyleSheets/Toast.css";
import PropTypes from "prop-types";
import classNames from "classnames";

function Toast(props) {
  const [dimisis, setDimisis] = useState(true);
  return (
    <div
      className={classNames(
        "toast--message",
        { dimisis: dimisis },
        props.className
      )}
    >
      <div className="toast__icon"></div>
      <div className="toast__content">
        <p className="toast__type">Success</p>
        <p className="toast__message">Message</p>
      </div>
      <div className="toast__close" onclick={() => setDimisis(true)}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default Toast;
