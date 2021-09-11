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
            aiRatingChange: 0,
            reviewRatingChange: 0,
            skilllyChange: 0
        };
    }

    componentDidMount() {
      var f = false;
        var fval = 0;
        for(let i = 9; i >= 0; i--) {
            if(this.state.skilliesArray[i] > 0) {
                if(f) {
                    this.setState({
                        skilllyChange: (((fval - this.state.skilliesArray[i]) * 100) / this.state.skilliesArray[i])
                    })
                    break;
                }
                else {
                    f = true;
                    fval = this.state.skilliesArray[i];
                }
            }
        }

        f = false;
        fval = 0;
        for(let i = 9; i >= 0; i--) {
            if(this.state.ReviewRatingArray[i] > 0) {
                if(f) {
                    this.setState({
                        reviewRatingChange: (((fval - this.state.ReviewRatingArray[i]) * 100) / this.state.ReviewRatingArray[i])
                    })
                    break;
                }
                else {
                    f = true;
                    fval = this.state.ReviewRatingArray[i];
                }
            }
        }

        f = false;
        fval = 0;
        for(let i = 9; i >= 0; i--) {
            if(this.state.AiRatingArray[i] > 0) {
                if(f) {
                    this.setState({
                        aiRatingChange: (((fval - this.state.AiRatingArray[i]) * 100) / this.state.AiRatingArray[i])
                    })
                    break;
                }
                else {
                    f = true;
                    fval = this.state.AiRatingArray[i];
                }
            }
        }
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        reviewRating: nextProps.reviewRating,
        aiRating: nextProps.aiRating,
        skillies: nextProps.skillies,
        ReviewRatingArray: nextProps.ReviewRatingArray,
        AiRatingArray: nextProps.AiRatingArray,
        skilliesArray: nextProps.skilliesArray,
      })
      var f = false;
        var fval = 0;
        for(let i = 9; i >= 0; i--) {
            if(this.state.skilliesArray[i] > 0) {
                if(f) {
                    this.setState({
                        skilllyChange: (((fval - this.state.skilliesArray[i]) * 100) / this.state.skilliesArray[i])
                    })
                    break;
                }
                else {
                    f = true;
                    fval = this.state.skilliesArray[i];
                }
            }
        }

        f = false;
        fval = 0;
        for(let i = 9; i >= 0; i--) {
            if(this.state.ReviewRatingArray[i] > 0) {
                if(f) {
                    this.setState({
                        reviewRatingChange: (((fval - this.state.ReviewRatingArray[i]) * 100) / this.state.ReviewRatingArray[i])
                    })
                    break;
                }
                else {
                    f = true;
                    fval = this.state.ReviewRatingArray[i];
                }
            }
        }

        f = false;
        fval = 0;
        for(let i = 9; i >= 0; i--) {
            if(this.state.AiRatingArray[i] > 0) {
                if(f) {
                    this.setState({
                        aiRatingChange: (((fval - this.state.AiRatingArray[i]) * 100) / this.state.AiRatingArray[i])
                    })
                    break;
                }
                else {
                    f = true;
                    fval = this.state.AiRatingArray[i];
                }
            }
        }
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
                                            <span style={{color: this.state.skilllyChange > 0 ? 'green' : 'red'}}> 
                                              {this.state.skilllyChange > 0 ? '+' : ''}
                                              {this.state.skilllyChange.toFixed(2)}   
                                            </span>
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
                          {this.state.reviewRating.toFixed(2)} 
                          <span style={{color: this.state.reviewRatingChange > 0 ? 'green' : 'red'}}> 
                            {this.state.reviewRatingChange > 0 ? '+' : ''}
                            {this.state.reviewRatingChange.toFixed(2)}   
                          </span>
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
       {this.state.aiRating.toFixed(2)} 
       <span style={{color: this.state.aiRatingChange > 0 ? 'green' : 'red'}}> 
          {this.state.aiRatingChange > 0 ? '+' : ''}
          {this.state.aiRatingChange.toFixed(2)}   
        </span>
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
