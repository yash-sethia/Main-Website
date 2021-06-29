import React, { Component } from 'react';
import '../../Css/review-page/MainBody.css';
import ArticleData from "../../data/ArticleData.js"
import HeaderText from "./Mainbody-Review-Page/HeaderText.js"
import LoadingAnimation from '../../shared/loading';
import { Link } from "react-router-dom";

import axios from 'axios';

class ReviewPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            articleId: this.props.match.params.articleId,
            articleHeading: "",
            articleThumbnail: "",
            articleContent: "",
            isLoading: true
        };


      }
      componentDidMount() {
          axios.get(`/api/reviewMoreArticle/${this.state.articleId}`).then(res => {
              this.setState({
                articleHeading: res.data.articleData.articleTitle,
                articleThumbnail: res.data.articleData.articleImages,
                articleContent: res.data.articleData.articleContent,
                isLoading: false
              })
          })
          .catch(err => console.log("Error from read review : ", err))
      }
    

    render() {

        console.log("From Read Review More ",this.state);

        const pageIsLoading = <LoadingAnimation />
        

        const pageIsNotLoading = 
                <div className="main-body-reviewpage">
                    <div className="flex-container-reviewpage">

                        <HeaderText
                            articleHeading={this.state.articleHeading}
                            articleThumbnail={this.state.articleThumbnail}
                        />

                        <div className="article-text-reviewpage">
                            {this.state.articleContent}
                        </div>

                        <Link 
                            to={{
                            pathname: '/RatingSlider',
                            state: {
                                articleId: this.state.articleId,
                            }
                            }}
                            className="button-reviewpage"
                        >
                            Review Now 
                        </Link>

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

export default ReviewPage;
