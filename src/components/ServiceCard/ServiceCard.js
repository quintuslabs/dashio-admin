/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { Component } from "react";
import "./StyleSheets/ServiceCard.css";
import PropTypes from "prop-types";
import classNames from "classnames";

function ServiceCard(props) {
  return (
    <div
      href="#"
      className={classNames("service--card", props.className)}
      onClick={props.onClick}
    >
      <div class="overlay"></div>
      <div class="circle">{props.icon}</div>
      <p>Education</p>
    </div>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func
};

// Specifies the default values for props:
ServiceCard.defaultProps = {
  title: "Profile",
  icon: <i class="fa fa-google-wallet fa-3x" aria-hidden="true"></i>,
  className: "default"
};
export default ServiceCard;
