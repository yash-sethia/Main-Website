import React, {useContext} from 'react';
import data from '../../data/PortfolioData';
import '../../Css/portfolio/index.css';
import '../../Css/portfolio/profileIntro.css';
import '../../Css/portfolio/articleGrid.css';
import '../../Css/portfolio/profileIntro.css';
import { Component } from 'react';
import ProfileIntroduction from './Components/ProfileIntro/profileIntro';
import ArticleGrid from './Components/ArticleGrid/userArticleGrid';
import LoadingAnimation from '../../shared/loading'

import { UserContext } from '../AuthContext';

import axios from 'axios';

class Portfolio extends Component {
  constructor (props) {
    super(props);
    this.state= {
      // id : data[0].id,
      id: this.props.match.params.id,
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

  }

  componentDidMount() {
    const id = this.state.id;
    console.log("Hello from portfolio = ", this.props)
    axios.get('/api/users/' + id).then(res => {
      console.log("Res from users is as follows : ", res.data.userData[0]);
      console.log("Res from users is as follows : ", res.data.userData[0].city);
      this.setState({
        isLoading: false,

        id: res.data.userData[0]._id,
        name: res.data.userData[0].name,
        dp: res.data.userData[0].displayPicture,
        cover: res.data.userData[0].coverImage == undefined ? "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg": res.data.userData[0].coverImage,
        bio: res.data.userData[0].bio == undefined ? "Writer, Thinker, Human. Unapologetic feminist. Fan of incomplete sentences. Writer & content marketing speacilist at Skillly. Freelance Writer for Hire.": res.data.userData[0].bio,
        city: res.data.userData[0].city == undefined ? "Not Available": res.data.userData[0].city,
        country: res.data.userData[0].country,
        email: res.data.userData[0].email,
        facebook: res.data.userData[0].facebookId == undefined ? "https://www.linkedin.com/in/yash-sethia/": res.data.userData[0].facebookId,
        twitter: res.data.userData[0].twitterId == undefined ? "https://www.linkedin.com/in/yash-sethia/": res.data.userData[0].twitterId,
        linkedin: res.data.userData[0].linkedinId == undefined ? "https://www.linkedin.com/in/yash-sethia/": res.data.userData[0].linkedinId,

        articleData: res.data.articleData == undefined ? "" : res.data.articleData,
        articleCount: res.data.articleData == undefined ? 0 : res.data.articleData.length
      })
    })
    .catch(err => console.log("Error from portfolio : ", err))
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
                articles = {this.state.articleData}
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
