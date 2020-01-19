/*
**Author: Santosh Kumar Dash
**Author URL: http://santoshdash.epizy.com/
**Github URL: https://github.com/quintuslabs/dashio-admin
*/


import React, { Component } from "react";
import Chart from "./Chart";
import PropTypes from "prop-types";

class BarChart extends Component {
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
          legend: {
            display: false,
            labels: {
              usePointStyle: true,
              fontFamily: "Montserrat"
            }
          },
          cutoutPercentage: 0,
          responsive: true,
          tooltips: {
            mode: "index",
            titleFontSize: 12,
            titleFontColor: "#000",
            bodyFontColor: "#000",
            backgroundColor: "#fff",
            titleFontFamily: "Montserrat",
            bodyFontFamily: "Montserrat",
            cornerRadius: 3,
            intersect: false
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          },
          title: {
            display: false,
            text: "Normal Legend"
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

BarChart.propTypes = {
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

BarChart.defaultProps = {
  title: "Yearly Sales",
  chartData: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 45],
        borderColor: "rgba(0, 194, 146, 0.9)",
        borderWidth: "0",
        backgroundColor: "rgba(0, 194, 146, 0.5)"
      },
      {
        label: "My Second dataset",
        data: [28, 48, 40, 19, 86, 27, 76],
        borderColor: "rgba(0,0,0,0.09)",
        borderWidth: "0",
        backgroundColor: "rgba(0,0,0,0.07)"
      }
    ]
  }
};

export default BarChart;
