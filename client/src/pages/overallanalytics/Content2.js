import React from "react";
import donutImg from '../../images/food.png';



class Content2 extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            skilliesArray: this.props.skilliesArray,
        };
    }

	componentWillReceiveProps(nextProps) {
		this.setState({
			skilliesArray: nextProps.skilliesArray
		})
	}

    render() {
		const tasks = ["Dunk of Dunkin","Dunk of Dunkin","Dunk of Dunkin","Dunk of Dunkin","Dunk of Dunkin","Dunk of Dunkin","Dunk of Dunkin","Dunk of Dunkin","Dunk of Dunkin"]
		var idx = -1;
		const transac = this.state.skilliesArray.map(item => {
			idx++;
			if(item != 0) {
				return (<div class="entry">

				<img src={donutImg} alt="Dunk of Dunkin" />

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
			</div>);
			}
			
		})

        return (
          <div class="content-box">
				<h4>Recent Transactions</h4>
					{transac}
    			</div>
        );
    }
}

export default Content2
