import React from "react"
import twitter from '../../../images/ptwitter.png';
import linkedin from '../../../images/plinkedin.png';
import facebook from '../../../images/pfacebook.png';
import "../../../Css/profile/Box1.css"
class Box1 extends React.Component {
render() {
        return (
          <div className="Box-1">
              <img className="Profile-Image" src={this.props.data.profileImage} alt="your-image" />
              <div className="User-Data">

                      <div className="Name/nickName">
                      <div className="User-Name">
                          {this.props.data.name}
                      </div>
                      <div className="User-Nickname">
                          {this.props.data.nickName}
                      </div>
                      </div>
                      <div className="reviewRating">
                      <div id="UserRating">
                          {this.props.data.aiRating}
                      </div>
                      <div className="User-Info">
                          REVIEW RATING
                      </div>
                      </div>
                      <div className="aiRating">
                      <div id="UserRating">
                          {this.props.data.reviewRating}
                      </div>
                      <div className="User-Info">
                          AI RATING
                      </div>
                      </div>
                      <div className="">
                      <div className="Social-Media-Links">
                          <a href={this.props.data.linkedinId}>
                            <img
                              id="Icons"
                              className="Limkedin-Icon"
                              src={linkedin}
                              alt="linkedin"
                            />
                          </a>
                          <a href={this.props.data.facebookId}>
                            <img
                              id="Icons"
                              className="Facebook-Icon"
                              src={facebook}
                              alt="facebook"
                            />
                          </a>
                          <a href={this.props.data.twitterId}>
                            <img
                              id="Icons"
                              className="Twitter-Icon"
                              src={twitter}
                              alt="twitter"
                            />
                          </a>
                      </div>
                      </div>
                      <div className="emailId">
                    <div id="User-Mail">
                          {this.props.data.email}
                      </div>
                      <div className="User-Info">
                          EMAIL
                      </div>
                      </div>
                      <div className="location">
                      <div id="User-Mail">
                          {this.props.data.city}
                      </div>
                      <div className="User-Info">
                          LOCATION
                      </div>
                      </div>
                  
              </div>
          </div>
        );
    }
}
export default Box1



















// <div id= "User-Data" className="User-Data-1">
//     <div className="User-Name">
//         {this.props.data.name}
//     </div>
//     <div className="User-Nickname">
//         {this.props.data.nickName}
//     </div>
//     <div className="Social-Media-Links">
//         <a href={this.props.data.linkedinId}>
//           <img
//             id="Icons"
//             className="Limkedin-Icon"
//             src={linkedin}
//             alt="linkedin"
//           />
//         </a>
//         <a href={this.props.data.facebookId}>
//           <img
//             id="Icons"
//             className="Facebook-Icon"
//             src={facebook}
//             alt="facebook"
//           />
//         </a>
//         <a href={this.props.data.twitterId}>
//           <img
//             id="Icons"
//             className="Twitter-Icon"
//             src={twitter}
//             alt="twitter"
//           />
//         </a>
//     </div>
// </div>
// <div id= "User-Data" className="User-Data-2">
//     <div id="User-Review-Rating">
//         {this.props.data.aiRating}
//     </div>
//     <div className="User-Info">
//         REVIEW RATING
//     </div>
//
//     <div id="User-Mail">
//         {this.props.data.email}
//     </div>
//     <div className="User-Info">
//         EMAIL
//     </div>
// </div>
// <div id= "User-Data" className="User-Data-3">
//     <div id="User-Review-Rating">
//         {this.props.data.reviewRating}
//     </div>
//     <div className="User-Info">
//         AI RATING
//     </div>
//
//     <div id="User-Mail">
//         {this.props.data.city}
//     </div>
//     <div className="User-Info">
//         LOCATION
//     </div>
// </div>
