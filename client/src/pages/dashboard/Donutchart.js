import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import axios from "axios";
import { UserContext } from '../AuthContext';

class Donutchart extends Component {
  static contextType = UserContext;
  //user_id = this.context[0].id;
  constructor(props) {
    super(props);
    console.log("User id : ")
    this.state = {
                    //id: this.context[0].id,
                    //id: "5fff3d9de46eff5f282c6b3e", //currently user id is defualt, needs to be updated for each user
                    series: [],
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
//abhi yaha par text default h, but future mein backend se ayega
labels: ["task1", "task2", "task3", "task4", "task5", "task6", "task7", "task8", "task9" ],
},
}//This.state

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
      series: skilllies
    })
  })
  .catch(err => console.log("Error from portfolio : ", err))
  console.log("STATE Data : ",this.state.articleData);
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