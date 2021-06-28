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
                  <div className="badge1">
                    <div className="Bagdes-Heading">Articles Written</div>
                    <div className="Badge-data"> {this.props.data.articleCount}</div>
                  </div>

                  <div className="badge2">
                    <div className="Bagdes-Heading">Reviews Recieved</div>
                    <div className="Badge-data"> {this.props.data.reviewsGot}</div>
                  </div>

                  <div className="badge3">
                    <div className="Bagdes-Heading">Reviews Given</div>
                    <div className="Badge-data"> {this.props.data.reviewsDone}</div>
                  </div>
                </div>
            </div>
        );
    }
}
export default Box2
