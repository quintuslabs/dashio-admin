/*
**Author: Santosh Kumar Dash
**Author URL: http://santoshdash.epizy.com/
**Github URL: https://github.com/quintuslabs/dashio-admin
*/



import React, { Component } from "react";
import Chart from "./Chart";
import PropTypes from "prop-types";

class LineChart extends Component {
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

LineChart.propTypes = {
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

LineChart.defaultProps = {
  title: "Yearly Sales",
  chartData: {
    labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
    defaultFontFamily: "Montserrat",
    datasets: [
      {
        label: "Foods",
        data: [0, 30, 15, 110, 50, 63, 120],
        backgroundColor: "transparent",
        borderColor: "rgba(220,53,69,0.75)",
        borderWidth: 3,
        pointStyle: "circle",
        pointRadius: 5,
        pointBorderColor: "transparent",
        pointBackgroundColor: "rgba(220,53,69,0.75)"
      },
      {
        label: "Electronics",
        data: [0, 50, 40, 80, 35, 99, 80],
        backgroundColor: "transparent",
        borderColor: "rgba(40,167,69,0.75)",
        borderWidth: 3,
        pointStyle: "circle",
        pointRadius: 5,
        pointBorderColor: "transparent",
        pointBackgroundColor: "rgba(40,167,69,0.75)"
      }
    ]
  }
};

export default LineChart;
