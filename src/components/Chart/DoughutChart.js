/*
**Author: Santosh Kumar Dash
**Author URL: http://santoshdash.epizy.com/
**Github URL: https://github.com/quintuslabs/dashio-admin
*/


import React, { Component } from "react";
import Chart from "./Chart";
import PropTypes from "prop-types";

class DoughutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const chartConfig = {
      type: "doughnut",
      data: this.props.chartData,
      options: {
        ...{
          responsive: true
        },
        ...this.props.chartOptions
      }
    };

    new Chart(this.canvasRef.current, chartConfig);
  }

  render() {
    return (
      <div>
        <canvas
          height="220"
          ref={this.canvasRef}
          className="blog-users-by-device m-auto"
        />
      </div>
    );
  }
}

DoughutChart.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart config object.
   */
  chartConfig: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object,
  /**
   * The chart data.
   */
  chartData: PropTypes.object
};

DoughutChart.defaultProps = {
  title: "Users by device",
  chartData: {
    datasets: [
      {
        data: [35, 40, 20, 5],
        backgroundColor: [
          "rgba(0, 194, 146,0.9)",
          "rgba(0, 194, 146,0.7)",
          "rgba(0, 194, 146,0.5)",
          "rgba(0,0,0,0.07)"
        ],
        hoverBackgroundColor: [
          "rgba(0, 194, 146,0.9)",
          "rgba(0, 194, 146,0.7)",
          "rgba(0, 194, 146,0.5)",
          "rgba(0,0,0,0.07)"
        ]
      }
    ],
    labels: ["green", "green", "green", "green"]
  }
};

export default DoughutChart;
