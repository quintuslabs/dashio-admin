/*
**Author: Santosh Kumar Dash
**Author URL: http://santoshdash.epizy.com/
**Github URL: https://github.com/quintuslabs/dashio-admin
*/

import React, { Component } from "react";
import Chart from "./Chart";
import PropTypes from "prop-types";

class SingleBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const chartConfig = {
      type: "bar",
      data: this.props.chartData,
      options: {
        ...{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
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

SingleBarChart.propTypes = {
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

SingleBarChart.defaultProps = {
  title: "Yearly Sales",
  chartData: {
    labels: ["Sun", "Mon", "Tu", "Wed", "Th", "Fri", "Sat"],
    datasets: [
      {
        label: "My First dataset",
        data: [55, 50, 75, 80, 56, 55, 60],
        borderColor: "rgba(0, 194, 146, 0.9)",
        borderWidth: "0",
        backgroundColor: "rgba(0, 194, 146, 0.5)"
      }
    ]
  }
};

export default SingleBarChart;
