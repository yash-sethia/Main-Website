import React from 'react';
import IndividualArticle from './articleBox';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";


class userArticleGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.id,
            count : this.props.count,
            articleData: this.props.articles,
            titles : [],
            desc : [],
            images : []
        }
    }

    render() {
        if(this.state.count == 0) {
            return(
                <div className="zero-article-message">
                    I am still working on my first article on SKiLLLY. Maybe revisit in a few days?
                </div>
            );
        }

        var indArticles = this.state.articleData.map(item => {
            return (
                <Link to = {{
                        pathname: `/viewArticle/${item._id}`,
                    }}
                    className = "Individual-Article-Link"
                    target="_blank"
                    style={{textDecoration: "none"}}
                >
                    <IndividualArticle image={item.articleImages} title={item.articleTitle} description={(item.articleContent.replace(/<[^>]+>/g, '')).slice(0, 120) + "..."} />
                </ Link>
            );
        });
        
        
        return (
            <div className="articles">
                {indArticles}
            </div>
        );
    }
}


export default userArticleGrid