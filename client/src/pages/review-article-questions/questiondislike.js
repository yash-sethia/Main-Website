import React, { Component } from "react";
import autosize from "autosize";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Css/review-article-questions/reviewquestion.css';
import { Link } from "react-router-dom";


import axios from 'axios';


class QuestionDislike extends Component {
    constructor(props) {
        super(props);
        this.state = {
          articleId: this.props.location.state.articleId,
          rating: this.props.location.state.rating,
          questionLike: this.props.location.state.questionLike,
          questionDislike: "",
          rating: this.props.location.state.rating
        };
        console.log("Props: ", props)
        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
  componentDidMount() {
    this.textarea.focus();
    autosize(this.textarea);
  }

  handleChange(event) {
    this.setState({
      questionDislike: event.target.value
    })
    // console.log("State is : ", this.state)
  }

  onSubmit(data) {
    // Need to send this article Id according to the logic we define !
    const articleId = this.state.articleId;
    axios.post(`api/reviews/${articleId}`, data).then(res => {
      console.log("Inside on submit",res.data)
      this.props.history.push("/");
    }
      )
  }

  render() {
    console.log("From Question Dislike : ", this.state);
    return (
        <div className="question-like">
            <div className="question">
                2. What did you think the writer can improve in his article ?
            </div>
            <div className="answer">
                <textarea
                    className="text-box"
                    // style={style}
                    minLength = "300" 
                    spellCheck = "true"
                    ref={c => (this.textarea = c)}
                    placeholder="The author can improve upon..."
                    rows={1}
                    value={this.state.questionDislike}
                    onChange={this.handleChange}
                />
            </div>

            <div className="submit-button">
              <Button variant="info" onClick={() => {
                                                      const data = {
                                                        positiveReview: this.state.questionLike,
                                                        negativeReview: this.state.questionDislike,
                                                        rating: this.state.rating
                                                      }
                                                      this.onSubmit(data)
                                                    }
                }> 
                Submit 
              </Button> {/* Do history.push for changing the page after sending data to backend */}
            </div>
      </div>
    );
  }
}

export default QuestionDislike;
