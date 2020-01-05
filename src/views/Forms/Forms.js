import React, { Component } from "react";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";

class Forms extends Component {
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
        title: "Form",
        url: "/form"
      }
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"Form"} path={path} />
        <div className="right-panel">
          <div className="card">
            <div className="card-body">
              <h4 className="box-title">Form </h4>
              <div className="line"></div>
              <div className="container-fluid"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forms;
