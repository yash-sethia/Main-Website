import React from 'react';
import IndividualArticle from './articleBox';
import Grid from '@material-ui/core/Grid';


class userArticleGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : this.props.count,
            titles : this.props.titles,
            desc : this.props.desc,
            images : this.props.images
        }
    }

    render() {
        var allUserArticles = [];
        for(let i = 0; i < this.state.count; i++)
        {
            allUserArticles.push(   {
                                        image : this.state.images[i],
                                        title : this.state.titles[i], 
                                        description : this.state.desc[i]
                                    } 
                                );
        }

        var indArticles = allUserArticles.map(item => <IndividualArticle image={item.image} title={item.title} description={item.description} />);
        
        
        return (
            <div className="articles">
                {indArticles}
            </div>
        );
    }
}


export default userArticleGrid