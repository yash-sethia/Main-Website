import React from "react"

class Readability extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            parameterName: props.name
        }

    }
    render() {
        return (
            <div className="graph-box">
                {this.state.parameterName}
            </div>           
        );
    }
}

export default Readability
