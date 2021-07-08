import React from 'react';
import { Grid } from '@material-ui/core';
import dat from '../../../../../../data/review-more-data/leftGridArticles';
import LeftGridTile from './tiles/leftGridTile'
import { useReadingTime } from "react-hook-reading-time";

import axios from 'axios';

class Leftgrid extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dat
    };
  }

  componentDidMount() {
    axios.get('/api/reviewmore/leftgrid').then(res => {
        var r = 0;
        console.log("Hemlo sir left grid: ", res.data.articleData);
        var adata = res.data.articleData.map(item => {
            r++;
            //console.log("So : ", item);
            var d = new Date()
            const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sept", "Oct", "Nov", "Dec"];
            var ans = d.getDate() + " " + mon[d.getMonth()] + " " + d.getFullYear();
            const { text } = useReadingTime(item.articleContent);
            var str = item.articleContent.replace(/<[^>]+>/g, '');
            var gen;
            if(item.articleID.substring(25, 49) == "603e7d4cf49dab101cb36398") {
              console.log("biz");
              gen = "business";
            }
            else if(item.articleID.substring(25, 49) == "603e7d74f49dab101cb3639a") {
              console.log("tech");
              gen = "technology";
            }
            else if(item.articleID.substring(25, 49) == "603e7d7bf49dab101cb3639c") {
              console.log("life");
              gen = "lifestyle";
            }
            else if(item.articleID.substring(25, 49) == "603e7d81f49dab101cb3639e") {
              console.log("sci")
              gen = "science";
            }
            return({
                id: item._id,
                rank: r,
                title: item.articleTitle,
                image: item.articleImages,
                metaText: str.substring(0, 71) + "....",
                date: ans,
                readTime: text,
                genre: gen
            })
        });
        this.setState({
            data: adata
        })
    })

  }

  render() {
    const { data } = this.state;
    const leftGridTilesCallTechnology = data.map(item => {
      if(item.genre=="technology") {
        return(
            <Grid item xs={12} md={6} lg={4}>
              <LeftGridTile
                id={item.id}
                genre={item.genre}
                title={item.title}
                metaText={item.metaText}
                date={item.date}
                readTime={item.readTime}
                image={item.image} 
              />
            </Grid>
            );
          
      }
  });


    const leftGridTilesCallBusiness = data.map(item => {
      if(item.genre=="business") {
        return(
          <Grid item xs={12} md={6} lg={4}>
              <LeftGridTile
                id={item.id}
                genre={item.genre}
                title={item.title}
                metaText={item.metaText}
                date={item.date}
                readTime={item.readTime}
                image={item.image} 
              />
            </Grid>
        );
      }
  });


  const leftGridTilesCallLifestyle = data.map(item => {
    if(item.genre=="lifestyle") {
      return(
          <Grid item xs={12} md={6} lg={4}>
            <LeftGridTile
              id={item.id}
              genre={item.genre}
              title={item.title}
              metaText={item.metaText}
              date={item.date}
              readTime={item.readTime}
              image={item.image} 
            />
          </Grid>
      );
      
    }
  });



  const leftGridTilesCallScience = data.map(item => {
    if(item.genre=="science") {
      return(
        <Grid item xs={12} md={6} lg={4}>
          <LeftGridTile
            id={item.id}
            genre={item.genre}
            title={item.title}
            metaText={item.metaText}
            date={item.date}
            readTime={item.readTime}
            image={item.image} 
          />
      </Grid>
      );
    }
  });

    return (
        <div className="leftgrid">
          <Grid container spacing={2} className="genre-container">   
              <Grid item xs={12} className="genre">
                <div class="genre-heading"> 
                 Tecnology 
                </div>

                <Grid container spacing={2}>
                  {leftGridTilesCallTechnology}
                </Grid>
              </Grid>

              <Grid item xs={12} className="genre">

                <div class="genre-heading"> 
                 Business 
                </div>

                <Grid container spacing={2}>
                  {leftGridTilesCallBusiness}
                </Grid>

              </Grid>


              <Grid item xs={12} className="genre">

                <div class="genre-heading"> 
                   lifestyle 
                </div>

                <Grid container spacing={2}>
                  {leftGridTilesCallLifestyle}
                </Grid>
              </Grid>

              <Grid item xs={12} className="genre">

                <div class="genre-heading"> 
                   Science  
                </div>

                <Grid container spacing={2}>
                  {leftGridTilesCallScience}
                </Grid>
              </Grid>
           </Grid>
        </div>
    );
  }
}
export default Leftgrid;
