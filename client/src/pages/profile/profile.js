import React from "react"
import "../../font-awesome/css/font-awesome.min.css"
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
        isLoading: true
      };
    }

    componentDidMount() {
      var username = "Khaleesi";
      axios.get(`api/profile/${username}`).then(res => {
        console.log("This is profile data read : ", res.data);
        this.setState({
          isLoading: false,
          id: res.data.UserData[0]._id,
          name: res.data.UserData[0].name,
          nickName: res.data.UserData[0].username,
          profileImage: res.data.UserData[0].displayPicture,
          coverImage: res.data.UserData[0].coverImage,
          city: res.data.UserData[0].city,
          country: res.data.UserData[0].country,
          email: res.data.UserData[0].email,
          facebookId: res.data.UserData[0].facebookId,
          twitterId: res.data.UserData[0].twitterId,
          linkedinId: res.data.UserData[0].linkedinId,
          aboutMe: res.data.UserData[0].bio,
          aiRating: res.data.UserData[0].aiRating,
          reviewRating: res.data.UserData[0].reviewRating,
          SkillliesEarned: res.data.UserData[0].skilliesEarned,
          badgesReceived: res.data.UserData[0].badgesReceived
        })
      })
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
