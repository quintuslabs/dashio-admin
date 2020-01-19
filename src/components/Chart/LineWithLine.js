/*
**Author: Santosh Kumar Dash
**Author URL: http://santoshdash.epizy.com/
**Github URL: https://github.com/quintuslabs/dashio-admin
*/

import React, { Component } from "react";
import Chart from "./Chart";
import PropTypes from "prop-types";

class LineWithLine extends Component {
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
            titleFontSize: 12,
            titleFontColor: "#000",
            bodyFontColor: "#000",
            backgroundColor: "#fff",
            titleFontFamily: "Montserrat",
            bodyFontFamily: "Montserrat",
            cornerRadius: 3,
            intersect: false
          },
          legend: {
            display: false,
            position: "top",
            labels: {
              usePointStyle: true,
              fontFamily: "Montserrat"
            }
          },
          scales: {
            xAxes: [
              {
                display: true,
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                scaleLabel: {
                  display: false,
                  labelString: "Month"
                }
              }
            ],
            yAxes: [
              {
                display: true,
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                scaleLabel: {
                  display: true,
                  labelString: "Value"
                }
              }
            ]
          },
          title: {
            display: false
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
          height="170"
          ref={this.canvasRef}
          style={{ maxWidth: "100% !important" }}
        />
      </div>
    );
  }
}

LineWithLine.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart dataset.
   */
  chartData: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object
};

LineWithLine.defaultProps = {
  title: "Users Overview",
  chartData: {
    labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
    type: "line",
    defaultFontFamily: "Montserrat",
    datasets: [
      {
        data: [0, 7, 3, 5, 2, 8, 6],
        label: "Expense",
        backgroundColor: "rgba(0,200,155,.35)",
        borderColor: "rgba(0,200,155,0.60)",
        borderWidth: 3.5,
        pointStyle: "circle",
        pointRadius: 5,
        pointBorderColor: "transparent",
        pointBackgroundColor: "rgba(0,200,155,0.60)"
      },
      {
        data: [0, 6, 3, 4, 3, 7, 10],
        label: "Profit",
        backgroundColor: "rgba(0,194,146,.25)",
        borderColor: "rgba(0,194,146,0.5)",
        borderWidth: 3.5,
        pointStyle: "circle",
        pointRadius: 5,
        pointBorderColor: "transparent",
        pointBackgroundColor: "rgba(0,194,146,0.5)"
      }
    ]
  }
};

export default LineWithLine;
