import React from 'react';
import RightGridTile from './tiles/rightGridTile'
import dat from '../../../../../../data/review-more-data/rightGridArticles';
import { useReadingTime } from "react-hook-reading-time";

import axios from 'axios';

class Rightgrid extends React.Component {
  constructor() {
    super();
    this.state = {
        data: dat
    };
  }

  componentDidMount() {
    axios.get('/api/reviewmore/rightgrid').then(res => {
        var r = 0;
        console.log("Hemlo sir: ", res.data.articleData);
        var adata = res.data.articleData.map(item => {
            r++;
            console.log("So : ", item);
            var d = new Date()
            const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sept", "Oct", "Nov", "Dec"];
            var ans = d.getDate() + " " + mon[d.getMonth()] + " " + d.getFullYear();
            const { text } = useReadingTime(item.articleContent);
            // var stripedHtml = cleanHtml.replace(/<[^>]+>/g, '');
            var str = item.articleContent.replace(/<[^>]+>/g, '');
            return({
                id: item._id,
                rank: r,
                title: item.articleTitle,
                image: item.articleImages,
                metaText: str.substring(0, 71) + "....",
                date: ans,
                readTime: text
            })
        });
        this.setState({
            data: adata
        })
    })

  }

  render() {
      const { data } = this.state;
      const rightGridTilesCall = data.map(item => {
          return(
              <RightGridTile
                id={item.id}
                rank={item.rank}
                title={item.title}
                metaText={item.metaText}
                date={item.date}
                readTime={item.readTime}
                image={item.image} 
              />
          );
      });
    return (
        <div className="right-grid">

            <span className="grid-head">
                Trending on SKILLY
            </span>

            <div class="grid-container-2">
                {rightGridTilesCall}
            </div>
        </div>
    );
    } 
}
export default Rightgrid;
