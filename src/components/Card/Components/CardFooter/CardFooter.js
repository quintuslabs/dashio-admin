/*
**Author: Santosh Kumar Dash
**Author URL: http://santoshdash.epizy.com/
**Github URL: https://github.com/quintuslabs/dashio-admin
*/

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "../StyleSheets/Card.css";

const CardHeader = props => (
  <div
    className={classNames("card__footer", props.className)}
    style={{ backgroundColor: props.backgroundColor, color: props.fontColor }}
  >
    {props.children}
  </div>
);

CardHeader.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  className: PropTypes.string
};

CardHeader.defaultProps = {
  backgroundColor: "#FFFFFF",
  fontColor: "#000000"
};

export default CardHeader;
