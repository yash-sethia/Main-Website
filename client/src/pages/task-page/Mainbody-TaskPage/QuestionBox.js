import React, { Component } from 'react';
import "../../../Css/task-page/QuestionBox.css"

function QuestionBox(props) {
        return (
                            <div className="question-box">

                                <div className="question-heading">
                                    {props.QuestionHeading}
                                </div>

                                <div className="question-text">
                                    {props.QuestionText}
                                </div>
                                
                            </div>
        );
}

export default QuestionBox;
