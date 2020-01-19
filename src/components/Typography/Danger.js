/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React from "react";
import PropTypes from "prop-types";

export default function Danger(props) {
  const { children } = props;
  return <div className="danger">{children}</div>;
}

Danger.propTypes = {
  children: PropTypes.node
};
