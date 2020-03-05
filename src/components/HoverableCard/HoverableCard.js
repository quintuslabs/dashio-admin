/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React from "react";
import "./StyleSheets/HoverableCard.css";
import PropTypes from "prop-types";
import classNames from "classnames";

function HoverableCard(props) {
  return (
    <div
      className={classNames("hoverable--card", props.className)}
      onClick={props.onClick}
    >
      <div className="hoverable--icon">{props.icon}</div>
      <p className="hoverable--title">{props.title}</p>
      <p className="hoverable--text">{props.body}</p>
    </div>
  );
}

HoverableCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  icon: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func
};

// Specifies the default values for props:
HoverableCard.defaultProps = {
  title: "Profile",
  icon: <i className="fa fa-smile-o fa-3x" aria-hidden="true"></i>,
  body: "Click to see or edit your profile page."
};

export default HoverableCard;
