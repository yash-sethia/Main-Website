import React from "react";
import donutImg from '../../images/food.png';
import linkedImg from '../../images/linkedin.png';
import moneyImg from '../../images/money.png';
import cryptoImg from '../../images/crypto.png';
import spaceImg from '../../images/space.jpg';
import mentalImg from '../../images/images.png';
import aiImg from '../../images/robot.jpg';
import timeImg from '../../images/time.svg';
import covidImg from '../../images/covid.jpg';



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
		const tasks = ["Dunk of Dunkin ", "Space Tourism", "Chain of Blocks", "Linked via LinkedIn", "Mental Health", "AI-The Future", "Time Travel", "Effect of COVID", "What about Money"]
		const taskImage = [
			 donutImg,
			 spaceImg,
			 cryptoImg,
			 linkedImg,
			 mentalImg,
			 aiImg,
			 timeImg,
			 covidImg,
			 moneyImg
		]
		// const taskImage = {
		// 	"603e7d4cf49dab101cb36398": donutImg,
		// 	"603e7d4df49dab101cb36399": spaceImg,
		// 	"603e7d74f49dab101cb3639a": cryptoImg,
		// 	"603e7d78f49dab101cb3639b": linkedImg,
		// 	"603e7d7bf49dab101cb3639c": mentalImg,
		// 	"603e7d7ef49dab101cb3639d": aiImg,
		// 	"603e7d81f49dab101cb3639e": timeImg,
		// 	"603e7d84f49dab101cb3639f": covidImg,
		// 	"603e7d87f49dab101cb363a0": moneyImg
		// }
		
		var idx = -1;
		const transac = this.state.skilliesArray.map(item => {
			idx++;
			if(item != 0) {
				// var img;
				// if(idx==0){
				// 	img = donutImg;
				// }
				console.log("images: ", taskImage[idx])
				return (<div class="entry">
                
				<img src={taskImage[idx]} alt="Dunk of Dunkin" />

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
