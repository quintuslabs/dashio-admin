/*
**Author: Santosh Kumar Dash
**Author URL: http://santoshdash.epizy.com/
**Github URL: https://github.com/quintuslabs/dashio-admin
*/

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Components/StyleSheets/Card.css";

const Card = props => (
  <div
    className={classNames("card__card", props.className)}
    style={{
      backgroundColor: props.backgroundColor,
      color: props.fontColor,
      borderRadius: props.borderRadius
    }}
  >
    {props.children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  className: PropTypes.string,
  borderRadius: PropTypes.string
};

Card.defaultProps = {
  fontColor: "#000000",
  borderRadius: ".625rem"
};

export default Card;
