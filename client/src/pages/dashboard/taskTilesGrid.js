import React from "react"
import { NavLink, Link } from "react-router-dom";
import TaskRow from './taskrow'
import Grid from '@material-ui/core/Grid';


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
