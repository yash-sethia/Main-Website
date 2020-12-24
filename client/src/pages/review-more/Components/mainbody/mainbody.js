import React from 'react';
import Topgrid from './topsection/topgrid';
import Bottomgrid from './bottomsection/bottomgrid';


class Mainbody extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div id="main-body">
                <Topgrid />
                <Bottomgrid />
            </div>
        );
    }
}
export default Mainbody;
