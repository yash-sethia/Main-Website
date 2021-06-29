import React, {useContext} from "react"
import "./Sidebar.css"
import { NavLink, Link } from "react-router-dom";


import { UserContext } from '../pages/AuthContext';

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isSidebarOpen: false,
      username: props.username,
      userId: props.userId,
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
              <span className="icons"><i className="fas fa-bars" aria-hidden="true"></i></span>
              </a>
            </li>
          </span>

          <span>
            <li className="sidenav-item">
              <NavLink to="/dashboard">
                <span className="icons"><i className="fas fa-home" aria-hidden="true"></i></span>
                <span className="options">SkillBoard</span>
              </NavLink>
            </li>
            <li className="sidenav-item">
              <Link to = "/Analytics">
                <span className="icons"><i className="fas fa-chart-pie" aria-hidden="true"></i></span>
                <span className="options">Analytics</span>
              </Link>
            </li>
            <li className="sidenav-item">
              <NavLink to="/Review-more">
                <span className="icons"><i className="fas fa-search" aria-hidden="true"></i></span>
                <span className="options">ReviewMore</span>
              </NavLink>
            </li>
            <li className="sidenav-item">
              <NavLink to={`/profile/${this.state.username}`}>
                <span className="icons"><i className="fas fa-user" aria-hidden="true"></i></span>
                <span className="options">Profile</span>
              </NavLink>
            </li>
            <li className="sidenav-item">
              <NavLink to = {`/portfolio/${this.state.userId}`} target ="_blank" >
                <span className="icons"><i className="fas fa-address-book" aria-hidden="true"></i></span>
                <span className="options">Portfolio</span>
              </NavLink>
            </li>
          </span>
        </ul>
      </div>
    )
  }
}

function SidebarFunc() {
  const [user, setUser] = useContext(UserContext);
  return (
    <Sidebar username = {user.username} userId = {user.id} />
  );

}


export default SidebarFunc;
