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
            rating: props.rating,
            phrase: "Couldn't load the image :(",
            image: "https://previews.123rf.com/images/pavlostv/pavlostv1805/pavlostv180500401/101741080-oops-404-error-page-not-found-futuristic-robot-concept-%C3%A2%E2%82%AC%E2%80%9C-vector.jpg"
        }
    }

    componentDidMount() {
        const emojis = ['😄','🙂','😐','😑','☹️'];
        const sliderPhrases = ['Awesome Work!!','Good Job!!','Not Bad :)','Could be better...', "Didn't like it :/"];
        const rating = this.state.rating;
        this.setState({
            image: emojis[5 - Math.round(rating)],
            phrase: sliderPhrases[5 - Math.round(rating)]
        })
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
                                {/* <img src={this.state.image} alt="review given" className="review-image" /> */}
                                <h1 className="review-image">
                                    {this.state.image}
                                </h1>
                                <h3> {this.state.phrase} </h3>
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
