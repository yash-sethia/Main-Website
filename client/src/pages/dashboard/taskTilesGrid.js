import React from "react"
import { NavLink, Link } from "react-router-dom";
import TaskRow from './taskrow'
import Grid from '@material-ui/core/Grid';
import axios from "axios";


class TaskTileGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task1: this.props.articleinfo[0],
            task2: this.props.articleinfo[1],
            task3: this.props.articleinfo[2],
            task4: this.props.articleinfo[3],
            task5: this.props.articleinfo[4],
            task6: this.props.articleinfo[5],
            task7: this.props.articleinfo[6],
            task8: this.props.articleinfo[7],
            task9: this.props.articleinfo[8]
        };
    }

    // componentDidMount() {
    //     // Conditional rendering for tasks not done !
    //     axios.get('api/tasks/').then(res => {
    //         axios.get('')
    //       this.setState({
    //         task1: {
    //           cssId: res.taskData[0].taskId,
    //           heading: res.taskData[0].taskName,
    //           brief: res.taskData[0].taskDesc,
    //           logo: res.taskData[0].taskLogo
    //         },
    //         task2: {
    //             cssId: res.taskData[1].taskId,
    //             heading: res.taskData[1].taskName,
    //             brief: res.taskData[1].taskDesc,
    //             logo: res.taskData[1].taskLogo
    //         },
    //         task3: {
    //             cssId: res.taskData[2].taskId,
    //             heading: res.taskData[2].taskName,
    //             brief: res.taskData[2].taskDesc,
    //             logo: res.taskData[2].taskLogo
    //         },
    //         task4: {
    //             cssId: res.taskData[3].taskId,
    //             heading: res.taskData[3].taskName,
    //             brief: res.taskData[3].taskDesc,
    //             logo: res.taskData[3].taskLogo
    //         },
    //         task5: {
    //             cssId: res.taskData[4].taskId,
    //             heading: res.taskData[4].taskName,
    //             brief: res.taskData[4].taskDesc,
    //             logo: res.taskData[4].taskLogo
    //         },
    //         task6: {
    //             cssId: res.taskData[5].taskId,
    //             heading: res.taskData[5].taskName,
    //             brief: res.taskData[5].taskDesc,
    //             logo: res.taskData[5].taskLogo
    //         },
    //         task7: {
    //             cssId: res.taskData[6].taskId,
    //             heading: res.taskData[6].taskName,
    //             brief: res.taskData[6].taskDesc,
    //             logo: res.taskData[6].taskLogo
    //         },
    //         task8: {
    //             cssId: res.taskData[7].taskId,
    //             heading: res.taskData[7].taskName,
    //             brief: res.taskData[7].taskDesc,
    //             logo: res.taskData[7].taskLogo
    //         },
    //         task9: {
    //             cssId: res.taskData[8].taskId,
    //             heading: res.taskData[8].taskName,
    //             brief: res.taskData[8].taskDesc,
    //             logo: res.taskData[8].taskLogo
    //         }
    //       })
    //     })
    //   }

    render() {
      // props copied
        return (
            <Grid container spacing={1}>
                <Grid container item xs={9} spacing={1}>
                    <TaskRow
                        cssId={this.state.task1.cssId}
                        heading={this.state.task1.heading}
                        brief={this.state.task1.brief}
                        progress={this.state.task1.progress}
                        views={this.state.task1.views}
                        daysTaken={this.state.task1.daysTaken}
                        comments={this.state.task1.comments}
                    />
                    <TaskRow
                        cssId={this.state.task2.cssId}
                        heading={this.state.task2.heading}
                        brief={this.state.task2.brief}
                        progress={this.state.task2.progress}
                        views={this.state.task2.views}
                        daysTaken={this.state.task2.daysTaken}
                        comments={this.state.task2.comments}
                    />
                    <TaskRow
                        cssId={this.state.task3.cssId}
                        heading={this.state.task3.heading}
                        brief={this.state.task3.brief}
                        progress={this.state.task3.progress}
                        views={this.state.task3.views}
                        daysTaken={this.state.task3.daysTaken}
                        comments={this.state.task3.comments}
                    />
                
                    <TaskRow
                        cssId={this.state.task4.cssId}
                        heading={this.state.task4.heading}
                        brief={this.state.task4.brief}
                        progress={this.state.task4.progress}
                        views={this.state.task4.views}
                        daysTaken={this.state.task4.daysTaken}
                        comments={this.state.task4.comments}
                    />
                    <TaskRow
                        cssId={this.state.task5.cssId}
                        heading={this.state.task5.heading}
                        brief={this.state.task5.brief}
                        progress={this.state.task5.progress}
                        views={this.state.task5.views}
                        daysTaken={this.state.task5.daysTaken}
                        comments={this.state.task5.comments}
                    />
                    <TaskRow
                        cssId={this.state.task6.cssId}
                        heading={this.state.task6.heading}
                        brief={this.state.task6.brief}
                        progress={this.state.task6.progress}
                        views={this.state.task6.views}
                        daysTaken={this.state.task6.daysTaken}
                        comments={this.state.task6.comments}
                    />

                    <TaskRow
                        cssId={this.state.task7.cssId}
                        heading={this.state.task7.heading}
                        brief={this.state.task7.brief}
                        progress={this.state.task7.progress}
                        views={this.state.task7.views}
                        daysTaken={this.state.task7.daysTaken}
                        comments={this.state.task7.comments}
                    />
                    <TaskRow
                        cssId={this.state.task8.cssId}
                        heading={this.state.task8.heading}
                        brief={this.state.task8.brief}
                        progress={this.state.task8.progress}
                        views={this.state.task8.views}
                        daysTaken={this.state.task8.daysTaken}
                        comments={this.state.task8.comments}
                    />
                    <TaskRow
                        cssId={this.state.task9.cssId}
                        heading={this.state.task9.heading}
                        brief={this.state.task9.brief}
                        progress={this.state.task9.progress}
                        views={this.state.task9.views}
                        daysTaken={this.state.task9.daysTaken}
                        comments={this.state.task9.comments}
                    />
                </Grid> 
                <Grid item xs={3} spacing={3}>
                    <div className="quick-view" id="">
                        <div className="quickv">
                            <div id="donut-chart">
                                <img src="images/donutchart.png" alt=""/>
                            </div>
                            <hr className="rule"/>
                            <div id="past-transactions">
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default TaskTileGrid
