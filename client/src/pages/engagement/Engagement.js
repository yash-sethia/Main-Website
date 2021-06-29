import React from "react"
import EngagementStructure from "./EngagementStructure.js"
import EngagementData from '../../data/EngagementData.js'
import LoadingAnimation from '../../shared/loading'

import axios from 'axios'


class Engagement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articleId: "5fff4eeb434cb74e48b7f968",
            engagementdata: [],
            isLoading: true
        };

        // this.timer = setTimeout(this.enableMessage,1000);
    }

    componentDidMount() {
        const articleId = this.state.articleId;
        // console.log("Article ID = ", articleId)
        axios.get(`api/enagagement/${articleId}`).then(res => {
            console.log("Hi there from enagements : ", res.data)
            var totalReads = Math.ceil(res.data.EngagementData.reviews.length * 1.5);          {/*************** SCAM ***************/}
            var varGIF1 = 0, varGIF2 = 0, varGIF3 = 0, varGIF4 = 0, varGIF5 = 0;
            res.data.EngagementData.reviews.map(review => {
                if(review.rating < 1) {
                    varGIF1++
                }
                else if(review.rating < 2) {
                    varGIF2++;
                }
                else if(review.rating < 3) {
                    varGIF3++;
                }
                else if(review.rating < 4) {
                    varGIF4++;
                }
                else {
                    varGIF5++;
                }
            })
            this.setState({
                engagementdata: [{
                    id: 1,
                    reads: totalReads,
                    gif1: varGIF1,
                    gif2: varGIF2,
                    gif3: varGIF3,
                    gif4: varGIF4,
                    gif5: varGIF5,
                    reviews: res.data.EngagementData.overallReviewRating
                }],
                isLoading: false
            })
        })
    }

    // componentWillUnmount() {
    //     clearTimeout(this.timer);
    // }
    
    
    

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
