import React from "react"
import "../../Css/profile/MainBody.css"
import UserData from "../../data/ProfileData"
import CoverImage from "./MainBody/CoverImage"
import Box1 from "./MainBody/Box1"
import Box2 from "./MainBody/Box2"
import Box3 from "./MainBody/Box3"
import LoadingAnimation from '../../shared/loading'
import axios from "axios"


class Profile extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        id: 0,
        name: "",
        nickName: "",
        profileImage: "",
        coverImage: "",
        city: "",
        country: "",
        email: "",
        facebookId: "",
        twitterId: "",
        linkedinId: "",
        aboutMe: "",
        aiRating: 0,
        reviewRating: 0,
        SkillliesEarned: 0,
        badgesReceived: [],
        isLoading: true,
        username: this.props.match.params.username,

        articleCount: 0,
        reviewsGot: 0,
        reviewsDone: 0
      };
    }

    componentDidMount() {
      var username = this.state.username;
      axios.get(`/api/profile/${username}`).then(res => {
        console.log("This is profile data read : ", res.data);
        this.setState({
          isLoading: false,
          id: res.data.UserData._id,
          name: res.data.UserData.name,
          nickName: res.data.UserData.username,
          profileImage: res.data.UserData.displayPicture,
          coverImage: res.data.UserData.coverImage == undefined ? "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg": res.data.UserData.coverImage, 
          city: res.data.UserData.city == undefined ? "Not Available": res.data.UserData.city, 
          country: res.data.UserData.country,
          email: res.data.UserData.email,
          facebookId: res.data.UserData.facebookId == undefined ? "https://www.linkedin.com/in/yash-sethia/": res.data.UserData.facebookId, 
          twitterId: res.data.UserData.twitterId == undefined ? "https://www.linkedin.com/in/yash-sethia/": res.data.UserData.twitterId, 
          linkedinId: res.data.UserData.linkedinId == undefined ? "https://www.linkedin.com/in/yash-sethia/": res.data.UserData.linkedinId, 
          aboutMe: res.data.UserData.bio == undefined ? "Writer, Thinker, Human. Unapologetic feminist. Fan of incomplete sentences. Writer & content marketing speacilist at Skillly. Freelance Writer for Hire.": res.data.UserData.bio, 
          aiRating: res.data.UserData.aiRating.toFixed(2), 
          reviewRating: res.data.UserData.reviewRating.toFixed(2),
          SkillliesEarned: res.data.UserData.skilliesEarned,
          articleCount: res.data.UserData.taskCount,
          reviewsGot: res.data.reviewsGot,
          reviewsDone: res.data.reviewsWritten
        })
      })
      .catch(err => console.log("From Profile Page: ", err));
    }

    render(){
      const pageIsLoading = <LoadingAnimation />
        

      const pageIsNotLoading = 
          <div className="profilePageOfUser">
              <CoverImage coverImage={this.state.coverImage} />
              <div className="grid-container" >
                  <Box1 data = {this.state} />
                  <Box2 data = {this.state} />
                  <Box3 data = {this.state} />
              </div>
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




export default Profile