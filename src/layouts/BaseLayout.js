import React, { Component } from "react";
import "./StyleSheets/BaseLayout.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

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
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default BaseLayout;
