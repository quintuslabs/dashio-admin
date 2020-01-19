/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React from "react";
import PropTypes from "prop-types";

import "./StyleSheets/Select.css";

const Select = props => (
  <div className={props.groupClassName}>
    <label className={props.labelClassName}>{props.label} </label>
    <select
      className={props.className}
      name={props.name}
      value={props.selectedOption}
      onChange={props.controlFunc}
    >
      <option value="">{props.placeholder}</option>
      {props.options.map(opt => {
        return (
          <option key={opt} value={opt}>
            {opt}
          </option>
        );
      })}
    </select>
  </div>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string,
  controlFunc: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  groupClassName: PropTypes.string,
  labelClassName: PropTypes.string
};

// Specifies the default values for props:
Select.defaultProps = {
  inputType: "text",
  label: "Label",
  name: "text",
  placeholder: "Select Option",
  className: "form-control",
  groupClassName: "form-group",
  labelClassName: "form-label"
};

export default Select;
