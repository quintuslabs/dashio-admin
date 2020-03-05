/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { Component } from "react";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";
import { Card } from "../../components/Card";

import {
  LineWithLine,
  PieChart,
  LineChart,
  BarChart,
  RadarChart,
  AreaChart,
  DoughutChart,
  PolarChart,
  SingleBarChart
} from "../../components/Chart";

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const path = [
      {
        title: "Dashboard",
        url: "/dashboard"
      },
      {
        title: "Chart",
        url: "/chart"
      }
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"Chart"} path={path} />
        <div className="right-panel">
          <div class="row">
            <div class="col-lg-6">
              <Card>
                <div style={{ padding: 20 }}>
                  <LineChart />
                </div>
              </Card>
            </div>

            <div class="col-lg-6">
              <Card>
                <div style={{ padding: 20 }}>
                  <AreaChart />
                </div>
              </Card>
            </div>
            <div class="col-lg-6">
              <Card>
                <div style={{ padding: 20 }}>
                  <BarChart />
                </div>
              </Card>
            </div>

            <div class="col-lg-6">
              <Card>
                <div style={{ padding: 20 }}>
                  <RadarChart />
                </div>
              </Card>
            </div>

            <div class="col-lg-6">
              <Card>
                <div style={{ padding: 20 }}>
                  <DoughutChart />
                </div>
              </Card>
            </div>

            <div class="col-lg-6">
              <Card>
                <div style={{ padding: 20 }}>
                  <PolarChart />
                </div>
              </Card>
            </div>

            <div class="col-lg-6">
              <Card>
                <div style={{ padding: 20 }}>
                  <SingleBarChart />
                </div>
              </Card>
            </div>

            <div class="col-lg-6">
              <Card>
                <div style={{ padding: 20 }}>
                  <PieChart />
                </div>
              </Card>
            </div>
            <div class="col-lg-6">
              <Card>
                <div style={{ padding: 20 }}>
                  <LineWithLine />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;
