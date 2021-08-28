import React, { Component } from 'react';
import '../../Css/review-page/MainBody.css';
import ArticleData from "../../data/ArticleData.js"
import HeaderText from "./Mainbody-Review-Page/HeaderText.js"
import LoadingAnimation from '../../shared/loading';
import { Link } from "react-router-dom";
import parse from 'html-react-parser';

import axios from 'axios';

class ReviewPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            taskId: this.props.match.params.taskId,
            articleHeading: "",
            articleThumbnail: "",
            articleContent: "",
            isLoading: true
        };


      }
      componentDidMount() {
          axios.get(`/api/reviewarticle/${this.state.taskId}`).then(res => {
              this.setState({
                id: res.data.articleData._id,
                articleHeading: res.data.articleData.articleTitle,
                articleThumbnail: res.data.articleData.articleImages,
                articleContent: res.data.articleData.articleContent,
                isLoading: false
              })
          })
          .catch(err => console.log("Error from read review : ", err))
      }
    
      enableMessage() {
        this.setState({
            isLoading: false,
            id: ArticleData[0].id,
            articleHeading: ArticleData[0].articleHeading,
            articleThumbnail: ArticleData[0].articleThumbnail,
            articleContent: ArticleData[0].articleContent
        });
      }

    render() {

        console.log("From Read Review ",this.state);

        const pageIsLoading = <LoadingAnimation />
        

        const pageIsNotLoading = 
                <div className="main-body-reviewpage">
                    <div className="flex-container-reviewpage">

                        <HeaderText
                            articleHeading={this.state.articleHeading}
                            articleSubHeading={this.state.articleSubHeading}
                            articleThumbnail={this.state.articleThumbnail}
                        />

                        <div className="article-text-reviewpage" style={{color: 'black'}}>
                            {parse(this.state.articleContent)}
                        </div>

                        <Link 
                            to={{
                            pathname: '/RatingSlider',
                            state: {
                                articleId: this.state.id,
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
