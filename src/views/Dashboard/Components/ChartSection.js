import React, { Component } from "react";
import AreaChart from "./AreaChart";
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
                  <div className="progress-box progress-1">
                    <h4 className="por-title">Visits</h4>
                    <div className="por-txt">96,930 Users (40%)</div>
                    <div className="progress mb-2" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-flat-color-1"
                        role="progressbar"
                        style={{ width: "40%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="progress-box progress-2">
                    <h4 className="por-title">Bounce Rate</h4>
                    <div className="por-txt">3,220 Users (24%)</div>
                    <div className="progress mb-2" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-flat-color-2"
                        role="progressbar"
                        style={{ width: "24%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="progress-box progress-2">
                    <h4 className="por-title">Unique Visitors</h4>
                    <div className="por-txt">29,658 Users (60%)</div>
                    <div className="progress mb-2" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-flat-color-3"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="progress-box progress-2">
                    <h4 className="por-title">Targeted Visitors</h4>
                    <div className="por-txt">99,658 Users (90%)</div>
                    <div className="progress mb-2" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-flat-color-4"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
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
