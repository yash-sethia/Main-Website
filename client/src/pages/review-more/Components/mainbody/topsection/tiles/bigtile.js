import React from 'react';

class BigTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="big-tile">
            <div className="big-tile-article">

                <img className="big-tile-article-image" src= {this.props.image} alt = "" />

                <div className="big-tile-article-heading">
                    {this.props.title}
                </div>

                <div className="big-tile-article-text">
                    {this.props.metaText}
                </div>

                <div className="big-tile-article-details">
                    
                    <div className="big-tile-article-date">
                        {this.props.date}
                    </div>

                    <div class="big-tile-article-length">
                        {this.props.readTime}
                    </div>

                </div>
            </div>
        </div>
    );
  }
}
export default BigTile;
