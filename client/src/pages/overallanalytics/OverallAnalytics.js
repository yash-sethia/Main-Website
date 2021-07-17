import React from "react"
import { NavLink, Link } from "react-router-dom";

import Overview from "./Overview.js"
import Content1 from "./Content1.js"
import Content2 from "./Content2.js"
import Content3 from "./Content3.js"
import Content4 from "./Content4.js"
import axios from "axios";
import { UserContext } from '../AuthContext';

import OverallAnalyticsData from '../../data/OverallAnalyticsData.js'

import '../../Css/OverallAnalytics/OverallAnalytics.css'

class OverallAnalytics extends React.Component {

    static contextType = UserContext;
    constructor(props) {
        super(props);
        this.state = {
            reviewRating: 0,                             //AvgReviewRating of the user
            aiRating: 0,                                 //AvgAIRating of the user
            skillies: 0,                                 //Total skillies earned by the user
            ReviewRatingArray: [],                       //an array of ReviewRating of each article of the user
            AiRatingArray: [],                           //an array of AIRating of each article of the user
            skilliesArray: [],                           //an array of skillies earned in each article of the user
          overallanalyticsdata: OverallAnalyticsData,
        };
    }

    // componentDidMount() {
    //     const id = this.context[0].id;
    //     axios.get('/api/users/' + id).then(res => {
    //       console.log("ARTICLE DATA : ", res.data.articleData);
    //       var skilllies = [], aiRatingArray = [], reviewRatingArray = [];
        //   var i=0, sum=0;
        //   for(i=0; i < res.data.articleData.length && i < 9;)
        //   {
        //     if(res.data.articleData[i].skilliesEarned)
        //     {
        //       skilllies[i] = res.data.articleData[i].skilliesEarned;
        //       sum += skilllies[i];
        //       i++;
        //     }
        //   }
        //   var skilliesEarned = sum;

    //     //   for(i=0, sum=0; i < res.data.articleData.length && i < 9;)
    //     //   {
    //     //     if(res.data.articleData[i].aiRating)
    //     //     {
    //     //       aiRatingArray[i] = res.data.articleData[i].aiRating;
    //     //       sum += aiRatingArray[i];
    //     //       i++;
    //     //     }
    //     //   }
    //     //   var avgAI = sum/(i-1);
          
    //     //   for(i=0; i < res.data.articleData.length && i < 9;)
    //     //   {
    //     //     if(res.data.articleData[i].reviewRating)
    //     //     {
    //     //       reviewRatingArray[i] = res.data.articleData[i].reveiwRating;
    //     //       sum += reviewRatingArray[i];
    //     //       i++;
    //     //     }
    //     //   }
    //     //   var avgReview = sum/(i-1);

    //       console.log("skillliesArray : ", skilllies);
    //       console.log("aiRatingArray : ", aiRatingArray);
    //       console.log("reviewRatingArray : ", reviewRatingArray);
    //       this.setState({
    //         skilliesArray: skilllies,
    //         // ReviewRatingArray: reviewRatingArray,
    //         // AiRatingArray: aiRatingArray,
    //         // aiRating: avgAI,
    //         // reviewRating: avgReview,
    //         skillies: skilliesEarned
    //       })
    //     })
    //     .catch(err => console.log("Error from portfolio : ", err))

    //     console.log("skillliesEarned : ", this.state.skillies);
    //     console.log("aiRating : ", this.state.skillies);
    //     console.log("reviewRating : ", this.state.reviewRating);
    //   }
    
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
                        {/* <NavLink to="/airating">AI REVIEW</NavLink>
                        <NavLink to="/engagement">ENGAGEMENT</NavLink> */}
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
