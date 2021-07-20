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

    // axios.post('api/taskAnalytics/wordcloud', data).then(res => {
    //   console.log(res.data);
    //   this.setState({
    //     positiveReview: res.data.pReview,
    //     negativeReview: res.data.nReview
    //   })
      
    // })
    // .catch(err => console.log("From Wordcloud frontend : ", err));
    
    //string mein article pura
  }
  componentDidUpdate(oldProps) {
    let chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud); 
    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    //series.text = this.state.data;
    series.maxCount = 100;
    series.minWordLength = 3;
    series.excludeWords = ["the", "an", "to", "article", "bad", "good", "why", "and"];
    this.chart = chart;
    if (oldProps.data !== this.props.data) {
      series.text = this.props.data;
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
