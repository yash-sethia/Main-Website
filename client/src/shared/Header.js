import React, {useContext} from "react"
import UserData from "../data/UserData.js";
import { UserContext } from '../pages/AuthContext';
import Button from '@material-ui/core/Button';
import logo from '../images/logo.svg';

import "./Header.css"

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0,
      name: props.name,
      logout: props.logout
    };
  }
  render(){
    console.log("Header : ", this.props)
    // this.state = UserData[0]

    return (
        <div id="topnav">
            <img className="mainLogo" src={logo}/>
            <div className="dropdown">
              {/* <a id="profile"><img id="profile-image" src={this.state.profileImage} alt="your-image" /></a> */}
              <a id="name">{this.state.name}</a>
              <Button className="Logout" color="primary" onClick={() => {
                      this.state.logout({username: "", id: "", isAuth: false});
                      window.location.href = "/";
                  }}>Logout</Button>
              <div className="dropdown-content">
                {/* <ul>
                  <li>option 1</li>
                  <li>option 1</li>
                  <li>option 1</li>
                  <li>option 1</li>
                </ul> */}
              </div>
            </div>
            {/* <a id="notifications"><i className="fa fa-bell fa-lg" aria-hidden="true"></i></a>
            <a id="search"><i className="fa fa-search fa-lg" aria-hidden="true"></i></a> */}
        </div>
    )
  }
}

const HeaderFunc = (props) => {
  const [user, setUser] = useContext(UserContext);

  console.log("Hello There Genius : ", user);

  return(<Header name={user.username} logout={setUser} />)

}

export default HeaderFunc;
