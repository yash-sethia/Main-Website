import React from "react";
import facebook from "../../../../images/facebook.png"
import linkedin from "../../../../images/linkedin.png"
import twitter from "../../../../images/twitter.png";

function profileIntroduction(props) {
    console.log(props.displayPicture);

    // This function gets a object userInfo as a prop from App.js

    return (
        <div className="profile-intro">

            {/* Cover Image */}

            <div className="profile-cover">
                <img className="cover-image" src={props.coverImage} alt="" />
            </div>

            {/* Box that contains basic infomation of user */}

            <div className = "flex-container">
                {/* Profile Picture */}
                <img className="profile-img" src={props.displayPicture} alt="Profile Picture" />

                {/* User Information */}

                <div className="profile-details">

                    <div className="profile-name">
                        {props.name}
                    </div>

                    <div className="profile-bio">
                        {props.bio}
                    </div>


                    <div className="profile-location">
                        {props.city}, {props.country}
                    </div>


                    <div className="profile-email">
                         CONTACT: <a href="commonstartup@gmail.com"> {props.email} </a>
                    </div>

                </div>

                {/* Social Media Handles */}

                <div className="profile-social-media">

                    <a href={props.facebookId} target="_blank">
                        <img className="social-links"  src={facebook} alt="Facebook" />
                    </a>

                    <a href={props.twitterId} target="_blank">
                        <img className="social-links" src={twitter} alt="Twitter" />
                    </a>

                    <a href={props.linkedinId} target="_blank">
                        <img className="social-links"  src={linkedin} alt="LinkedIn" />
                    </a>

                </div>

            </div>

        </div>
    );
}


export default profileIntroduction
