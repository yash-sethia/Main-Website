import React from "react";
import donutImg from '../../images/food.png';

import axios from "axios";

import { UserContext } from '../AuthContext';


class Transactions extends React.Component {
	static contextType = UserContext;
	constructor(props) {
		super(props);
	   this.state = {
		   transact: []
		};
	}
	componentDidMount() {
		const id = this.context[0].id;
		axios.get(`/api/recentTransactions/${id}`).then(res => {
			console.log("Recent Transactions : ", res);
			this.setState({
				transact: res.data.skillies
			})
		})
		.catch(err => console.log("Recent Transactions frontend errror: ", err));
	}
    render() {
		const tasks = ["Dunk of Dunkin ", "Space Tourism", "Chain of Blocks", "Linked via LinkedIn", "Mental Health", "AI-The Future", "Time Travel", "Effect of COVID", "What about Money"]
		var idx = -1;
		const transactions = this.state.transact.map(item => {
			idx++;
			if(item != 0) {
				return(
					<div class="transaction">
						<div class="task-and-status">
							<div class="task-status">
								Task Completed
							</div>

							<div class="task-title">
								{tasks[idx]}
							</div>
						</div>
					
						<div class="transaction-stat">
							+${item}
						</div>
					</div>
				);
			}
		})
        return (
			<div id="past-transactions">
				<h4>Recent Transactions</h4>
				{transactions}
			</div>
        );
    }
}

export default Transactions
