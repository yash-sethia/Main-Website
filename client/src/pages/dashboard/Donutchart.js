import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donutchart extends Component {

  constructor(props) {
    super(props);

    this.state = {
                    series: [44, 55, 41, 17, 15],
                    options: {
                    plotOptions: {
                                    pie: {
                                            startAngle: -135,
                                            endAngle: 135,
                                            expandOnClick: true,
                                             //  offsetX: 0,
                                             //   offsetY: 0,
                                             //   customScale: 1,
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
labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
},
}//This.state
}

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

export default Donutchart;