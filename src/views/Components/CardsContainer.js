import React, { Component } from "react";
import { Breadcrumb } from "../../components/BreadCrumb";
class CardsContainer extends Component {
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
        title: "Cards",
        url: "/components/card"
      }
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"Badge"} path={path} />
        <div className="right-panel"></div>
      </div>
    );
  }
}

export default CardsContainer;
