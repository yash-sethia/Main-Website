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
            tranarr: [],                                 // An arrayof size 9 containing skillies. Print only those in "Recent Transactions" whose skillies != 0. WARNING: This array is reversed i.e. element at index 0 is Task 9, element at index 1 is Task 8, element at index 2 is Task 7 and so on
          overallanalyticsdata: OverallAnalyticsData,
        };
    }

    componentDidMount() {
        // const id = this.context[0].id;
        const id = "60ba74fe58bb8d6268e11971";
        axios.get(`api/overallAnalytics/${id}`).then(res => {
            console.log("Inside then", res);
            this.setState({
                reviewRating: res.data.orr,
                aiRating: res.data.oai,
                skillies: res.data.oskillies,
                ReviewRatingArray: res.data.rrarr,
                AiRatingArray: res.data.aiarr,
                skilliesArray: res.data.skarr,
                tranarr: res.data.tranarr,
                pReview: res.data.positiveReviews,
                nReview: res.data.negativeReviews
            })
            
        })
        .catch(err => console.log("Error on Overall Analytics : ", err))
    }
    
    render() {
        console.log("From overall analytics Render", this.state);
        // const overview = this.state.overallanalyticsdata.map((overallanalyticsdata) => {
        //     return (
        //     <Overview
        //         reviewRating= {this.state.reviewRating}
        //         aiRating= {this.state.aiRating}
        //         skillies= {this.state.skillies}
        //         ReviewRatingArray= {this.state.ReviewRatingArray}
        //         AiRatingArray= {this.state.AiRatingArray}
        //         skilliesArray= {this.state.skilliesArray}
        //     />
        //     );
        // });
        // const content1 = this.state.overallanalyticsdata.map((overallanalyticsdata) => {
        //     return (
        //     <Content1 ReviewRatingArray={this.state.ReviewRatingArray}/>
        //     );
        // });
        // const content2 = this.state.overallanalyticsdata.map((overallanalyticsdata) => {
        //     return (
        //     <Content2 overallanalyticsdata={overallanalyticsdata}/>
        //     );
        // });
        // const content3 = this.state.overallanalyticsdata.map((overallanalyticsdata) => {
        //     return (
        //     <Content3 overallanalyticsdata={overallanalyticsdata}/>
        //     );
        // });
        // const content4 = this.state.overallanalyticsdata.map((overallanalyticsdata) => {
        //     return (
        //     <Content4 skilliesArray= {this.state.skilliesArray}/>
        //     );
        // });

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
                <Overview
                    reviewRating= {this.state.reviewRating}
                    aiRating= {this.state.aiRating}
                    skillies= {this.state.skillies}
                    ReviewRatingArray= {this.state.ReviewRatingArray}
                    AiRatingArray= {this.state.AiRatingArray}
                    skilliesArray= {this.state.skilliesArray}
                />
              </div>

		      <div className="content1">
                  <Content1 ReviewRatingArray={this.state.ReviewRatingArray}/>
		      </div>

		      <div className="content2">
                  <Content2 skilliesArray={this.state.skilliesArray}/>
	          </div>

              <div className="content3">
                  <Content3 data={this.state.pReview + this.state.nReview}/>
              </div>

              <div className="content4">
                  <Content4 skilliesArray= {this.state.skilliesArray}/>
              </div>
</div>
        );
    }
}

export default OverallAnalytics
