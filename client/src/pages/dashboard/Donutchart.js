import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import axios from "axios";
import { UserContext } from '../AuthContext';

class Donutchart extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);

    this.state = {//Array mein jo bhi task se skilies mile wo
                    series: [5,10,15,5,10,15,5,10],
                    options: {
                          dataLabels: {
                                     enabled: false,
                                     formatter: function (val) {
                                                        return val + "%"
                                        },
                                      dropShadow: {
      
                                       }
                                      },

                    plotOptions: {
                                    pie: {
                                            startAngle: -135,
                                            endAngle: 135,
                                            expandOnClick: true,
                                             //  offsetX: 0,
                                             //   offsetY: 0,
                                            customScale: 1,
                                             //   dataLabels: {
                                             //     offset: 0,
                                             //   minAngleToShowLabel: 10
                                             //},
                                             donut: {
                                                      size: '65%',
                                                      background: 'transparent',
                                                      labels: {
                                                                show: true,
                                                                name: {
                                                                        show: true,
                                                                        fontSize: '22px',
                                                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                                                        fontWeight: 600,
                                                                        color: undefined,
                                                                        offsetY: -10,
                                                          formatter: function (val) {
                                                            return val
                                                          }
                                                          },
                                    value: {
                                      show: true,
                                      fontSize: '16px',
                                      fontFamily: 'Helvetica, Arial, sans-serif',
                                      fontWeight: 400,
                                      color: undefined,
                                      offsetY: 16,
                                      formatter: function (val) {
                                    return val
                                    }
                                    },
                                    total: {
                                      show: false,
                                      showAlways: false,
                                      label: 'Total',
                                      fontSize: '22px',
                                      fontFamily: 'Helvetica, Arial, sans-serif',
                                      fontWeight: 600,
                                      color: '#373d3f',
                               /*   formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => {
                                      return a + b
                                   }, 0)
                                  }*/
                                 }
                                }
    },
  }
},
legend: {
    show: false,
},
//Iss array mein task number ya name
labels: ["task1", "task2", "task3", "task4", "task5", "task6", "task7", "task8", "task9" ],
},
}//This.state

}

componentDidMount (){
  var userId = this.context[0].id
  console.log("user ID:", this.context[0].id)
  axios.get('api/articles/charts/' + userId).then(res => {
      console.log("Skillies Array : ", res.data.skillliesArray)
    this.setState({
        //series: res.data.skillliesArray
    })
  })
}

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="100%" />
      </div>
    );
  }
}

export default Donutchart;