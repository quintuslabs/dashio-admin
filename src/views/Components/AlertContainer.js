/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { Component } from "react";
import { Alert } from "../../components/Alert";
import { Badge } from "../../components/Badge";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";
import { Toast } from "../../components/Toast";

class AlertContainer extends Component {
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
        title: "Alert",
        url: "/components/alert"
      }
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"Alert"} path={path} />
        <div className="right-panel">
          <div className="card">
            <div className="card-body">
              <h4 className="box-title">Alert </h4>
              <div className="line"></div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">
                    <Alert className="alert-primary">
                      This is a primary alert—check it out!
                    </Alert>

                    <Alert className="alert-secondary">
                      This is a secondary alert—check it out!
                    </Alert>

                    <Alert className="alert-success">
                      This is a success alert—check it out!
                    </Alert>
                    <Alert className="alert-danger">
                      This is a danger alert—check it out!
                    </Alert>
                    <Alert className="alert-warning">
                      This is a warning alert—check it out!
                    </Alert>
                    <Alert className="alert-info">
                      This is a info alert—check it out!
                    </Alert>
                    <Alert className="alert-light">
                      This is a light alert—check it out!
                    </Alert>
                    <Alert className="alert-dark">
                      This is a dark alert—check it out!
                    </Alert>
                  </div>

                  <div className="col-sm-6">
                    <Alert className="alert-primary" dismissible={true}>
                      This is a primary alert—check it out!
                    </Alert>

                    <Alert className="alert-secondary" dismissible={true}>
                      This is a secondary alert—check it out!
                    </Alert>

                    <Alert className="alert-success" dismissible={true}>
                      This is a success alert—check it out!
                    </Alert>
                    <Alert className="alert-danger" dismissible={true}>
                      This is a danger alert—check it out!
                    </Alert>
                    <Alert className="alert-warning" dismissible={true}>
                      This is a warning alert—check it out!
                    </Alert>
                    <Alert className="alert-info" dismissible={true}>
                      This is a info alert—check it out!
                    </Alert>
                    <Alert className="alert-light" dismissible={true}>
                      This is a light alert—check it out!
                    </Alert>
                    <Alert className="alert-dark" dismissible={true}>
                      This is a dark alert—check it out!
                    </Alert>
                  </div>

                  <div className="col-sm-6">
                    <Alert className="alert-primary" dismissible={true}>
                      <Badge className="badge-pill badge-primary">
                        Success
                      </Badge>{" "}
                      This is a primary alert—check it out!
                    </Alert>

                    <Alert className="alert-secondary" dismissible={true}>
                      <Badge className="badge-pill badge-secondary">
                        Secondary
                      </Badge>{" "}
                      This is a secondary alert—check it out!
                    </Alert>

                    <Alert className="alert-success" dismissible={true}>
                      <Badge className="badge-pill badge-success">
                        Success
                      </Badge>{" "}
                      This is a success alert—check it out!
                    </Alert>
                    <Alert className="alert-danger" dismissible={true}>
                      <Badge className="badge-pill badge-danger">Danger</Badge>{" "}
                      This is a danger alert—check it out!
                    </Alert>
                    <Alert className="alert-warning" dismissible={true}>
                      <Badge className="badge-pill badge-warning">
                        Warning
                      </Badge>{" "}
                      This is a warning alert—check it out!
                    </Alert>
                    <Alert className="alert-info" dismissible={true}>
                      <Badge className="badge-pill badge-info">Info</Badge> This
                      is a info alert—check it out!
                    </Alert>
                    <Alert className="alert-light" dismissible={true}>
                      <Badge className="badge-pill badge-light">Light</Badge>{" "}
                      This is a light alert—check it out!
                    </Alert>
                    <Alert className="alert-dark" dismissible={true}>
                      <Badge className="badge-pill badge-dark">Dark</Badge> This
                      is a dark alert—check it out!
                    </Alert>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toast />
      </div>
    );
  }
}

export default AlertContainer;
