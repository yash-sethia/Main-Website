import React, { Component } from "react";
import autosize from "autosize";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Css/review-article-questions/reviewquestion.css';
import { Link } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';

import Header from '../../shared/Header';
import Sidebar from '../../shared/Sidebar';

const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
      ? <Link to={to}>{children}</Link>
      : <>{children}</>;

class QuestionLike extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userId: this.props.location.state.userId,
          articleId: this.props.location.state.articleId,
          questionLike: "",
          rating: this.props.location.state.rating,
          error: false,
          link: false
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
    if(this.state.questionLike.length > 50) {
      this.setState({link: true});
    }
    else {
      this.setState({link: false});
    }
  }

  errorCheck() {
    if(this.state.questionLike.length <= 50) {
      this.setState({error: true});
    }
    else {
      this.setState({error: false, link : true});
    }
  }

  render() {
    console.log("From Question Like : ", this.state);
    return (
      <div>
          <Header/>
          <Sidebar/>
          
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
            {this.state.error && <div className="error-box-questiondislike">
              <Alert severity="error">Sorry, the review must be atleast 50 characters long :( </Alert>
            </div>}

            <div className="submitButton">
            <ConditionalLink to={{
                  pathname: '/question-dislike',
                  state: {
                    userId: this.state.userId,
                    articleId: this.state.articleId,
                    questionLike: this.state.questionLike,
                    rating: this.state.rating
                  }
                }} condition={this.state.link}>
              <button className="myButton"  onClick = {() => this.errorCheck()}> Next </button>
            </ConditionalLink>
            </div> 
      </div>
      </div>
    );
  }
}

export default QuestionLike;
