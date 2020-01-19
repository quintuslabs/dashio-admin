/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { Component } from "react";
import { Breadcrumb } from "../../components/BreadCrumb";
import { Card, CardBody } from "../../components/Card";
import { ProgressBar } from "../../components/ProgressBar";

class ProgressBarContainer extends Component {
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
        title: "ProgressBar",
        url: "/components/progressbar"
      }
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"ProgressBar"} path={path} />
        <div className="right-panel">
          <div className="row">
            <div className="col-sm-6">
              <Card>
                <CardBody>
                  <p>
                    To create a height progress bar, add a height to a element:
                  </p>
                  <ProgressBar height="5px" className="bg-success" value={40} />
                  <ProgressBar height="5px" className="bg-primary" value={25} />
                  <ProgressBar height="5px" className="bg-info" value={60} />
                  <ProgressBar height="5px" className="bg-warning" value={90} />
                  <ProgressBar height="5px" className="bg-danger" value={50} />
                </CardBody>
              </Card>
            </div>

            <div className="col-sm-6">
              <Card>
                <CardBody>
                  <p></p>
                  <ProgressBar className="bg-success" value={40} />
                  <ProgressBar className="bg-primary" value={25} />
                  <ProgressBar className="bg-info" value={60} />
                  <ProgressBar className="bg-warning" value={90} />
                  <ProgressBar className="bg-danger" value={50} />
                </CardBody>
              </Card>
            </div>

            <div className="col-sm-6">
              <Card>
                <CardBody>
                  <p></p>
                  <ProgressBar className="bg-success" value={40}>
                    40%
                  </ProgressBar>
                  <ProgressBar className="bg-primary" value={25}>
                    25%
                  </ProgressBar>
                  <ProgressBar className="bg-info" value={60}>
                    60%
                  </ProgressBar>
                  <ProgressBar className="bg-warning" value={90}>
                    90%
                  </ProgressBar>
                  <ProgressBar className="bg-danger" value={50}>
                    50%
                  </ProgressBar>
                </CardBody>
              </Card>
            </div>

            <div className="col-sm-6">
              <Card>
                <CardBody>
                  <p></p>
                  <ProgressBar
                    className="bg-success progress-bar-striped progress-bar-animated"
                    value={40}
                  >
                    40%
                  </ProgressBar>
                  <ProgressBar
                    className="bg-primary progress-bar-striped progress-bar-animated"
                    value={25}
                  >
                    25%
                  </ProgressBar>
                  <ProgressBar
                    className="bg-info progress-bar-striped progress-bar-animated"
                    value={60}
                  >
                    60%
                  </ProgressBar>
                  <ProgressBar
                    className="bg-warning progress-bar-striped progress-bar-animated"
                    value={90}
                  >
                    90%
                  </ProgressBar>
                  <ProgressBar
                    className="bg-danger progress-bar-striped progress-bar-animated"
                    value={50}
                  >
                    50%
                  </ProgressBar>
                </CardBody>
              </Card>
            </div>
            <div className="col-sm-6">
              <Card>
                <CardBody>
                  <p></p>
                  <ProgressBar
                    className="bg-success progress-bar-striped"
                    value={40}
                  >
                    40%
                  </ProgressBar>
                  <ProgressBar
                    className="bg-primary progress-bar-striped"
                    value={25}
                  >
                    25%
                  </ProgressBar>
                  <ProgressBar
                    className="bg-info progress-bar-striped"
                    value={60}
                  >
                    60%
                  </ProgressBar>
                  <ProgressBar
                    className="bg-warning progress-bar-striped"
                    value={90}
                  >
                    90%
                  </ProgressBar>
                  <ProgressBar
                    className="bg-danger progress-bar-striped"
                    value={50}
                  >
                    50%
                  </ProgressBar>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBarContainer;
