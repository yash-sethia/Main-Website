import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from './shared/Header.js';
import Sidebar from './shared/Sidebar.js';
import Footer from './shared/Footer.js';

import HomePage from './pages/homepage/homepage.js';
import SetProfile from './pages/homepage/Components/setProfile';
import Analytics from './pages/analytics/Analytics.js';
import Dashboard from './pages/dashboard/Dashboard.js';
import Portfolio from './pages/portfolio/portfolio';
import PortfolioArticle from './pages/portfolio/Components/PortfolioArticle'

import QuestionLike from './pages/review-article-questions/questionlike';
import QuestionDislike from './pages/review-article-questions/questiondislike';
import Profile from './pages/profile/profile'
import ReviewPage from './pages/review-page/ReviewPage'
import TaskPage from './pages/task-page/TaskPage'
import Engagement from './pages/engagement/Engagement'
import AiRating from './pages/ai-rating/airating'
import OverallAnalytics from './pages/overallanalytics/OverallAnalytics.js';
import EditorPage from './pages/editor/editor'
import RatingSlider from './pages/review-article-questions/ratingSlider';
import RMReviewPage from './pages/review-page/RMreviewpage';

import UserRoute from './Routes/UserRoute';

import ReviewMore from './pages/review-more/reviewmore'
import ReadReview from './pages/read-review/readreview'

import {UserProvider} from './pages/AuthContext';

import { withRouter } from 'react-router'

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

    
    if (window.location.pathname.includes("/portfolio") || window.location.pathname.includes("/viewArticle") || window.location.pathname=="/" ||  window.location.pathname=="/setprofile") { 
      console.log("I am inside empty Sidebar");
      sidebarcomponent = <div></div>
    } else {
      console.log("I am inside full Sidebar");
      sidebarcomponent = <Sidebar/>
    }

    /* Header */
    let headercomponent;

    if (window.location.pathname.includes("/portfolio") || window.location.pathname.includes("/viewArticle") || window.location.pathname=="/" || window.location.pathname=="/setprofile") {
      headercomponent = <div></div>
    } else {
      headercomponent = <Header/>
    }

    const ReviewPageComponent = () => {
      return( < ReviewPage />)
    }


    const ReadReviewComponent = () => {
      return( < ReadReview articleId="5ff3638c0cbcb367208984e2" />)
    }

    return (
        <UserProvider>
      <Router>
      <div className="Mediator">
          {headercomponent}
          {sidebarcomponent}
          <Switch>
            <Route exact path="/" exact component={HomePage} />    
            {/* <GuestRoute location={this.props.location} path="/" component={HomePageComponent} /> */}
            <Route location={this.props.location} path='/portfolio/:id' exact component={Portfolio} /> {/* Done */}
            {/* /portfolio/${this.state.userId}/${item._id} */}
            <Route location={this.props.location} path='/viewArticle/:articleId' exact component={PortfolioArticle} />

            <UserRoute location={this.props.location} path="/setprofile"  exact component={SetProfile} />   {/* BACKEND FRONTEND LEFT */}
            <UserRoute location={this.props.location} path="/dashboard" exact component={Dashboard}/>
            <UserRoute location={this.props.location}  path="/Review-more" exact component={ReviewMore} /> 
            <UserRoute location={this.props.location}  path='/analytics' exact component={Analytics} /> {/* Done + SCAM (NOTE: Days Spent mei I have done "Coming Soon") */ }
            <UserRoute location={this.props.location}  path='/profile/:username' exact component={Profile} /> {/* Done */}
            
            <UserRoute location={this.props.location}  path='/review/:taskId' exact component={ReviewPage} />

            <UserRoute location={this.props.location}  path='/review-article/:articleId' exact component={RMReviewPage} />
            
            <UserRoute location={this.props.location}  path='/question-like' exact component={QuestionLike} /> {/* Done */}
            <UserRoute location={this.props.location}  path='/RatingSlider' exact component={RatingSlider} />
            <UserRoute location={this.props.location}  path='/question-dislike' exact component={QuestionDislike} /> {/* Problem in Sending the data from 1 page to another */}
            
            <UserRoute location={this.props.location}  path='/engagement' exact component={Engagement} /> {/* Done + SCAM */}
            <UserRoute location={this.props.location}  path='/airating' exact component={AiRating} />
            <UserRoute location={this.props.location}  path='/task-page/:taskId' exact component={TaskPage} />  {/* Done */}
            <UserRoute location={this.props.location}  path='/readreview' component={ReadReviewComponent} />  {/* Done except for IMAGE (image comes from slider whose logic is TBD) */}
            <UserRoute location={this.props.location}  path='/overall-analytics' exact component={OverallAnalytics} />
            <Route location={this.props.location}  path='/editor/:id' exact component={EditorPage} />
          </Switch>
          <Footer />
      </div>
      </Router>
        </UserProvider>
    );
  }
}
export default withRouter(Mediator);