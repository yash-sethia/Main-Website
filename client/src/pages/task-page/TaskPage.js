import React, { Component } from 'react';
import "../../font-awesome/css/font-awesome.min.css";
import "../../Css/task-page/MainBody.css";
import Buttons from "./Mainbody-TaskPage/Buttons.js";
import QuestionBox from "./Mainbody-TaskPage/QuestionBox.js";
import Questions from "../../data/Questions.js";
import LoadingAnimation from '../../shared/loading';

import axios from 'axios';


class TaskPage extends Component {
    constructor(props){
        super(props);
        this.enableMessage = this.enableMessage.bind(this);
        this.state = {
            QuestionHeading : "",
            QuestionText: "",
            isLoading: true,
            taskId: props.taskId
        };
        this.timer = setTimeout(this.enableMessage,1000);
      }

      componentWillUnmount() {
        clearTimeout(this.timer);
      }

      componentDidMount() {
        axios.get(`api/tasks/${this.state.taskId}`).then(res => {
          this.setState({
            isLoading: false,
            QuestionHeading: res.data.taskData.taskName,
            QuestionText: res.data.taskData.taskDesc             // Check the name of this field
          })
        })
      }
    
      enableMessage() {
        // this.setState({
        //     isLoading: false,
        //     QuestionHeading: Questions[0].QuestionHeading,
        //     QuestionText: Questions[0].QuestionText
        // });
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
