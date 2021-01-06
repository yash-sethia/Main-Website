import React from "react";
import LoadingAnimation from '../../shared/loading'
import ReviewBox from './Components/reviewbox';
import '../../Css/read-review/readreview.css'
import { NavLink } from 'react-router-dom'

import axios from'axios';

class ReadReview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articleId: props.articleId,
            isLoading: true,
            reviewData: []
        }
    }

    componentDidMount() {
        const articleId = this.state.articleId
        // console.log("Article ID = ", articleId)
        axios.get(`api/reviews/${articleId}`).then(res => {
            this.setState({
                reviewData: res.data.reviewData,
                isLoading: false
            })

            // console.log("Res = : ", res);
            // console.log(this.state)
        })
    }
    render() {
        const pageIsLoading = <LoadingAnimation />

        var ctr = 0;
        const reviewBoxCallingArray = this.state.reviewData.map((item) =>{
            ctr++;
            return(<ReviewBox key = {item._id} reviewNumber = {ctr} positiveAnswer = {item.positiveReview} negativeAnswer={item.negativeReview} image = "https://media.istockphoto.com/vectors/cute-tiger-face-emoticon-emoji-showing-sad-face-expression-vector-id903164224" />);
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
