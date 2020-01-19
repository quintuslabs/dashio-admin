/*
**Author: Santosh Kumar Dash
**Author URL: http://santoshdash.epizy.com/
**Github URL: https://github.com/quintuslabs/dashio-admin
*/

import React from "react";
import PropTypes from "prop-types";
import "./StyleSheets/CheckBox.css";

const Checkbox = props => (
  <div className={props.groupClassName}>
    <label className={props.labelClassName}>{props.label}</label>
    <div className={props.className}>
      {props.options.map(option => {
        return (
          <label key={option} className={props.checkLabelClassName}>
            <input
              className={props.checkBoxClassName}
              name={props.setName}
              onChange={props.controlFunc}
              value={option}
              checked={props.selectedOptions.indexOf(option) > -1}
              type="checkbox"
            />{" "}
            {option}
          </label>
        );
      })}
    </div>
  </div>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  setName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOptions: PropTypes.array,
  controlFunc: PropTypes.func.isRequired,
  groupClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  checkLabelClassName: PropTypes.string,
  checkBoxClassName: PropTypes.string
};

// Specifies the default values for props:
Checkbox.defaultProps = {
  label: "Check Box Label",
  name: "text",
  groupClassName: "form-check checkbox-group",
  labelClassName: "form-check-label",
  checkLabelClassName: "form-check-inline capitalize",
  checkBoxClassName: "form-checkbox"
};

export default Checkbox;
