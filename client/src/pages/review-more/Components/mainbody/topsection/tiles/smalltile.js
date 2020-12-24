import React from 'react';

class SmallTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="small-tile">
            <div class="small-tile-articles">
                <img class="small-tile-articles-image" src={this.props.image} alt="" />

                <div class="small-tile-article-content">
                    <div class="small-tile-article-content-heading">
                        {this.props.title}
                    </div>

                    <span class="small-tile-article-content-text">
                        {this.props.metaText}
                    </span>

                    <div class="small-tile-article-content-details">
                        <div class="small-tile-article-content-date">
                            {this.props.date}
                        </div>
                        <div class="small-tile-article-content-length">
                            {this.props.readTime}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
export default SmallTile;
