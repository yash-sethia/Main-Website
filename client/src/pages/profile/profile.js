import React from "react"
import "../../font-awesome/css/font-awesome.min.css"
import "../../Css/profile/MainBody.css"
import UserData from "../../data/ProfileData"
import CoverImage from "./MainBody/CoverImage"
import Box1 from "./MainBody/Box1"
import Box2 from "./MainBody/Box2"
import Box3 from "./MainBody/Box3"
import LoadingAnimation from '../../shared/loading'


class Profile extends React.Component {
    constructor(props){
      super(props);
      this.enableMessage = this.enableMessage.bind(this);
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

        isLoading: true
      };

      this.timer = setTimeout(this.enableMessage,4000);

    }

    componentWillUnmount() {
      clearTimeout(this.timer);
    }
  
    enableMessage() {
      this.setState({
        isLoading: false,
        id: UserData[0].id,
        name: UserData[0].name,
        nickName: UserData[0].nickName,
        profileImage: UserData[0].profileImage,
        coverImage: UserData[0].coverImage,
        city: UserData[0].city,
        country: UserData[0].country,
        email: UserData[0].email,
        facebookId: UserData[0].facebookId,
        twitterId: UserData[0].twitterId,
        linkedinId: UserData[0].linkedinId,
        aboutMe: UserData[0].aboutMe,
        aiRating: UserData[0].aiRating,
        reviewRating: UserData[0].reviewRating,
        SkillliesEarned: UserData[0].SkillliesEarned,
        badgesReceived: UserData[0].badgesReceived
      });
    }


    render(){
      const pageIsLoading = <LoadingAnimation />
        

      const pageIsNotLoading = 
          <div className="profile">
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
