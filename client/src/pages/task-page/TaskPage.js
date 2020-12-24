import React, { Component } from 'react';
import "../../font-awesome/css/font-awesome.min.css"
import "../../Css/task-page/MainBody.css"
import Buttons from "./Mainbody-TaskPage/Buttons.js"
import QuestionBox from "./Mainbody-TaskPage/QuestionBox.js"
import Questions from "../../data/Questions.js"
import LoadingAnimation from '../../shared/loading'


class TaskPage extends Component {
    constructor(){
        super();
        this.enableMessage = this.enableMessage.bind(this);
        this.state = {
            QuestionHeading : "",
            QuestionText: "",
            isLoading: true
        };
        this.timer = setTimeout(this.enableMessage,1000);
      }

      componentWillUnmount() {
        clearTimeout(this.timer);
      }
    
      enableMessage() {
        this.setState({
            isLoading: false,
            QuestionHeading: Questions[0].QuestionHeading,
            QuestionText: Questions[0].QuestionText
        });
      }
    render() {
        const pageIsLoading = <LoadingAnimation />
        

        const pageIsNotLoading = 
                <div className="main-body-taskpage">
                        <div class="total-flex">
                            <div class="parent-question-box">
                                <QuestionBox QuestionHeading={this.state.QuestionHeading} QuestionText={this.state.QuestionText}/>
                                <Buttons/>
                            </div>
                        </div>
                </div>
        
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

export default TaskPage;
