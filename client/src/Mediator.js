import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from './shared/Header.js';
import Sidebar from './shared/Sidebar.js';
import Footer from './shared/Footer.js';

import Analytics from './pages/analytics/Analytics.js';
import Dashboard from './pages/dashboard/Dashboard.js';
import Portfolio from './pages/portfolio/portfolio';
import QuestionLike from './pages/review-article-questions/questionlike';
import QuestionDislike from './pages/review-article-questions/questiondislike';
import Profile from './pages/profile/profile'
import ReviewPage from './pages/review-page/ReviewPage'
import TaskPage from './pages/task-page/TaskPage'
import Engagement from './pages/engagement/Engagement'
import AiRating from './pages/ai-rating/airating'
import OverallAnalytics from './pages/overallanalytics/OverallAnalytics.js';



import ReviewMore from './pages/review-more/reviewmore'
import ReadReview from './pages/read-review/readreview'

import "./Css/Mediator.css"


  /*     <Analytics analyticsdata={this.state.analyticsdata}/>*/
  //<Portfolio />
  //        <Dashboard dashboarddata={this.state.dashboarddata} quickoverviewdata = {this.state.quickoverviewdata}/>
class Mediator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    /* SideNav */
    let sidebarcomponent;

    if (window.location.pathname=="/portfolio") {
      sidebarcomponent = <div></div>
    } else {
      sidebarcomponent = <Sidebar/>
    }

    /* Header */
    let headercomponent;

    if (window.location.pathname=="/portfolio") {
      headercomponent = <div></div>
    } else {
      headercomponent = <Header/>
    }


    const DashboardPage = () => {
      return(
          <Dashboard/>
      );
    }
    const AnalyticsPage = () => {
      return(
          <Analytics/>
      );
    }

    const ReviewMorePage = () => {
      return(
          <ReviewMore />
      );
    }

    const PortfolioPage = () => {
      return(
          <Portfolio />
      );
    }


    // const ReviewArticleQuestionComponent = () => {
    //   return( < ReviewArticleQuestion />)
    // }

    const QuestionLikeComponent = () => {
      return( < QuestionLike />)
    }

    const QuestionDislikeComponent = () => {
      return( < QuestionDislike />)
    }


    const ProfileComponent = () => {
      return( < Profile />)
    }

    const ReviewPageComponent = () => {
      return( < ReviewPage />)
    }

    const TaskPageComponent = () => {
      return( < TaskPage />)
    }

    const EngagementComponent = () => {
      return( < Engagement />)
    }

    const AiRatingComponent = () => {
      return( < AiRating />)
    }

    const ReadReviewComponent = () => {
      return( < ReadReview />)
    }

    const OverallAnalyticsComponent = () => {
      return( < OverallAnalytics />)
    }

    return (
      <Router>
      <div className="Mediator">
        {headercomponent}
        {sidebarcomponent}
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/Review-more" component={ReviewMorePage} />
          <Route path='/portfolio' component={PortfolioPage} />
          <Route path='/analytics' component={AnalyticsPage} />
          <Route path='/profile' component={ProfileComponent} />
          <Route path='/question-like' component={QuestionLikeComponent} />
          <Route path='/question-dislike' component={QuestionDislikeComponent} />
          <Route path='/engagement' component={EngagementComponent} />
          <Route path='/airating' component={AiRatingComponent} />
          <Route path='/task-page' component={TaskPageComponent} />
          <Route path='/readreview' component={ReadReviewComponent} />
          <Route path='/overall-analytics' component={OverallAnalyticsComponent} />
        </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}
export default Mediator;
