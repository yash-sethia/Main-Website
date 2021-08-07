import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Compare extends Component {

  constructor(props) {
    super(props);
    var avgUser = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
    const hardData = [4.2, 4.3, 4.4, 4.1, 4.7, 3.8, 4.4, 4.8, 4.9];
    for(let i = 0; i < 9; i++) {
      // if(this.props.ReviewRatingArray[i] == 0) {
      //   avgUser[i] = hardData[i];
      // }
      // else {
        avgUser[i] = (0.9 * this.props.ReviewRatingArray[i]).toFixed(1);
      // }
    }
    this.state = {
          
            series: [{//array mein user ka saara tasks ka data ratings ka
              name: 'User',
              data: this.props.ReviewRatingArray
            }, {// array mein average in users ka (abhi ke liye pichle array wali values ko thoda randomly kam karke likh do)
              name: 'Avg. User',
              data: avgUser,
              // [4.2, 4.3, 4.4, 4.1, 4.7, 3.8, 4.4, 4.8, 4.9] 
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
                categories: ["Dunk of Dunkin 1", "Dunk of Dunkin 2", "Dunk of Dunkin 3", "Dunk of Dunkin 4", "Dunk of Dunkin 5", "Dunk of Dunkin 6", "Dunk of Dunkin 7", "Dunk of Dunkin 8", "Dunk of Dunkin 9" ],
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

componentWillReceiveProps(nextProps) {
  var avgUser = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
  const hardData = [4.2, 4.3, 4.4, 4.1, 4.7, 3.8, 4.4, 4.8, 4.9];
  for(let i = 0; i < 9; i++) {
    // if(this.props.ReviewRatingArray[i] == 0) {
    //   avgUser[i] = hardData[i];
    // }
    // else {
      avgUser[i] = (0.9 * nextProps.ReviewRatingArray[i]).toFixed(1);
    // }
  }
    this.setState({
      series: [{//array mein user ka saara tasks ka data ratings ka
        name: 'User',
        data: nextProps.ReviewRatingArray
      }, {// array mein average in users ka (abhi ke liye pichle array wali values ko thoda randomly kam karke likh do)
        name: 'Avg. User',
        data: avgUser
      }]
    })
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