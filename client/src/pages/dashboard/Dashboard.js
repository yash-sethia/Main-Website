import React from "react"
import "../../font-awesome/css/font-awesome.min.css"
import '../../Css/dashboard/Dashboard.css'
import LoadingAnimation from '../../shared/loading'
import TaskTileGrid from './taskTilesGrid'
import data from '../../data/DashboardData'

class Dashboard extends React.Component {
    constructor() {
        super();
        this.enableMessage = this.enableMessage.bind(this);
        this.state = {
          displayMessage: false,
          isLoading: true,
          articleinfo: data
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

        const pageIsLoading = <LoadingAnimation />


        const pageIsNotLoading =

            <div className="total-grid" >

              <div className="headings">
                <h1>Your Tasks</h1>

                <div className="sub-nav" id="task-nav">
                  <a href="#all" className="active">ALL</a>
                  <a href="#Started">STARTED</a>
                  <a href="#Completed">COMPLETED</a>
                  <a href="#ondisplay">ON DISPLAY</a>

                </div>
              </div>

              <TaskTileGrid articleinfo={this.state.articleinfo} />
            </div>;

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

export default Dashboard
