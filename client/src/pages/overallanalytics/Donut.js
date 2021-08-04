import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import axios from "axios";
import { UserContext } from '../AuthContext';

class Donut extends Component {

  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
                    series: this.props.skilliesArray,
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
labels: ["Dunk of Dunkin 1", "Dunk of Dunkin 2", "Dunk of Dunkin 3", "Dunk of Dunkin 4", "Dunk of Dunkin 5", "Dunk of Dunkin 6", "Dunk of Dunkin 7", "Dunk of Dunkin 8", "Dunk of Dunkin 9" ], //abhi yaha par text default h, but future mein backend se ayega
},
}//This.state
}

componentWillReceiveProps(nextProps) {
    this.setState({
      series: nextProps.skilliesArray
    })
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut"/>
      </div>
    );
  }
}

export default Donut;