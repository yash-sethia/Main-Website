import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud"; 


class WordCloud extends Component {

  constructor(props) {
    super(props);
   this.state = {
     data: this.props.data
   };
          
}
  componentDidMount() {
    let chart = am4core.create("WordCloud", am4plugins_wordCloud.WordCloud); 
    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    //string mein article pura
    series.text = this.state.data;
    series.maxCount = 100;
    series.minWordLength = 3;
    series.excludeWords = ["the", "an", "to", "article", "bad", "good", "why"];
    this.chart = chart;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({data: nextProps.data})
    let chart = am4core.create("WordCloud", am4plugins_wordCloud.WordCloud); 
    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    //string mein article pura
    series.text = this.state.data;
    series.maxCount = 100;
    series.minWordLength = 3;
    series.excludeWords = ["the", "an", "to", "article", "bad", "good", "why"];
    this.chart = chart;
    console.log("Updated props")
  }
  componentDidUpdate(oldProps) {
    if (oldProps.data !== this.props.data) {
      this.series.text = this.props.data;
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="cloud" id = "WordCloud" style={{ width: "100%", height: "100%" }}>
       
      </div>
    );
  }
}

export default WordCloud;
