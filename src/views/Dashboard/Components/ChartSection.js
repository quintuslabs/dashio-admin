/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { Component } from "react";
import AreaChart from "./AreaChart";
import ProgressBar from "./ProgressBar";
class ChartSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h4 className="box-title">Number of iPhones Sold </h4>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="card-body">
                  <AreaChart />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-body">
                  <ProgressBar
                    progressTitle={"Visits"}
                    progressDesc={"96,930 Users (40%)"}
                    progress={"40%"}
                    color={"bg-flat-color-1"}
                  />

                  <ProgressBar
                    progressTitle={"Bounce Rate"}
                    progressDesc={"3,220 Users (24%)"}
                    progress={"24%"}
                    color={"bg-flat-color-2"}
                  />

                  <ProgressBar
                    progressTitle={"Unique Visitors"}
                    progressDesc={"29,658 Users (60%)"}
                    progress={"60%"}
                    color={"bg-flat-color-3"}
                  />

                  <ProgressBar
                    progressTitle={"Targeted Visitors"}
                    progressDesc={"99,658 Users (90%)"}
                    progress={"90%"}
                    color={"bg-flat-color-4"}
                  />
                </div>
              </div>
            </div>
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChartSection;
