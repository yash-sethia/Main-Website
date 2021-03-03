import React, { Component } from 'react';
import "../../font-awesome/css/font-awesome.min.css";
import "../../Css/task-page/MainBody.css";
import Buttons from "./Mainbody-TaskPage/Buttons.js";
import QuestionBox from "./Mainbody-TaskPage/QuestionBox.js";
import LoadingAnimation from '../../shared/loading';

import axios from 'axios';


class TaskPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            QuestionHeading : "",
            QuestionText: "",
            isLoading: true,
            taskId: "603e7d4cf49dab101cb36398"
            //taskId: this.props.match.params.id
        };
      }


      componentDidMount() {
        //console.log("Task Page : ", props.match) 

        //******************************************************************/
        // ********************** Need to Fix this Errot *******************/
        // *************** Here We have passed the id of the task in URL****/
        // *** (Check taskrow.js Line 26) and to fetch data we need the ID */
        // ****** But I am unable to read this from the URL itself *********/
        //******************************************************************/
        // *****************************************************************/

        axios.get('api/tasks/' + this.state.taskId).then(res => {
          this.setState({
            isLoading: false,
            QuestionHeading: res.data.taskData.taskName,
            QuestionText: res.data.taskData.taskDesc             // Check the name of this field
          })
        })
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
