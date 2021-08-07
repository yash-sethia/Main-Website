import React from "react"
import Compare from './Compare'


class Content1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ReviewRatingArray: this.props.ReviewRatingArray,
            avgUserArray: [4.2, 4.3, 4.4, 4.1, 4.7, 3.8, 4.4, 4.8, 4.9] 
        };
    }

    componentWillReceiveProps(nextProps) {
        var avgUser = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
        for(let i = 0; i < 9; i++) {
            avgUser[i] = (0.9 * nextProps.ReviewRatingArray[i]).toFixed(1);
        }
        this.setState({
            ReviewRatingArray: nextProps.ReviewRatingArray,
            avgUserArray: avgUser
        })
    }

    render() {
        
        return (
          <div class="content-box">
            <div>
                <Compare ReviewRatingArray={this.state.ReviewRatingArray} avgUserArray={this.state.avgUserArray} />
            </div>
        </div>
        );
    }
}

export default Content1
