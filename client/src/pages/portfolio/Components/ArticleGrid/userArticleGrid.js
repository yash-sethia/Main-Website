import React from 'react';
import IndividualArticle from './articleBox';
import Grid from '@material-ui/core/Grid';


class userArticleGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

        var indArticles = this.state.articleData.map(item => <IndividualArticle image={item.articleImages} title={item.articleTitle} description={(item.articleContent.replace(/<[^>]+>/g, '')).slice(0, 120) + "..."} />);
        
        
        return (
            <div className="articles">
                {indArticles}
            </div>
        );
    }
}


export default userArticleGrid