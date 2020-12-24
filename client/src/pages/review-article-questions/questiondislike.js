import React, { Component } from "react";
import autosize from "autosize";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Css/review-article-questions/reviewquestion.css';


class QuestionDislike extends Component {
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
                2. What did you think the writer can improve in his article ?
            </div>
            <div className="answer">
                <textarea
                    className="text-box"
                    // style={style}
                    minLength = "300" 
                    spellCheck = "true"
                    ref={c => (this.textarea = c)}
                    placeholder="I author can improve upon..."
                    rows={1}
                />
            </div>

            <div className="submit-button">
              <Button variant="info"> Submit </Button>
            </div>
      </div>
    );
  }
}

export default QuestionDislike;
