import React from "react"
import "../../font-awesome/css/font-awesome.min.css"
import Donut from './Donut'


class Content4 extends React.Component {
    render() {
        const overallanalyticsdata = this.props.overallanalyticsdata

        return (
          <div class="content-box">
      			<div class="donut-graph">
      				<Donut />
      			</div>
      		</div>
        );
    }
}

export default Content4
