import React from "react"
import '../../Css/analytics/Analytics.css';
import { NavLink, Link } from "react-router-dom";

class AnalyticsStructure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          SkillliesEarned: props.analyticsData.SkillliesEarned,
          reviewRating: props.analyticsData.reviewRating,
          aiRating: props.analyticsData.aiRating,
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
                </div>

                  <div className="overview-analytics">
                        <div className="overview-box-analytics">

                          <div className="individual-box-analytics">
                              <div className="stat-heading-analytics">
                              Skilllies Earned
                              </div>
                              <div className="stat-value-analytics">
                              $ {this.state.SkillliesEarned} <span>  +24.8%</span>
                              </div>
                          </div>

                          <div className="individual-box-analytics">
                            <div className="stat-heading-analytics">
                            Review Rating
                            </div>
                            <div className="stat-value-analytics">
                            {this.state.reviewRating} <span>  +24.8%</span>
                            </div>
                          </div>

                          <div className="individual-box-analytics">
                            <div className="stat-heading-analytics">
                            AI Rating
                            </div>
                            <div className="stat-value-analytics">
                            {this.state.aiRating} <span>  +24.8%</span>
                            </div>
                          </div>

                          <div className="individual-box-analytics">
                            <div className="stat-heading-analytics">
                            Days Spent
                            </div>
                            <div className="stat-value-analytics">
                              {this.state.DaysTaken} <span>  +24.8%</span>
                            </div>
                          </div>

                          </div>
                  </div>

                  <div className="content1">
                        <div className="content-box">
                          <div>word cloud image
                          </div>
                          </div>
                  </div>

                  <div className="content2">
                        <div className="content-box">
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
                                <td>$ 39</td>
                              </tr>
                              <tr>
                                <td>Review Rating</td>
                                <td>{this.state.reviewRating}</td>
                                <td>3.8</td>
                              </tr>
                              <tr>
                                <td>AI Rating</td>
                                <td>{this.state.aiRating}</td>
                                <td>74</td>
                              </tr>

                              <tr>
                                <td>Days Spent</td>
                                <td>{this.state.DaysTaken}</td>
                                <td>4</td>
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
