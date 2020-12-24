import React from 'react';
import taskImage from '../../images/food.png'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { NavLink, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
}));

function TaskRow(props) {
    const classes = useStyles();

    return (
        <Grid item xs={6} md={4} spacing={0}>
            <div className="tasks" id={props.cssId}>
                <NavLink style={{ textDecoration: 'none' }} to = "/task-page">
                    <Paper className={classes.paper}>
                        <div className="article-dashboard" id="article-1">
                            <div className="task-tile-header">
                                <img src={taskImage} alt="task image" className="tasklogo" />
                                <div className="article-topic">
                                    <h3>{props.heading}</h3>
                                </div>
                            </div>
                            <div className="article-details">
                                <p>
                                {props.brief}
                                </p>
                                <br />
                                <div className="progress-dashboard">Progress<span className="fright">{props.progress}%</span></div>

                                <div className="progressbar">
                                    <div></div>
                                </div>
                                <div className="engagement">
                                    <i className="fa fa-eye" aria-hidden="true">    {props.views}</i>&nbsp;&nbsp;
                                    <i className="fa fa-comments-o" aria-hidden="true"> {props.comments}</i>
                                    <i className="fa fa-clock-o fright" aria-hidden="true"> {props.daysTaken}</i>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </NavLink>
            </div>
        </Grid>
    );
}

export default TaskRow;