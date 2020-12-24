import React from 'react';
import RightGridTile from './tiles/rightGridTile'
import data from '../../../../../../data/review-more-data/rightGridArticles';

class Rightgrid extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
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
