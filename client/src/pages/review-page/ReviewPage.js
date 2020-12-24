import React, { Component } from 'react';
import "../../font-awesome/css/font-awesome.min.css"
import '../../Css/review-page/MainBody.css';
import ArticleData from "../../data/ArticleData.js"
import HeaderText from "./Mainbody-Review-Page/HeaderText.js"
import LoadingAnimation from '../../shared/loading'

class ReviewPage extends Component {
    constructor(){
        super();
        this.enableMessage = this.enableMessage.bind(this);
        this.state = {
            id: 0,
            articleHeading: "",
            articleThumbnail: "",
            articleContent: "",
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
            id: ArticleData[0].id,
            articleHeading: ArticleData[0].articleHeading,
            articleThumbnail: ArticleData[0].articleThumbnail,
            articleContent: ArticleData[0].articleContent
        });
      }

    render() {

        const pageIsLoading = <LoadingAnimation />
        

        const pageIsNotLoading = 
                <div className="main-body-reviewpage">
                    <div className="flex-container-reviewpage">

                        <HeaderText
                            articleHeading={this.state.articleHeading}
                            articleSubHeading={this.state.articleSubHeading}
                            articleThumbnail={this.state.articleThumbnail}
                        />

                        <div className="article-text-reviewpage">
                            {this.state.articleContent}
                        </div>

                        <a href="#" className="button-reviewpage">Review Now</a>

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
