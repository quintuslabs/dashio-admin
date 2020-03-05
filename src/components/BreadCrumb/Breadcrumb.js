/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React from "react";
import "./StyleSheets/Breadcrumb.css";

const Breadcrumb = props => {
  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs-inner">
        <div className="row m-0">
          <div className="col-sm-4">
            <div className="page-header float-left">
              <div className="page-title">
                <h3>{props.title}</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="page-header float-right">
              <div className="page-title">
                <ol className="breadcrumb text-right">
                  {props.path.map((item, index) => (
                    <li key={index}>
                      <a href={item.url}>{item.title}</a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
