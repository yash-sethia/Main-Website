import React from 'react';
import { Switch ,BrowserRouter as Router, Route } from 'react-router-dom'
import QuestionLike from './questionlike'
import QuestionDislike from './questiondislike'
import LoadingAnimation from '../../shared/loading'

class ReviewArticleQuestion extends React.Component {
  constructor() {
    super();
    this.enableMessage = this.enableMessage.bind(this);
    this.state = {
      isLoading: true
    };

    this.timer = setTimeout(this.enableMessage,4000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  enableMessage() {
    this.setState({isLoading: false});
  }


  render() {

    const QuestionLikeComponent = () => {
      return( < QuestionLike />)
    }

    const QuestionDislikeComponent = () => {
      return( < QuestionDislike />)
    }

    const pageIsLoading = <LoadingAnimation />
        

    const pageIsNotLoading = 
        <Router>
          <div>
            <Switch>
              <Route exact path='/' exact component= {QuestionLikeComponent} />
              <Route path='/second' exact component= {QuestionDislikeComponent} />
            </Switch>
          </div>
        </Router>;

    
    let pageContent;

    if(this.state.isLoading) {
      pageContent = pageIsLoading;
    }
    
    else {
      pageContent = pageIsNotLoading;
    }

    return (
      pageContent
    );
  }
}

export default ReviewArticleQuestion;
