import React from 'react';
import '../../../../../Css/review-more/topsection/topgrid.css';
import dat from '../../../../../data/review-more-data/topGridArticles';
import { Grid } from '@material-ui/core';
import BigTile from './tiles/bigtile';
import SmallTile from './tiles/smalltile';
import { useReadingTime } from "react-hook-reading-time";

import axios from 'axios';


class Topgrid extends React.Component {
    constructor() {
        super();
        this.state = {
            data: dat
        };
    }

    componentDidMount() {
        axios.get('/api/reviewmore/topgrid').then(res => {
            console.log("JMD ", res.data);
            var adata = res.data.articleData.map(item => {
                console.log("So : ", item);
                var d = new Date()
                const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sept", "Oct", "Nov", "Dec"];
                var ans = d.getDate() + " " + mon[d.getMonth()] + " " + d.getFullYear();
                var str = item.articleContent.replace(/<[^>]+>/g, '');
                const { text } = useReadingTime(item.articleContent);
                return({
                    id: item._id,
                    title: item.articleTitle,
                    image: item.articleImages,
                    metaText: str.substring(0, 71) + "....",
                    date: ans,
                    readTime: text
                })
            });
            console.log("adata : ", adata);
            this.setState({
                data: adata
            })
        })
    }

    render() {
        const { data } = this.state;
        console.log("Hemlo : ", data);
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
