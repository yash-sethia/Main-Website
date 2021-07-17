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
    //     var skilllies = [];
    //     var i=0, sum=0;
    //     for(i=0; i < res.data.articleData.length && i < 9;)
    //     {
    //       if(res.data.articleData[i].skilliesEarned)
    //       {
    //         skilllies[i] = res.data.articleData[i].skilliesEarned;
    //         sum += skilllies[i];
    //         i++;
    //       }
    //     }
    //     console.log("skillliesEarned : ", skilllies)
    //     this.setState({
    //       skilliesArray: skilllies,
    //       skillies: sum
    //     })
    //   })
    //   .catch(err => console.log("Error from portfolio : ", err))
    //   console.log("series : ", this.state.skilliesArray)
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
