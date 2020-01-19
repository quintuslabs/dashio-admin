/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { Component } from "react";
import "./StyleSheets/TransitionalCard.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Button } from "../Button";

function TransitionalCard(props) {
  return (
    <div className={classNames("transitional--card", props.className)}>
      <img src={props.image} />
      <div className="transitional--info">
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        <Button
          className="button button-default button-sm"
          onClick={props.onClick}
        >
          {props.buttonoTitle}
        </Button>
      </div>
    </div>
  );
}

TransitionalCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  buttonoTitle: PropTypes.string,
  image: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func
};

// Specifies the default values for props:
TransitionalCard.defaultProps = {
  title: "Profile",
  image: "https://source.unsplash.com/collection/190727/900x900",
  body: "Click to see or edit your profile page.",
  buttonoTitle: "Readmore"
};

export default TransitionalCard;
