import React from "react"
import Skillliesline from './Skillliesline'
import Avgreviewrating from './Avgreviewrating'
import Avgairating from './Avgairating'

class Overview extends React.Component {
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
