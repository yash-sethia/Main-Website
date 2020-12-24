import React from 'react';
import { Grid } from '@material-ui/core';
import data from '../../../../../../data/review-more-data/leftGridArticles';
import LeftGridTile from './tiles/leftGridTile'

class Leftgrid extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    
    const leftGridTilesCallTechnology = data.map(item => {
      if(item.genre=="technology") {
        return(
            <Grid item xs={12} md={6} lg={3}>
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
          <Grid item xs={12} md={6} lg={3}>
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
          <Grid item xs={12} md={6} lg={3}>
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
        <Grid item xs={12} md={6} lg={3}>
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
                  / Tecnology / 
                </div>

                <Grid container spacing={2}>
                  {leftGridTilesCallTechnology}
                </Grid>
              </Grid>

              <Grid item xs={12} className="genre">

                <div class="genre-heading"> 
                  / Business / 
                </div>

                <Grid container spacing={2}>
                  {leftGridTilesCallBusiness}
                </Grid>

              </Grid>


              <Grid item xs={12} className="genre">

                <div class="genre-heading"> 
                  / lifestyle / 
                </div>

                <Grid container spacing={2}>
                  {leftGridTilesCallLifestyle}
                </Grid>
              </Grid>

              <Grid item xs={12} className="genre">

                <div class="genre-heading"> 
                  / Science / 
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
