import React, { Component } from "react";
import CanvasJSReact from "../../../assets/js/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class AreaChart extends Component {
  render() {
    const options = {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: ""
      },
      axisY: {
        title: "Number of iPhones ( in Million )",
        includeZero: false
      },
      data: [
        {
          type: "area",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,##0.## Million",
          dataPoints: [
            { x: new Date(2017, 0), y: 7.6 },
            { x: new Date(2016, 0), y: 7.3 },
            { x: new Date(2015, 0), y: 6.4 },
            { x: new Date(2014, 0), y: 5.3 },
            { x: new Date(2013, 0), y: 4.5 },
            { x: new Date(2012, 0), y: 3.8 },
            { x: new Date(2011, 0), y: 3.2 }
          ]
        }
      ]
    };

    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default AreaChart;
