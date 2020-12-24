import React from "react";
import data from '../../data/AiRatingData';
import Readability from './Components/parameter';
import ComparisonGraph from './Components/comparisonGraph';
import '../../Css/AiRatings/AiRating.css'
import LoadingAnimation from '../../shared/loading'
import { NavLink, Link } from "react-router-dom";

class AiRating extends React.Component {

    constructor() {
        super();
        this.enableMessage = this.enableMessage.bind(this);
        this.state = {
            taskTitle: data.taskTitle,
            isLoading: true
        }

        this.timer = setTimeout(this.enableMessage,1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
      }

    enableMessage() {
        this.setState({displayMessage: true, isLoading: false});
    }

    render() {
        const pageIsLoading = <LoadingAnimation />


        const pageIsNotLoading =

        <div className="ai-rating-total-grid">

                <div className="ai-rating-headings">
                    <div className="article-topic-ai-rating">
                        <h1>Dunk of the Dunkin {this.state.taskTitle} </h1>
                    </div>

                    <div id="task-nav-ai-rating">
                      <NavLink to="/analytics" >OVERVIEW</NavLink>
                      <NavLink to="/readreview">REVIEW</NavLink>
                      <NavLink to="/airating" className="active">AI REVIEW</NavLink>
                      <NavLink to="/engagement">ENGAGEMENT</NavLink>
                    </div>

                </div>

                <div className="parameters">
                    <div className="ai-rating-sub-grid">
                                <div className="box1">
                                    <Readability name="Readability" />
                                </div>


                                <div className="box2">
                                    <Readability name="Readability" />
                                </div>


                                <div className="box3">
                                    <Readability name="Readability" />
                                </div>


                                <div className="box4">
                                    <Readability name="Readability" />
                                </div>
                    </div>
                </div>

                <div className="comp-graph">
                    <ComparisonGraph />
                </div>
        </div>;

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

export default AiRating
