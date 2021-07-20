import React from "react"
import Skillliesline from './Skillliesline'
import Avgreviewrating from './Avgreviewrating'
import Avgairating from './Avgairating'
import axios from "axios";
import { UserContext } from '../AuthContext';

class Overview extends React.Component {

  static contextType = UserContext;
    constructor(props) {
        super(props);
        this.state = {
            reviewRating: this.props.reviewRating,
            aiRating: this.props.aiRating,
            skillies: this.props.skillies,
            ReviewRatingArray: this.props.ReviewRatingArray,
            AiRatingArray: this.props.AiRatingArray,
            skilliesArray: this.props.skilliesArray,
        };
    }

    componentDidMount() {
      this.setState({
        reviewRating: this.props.reviewRating,
        aiRating: this.props.aiRating,
        skillies: this.props.skillies,
        ReviewRatingArray: this.props.ReviewRatingArray,
        AiRatingArray: this.props.AiRatingArray,
        skilliesArray: this.props.skilliesArray,
      })
    }

    render() {
      console.log("From overview.js",this.state);
        return (
          <div className="overview-box">

                <div className="individual-box">
                           <div className="stat">

                                   <div className="stat-heading">
                                           Skilllies Earned
                                   </div>
                                   <div className="stat-value">
                                            {this.state.skillies}
                                            <span>  +24.8%  </span>
                                   </div>
                           </div>

                           <div className="stat-graph">
                                   <Skillliesline skilliesArray={this.state.skilliesArray}/>
                           </div>
                </div>

              <div className="individual-box">
                     <div className="stat">
                             <div className="stat-heading">
                                     Avg. Review Rating
                             </div>
                     <div className="stat-value">
                          {this.state.reviewRating.toFixed(2)} <span>  +24.8%  </span>
       </div>
     </div>
     <div className="stat-graph">
       <Avgreviewrating ReviewRatingArray={this.state.ReviewRatingArray}/>
     </div>


   </div>

   <div className="individual-box">
     <div className="stat">
       <div className="stat-heading">
       Avg. AI Rating
       </div>
       <div className="stat-value">
       {this.state.aiRating.toFixed(2)} <span>  +24.8%</span>
       </div>
     </div>
     <div className="stat-graph">
       <Avgairating AiRatingArray={this.state.AiRatingArray}/>
     </div>


   </div>
   </div>
        );
    }
}

export default Overview
