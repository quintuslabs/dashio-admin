/*
**Author: Santosh Kumar Dash
**Author URL: http://santoshdash.epizy.com/
**Github URL: https://github.com/quintuslabs/dashio-admin
*/

import React, { Component } from "react";
import Chart from "./Chart";
import PropTypes from "prop-types";

class RadarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const chartConfig = {
      type: "radar",
      data: this.props.chartData,
      options: {
        ...{
          responsive: true,
          legend: {
            position: "top"
          },
          scale: {
            ticks: {
              beginAtZero: true
            }
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

RadarChart.propTypes = {
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

RadarChart.defaultProps = {
  title: "Yearly Sales",
  chartData: {
    labels: [
      ["Eating", "Dinner"],
      ["Drinking", "Water"],
      "Sleeping",
      ["Designing", "Graphics"],
      "Coding",
      "Cycling",
      "Running"
    ],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 70, 66, 45, 5, 55, 40],
        borderColor: "rgba(0, 194, 146, 0.6)",
        borderWidth: "1",
        backgroundColor: "rgba(0, 194, 146, 0.4)"
      },
      {
        label: "My Second dataset",
        data: [28, 5, 55, 19, 63, 27, 68],
        borderColor: "rgba(0, 194, 146, 0.7",
        borderWidth: "1",
        backgroundColor: "rgba(0, 194, 146, 0.5)"
      }
    ]
  }
};

export default RadarChart;
