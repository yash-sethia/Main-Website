import React from "react";
import AnalyticsStructure from "./AnalyticsStructure.js";
import LoadingAnimation from '../../shared/loading';
import AnalyticsData from '../../data/AnalyticsData';
import Header from '../../shared/Header';
import Sidebar from '../../shared/Sidebar';

class Analytics extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            analyticsdata: AnalyticsData,
            articleId: "5fff4eeb434cb74e48b7f968",
            isLoading: false
        }
        
    }

    // componentDidMount() {
    //     const articleId = this.state.articleId;
    //     axios.get(`api/taskAnalytics/${articleId}`).then(res => {
    //         console.log("Hi there from enagements : ", res.data)
    //         this.setState(prevState => ({
    //             analyticsdata: [...prevState.analyticsdata, res.data.taskAnalytics],
    //             isLoading: false
    //         }))
    //     })
    // }


      
    render() {
        const analyticsoverview = this.state.analyticsdata.map((article) => {
            return (
            <AnalyticsStructure analyticsData={article}/>
            );
        });

        
        const pageIsLoading = <LoadingAnimation />
        

        const pageIsNotLoading = 
                <div>
                    <Header/>
                    <Sidebar/>
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
