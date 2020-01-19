/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { Component } from "react";

function DashboardHeaderCard(props) {
  return (
    <div className="col-lg mb-4 col-sm-6 col-md-6">
      <div className="card">
        <div className="card-body">
          <div className="stat-widget-five">
            <div className="stat-icon dib ">
              <i
                className={`fa fa-${props.icon} ${props.color}`}
                aria-hidden="true"
              ></i>
            </div>
            <div className="stat-content">
              <div className="text-left dib">
                <div className="stat-text">
                  <span className="count">{props.count}</span>
                </div>
                <div className="stat-heading">{props.title}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeaderCard;
