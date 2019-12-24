import React, { Component } from "react";
import "./StyleSheets/Dashboard.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="wrapper">
        <Sidebar />
        <div id="content">
          <Navbar />
        </div>
      </div>
    );
  }
}

export default Dashboard;
