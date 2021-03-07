import React, {useContext} from "react"
import "../../font-awesome/css/font-awesome.min.css"
import '../../Css/dashboard/Dashboard.css'
import LoadingAnimation from '../../shared/loading'
import TaskTileGrid from './taskTilesGrid'
import data from '../../data/DashboardData'

import { UserContext } from '../AuthContext';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
          articleinfo: data
        };
  }


  // componentDidMount() {
  //   axios.get('api/tasks/').then(res => {
  //     this.setState({
  //       articleinfo: {
  //         cssId: res.taskData.taskId,
  //         heading: res.taskData.taskName,
  //         brief: res.taskData.taskDesc,
  //         logo: res.taskData.taskLogo
  //       }
  //     })
  //   })
  // }


    render() {

        // const pageIsLoading = <LoadingAnimation />


        // const pageIsNotLoading =

        //   ;

        // let pageContent;

        // if(this.state.isLoading) {
        //   pageContent = pageIsLoading;
        // }
        // else {
        //   pageContent = pageIsNotLoading;
        // }

        return (
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
          </div>
        );
    }
  }

const DashboardFunc = () => {
  const [user, setUser] = useContext(UserContext);

  console.log("Hello There Genius : ", user);

  return(<Dashboard/>);
}


export default DashboardFunc;