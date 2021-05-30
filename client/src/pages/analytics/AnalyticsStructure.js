import React from "react"
import '../../Css/analytics/Analytics.css';
import { NavLink, Link } from "react-router-dom";
import NavButton from "./nav-button.js";
import { Dropdown } from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css'
import Cloud from "./Cloud.js"
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud"; 

class AnalyticsStructure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          SkillliesEarned: props.analyticsData.SkillliesEarned,
          SkillliesEarnedChange: props.analyticsData.SkillliesEarnedChange,
          reviewRating: props.analyticsData.reviewRating,
          reviewRatingChange: props.analyticsData.reviewRatingChange,
          aiRating: props.analyticsData.aiRating,
          aiRatingChange: props.analyticsData.aiRatingChange,
          DaysTaken: props.analyticsData.DaysTaken,
        }
    }
    // ********************ERROR********************
    ///////////////////////////////////////
    // Average User data is hardcoded //
    //////////////////////////////////////
    render() {
        return (
            <div className="total-grid-analytics">
                <div className="headings-analytics">
                  <div className="article-topic-analytics">
                    <h1>Dunk of the Dunkin</h1>
                  </div>

                    <div className="sub-nav" id="task-nav-analytics">
                        <NavLink to="/analytics" className="active-analytics">OVERVIEW</NavLink>
                        <NavLink to="/readreview">REVIEW</NavLink>
                        <NavLink to="/airating">AI REVIEW</NavLink>
                        <NavLink to="/engagement">ENGAGEMENT</NavLink>
                    </div>
                    <div className="nav-div">
                  
                      <NavButton/>

                    </div>  
                </div>
                

                  <div className="overview-analytics">
                        <div className="overview-box-analytics">

                          <div className="individual-box-analytics">
                              <div className="stat-heading-analytics">
                              Skilllies Earned
                              </div>
                              <div className="stat-value-analytics">
                              $ {this.state.SkillliesEarned} <span style= {{color: this.state.SkillliesEarnedChange < 0 ? "red" : "#009933"}}> {this.state.SkillliesEarnedChange}% </span>
                              </div>
                          </div>

                          <div className="individual-box-analytics">
                            <div className="stat-heading-analytics">
                            Review Rating
                            </div>
                            <div className="stat-value-analytics">
                            {this.state.reviewRating} <span style= {{color: this.state.reviewRatingChange < 0 ? "red" : "#009933"}}> {this.state.reviewRatingChange}% </span>
                            </div>
                          </div>

                          <div className="individual-box-analytics">
                            <div className="stat-heading-analytics">
                            AI Rating
                            </div>
                            <div className="stat-value-analytics">
                            {this.state.aiRating} <span style= {{color: this.state.aiRatingChange < 0 ? "red" : "#009933"}}> {this.state.aiRatingChange}% </span>
                            </div>
                          </div>

                          <div className="individual-box-analytics">
                            <div className="stat-heading-analytics">
                            Days Spent
                            </div>
                            <div className="stat-value-analytics">
                              {this.state.DaysTaken} <span> 0.0% </span>
                            </div>
                          </div>

                          </div>
                  </div>

                  <div className="content1">
                        <div className="content-box-analytics">
                      
                               <Cloud />
               
                         </div>
                  </div>

                  <div className="content2">
                        <div className="content-box-analytics">
                          <div>
                            <table className="content-table">
                              <thead>
                              <tr>
                                <th>Parameter</th>
                                <th>You</th>
                                <th>Avg User</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td>Skilllies Earned</td>
                                <td>$ {this.state.SkillliesEarned}</td>
                                <td>$ {(this.state.SkillliesEarned * 0.92).toFixed(1)}</td>
                              </tr>
                              <tr>
                                <td>Review Rating</td>
                                <td>{(this.state.reviewRating)}</td>
                                <td>{(this.state.reviewRating * 0.9).toFixed(1) }</td>
                              </tr>
                              <tr>
                                <td>AI Rating</td>
                                <td>{(this.state.aiRating)}</td>
                                <td>{(this.state.aiRating * (this.state.aiRating * 1.1 > 5 ? 0.9 : 1.1)).toFixed(1)}</td>
                              </tr>

                              <tr>
                                <td>Days Spent</td>
                                <td>{this.state.DaysTaken}</td>
                                <td>Soon :)</td>
                              </tr>
                              </tbody>
                            </table>

                          </div>
                          </div>
                  </div>
                  <div className="footerp">
                      footer
                  </div>
              </div>
        );
    }
}

export default AnalyticsStructure