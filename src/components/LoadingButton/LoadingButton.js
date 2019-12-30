import React from "react";
import PropTypes from "prop-types";
import "./StyleSheets/LoadingButton.css";

const LoadingButton = props => (
  <div className="loading-btn-container">
    {props.loading ? (
      <div className="loader"></div>
    ) : (
      <button
        type={props.type}
        className={props.className}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    )}
  </div>
);

LoadingButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.bool
};

// Specifies the default values for props:
LoadingButton.defaultProps = {
  type: "button",
  title: "Button",
  className: "button button-primary button-lg",
  loading: false
};

export default LoadingButton;
