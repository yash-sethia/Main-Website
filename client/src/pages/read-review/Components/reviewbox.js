import React from "react";
import LoadingAnimation from '../../../shared/loading'

class ReviewBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            reviewNumber: props.reviewNumber,
            questions: props.questions,
            answers: props.answers,
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
                            {this.state.questions[0]}
                        </div>

                        <p className="review-text">
                            <div className="review-image-given">
                                <img src={this.state.image} alt="review given" className="review-image" />
                            </div>
                            
                            {this.state.answers[0]}
                        </p>

					</div>

					<div className="review-block">
						<div className="review-block">

                            <div className="question-read-review">
                                {this.state.questions[1]}
                            </div>

                            <p id="review-text">
                                {this.state.answers[1]}
                            </p>

                        </div>

					</div>
				</div>

            </div>
        );
    }
}

export default ReviewBox;
