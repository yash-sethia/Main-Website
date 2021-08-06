import React, {useContext} from "react"
import UserData from "../data/UserData.js";
import { UserContext } from '../pages/AuthContext';
import Button from '@material-ui/core/Button';
import logo from '../images/logo.svg';
import { Link } from "react-router-dom";

import "./viewArticleHeader.css"

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
        <div id="topnav2">
            <Link to="/"><img className="mainLogo2" src={logo}/></Link>
            <div className="dropdown">
              <div className="dropdown-content">
              </div>
            </div>
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
