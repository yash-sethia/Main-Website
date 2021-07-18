import React from "react"
import Compare from './Compare'


class Content1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ReviewRatingArray: this.props.ReviewRatingArray
        };
    }
    render() {
        
        return (
          <div class="content-box">
            <div>
                <Compare ReviewRatingArray={this.state.ReviewRatingArray}/>
            </div>
        </div>
        );
    }
}

export default Content1
