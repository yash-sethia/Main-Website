import React from "react"
import "../../font-awesome/css/font-awesome.min.css"
import AnalyticsStructure from "./AnalyticsStructure.js"
import LoadingAnimation from '../../shared/loading'
import AnalyticsData from '../../data/AnalyticsData'

class Analytics extends React.Component {

    constructor(props) {
        super(props);
        this.enableMessage = this.enableMessage.bind(this);
        
        this.state = {
            analyticsdata: AnalyticsData,
            isLoading: true
        }
        this.timer = setTimeout(this.enableMessage,1000);
        
    }


    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    
    enableMessage() {
        this.setState({isLoading: false});
    }

      
    render() {
        const analyticsoverview = this.state.analyticsdata.map((article) => {
            return (
            <AnalyticsStructure analyticsData={article}/>
            );
        });

        
        const pageIsLoading = <LoadingAnimation />
        

        const pageIsNotLoading = 
                <div>
                    {analyticsoverview}
                </div>


        let pageContent;

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

export default Analytics
