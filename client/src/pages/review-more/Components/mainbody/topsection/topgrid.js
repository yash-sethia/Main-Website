import React from 'react';
import '../../../../../Css/review-more/topsection/topgrid.css';
import data from '../../../../../data/review-more-data/topGridArticles';
import { Grid } from '@material-ui/core';
import BigTile from './tiles/bigtile';
import SmallTile from './tiles/smalltile';


class Topgrid extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Grid container spacing={2} className="topgrid-review-more">

                <Grid item md={4} sm={12} xs={12} className="article">
                    <BigTile
                        id={data[0].id}
                        title={data[0].title}
                        image={data[0].image}
                        metaText={data[0].metaText}
                        date={data[0].date}
                        readTime={data[0].readTime} 
                    />
                </Grid>


                <Grid item md={8} sm={12} xs={12}>

                    <Grid container spacing={2} className="topsubgrid">
                        <Grid item xs={6} className="article">
                            <SmallTile
                                id={data[1].id}
                                title={data[1].title}
                                image={data[1].image}
                                metaText={data[1].metaText}
                                date={data[1].date}
                                readTime={data[1].readTime} 
                            />

                        </Grid>

                        <Grid item xs={6} className="article">
                            <SmallTile
                                id={data[2].id}
                                title={data[2].title}
                                image={data[2].image}
                                metaText={data[2].metaText}
                                date={data[2].date}
                                readTime={data[2].readTime} 
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} className="topsubgrid">

                        <Grid item xs={6} className="article">
                            <SmallTile
                                id={data[4].id}
                                title={data[4].title}
                                image={data[4].image}
                                metaText={data[4].metaText}
                                date={data[4].date}
                                readTime={data[4].readTime} 
                            />
                        </Grid>

                        <Grid item xs={6} className="article">
                            <SmallTile
                                id={data[4].id}
                                title={data[4].title}
                                image={data[4].image}
                                metaText={data[4].metaText}
                                date={data[4].date}
                                readTime={data[4].readTime} 
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
export default Topgrid;
