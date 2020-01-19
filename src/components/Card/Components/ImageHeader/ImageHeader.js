/*
**Author: Santosh Kumar Dash
**Author URL: http://santoshdash.epizy.com/
**Github URL: https://github.com/quintuslabs/dashio-admin
*/

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "../StyleSheets/Card.css";

const ImageHeader = props => (
  <div
    className={classNames("card__header--image", props.className)}
    style={{
      backgroundColor: props.bgColor,
      color: props.fontColor,
      borderRadius: props.borderRadius
    }}
  >
    <img
      src={props.imageSrc}
      alt={props.alt}
      style={{ height: props.height, width: props.width }}
    />
  </div>
);

ImageHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

ImageHeader.defaultProps = {
  bgColor: "#FFFFFF",
  fontColor: "#000000",
  alt: "Image",
  height: "50%",
  width: "10  0%"
};

export default ImageHeader;
