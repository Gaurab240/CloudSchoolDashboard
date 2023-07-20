import React, { Component } from "react";
import Chart from "react-apexcharts";
import './Charts.css';

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
      
        markers: {
          size: 2,
        },
        xaxis: {
          categories: [
            "One",
            "Two",
            "Three",
            "Four",
            "Five",
            "Six",
            "Seven",
            "Eight",
            "NineScience",
            "NineHumanities",
          ],
        },
      },
      series: [
        {
          name: "Present",
          data: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "Absent",
          data:[2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app" style={{marginTop:'20px'}}>
        
        <div className="row">
        
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="100%"
              height="250px"
              margin="20px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;
