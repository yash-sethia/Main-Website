import React from "react"
import WordCloud from "./WordCloud.js"



class Content3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({data: nextProps.data});
    }
    
    render() {
        console.log("From content 3", this.state)
        return (
          <div class="content-box">
      			<div style={{ height: "100%" }}>
      				<WordCloud data={this.state.data}/>
      			</div>
      		</div>
        );
    }
}

export default Content3
