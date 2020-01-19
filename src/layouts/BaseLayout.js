/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { Component } from "react";
import "./StyleSheets/BaseLayout.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleClass: ""
    };
  }
  onToggle = () => {
    if (this.state.toggleClass === "active") {
      this.setState({ toggleClass: "" });
    } else {
      this.setState({ toggleClass: "active" });
    }
  };
  render() {
    return (
      <div>
        <Navbar onToggleClick={() => this.onToggle()} />
        <div className="wrapper">
          <div className="sidebar-container">
            <Sidebar toggleClass={this.state.toggleClass} />
          </div>

          <div id="content" className={this.state.toggleClass}>
            <div className="layout-Container">{this.props.children}</div>

            <div className="container-fluid footer-container">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BaseLayout;
