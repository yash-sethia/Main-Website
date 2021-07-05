import React from "react"
import '../../Css/analytics/Analytics.css';
import { NavLink, Link } from "react-router-dom";
import NavButton from "./nav-button.js";
import 'semantic-ui-css/semantic.min.css'
import Cloud from "./Cloud.js"

import { Dropdown, Grid, Segment } from 'semantic-ui-react'

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud"; 
import user from "../../data/PortfolioData";
import OverallAnalytics from '../overallanalytics/OverallAnalytics';

import axios from "axios";

import { UserContext } from '../AuthContext';

// function TaskAnalytics() {
//   return(

//   );
// }





class AnalyticsStructure extends React.Component {
  static contextType = UserContext;
    constructor(props) {
        super(props);
        this.state = {
          SkillliesEarned: 0,
          SkillliesEarnedChange: 0.0,
          reviewRating: 0.0,
          reviewRatingChange: 0.0,
          aiRating: 0.0,
          aiRatingChange: 0.0,
          DaysTaken: "Comin Soon :)",
          value: 1,
          heading: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
      const data = {
        // userId: this.context[0].id,
        "userId": "60ba74fe58bb8d6268e11971",
        "taskId": "603e7d4cf49dab101cb36398"
      }
      axios.post("api/taskAnalytics", data).then(res => {
        this.setState({
          SkillliesEarned: res.data.taskAnalytics.SkillliesEarned,
          SkillliesEarnedChange: res.data.taskAnalytics.SkillliesEarnedChange,
          reviewRating: res.data.taskAnalytics.reviewRating,
          reviewRatingChange: res.data.taskAnalytics.reviewRatingChange,
          aiRating: res.data.taskAnalytics.aiRating,
          aiRatingChange: res.data.taskAnalytics.aiRatingChange,
          DaysTaken: res.data.taskAnalytics.DaysTaken,
        })
      })
      .catch(err => console.log("Error from Task Analytics Frontend : ", err))
    }

    handleChange = (e, { value, text }) => {
      const tasks = ["", "603e7d4cf49dab101cb36398", "603e7d4cf49dab101cb36399", "603e7d4cf49dab101cb3639a", "603e7d4cf49dab101cb3639b", "603e7d4cf49dab101cb3639c", "603e7d4cf49dab101cb3639d", "603e7d4cf49dab101cb3639e", "603e7d4cf49dab101cb3639f", "603e7d87f49dab101cb363a0"]
      this.setState({ value: value, heading: text })
      console.log("Hell Yeah!!", value)
      const data = {
        userId: this.context[0].id,
        //"userId": "60ba74fe58bb8d6268e11971",
        "taskId": tasks[value]
      }
      axios.post("api/taskAnalytics", data).then(res => {
        this.setState({
          SkillliesEarned: res.data.taskAnalytics.SkillliesEarned,
          SkillliesEarnedChange: res.data.taskAnalytics.SkillliesEarnedChange,
          reviewRating: res.data.taskAnalytics.reviewRating,
          reviewRatingChange: res.data.taskAnalytics.reviewRatingChange,
          aiRating: res.data.taskAnalytics.aiRating,
          aiRatingChange: res.data.taskAnalytics.aiRatingChange,
          DaysTaken: res.data.taskAnalytics.DaysTaken,
        })
      })
      .catch(err => console.log("Error from Task Analytics Frontend : ", err))  
    }

    // ********************ERROR********************
    ///////////////////////////////////////
    // Average User data is hardcoded //
    //////////////////////////////////////
    render() {

      const options = [
        { key: '2', value: '1', text: 'Dunk of Dunkin' },
        { key: '3', value: '2', text: 'Dunk of Dunkin' },
        { key: '4', value: '3', text: 'Dunk of Dunkin' },
        { key: '5', value: '4', text: 'Dunk of Dunkin' },
        { key: '6', value: '5', text: 'Dunk of Dunkin' },
        { key: '7', value: '6', text: 'Dunk of Dunkin' },
        { key: '8', value: '7', text: 'Dunk of Dunkin' },
        { key: '9', value: '8', text: 'Dunk of Dunkin' },
        { key: '10', value: '9', text: 'Dunk of Dunkin' },
    ]

    const TaskOverviewAnalytics = (
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
            </div>);
          const TaskAnalyticsContent1 = (
            <div className="content1">
                  <div className="content-box-analytics">
                
                         <Cloud />
         
                   </div>
            </div>
          );
          
          const TaskAnalyticsContent2 = (
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
          );


            // <div className="footerp">
            //     footer
            // </div>

        return (
          <div className="total-grid-analytics">
          <div className="headings-analytics">
            <div className="article-topic-analytics">
              <h1>Analytics</h1>
            </div>

            <div className="sub-nav" id="task-nav-analytics">
              <NavLink to="/overall-analytics">OVERVIEW</NavLink>
                <NavLink to="/analytics" className="active-analytics">TASKS</NavLink>
                <NavLink to="/readreview">REVIEW</NavLink>
                <NavLink to="/airating">AI REVIEW</NavLink>
                <NavLink to="/engagement">ENGAGEMENT</NavLink>
            </div>
              <div className="nav-div">
            
              <Grid columns={2}>
                <Grid.Column>
                  <Dropdown
                    className="nav-button"
                    onChange={this.handleChange}
                    options={options}
                    placeholder='Dunk of Dunkin'
                    selection
                    value={this.state.value}
                  />
                </Grid.Column>
              </Grid>
              </div>  
          </div>
          { TaskOverviewAnalytics }
          { TaskAnalyticsContent1 }
          { TaskAnalyticsContent2 } 
        </div>
        );
    }
}

export default AnalyticsStructure