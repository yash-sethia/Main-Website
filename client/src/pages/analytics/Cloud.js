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
     task: this.props.task,
     positiveReview: "",
     negativeReview: ""
    };
          
}
  componentDidMount() {
    const tasks = ["", "603e7d4cf49dab101cb36398", "603e7d4cf49dab101cb36399", "603e7d4cf49dab101cb3639a", "603e7d4cf49dab101cb3639b", "603e7d4cf49dab101cb3639c", "603e7d4cf49dab101cb3639d", "603e7d4cf49dab101cb3639e", "603e7d4cf49dab101cb3639f", "603e7d87f49dab101cb363a0"];
    const data = {
      userId: this.context[0].id,
      // "userId": "60ba74fe58bb8d6268e11971",
      "taskId": tasks[this.state.task]
    }

    console.log("From wordcloud per task : ", this.state);
    let chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud); 
    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());


    axios.post('api/taskAnalytics/wordcloud', data).then(res => {
      console.log(res.data);
      this.setState({
        positiveReview: res.data.pReview,
        negativeReview: res.data.nReview
      })
      series.text = this.state.positiveReview + this.state.negativeReview;
    })
    .catch(err => console.log("From Wordcloud frontend : ", err));
    
    //string mein article pura
    series.maxCount = 100;
    series.minWordLength = 3;
    series.excludeWords = ["the", "an", "to"];
    this.chart = chart;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.positiveReview !== this.state.positiveReview && prevState.negativeReview !== this.state.negativeReview) {
      this.series.text = this.state.positiveReview + this.state.negativeReview;
    }
  }

  render() {
    return (
      <div className="donut" id = "chartdiv">
       
      </div>
    );
  }
}

export default Cloud;
