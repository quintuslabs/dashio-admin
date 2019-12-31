import React, { Component } from "react";
import Badge from "../../components/Badge";

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
        title: "buttons",
        url: "/components/buttons"
      }
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"Buttons"} path={path} />
        <div className="right-panel">
          <div className="card">
            <div className="card-body">
              <h4 className="box-title">Buttons </h4>
              <div className="line"></div>
              <div className="container-fluid">
                <div className="row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeContainer;
