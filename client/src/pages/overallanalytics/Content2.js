import React from "react";
import donutImg from '../../images/food.png';



class Content2 extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            skilliesArray: this.props.skilliesArray,
        };
    }

	componentDidMount() {
		this.setState({
			skilliesArray: this.props.skilliesArray
		})
	}

    render() {

        return (
          <div class="content-box">
				<h4>Recent Transactions</h4>
    				<div class="entry">

    					<img src={donutImg} alt="Dunk of Dunkin" />

    					<div class="task-and-status">
    						<div class="task-status">
    							Task Completed
    						</div>

    						<div class="task-title">
    							Dunk of Dunkin
    						</div>
    					</div>

    					<div class="transaction-stat">
    						{this.state.skilliesArray[0]}
    					</div>
    				</div>

    				<div class="entry">

						<img src={donutImg} alt="Dunk of Dunkin" />

    					<div class="task-and-status">
    						<div class="task-status">
    							Task Completed
    						</div>

    						<div class="task-title">
    							Dunk of Dunkin
    						</div>
    					</div>

    					<div class="transaction-stat">
							{this.state.skilliesArray[1]}
    					</div>
    				</div>

    				<div class="entry">

						<img src={donutImg} alt="Dunk of Dunkin" />

    					<div class="task-and-status">
    						<div class="task-status">
    							Task Completed
    						</div>

    						<div class="task-title">
    							Dunk of Dunkin
    						</div>
    					</div>

    					<div class="transaction-stat">
							{this.state.skilliesArray[2]}
    					</div>
    				</div>

    				<div class="entry">

						<img src={donutImg} alt="Dunk of Dunkin" />

    					<div class="task-and-status">
    						<div class="task-status">
    							Task Completed
    						</div>

    						<div class="task-title">
    							Dunk of Dunkin
    						</div>
    					</div>

    					<div class="transaction-stat">
							{this.state.skilliesArray[3]}
    					</div>
    				</div>

    				<div class="entry">

						<img src={donutImg} alt="Dunk of Dunkin" />

    					<div class="task-and-status">
    						<div class="task-status">
    							Task Completed
    						</div>

    						<div class="task-title">
    							Dunk of Dunkin
    						</div>
    					</div>

    					<div class="transaction-stat">
							{this.state.skilliesArray[4]}
    					</div>
    				</div>

    			</div>
        );
    }
}

export default Content2
