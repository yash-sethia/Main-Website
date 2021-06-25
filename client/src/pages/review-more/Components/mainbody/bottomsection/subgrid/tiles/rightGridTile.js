import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from "react-router-dom";

class RightGridTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
            <div className="right-grid-tile">
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to = {`/review-article/${this.props.id}`}>
                <div class="trending-articles">
                    <div class="rank">
                        {"#" + this.props.rank}
                    </div>

                    <div class="trending-article-content">
                        <div class="trending-article-content-heading">
                            {this.props.title}
                        </div>

                        <span class="trending-article-content-text">
                            {this.props.metaText}
                        </span>

                        <div class="trending-article-content-details">
                            <div class="trending-article-content-date">
                                {this.props.date}
                            </div>
                            <div class="trending-article-content-length">
                                {this.props.readTime}
                            </div>
                        </div>
                    </div>

                    <img className="trending-articles-image" src={this.props.image} alt="" />
                    
                </div>
                </Link>
            </div>
            
    );
  }
}
export default RightGridTile;
