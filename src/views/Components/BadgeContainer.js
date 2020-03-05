/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { Component } from "react";
import { Badge } from "../../components/Badge";
import { Breadcrumb } from "../../components/BreadCrumb";

class BadgeContainer extends Component {
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
        title: "Components",
        url: "#"
      },
      {
        title: "Badges",
        url: "/components/badge"
      }
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"Badge"} path={path} />
        <div className="right-panel">
          <div className="card">
            <div className="card-body">
              <h4 className="box-title">Badge </h4>
              <div className="line"></div>
              <div className="container-fluid">
                <div className="row">
                  <div style={{ padding: 10 }}>
                    <a href="#">
                      News <Badge className={"badge badge-primary"}>5</Badge>
                    </a>
                  </div>
                  <div style={{ padding: 10 }}>
                    <a href="#">
                      Comments{" "}
                      <Badge className={"badge badge-warning"}>10</Badge>
                    </a>
                  </div>
                  <div style={{ padding: 10 }}>
                    <a href="#">
                      Updates{" "}
                      <Badge className={"badge badge-success"}>50</Badge>
                    </a>
                  </div>
                </div>
                <div className="row">
                  <Badge className="badge badge-primary">Primary</Badge>
                  <Badge className="badge badge-secondary">Secondary</Badge>
                  <Badge className="badge badge-success">Success</Badge>
                  <Badge className="badge badge-danger">Danger</Badge>
                  <Badge className="badge badge-warning">Warning</Badge>
                  <Badge className="badge badge-info">Info</Badge>
                  <Badge className="badge badge-light">Light</Badge>
                  <Badge className="badge badge-dark"> Dark</Badge>
                </div>
                <div className="row" style={{ marginTop: 20 }}>
                  <Badge className="badge badge-primary badge-pill">
                    Primary
                  </Badge>
                  <Badge className="badge badge-secondary badge-pill">
                    Secondary
                  </Badge>
                  <Badge className="badge badge-success badge-pill">
                    Success
                  </Badge>
                  <Badge className="badge badge-danger badge-pill">
                    Danger
                  </Badge>
                  <Badge className="badge badge-warning badge-pill">
                    Warning
                  </Badge>
                  <Badge className="badge badge-info badge-pill">Info</Badge>
                  <Badge className="badge badge-light badge-pill">Light</Badge>
                  <Badge className="badge badge-dark badge-pill"> Dark</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeContainer;
