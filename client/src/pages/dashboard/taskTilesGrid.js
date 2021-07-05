import React from "react"
import { NavLink, Link } from "react-router-dom";
import TaskRow from './taskrow'
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import Donutchart from './Donutchart'
import Transactions from './Transactions'


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

    componentDidMount() {
        // Conditional rendering for tasks not done !
        axios.get('/api/tasks/').then(res => {
            console.log("Task Tile Grid : ", res)
          this.setState({
            task1: {
                id: res.data.taskData[0]._id, 
                cssId: res.data.taskData[0].taskId,
                heading: res.data.taskData[0].taskName,
                brief: res.data.taskData[0].taskDesc,
                logo: res.data.taskData[0].taskLogo,
                progress: res.data.taskData[0].progress,
                views: res.data.taskData[0].noOfViews,
                comments: res.data.taskData[0].noOfReviews,
                daysTaken: res.data.taskData[0].daysSpent
            },
            task2: {
                id: res.data.taskData[1]._id, 
                cssId: res.data.taskData[1].taskId,
                heading: res.data.taskData[1].taskName,
                brief: res.data.taskData[1].taskDesc,
                logo: res.data.taskData[1].taskLogo,
                progress: res.data.taskData[1].progress,
                views: res.data.taskData[1].noOfViews,
                comments: res.data.taskData[1].noOfReviews,
                daysTaken: res.data.taskData[1].daysSpent
            },
            task3: {
                id: res.data.taskData[2]._id, 
                cssId: res.data.taskData[2].taskId,
                heading: res.data.taskData[2].taskName,
                brief: res.data.taskData[2].taskDesc,
                logo: res.data.taskData[2].taskLogo,
                progress: res.data.taskData[2].progress,
                views: res.data.taskData[2].noOfViews,
                comments: res.data.taskData[2].noOfReviews,
                daysTaken: res.data.taskData[2].daysSpent
            },
            task4: {
                id: res.data.taskData[3]._id, 
                cssId: res.data.taskData[3].taskId,
                heading: res.data.taskData[3].taskName,
                brief: res.data.taskData[3].taskDesc,
                logo: res.data.taskData[3].taskLogo,
                progress: res.data.taskData[3].progress,
                views: res.data.taskData[3].noOfViews,
                comments: res.data.taskData[3].noOfReviews,
                daysTaken: res.data.taskData[3].daysSpent
            },
            task5: {
                id: res.data.taskData[4]._id, 
                cssId: res.data.taskData[4].taskId,
                heading: res.data.taskData[4].taskName,
                brief: res.data.taskData[4].taskDesc,
                logo: res.data.taskData[4].taskLogo,
                progress: res.data.taskData[4].progress,
                views: res.data.taskData[4].noOfViews,
                comments: res.data.taskData[4].noOfReviews,
                daysTaken: res.data.taskData[4].daysSpent
            },
            task6: {
                id: res.data.taskData[5]._id, 
                cssId: res.data.taskData[5].taskId,
                heading: res.data.taskData[5].taskName,
                brief: res.data.taskData[5].taskDesc,
                logo: res.data.taskData[5].taskLogo,
                progress: res.data.taskData[5].progress,
                views: res.data.taskData[5].noOfViews,
                comments: res.data.taskData[5].noOfReviews,
                daysTaken: res.data.taskData[5].daysSpent
            },
            task7: {
                id: res.data.taskData[6]._id, 
                cssId: res.data.taskData[6].taskId,
                heading: res.data.taskData[6].taskName,
                brief: res.data.taskData[6].taskDesc,
                logo: res.data.taskData[6].taskLogo,
                progress: res.data.taskData[6].progress,
                views: res.data.taskData[6].noOfViews,
                comments: res.data.taskData[6].noOfReviews,
                daysTaken: res.data.taskData[6].daysSpent
            },
            task8: {
                id: res.data.taskData[7]._id, 
                cssId: res.data.taskData[7].taskId,
                heading: res.data.taskData[7].taskName,
                brief: res.data.taskData[7].taskDesc,
                logo: res.data.taskData[7].taskLogo,
                progress: res.data.taskData[7].progress,
                views: res.data.taskData[7].noOfViews,
                comments: res.data.taskData[7].noOfReviews,
                daysTaken: res.data.taskData[7].daysSpent
            },
            task9: {
                id: res.data.taskData[8]._id, 
                cssId: res.data.taskData[8].taskId,
                heading: res.data.taskData[8].taskName,
                brief: res.data.taskData[8].taskDesc,
                logo: res.data.taskData[8].taskLogo,
                progress: res.data.taskData[8].progress,
                views: res.data.taskData[8].noOfViews,
                comments: res.data.taskData[8].noOfReviews,
                daysTaken: res.data.taskData[8].daysSpent
            }
          })
        })
      }

    render() {
      // props copied
        return (
            <Grid container spacing={1}>
                <Grid container item xs={9} spacing={1}>
                    <TaskRow
                        id={this.state.task1.id} 
                        cssId={this.state.task1.cssId}
                        heading={this.state.task1.heading}
                        brief={this.state.task1.brief}
                        progress={this.state.task1.progress}
                        views={this.state.task1.views}
                        daysTaken={this.state.task1.daysTaken}
                        comments={this.state.task1.comments}
                    />
                    <TaskRow
                        id={this.state.task2.id}
                        cssId={this.state.task2.cssId}
                        heading={this.state.task2.heading}
                        brief={this.state.task2.brief}
                        progress={this.state.task2.progress}
                        views={this.state.task2.views}
                        daysTaken={this.state.task2.daysTaken}
                        comments={this.state.task2.comments}
                    />
                    <TaskRow
                        id={this.state.task3.id}
                        cssId={this.state.task3.cssId}
                        heading={this.state.task3.heading}
                        brief={this.state.task3.brief}
                        progress={this.state.task3.progress}
                        views={this.state.task3.views}
                        daysTaken={this.state.task3.daysTaken}
                        comments={this.state.task3.comments}
                    />
                
                    <TaskRow
                        id={this.state.task4.id}
                        cssId={this.state.task4.cssId}
                        heading={this.state.task4.heading}
                        brief={this.state.task4.brief}
                        progress={this.state.task4.progress}
                        views={this.state.task4.views}
                        daysTaken={this.state.task4.daysTaken}
                        comments={this.state.task4.comments}
                    />
                    <TaskRow
                        id={this.state.task5.id}
                        cssId={this.state.task5.cssId}
                        heading={this.state.task5.heading}
                        brief={this.state.task5.brief}
                        progress={this.state.task5.progress}
                        views={this.state.task5.views}
                        daysTaken={this.state.task5.daysTaken}
                        comments={this.state.task5.comments}
                    />
                    <TaskRow
                        id={this.state.task6.id}
                        cssId={this.state.task6.cssId}
                        heading={this.state.task6.heading}
                        brief={this.state.task6.brief}
                        progress={this.state.task6.progress}
                        views={this.state.task6.views}
                        daysTaken={this.state.task6.daysTaken}
                        comments={this.state.task6.comments}
                    />

                    <TaskRow
                        id={this.state.task7.id}
                        cssId={this.state.task7.cssId}
                        heading={this.state.task7.heading}
                        brief={this.state.task7.brief}
                        progress={this.state.task7.progress}
                        views={this.state.task7.views}
                        daysTaken={this.state.task7.daysTaken}
                        comments={this.state.task7.comments}
                    />
                    <TaskRow
                        id={this.state.task8.id}
                        cssId={this.state.task8.cssId}
                        heading={this.state.task8.heading}
                        brief={this.state.task8.brief}
                        progress={this.state.task8.progress}
                        views={this.state.task8.views}
                        daysTaken={this.state.task8.daysTaken}
                        comments={this.state.task8.comments}
                    />
                    <TaskRow
                        id={this.state.task9.id}
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
                                <Donutchart />
                            </div>
                            <hr className="rule"/>
                            <div id="past-transactions">
                                <Transactions />
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default TaskTileGrid