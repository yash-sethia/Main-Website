import React from "react";
import donutImg from '../../images/food.png';



class Transactions extends React.Component {
    render() {
        const overallanalyticsdata = this.props.overallanalyticsdata

        return (
			<div class="transaction">
			  

			  	<div class="task-and-status">
			  		<div class="task-status">
			  			Task Completed
			  		</div>

			  		<div class="task-title">
			  			Dunk of Dunkin
			  		</div>
			  	</div>
              
			  	<div class="transaction-stat">
			  	 	+$43
			  	</div>

			  </div>
        );
    }
}

export default Transactions
