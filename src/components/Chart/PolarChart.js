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
      type: "polarArea",
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
        data: [15, 18, 10, 7, 19],
        backgroundColor: [
          "rgba(0, 194, 146,0.9)",
          "rgba(0, 194, 146,0.8)",
          "rgba(0, 194, 146,0.7)",
          "rgba(0,0,0,0.2)",
          "rgba(0, 194, 146,0.5)"
        ]
      }
    ],
    labels: ["green", "green", "green", "green"]
  }
};

export default DoughutChart;
