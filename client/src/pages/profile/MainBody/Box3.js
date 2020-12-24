import React from "react"
import "../../../Css/profile/Box3.css"
class Box3 extends React.Component {
render() {
        return (
            <div>
            <div className="Box-3">
                <div className="About-Me-Heading">
                    About Me
                </div>
                <div className="About-Me-Details">
                    <p>
                        {this.props.data.aboutMe}
                    </p>
                </div>
            </div>
            </div>
        );
    }
}
export default Box3
