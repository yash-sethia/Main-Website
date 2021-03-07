import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from './shared/Header.js';
import Sidebar from './shared/Sidebar.js';
import Footer from './shared/Footer.js';

import HomePage from './pages/homepage/homepage.js';
import LoginPage from './pages/homepage/Components/login';
import SetProfile from './pages/homepage/Components/setProfile';
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
import Editor from './pages/editor/editor'
import RatingSlider from './pages/review-article-questions/ratingSlider'



import ReviewMore from './pages/review-more/reviewmore'
import ReadReview from './pages/read-review/readreview'

import {UserProvider} from './pages/AuthContext';

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

    if (window.location.pathname=="/portfolio" || window.location.pathname=="/" || window.location.pathname=="/dashboard" || window.location.pathname=="/login" || window.location.pathname=="/setprofile") { 
      sidebarcomponent = <div></div>
    } else {
      sidebarcomponent = <Sidebar/>
    }

    /* Header */
    let headercomponent;

    if (window.location.pathname=="/portfolio" || window.location.pathname=="/" || window.location.pathname=="/dashboard" || window.location.pathname=="/login" || window.location.pathname=="/setprofile") {
      headercomponent = <div></div>
    } else {
      headercomponent = <Header/>
    }

    const HomePageComponent = () => {
      return(
          <HomePage/>
      );
    }
    const DashboardPage = () => {
      return(
        <div>
          <Dashboard />
        </div>
      );
    }
    const LoginPageComponent = () => {
      return(
        <div>
          <LoginPage />
        </div>
      );
    }

    const SetProfilePageComponent = () => {
      return(
        <div>
          <SetProfile />
        </div>
      );
    }

    const EditorPage = () => {
      return(
          <Editor />
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

    const RatingSliderComponent = () => {
      return( < RatingSlider />)
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
      return( < ReadReview articleId="5ff3638c0cbcb367208984e2" />)
    }

    const OverallAnalyticsComponent = () => {
      return( < OverallAnalytics />)
    }

    return (
        <UserProvider>
      <Router>
      <div className="Mediator">
          {headercomponent}
          {sidebarcomponent}
          <Switch>
            <Route exact path="/" component={EditorPage} />    {/* Done */}
            <Route path="/login" component={LoginPageComponent} />    {/* Done */}
            <Route path="/setprofile" component={SetProfilePageComponent} />   {/* Done */}
            <Route path="/dashboard" component={DashboardPage} />     {/* Done */}
            <Route path="/Review-more" component={ReviewMorePage} /> 
            <Route path='/portfolio' component={PortfolioPage} /> {/* Done */}
            <Route path='/analytics' component={AnalyticsPage} /> {/* Done + SCAM (NOTE: Days Spent mei I have done "Coming Soon") */ }
            <Route path='/profile' component={ProfileComponent} /> {/* Done */}
            <Route path='/question-like' component={QuestionLikeComponent} /> {/* Done */}
            <Route path='/RatingSlider' component={RatingSliderComponent} />
            <Route path='/question-dislike' component={QuestionDislikeComponent} /> {/* Problem in Sending the data from 1 page to another */}
            <Route path='/engagement' component={EngagementComponent} /> {/* Done + SCAM */}
            <Route path='/airating' component={AiRatingComponent} />
            <Route path='/task-page' component={TaskPageComponent} />  {/* Done */}
            <Route path='/readreview' component={ReadReviewComponent} />  {/* Done except for IMAGE (image comes from slider whose logic is TBD) */}
            <Route path='/overall-analytics' component={OverallAnalyticsComponent} />
            <Route path='/editor' component={EditorPage} />
          </Switch>
          <Footer />
      </div>
      </Router>
        </UserProvider>
    );
  }
}
export default Mediator;