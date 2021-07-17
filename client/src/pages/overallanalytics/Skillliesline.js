import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import axios from "axios";
import { UserContext } from '../AuthContext';

class Skillliesline extends Component {
  
  static contextType = UserContext;
  constructor(props) {
    super(props);

   this.state = {
          
            series: [
              {
                name: "High - 2013",
                data: [28, 29, 33, 36, 32, 32, 33]
              },
              //{
              //  name: "Low - 2013",
              //  data: [12, 11, 14, 18, 17, 13, 13]
              //}
            ],
            options: {
              chart: {
                height: '30%',
                type: 'line',
                dropShadow: {
                  enabled: true,
                  color: '#000',
                  top: 18,
                  left: 7,
                  blur: 10,
                  opacity: 0.2
                },
                toolbar: {
                  show: false
                }
              },
              colors: ['#77B6EA', '#545454'],
              dataLabels: {
                enabled: false,
              },
              stroke: {
                curve: 'smooth'
              },
            //  title: {
            //  text: 'Average High & Low Temperature',
            //    align: 'left'
            //  },
              grid: {
                borderColor: '#e7e7e7',
                row: {
                  colors: ['transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },
              markers: {
                size: 1
              },
              xaxis: {
              labels: {show: false}
             //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
             //   title: {
             //     text: 'Month'
             //   }
              },
              yaxis: {
              show: false,
             //   title: {
             //     text: 'Temperature'
             //   },
             //   min: 5,
             //   max: 40
              },
              legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
              }
            },
          };
          
}

componentDidMount() {
  const id = this.context[0].id;
  axios.get('/api/users/' + id).then(res => {
    console.log("ARTICLE DATA : ", res.data.articleData);
    var skilllies = [];
    for(var i=0; i < res.data.articleData.length && i < 9;)
    {
      if(res.data.articleData[i])
      {
        skilllies[i] = res.data.articleData[i].skilliesEarned;
        i++;
      }
    }
    console.log("skillliesEarned : ", skilllies)
    this.setState({
      series: [{
        name: "High - 2013",
        data: skilllies
      }],
    })
  })
  .catch(err => console.log("Error from portfolio : ", err))
  console.log("series : ", this.state.series[0].data)
}

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="line" />
      </div>
    );
  }
}

export default Skillliesline;