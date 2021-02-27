import React from "react"
import "../font-awesome/css/font-awesome.min.css"
import UserData from "../data/UserData.js"

import "./Header.css"

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      id: 0,
      name: "",
      profileImage: "",
    };
  }
  render(){

    this.state = UserData[0]

    return (
        <div id="topnav">
            <i className="fa fa-star fa-lg" aria-hidden="true" id="logo">  SKILLY</i>
            <div className="dropdown">
              <a id="profile"><img id="profile-image" src={this.state.profileImage} alt="your-image" /></a>
              <a id="name">{this.state.name}</a>
              <div className="dropdown-content">
                <ul>
                  <li>option 1</li>
                  <li>option 1</li>
                  <li>option 1</li>
                  <li>option 1</li>
                </ul>
              </div>
            </div>
            <a id="notifications"><i className="fa fa-bell fa-lg" aria-hidden="true"></i></a>
            <a id="search"><i className="fa fa-search fa-lg" aria-hidden="true"></i></a>
        </div>
    )
  }
}
export default Header
