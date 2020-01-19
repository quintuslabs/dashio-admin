/*
**Author: Santosh Kumar Dash
**Author URL: http://santoshdash.epizy.com/
**Github URL: https://github.com/quintuslabs/dashio-admin
*/


import React, { Component } from "react";
import Chart from "./Chart";
import PropTypes from "prop-types";

class AreaChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const chartConfig = {
      type: "line",
      data: this.props.chartData,
      options: {
        ...{
          responsive: true,
          tooltips: {
            mode: "index",
            intersect: false
          },
          hover: {
            mode: "nearest",
            intersect: true
          }
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

AreaChart.propTypes = {
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

AreaChart.defaultProps = {
  title: "Yearly Sales",
  chartData: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        borderColor: "rgba(0,0,0,.09)",
        borderWidth: "1",
        backgroundColor: "rgba(0,0,0,.07)",
        data: [20, 47, 35, 43, 65, 45, 35]
      },
      {
        label: "My Second dataset",
        borderColor: "rgba(0, 194, 146, 0.9)",
        borderWidth: "1",
        backgroundColor: "rgba(0, 194, 146, 0.5)",
        pointHighlightStroke: "rgba(26,179,148,1)",
        data: [16, 32, 18, 27, 42, 33, 44]
      }
    ]
  }
};

export default AreaChart;
