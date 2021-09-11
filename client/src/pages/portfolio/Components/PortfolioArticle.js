import React, { Component } from 'react';
import '../../../Css/review-page/MainBody.css';
import HeaderText from "../../review-page/Mainbody-Review-Page/HeaderText.js"
import LoadingAnimation from '../../../shared/loading';
import axios from 'axios';
import Header from '../../../shared/viewArticleHeader'
import parse from 'html-react-parser';

class PortfolioArticle extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.articleId,
            articleHeading: "this.props.location.state.title",
            articleThumbnail: "this.props.location.state.image",
            articleContent: 'this.props.location.state.content',
            isLoading: true
        };
      }

    componentDidMount() {
        const id = this.state.id;
        axios.get('/api/portfolioArticle/' + id).then(res => {
            this.setState({
                articleThumbnail: res.data.portfolio.articleImages,
                articleHeading: res.data.portfolio.articleTitle,
                articleContent: res.data.portfolio.articleContent,
                isLoading: false
            })
            console.log("yup ", this.state)
        })
        .catch(err => console.log("Error in retrieving article from Backend : ", err));
    }

    render() {

        console.log("From Portfolio Article ",this.props.location);

        const pageIsLoading = <LoadingAnimation />
        

        const pageIsNotLoading = 
        <section>
            <Header />
            <div className="main-body-reviewpage">
                    <div className="flex-container-reviewpage">

                        <HeaderText
                            articleHeading={this.state.articleHeading}
                            articleThumbnail={this.state.articleThumbnail}
                        />

                        <div className="article-text-reviewpage">
                            {parse(this.state.articleContent)}
                        </div>
                    </div>
                </div>
        </section>
                
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

export default PortfolioArticle;
