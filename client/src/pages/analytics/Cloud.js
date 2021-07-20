import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud"; 

import { UserContext } from '../AuthContext';
import axios from 'axios';

class Cloud extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
   this.state = {
     data: this.props.data
    };
          
}
  componentDidMount() {
    console.log("From wordcloud per task : ", this.state);
    let chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud); 
    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.text = this.state.data;
    series.maxCount = 100;
    series.minWordLength = 3;
    series.excludeWords = ["the", "an", "to", "and"];
    this.chart = chart;
  }

  componentWillReceiveProps(nextProps) {
    if(this.chart) {
      this.chart.dispose();
    }
    this.setState({data: nextProps.data})
    let chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud); 
    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    //string mein article pura
    series.text = this.state.data;
    series.maxCount = 100;
    series.minWordLength = 3;
    series.excludeWords = ["the", "an", "to", "article", "bad", "good", "why"];
    this.chart = chart;
    console.log("Updated props")
    this.chart = chart;
  }

  componentDidUpdate(oldProps) {
    if(this.chart) {
      this.chart.dispose();
    }
    let chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud); 
    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.text = this.state.data;
    series.maxCount = 100;
    series.minWordLength = 3;
    series.excludeWords = ["the", "an", "to", "article", "bad", "good", "why", "and"];
    this.chart = chart;
    if (oldProps.data !== this.props.data) {
      series.text = this.props.data;
    }
    this.chart = chart;
  }

  componentWillUnmount() {
    if(this.chart) {
      this.chart.dispose();
    }
  } 

  render() {
    console.log("Wordcloud state: ", this.state);
    return (
      <div className="donut" id = "chartdiv">
       
      </div>
    );
  }
}

export default Cloud;
