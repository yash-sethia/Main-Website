import React from "react"
import { NavLink, Link } from "react-router-dom";

import Overview from "./Overview.js"
import Content1 from "./Content1.js"
import Content2 from "./Content2.js"
import Content3 from "./Content3.js"
import Content4 from "./Content4.js"

import OverallAnalyticsData from '../../data/OverallAnalyticsData.js'

import '../../Css/OverallAnalytics/OverallAnalytics.css'

class OverallAnalytics extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          overallanalyticsdata: OverallAnalyticsData,
        };
    }
    render() {
        const overview = this.state.overallanalyticsdata.map((overallanalyticsdata) => {
            return (
            <Overview overallanalyticsdata={overallanalyticsdata}/>
            );
        });
        const content1 = this.state.overallanalyticsdata.map((overallanalyticsdata) => {
            return (
            <Content1 overallanalyticsdata={overallanalyticsdata}/>
            );
        });
        const content2 = this.state.overallanalyticsdata.map((overallanalyticsdata) => {
            return (
            <Content2 overallanalyticsdata={overallanalyticsdata}/>
            );
        });
        const content3 = this.state.overallanalyticsdata.map((overallanalyticsdata) => {
            return (
            <Content3 overallanalyticsdata={overallanalyticsdata}/>
            );
        });
        const content4 = this.state.overallanalyticsdata.map((overallanalyticsdata) => {
            return (
            <Content4 overallanalyticsdata={overallanalyticsdata}/>
            );
        });


        return (
          <div className="total-grid-oa">

		        <div className="page-title"> 
                    <h1>Analytics</h1>
                    <div className="sub-nav-overall" id="sub-navlink-overall"> 
                        <NavLink to="/overall-analytics" className="active-overall-analytics">OVERVIEW</NavLink>
                        <NavLink to="/analytics">TASKS</NavLink>
                        <NavLink to="/readreview">REVIEW</NavLink>
                        <NavLink to="/airating">AI REVIEW</NavLink>
                        <NavLink to="/engagement">ENGAGEMENT</NavLink>
                    </div>
                </div>
                
		          <div className="overview">
                    {overview}
                </div>

		<div className="content1">
				{content1}
		</div>

		<div className="content2">
			{content2}
	</div>



	<div className="content3">

		{content3}
	</div>

	<div className="content4">
    {content4}
	</div>
</div>
        );
    }
}

export default OverallAnalytics
