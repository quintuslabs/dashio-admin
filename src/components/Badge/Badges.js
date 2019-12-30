import React, { Component } from 'react';


import PropTypes from "prop-types";
import "./StyleSheets/Badges.css";

const Badges = props => (
  <span className={props.className} onClick={props.onClick}>
    {props.title}
  </span>
);

Badges.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  className: PropTypes.string
};

// Specifies the default values for props:
Badges.defaultProps = {
  title: "Badges",
  className: "badge badge-primary badge-lg"
};


export default Badges;
