import React, {useContext} from "react"
import "../../font-awesome/css/font-awesome.min.css"
import '../../Css/dashboard/Dashboard.css'
import LoadingAnimation from '../../shared/loading'
import TaskTileGrid from './taskTilesGrid'
import data from '../../data/DashboardData'
import Header from '../../shared/Header.js';
import Sidebar from '../../shared/Sidebar.js';

import { UserContext } from '../AuthContext';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          articleinfo: data,
          id: props.match.params.id
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

        console.log("GOD : ", this.state.id)
        console.log("GOD : ", this.props.match.params)

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

const DashboardFunc = (props) => {
  const [user, setUser] = useContext(UserContext);

  console.log("Hello There Genius : ", user);

  return(
    <div>
      <Header />
      <Sidebar />
      <Dashboard {...props} />
    </div>
  );
}


export default DashboardFunc;