import React from 'react';
import data from '../../data/PortfolioData';
import '../../Css/portfolio/index.css';
import '../../Css/portfolio/profileIntro.css';
import '../../Css/portfolio/articleGrid.css';
import '../../Css/portfolio/profileIntro.css';
import { Component } from 'react';
import ProfileIntroduction from './Components/ProfileIntro/profileIntro';
import ArticleGrid from './Components/ArticleGrid/userArticleGrid';
import LoadingAnimation from '../../shared/loading'

class Portfolio extends Component {
  constructor () {
    super();
    this.enableMessage = this.enableMessage.bind(this);
    this.state= {
      id : data[0].id,
      name : data[0].name,
      dp : data[0].displayPicture,
      cover : data[0].coverImage,
      bio : data[0].bio,
      city : data[0].city,
      country : data[0].country,
      email : data[0].email,
      facebook : data[0].facebookId,
      twitter : data[0].twitterId,
      linkedin : data[0].linkedinId,

      articleCount : data[0].articleCount,
      titles : data[0].articleTitle,
      desc : data[0].articleDesc,
      articleImgages : data[0].articleImages,

      isLoading: true

    };

    this.timer = setTimeout(this.enableMessage,1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  enableMessage() {
    this.setState({displayMessage: true, isLoading: false});
  }

  render() {

    const pageIsLoading = <LoadingAnimation />
        

    const pageIsNotLoading = 
          <div className="portfolio">
            <ProfileIntroduction
                id={this.state.id}
                name={this.state.name}
                displayPicture = {this.state.dp}
                coverImage={this.state.cover}
                bio={this.state.bio}
                city={this.state.city}
                country={this.state.country}
                email={this.state.email}
                facebookId={this.state.facebook}
                twitterId={this.state.twitter}
                linkedinId={this.state.linkedin}
            />


            <ArticleGrid
                count = {this.state.articleCount}
                titles = {this.state.titles}
                desc = {this.state.desc}
                images = {this.state.articleImgages}
            />
          </div>;

    let pageContent;

    if(this.state.isLoading) {
      pageContent = pageIsLoading;
    }
    else {
      pageContent = pageIsNotLoading;
    }

    return (
      pageContent
    );

  }
}

export default Portfolio;
