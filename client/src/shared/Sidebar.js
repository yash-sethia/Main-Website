import React from "react"
import "./Sidebar.css"
import "../font-awesome/css/font-awesome.min.css"
import { NavLink, Link } from "react-router-dom";


class Sidebar extends React.Component {
  constructor(){
    super();
    this.state = {
      isSidebarOpen: false,
      sidebarClass: "sidenav",
    };
    this.onClickSidebarOpen = this.onClickSidebarOpen.bind(this)
  }
  onClickSidebarOpen(){
    this.setState(prevState => {
      if(!prevState.isSidebarOpen)
        {
          return {
            isSidebarOpen: true,
            sidebarClass: "sidenavOpen",
          }
        }
        else if(prevState.isSidebarOpen)
          {
            return {
              isSidebarOpen: false,
              sidebarClass: "sidenav",
            }
          }
    })
  }
  render(){
    return (
      <div className={this.state.sidebarClass} >
        <ul>
          <span onClick={this.onClickSidebarOpen} className="hamburger">
            <li className="hamburger"><a>
              <span className="icons"><i className="fa fa-bars" aria-hidden="true"></i></span>
              </a>
            </li>
          </span>

          <span>
            <li className="sidenav-item">
              <NavLink to="/">
                <span className="icons"><i className="fa fa-home" aria-hidden="true"></i></span>
                <span className="options">SkillBoard</span>
              </NavLink>
            </li>
            <li className="sidenav-item">
              <Link to = "/Analytics">
                <span className="icons"><i className="fa fa-pie-chart" aria-hidden="true"></i></span>
                <span className="options">Analytics</span>
              </Link>
            </li>
            <li className="sidenav-item">
              <NavLink to="/Review-more">
                <span className="icons"><i className="fa fa-search" aria-hidden="true"></i></span>
                <span className="options">ReviewMore</span>
              </NavLink>
            </li>
            <li className="sidenav-item">
              <NavLink to="/profile">
                <span className="icons"><i className="fa fa-user" aria-hidden="true"></i></span>
                <span className="options">Profile</span>
              </NavLink>
            </li>
            <li className="sidenav-item">
              <NavLink to ="/portfolio" target ="_blank" >
                <span className="icons"><i className="fa fa-address-book" aria-hidden="true"></i></span>
                <span className="options">Portfolio</span>
              </NavLink>
            </li>
          </span>
        </ul>
      </div>
    )
  }
}
export default Sidebar
