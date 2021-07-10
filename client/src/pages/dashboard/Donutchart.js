import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donutchart extends Component {

  constructor(props) {
    super(props);

    console.log("Skilllies #1 : ", props.skilllies1 )
    console.log("TaskName #1 : ", props.taskName1 )

    this.state = {//Array mein jo bhi task se skilies mile wo
                    series: [props.skilllies1, props.skilllies2, props.skilllies3, props.skilllies4, props.skilllies5, props.skilllies6, props.skilllies7, props.skilllies8, props.skilllies9],
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
labels: [props.taskName1, props.taskName2, props.taskName3, props.taskName4, props.taskName5, props.taskName6, props.taskName7, props.taskName8, props.taskName9 ],
},
}//This.state
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