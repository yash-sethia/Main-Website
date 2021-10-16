import React, { Component } from 'react';
import "../../../Css/task-page/QuestionBox.css"
import parse from 'html-react-parser';

function QuestionBox(props) {
        return (
                            <div className="question-box">

                                <div className="question-heading">
                                    {props.QuestionHeading}
                                </div>

                                <div className="question-text">
                                    {parse(props.QuestionText)}
                                    <br/>
                                    <br/>
                                    Think Read, Learn and Write!!
                                </div>
                                
                            </div>
        );
}

export default QuestionBox;
