/*
**Author: Santosh Kumar Dash
**Author URL: http://santoshdash.epizy.com/
**Github URL: https://github.com/quintuslabs/dashio-admin
*/

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "../StyleSheets/Card.css";

const CardBody = props => (
  <div
    className={classNames("card__body", props.className)}
    style={{ backgroundColor: props.bgColor, color: props.fontColor }}
  >
    {props.children}
  </div>
);

CardBody.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
  className: PropTypes.string
};

CardBody.defaultProps = {
  bgColor: "#FFFFFF",
  fontColor: "#000000"
};

export default CardBody;
