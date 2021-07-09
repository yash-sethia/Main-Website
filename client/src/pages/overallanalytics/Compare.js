import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Compare extends Component {

  constructor(props) {
    super(props);

    this.state = {
          
            series: [{//array mein user ka saara tasks ka data ratings ka
              name: 'User',
              data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {// array mein average in users ka (abhi ke liye pichle array wali values ko thoda randomly kam karke likh do)
              name: 'Avg. User',
              data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }],
            options: {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '55%',
                  endingShape: 'rounded'
                },
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
              },
              xaxis: {
                categories: ['Task1', 'Task2', 'Task3', 'Task4', 'Task5', 'Task6', 'Task7', 'Task8', 'Task9'],
              },
              yaxis: {
                title: {
                  text: 'Rating'
                }
              },
              fill: {
                opacity: 1
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return val + " Rating"
                  }
                }
              }
            },
};
}

  render() {

    return (
      <div className="compare">
        <Chart options={this.state.options} series={this.state.series} type="bar" />
      </div>
    );
  }
}

export default Compare;