import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud"; 


class Cloud extends Component {

  constructor(props) {
    super(props);

   this.state = {
                };
          
}
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud); 
    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.text = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure";
    series.maxCount = 100;
    series.minWordLength = 3;
    series.excludeWords = ["the", "an", "to"];
    this.chart = chart;
  }

  render() {
    return (
      <div className="donut" id = "chartdiv">
       
      </div>
    );
  }
}

export default Cloud;
