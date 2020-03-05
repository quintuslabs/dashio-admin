import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";
export default function Loading(props) {
  return <div className={classNames("sp", props.className)}></div>;
}

Loading.propTypes = {
  className: PropTypes.string
};

Loading.defaultProps = {
  className: "sp-wave"
};

const loadingType = [
  "sp-circle",
  "sp-3balls",
  "sp-volume",
  "sp-vortex",
  "sp-slices",
  "sp-sphere",
  "sp-bars",
  "sp-clock",
  "sp-wave",
  "sp-texture",
  "sp-loadbar",
  "sp-hydrogen"
];
