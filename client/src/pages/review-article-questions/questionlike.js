import React, { Component } from "react";
import autosize from "autosize";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Css/review-article-questions/reviewquestion.css';


class QuestionLike extends Component {
    constructor() {
        super();
        this.state = {};
    }
  componentDidMount() {
    this.textarea.focus();
    autosize(this.textarea);
  }

  render() {
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
                />
            </div>

            <div className="submit-button">
              <Button variant="info"> Next </Button>
            </div>
      </div>
    );
  }
}

export default QuestionLike;
