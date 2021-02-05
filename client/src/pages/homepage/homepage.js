import React from 'react';
import MainPage from './Components/MainPage';
import '../../Css/homepage/homepage.css';
import LoadingAnimation from '../../shared/loading'

class homepage extends React.Component {
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
                <MainPage />
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
export default homepage;
