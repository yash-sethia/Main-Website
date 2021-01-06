import React from "react";
import LoadingAnimation from '../../../shared/loading'

class ReviewBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            reviewNumber: props.reviewNumber,
            positiveAnswer: props.positiveAnswer,
            negativeAnswer: props.negativeAnswer,
            image: props.image
        }
    }


    render() {
        return (
            <div>
				<div className="individual-review-box">			
                    <div className="review-box-heading">
                        <h2>
                            Review
                            <span> {this.state.reviewNumber} </span>
                        </h2>
                    </div>

					<div className="review-block">
						<div className="question-read-review">
                            What did you like in this article ?
                        </div>

                        <p className="review-text">
                            <div className="review-image-given">
                                <img src={this.state.image} alt="review given" className="review-image" />
                            </div>
                            
                            {this.state.positiveAnswer}
                        </p>

					</div>

					<div className="review-block">
						<div className="review-block">

                            <div className="question-read-review">
                                What did you dislike in this article?
                            </div>

                            <p id="review-text">
                                {this.state.negativeAnswer}
                            </p>

                        </div>

					</div>
				</div>

            </div>
        );
    }
}

export default ReviewBox;
