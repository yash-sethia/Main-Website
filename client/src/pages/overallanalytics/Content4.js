import React from "react"
import Donut from './Donut'


class Content4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skilliesArray: this.props.skilliesArray
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            skilliesArray: nextProps.skilliesArray
        })
    }

    render() {
        return (
          <div class="content-box">
      			<div class="donut-graph">
      				<Donut skilliesArray= {this.props.skilliesArray}/>
      			</div>
      		</div>
        );
    }
}

export default Content4
