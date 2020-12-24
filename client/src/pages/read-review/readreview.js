import React from "react";
import LoadingAnimation from '../../shared/loading'
import ReviewBox from './Components/reviewbox';
import data from '../../data/readreview'
import '../../Css/read-review/readreview.css'
import { NavLink } from 'react-router-dom'

class ReadReview extends React.Component {

    constructor() {
        super();
        this.enableMessage = this.enableMessage.bind(this);
        this.state = {
            isLoading: true
        }

        this.timer = setTimeout(this.enableMessage,100);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
      }

    enableMessage() {
        this.setState({displayMessage: true, isLoading: false});
    }

    render() {
        const pageIsLoading = <LoadingAnimation />

        var ctr = 0;
        const reviewBoxCallingArray = data.map((item) =>{
            ctr++;
            return(<ReviewBox key = {item.id} reviewNumber = {ctr} questions = {item.questions} answers = {item.answers} image = {item.image} />);
        })


        const pageIsNotLoading =
                    <div>
                        <div className="total-grid-read-review">
                            <div className="headings">

                                <div className="article-topic">
                                    <h1>Dunk of the Dunkin</h1>
                                </div>

                                <div className="sub-nav" id="task-nav-read-review">
                                    <NavLink to="/analytics" >OVERVIEW</NavLink>
                                    <NavLink to="/readreview" className="active">REVIEW</NavLink>
                                    <NavLink to="/airating">AI REVIEW</NavLink>
                                    <NavLink to="/engagement">ENGAGEMENT</NavLink>
                                </div>

                            </div>

                        </div>

                        <div className="read-reviews">
                            <div className="content-box-review-box">
                                {reviewBoxCallingArray}
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

export default ReadReview;
