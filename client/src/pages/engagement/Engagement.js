import React from "react"
import "../../font-awesome/css/font-awesome.min.css"
import EngagementStructure from "./EngagementStructure.js"
import EngagementData from '../../data/EngagementData.js'
import LoadingAnimation from '../../shared/loading'


class Engagement extends React.Component {

    constructor(props) {
        super(props);

        this.enableMessage = this.enableMessage.bind(this);
        this.state = {
          engagementdata: EngagementData,
          isLoading: true
        };

        this.timer = setTimeout(this.enableMessage,1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    
      enableMessage() {
        this.setState({displayMessage: true, isLoading: false});
    }

    
    

    render() {
        const engagementpage = this.state.engagementdata.map((engagementpagedata) => {
            return (
            <EngagementStructure engagementpagedata={engagementpagedata}/>
            );
        });

        const pageIsLoading = <LoadingAnimation />
        

        const pageIsNotLoading = 
                <div>
                    {engagementpage}
                </div>;


        let pageContent

        if(this.state.isLoading) {
            pageContent = pageIsLoading;
        }
        else {
            pageContent = pageIsNotLoading;
        }

        return (
            pageContent
        );
    }
}

export default Engagement
