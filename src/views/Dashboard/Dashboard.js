import React, { Component } from "react";
import "./StyleSheets/Dashboard.css";
import ChartSection from "./Components/ChartSection";
import DashboardHeaderSection from "./Components/DashboardHeaderSection";
import OrderSection from "./Components/OrderSection";
import TodoLiveChat from "./Components/TodoLiveChat";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-content-container p-4 container-fluid">
        <div className="right-panel">
          <DashboardHeaderSection />
          <ChartSection />
          <OrderSection />
          <TodoLiveChat />
        </div>
      </div>
    );
  }
}

export default Dashboard;
