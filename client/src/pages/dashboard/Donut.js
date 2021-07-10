import React from "react"
import axios from "axios";
import Donutchart from './Donutchart'


class Donut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
      // props copied
        return (
            <div>
                <Donutchart />
            </div>
            
        );
    }
}

export default Donut