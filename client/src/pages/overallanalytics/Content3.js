import React from "react"
import WordCloud from "./WordCloud.js"
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud"; 



class Content3 extends React.Component {
    render() {
        const overallanalyticsdata = this.props.overallanalyticsdata

        return (
          <div class="content-box">
      			<div>
      				<WordCloud />
      			</div>
      		</div>
        );
    }
}

export default Content3
