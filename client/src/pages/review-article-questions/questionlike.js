import React, { Component } from "react";
import autosize from "autosize";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Css/review-article-questions/reviewquestion.css';
import { Link } from "react-router-dom";


class QuestionLike extends Component {
    constructor(props) {
        super(props);
        this.state = {
          articleId: this.props.location.state.articleId,
          questionLike: "",
          rating: this.props.location.state.rating
        };
        this.handleChange = this.handleChange.bind(this)
    }
  componentDidMount() {
    this.textarea.focus();
    autosize(this.textarea);
  }

  handleChange(event) {
    this.setState({
      questionLike: event.target.value
    })
  }

  render() {
    console.log("From Question Like : ", this.state);
    return (
        <div className="question-like">
            <div className="question">
                1. What did you like in this article ?
            </div>
            <div className="answer">
                <textarea
                    className="text-box"
                    // style={style}
                    minLength = "300" 
                    spellCheck = "true"
                    ref={c => (this.textarea = c)}
                    placeholder="I liked how the author..."
                    rows={1}
                    value={this.state.questionLike}
                    onChange={this.handleChange}
                />
            </div>

            <div className="submit-button">
              <Link 
                to={{
                  pathname: '/question-dislike',
                  state: {
                    articleId: this.state.articleId,
                    questionLike: this.state.questionLike,
                    rating: this.state.rating
                  }
                }}
              >
                <Button variant="info"> Next </Button>
              </Link>
            </div> 
      </div>
    );
  }
}

export default QuestionLike;
