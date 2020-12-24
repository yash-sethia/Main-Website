import React from 'react';
import { Grid } from '@material-ui/core';

class LeftGridTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="left-grid-tile">
            <Grid container xs={12} spacing={1}>

                <div className="genre-articles">
                        <Grid item md={12} xs={4}>
                            <img className="genre-article-image" src={this.props.image} alt="" />
                        </Grid>

                        <Grid item md={12} xs={8}>
                            <div className="left-grid-content">
                                <div className="genre-article-heading">
                                    {this.props.title}
                                </div>

                                <div className="genre-article-text">
                                    {this.props.metaText}
                                </div>

                                <div className="genre-article-details">
                                    <div className="genre-article-date">
                                        {this.props.date}
                                    </div>
                                    <div className="genre-article-read-time">
                                        {this.props.readTime}
                                    </div>
                                </div>
                            </div>
                        </Grid>
                </div>

            </Grid>
        </div>
    );
  }
}
export default LeftGridTile;
