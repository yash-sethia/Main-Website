import React from 'react';
import Mainody from './Components/mainbody/mainbody';
import '../../Css/review-more/review-more.css';
import LoadingAnimation from '../../shared/loading'
import Header from '../../shared/Header';
import Sidebar from '../../shared/Sidebar';

class ReviewMore extends React.Component {
    constructor() {
        super();
        this.enableMessage = this.enableMessage.bind(this);

        this.state = {
            isLoading: true
        };
        this.timer = setTimeout(this.enableMessage,1000);
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
      }
    
    enableMessage() {
    this.setState({isLoading: false});
    }

    render() {
        const pageIsLoading = <LoadingAnimation />
        

        const pageIsNotLoading =  
                <div>
                    <Header/>
                    <Sidebar/>
                    <Mainody />
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
export default ReviewMore;
