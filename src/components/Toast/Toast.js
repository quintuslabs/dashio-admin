import React, { useState, useEffect } from "react";
import "./StyleSheets/Toast.css";
import PropTypes from "prop-types";
import classNames from "classnames";

function Toast(props) {
  const [hide, setHide] = useState(false);
  const [title, setTitle, status, setStatus] = useState(
    props.title,
    props.status
  );
  useEffect(() => {
    if (props.status !== undefined && props.status !== "disabled") {
      if (props.status === "error" && title.length === 0) {
        setTitle("Error Message");
      }
      if (props.status === "success" && title.length === 0) {
        setTitle("Success Message");
      }
      if (props.status === "info" && title.length === 0) {
        setTitle("Info Message");
      }
      if (props.status === "warning" && title.length === 0) {
        setTitle("Warning Message");
      }

      setTimeout(() => {
        setHide(true);
      }, 4000);
    } else {
      setHide(true);
    }
  });

  return (
    <div className="toast-container">
      <div
        className={classNames(`toast-${props.status}`, {
          hide: hide
        })}
      >
        <button className="toast-close-button" onClick={() => setHide(true)}>
          <span aria-hidden="true">×</span>
        </button>

        <div className="toast-message">
          <div className={classNames("toast-message-title", props.status)}>
            {title}
          </div>
          <div className="toast-message-content">{props.message}</div>
        </div>
        <div className="progressBar">
          <div
            className={classNames(`percentagem ${props.status}`)}
            style={{ width: "100%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

Toast.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  status: PropTypes.string
};

// Specifies the default values for props:
Toast.defaultProps = {
  title: "",
  message: "We are facing technical issue !!",
  status: "disabled"
};

export default Toast;
