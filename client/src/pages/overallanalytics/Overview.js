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
            reviewRating: 0,
            aiRating: 0,
            skillies: 0,
            ReviewRatingArray: [],
            AiRatingArray: [],
            skilliesArray: [],
        };
    }
  // componentDidMount() {
  //   const id = this.context[0].id;
  //   axios.get('/api/users/' + id).then(res => {
  //     console.log("ARTICLE DATA : ", res.data.articleData);
  //     var skilllies = [], aiRatingArray = [], reviewRatingArray = [];
  //     for(var i=0; i < res.data.articleData.length && i < 9;)
  //     {
  //       if(res.data.articleData[i].skilliesEarned)
  //       {
  //         skilllies[i] = res.data.articleData[i].skilliesEarned;
  //         i++;
  //       }
  //     }

  //     for(var i=0; i < res.data.articleData.length && i < 9;)
  //     {
  //       if(res.data.articleData[i].aiRating)
  //       {
  //         aiRatingArray[i] = res.data.articleData[i].aiRating;
  //         i++;
  //       }
  //     }
      
  //     for(var i=0; i < res.data.articleData.length && i < 9;)
  //     {
  //       if(res.data.articleData[i].reviewRating)
  //       {
  //         reviewRatingArray[i] = res.data.articleData[i].reveiwRating;
  //         i++;
  //       }
  //     }

  //     console.log("skillliesArray : ", skilllies);
  //     console.log("aiRatingArray : ", aiRatingArray);
  //     console.log("reviewRatingArray : ", reviewRatingArray);
  //     this.setState({
  //       skilliesArray: skilllies,
  //       ReviewRatingArray: reviewRatingArray,
  //       AiRatingArray: aiRatingArray,
  //       aiRating: res.data.userData[0].aiRating,
  //       reviewRating: res.data.userData[0].reviewRating,
  //       skillies: res.data.userData[0].skilliesEarned
  //     })
  //   })
  //   .catch(err => console.log("Error from portfolio : ", err))

  //   console.log("skillliesEarned : ", this.state.skillies);
  //   console.log("aiRating : ", this.state.aiRating);
  //   console.log("reviewRating : ", this.state.reviewRating);
  // }

    render() {
        const overallanalyticsdata = this.props.overallanalyticsdata

        return (
          <div className="overview-box">

                <div className="individual-box">
                           <div className="stat">

                                   <div className="stat-heading">
                                           Skilllies Earned
                                   </div>
                                   <div className="stat-value">
                                            {overallanalyticsdata.skilliesearned}
                                            <span>  +24.8%  </span>
                                   </div>
                           </div>

                           <div className="stat-graph">
                                   <Skillliesline />
                           </div>
                </div>

              <div className="individual-box">
                     <div className="stat">
                             <div className="stat-heading">
                                     Avg. Review Rating
                             </div>
                     <div className="stat-value">
                          {overallanalyticsdata.avgreviewrating} <span>  +24.8%  </span>
       </div>
     </div>
     <div className="stat-graph">
       <Avgreviewrating />
     </div>


   </div>

   <div className="individual-box">
     <div className="stat">
       <div className="stat-heading">
       Avg. AI Rating
       </div>
       <div className="stat-value">
       {overallanalyticsdata.avgairating} <span>  +24.8%</span>
       </div>
     </div>
     <div className="stat-graph">
       <Avgairating />
     </div>


   </div>
   </div>
        );
    }
}

export default Overview
