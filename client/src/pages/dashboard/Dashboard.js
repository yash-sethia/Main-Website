import React, {useContext} from "react"
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
        console.log("GOD : ", this.state.id)
        console.log("GOD : ", this.props.match.params)

        return (
            <div className="total-grid" >

            <div className="headings">
              <h1>Your Tasks</h1>
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