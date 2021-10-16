import React from 'react';
import donutImg from '../../images/food.png';
import linkedImg from '../../images/linkedin.png';
import moneyImg from '../../images/money.png';
import cryptoImg from '../../images/crypto.png';
import spaceImg from '../../images/space.jpg';
import mentalImg from '../../images/images.png';
import aiImg from '../../images/robot.jpg';
import timeImg from '../../images/time.svg';
import covidImg from '../../images/covid.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { NavLink, Link } from "react-router-dom";
import parse from 'html-react-parser';

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

    const desc = props.brief;
    // console.log("Task tile : ", props)

    const taskImage = {
        "603e7d4cf49dab101cb36398": donutImg,
        "603e7d4df49dab101cb36399": spaceImg,
        "603e7d74f49dab101cb3639a": cryptoImg,
        "603e7d78f49dab101cb3639b": linkedImg,
        "603e7d7bf49dab101cb3639c": mentalImg,
        "603e7d7ef49dab101cb3639d": aiImg,
        "603e7d81f49dab101cb3639e": timeImg,
        "603e7d84f49dab101cb3639f": covidImg,
        "603e7d87f49dab101cb363a0": moneyImg
    }

    const taskBrief = desc.slice(0, 120) + "..."

    console.log("Task Tile ID : ", props.id )

    return (
        <Grid item xs={6} md={4} spacing={0}>
            <div className="tasks" id={props.cssId}>
                <Link style={{ textDecoration: 'none' }} to = {`/task-page/${props.id}`} params={{id: props.id}} >  {/* to = {`/task-page/${props.taskId}`}   */}
                    <Paper className={classes.paper}>
                        <div className="article-dashboard" id="article-1">
                            <div className="task-tile-header">
                                <img src={taskImage[props.id]} alt="task image" className="tasklogo" />
                                <div className="article-topic">
                                    <h3>{props.heading}</h3>
                                </div>
                            </div>
                            <div className="article-details">
                                <p>
                                    {parse(taskBrief)}
                                </p>
                                <br />
                                {/*
                                <div className="progress-dashboard">Progress<span className="fright">{props.progress}%</span></div>

                                 <div className="progressbar">
                                    <div></div>
                                </div> */}
                                <div className="engagement">
                                    <i className="fa fa-eye" aria-hidden="true">    {props.views}</i>&nbsp;&nbsp;
                                    <i className="fa fa-comments-o" aria-hidden="true"> {props.comments}</i>
                                    <i className="fa fa-clock-o fright" aria-hidden="true"> {props.daysTaken}</i>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </Link>
            </div>
        </Grid>
    );
}

export default TaskRow;