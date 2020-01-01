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
                    To create a height progress bar, add a .progress-bar class
                    to a element:
                  </p>
                  <ProgressBar height="5px" className="bg-success" value={40} />
                  <ProgressBar height="5px" className="bg-primary" value={25} />
                  <ProgressBar height="5px" className="bg-info" value={60} />
                  <ProgressBar height="5px" className="bg-warning" value={90} />
                  <ProgressBar height="5px" className="bg-danger" value={50} />
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
