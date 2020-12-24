import React from "react"
import "../../../Css/profile/Box2.css"
import badge from "../../../images/badge.png"
class Box2 extends React.Component {
render() {
        return (
            <div className="Box-2">
                <div className="Skilllies-Earned">
                    <div className="Skilllies-Heading">Skilllies Earned</div>
                    <div id="Skilllies-Earned">{this.props.data.SkillliesEarned}</div>
                </div>
                <div className="Bagdes-Recieved">
                    <div className="Bagdes-Heading">Badges Received</div>
                    <ul className="Badges-List">
                        <li className="Bagde">
                          <img className="Badge-Image" src={badge}/>
                          {this.props.data.badgesReceived[0]}
                        </li>
                        <li className="Bagde">
                          <img className="Badge-Image" src={badge}/>
                          {this.props.data.badgesReceived[1]}
                        </li>
                        <li className="Bagde">
                          <img className="Badge-Image" src={badge}/>
                          {this.props.data.badgesReceived[2]}
                        </li>
                        <li className="Bagde">
                          <img className="Badge-Image" src={badge}/>
                          {this.props.data.badgesReceived[3]}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Box2
