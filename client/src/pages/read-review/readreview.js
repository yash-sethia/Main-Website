import React from "react";
import LoadingAnimation from '../../shared/loading'
import ReviewBox from './Components/reviewbox';
import '../../Css/read-review/readreview.css'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../AuthContext';
import { Dropdown, Grid, Segment } from 'semantic-ui-react'

import axios from'axios';

import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function ErrorMessage() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="info">
        <AlertTitle>No Reviews Found!!</AlertTitle>
        <strong>Sorry, you don't have any reviews for this task yet :(  </strong> <br/>
        Tip: Review more articles using the 'Review More' page if you want your articles to be reviewed more.
      </Alert>
    </div>
  );
}

class ReadReview extends React.Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);
        this.state = {
            articleId: props.articleId,
            isLoading: true,
            value: 1,
            reviewData: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const articleId = this.state.articleId
        // console.log("Article ID = ", articleId)
        const data = {
            userId: this.context[0].id,
            // "userId": "60ba74fe58bb8d6268e11971",
            "taskId": "603e7d4cf49dab101cb36398"
          }
          axios.post("api/getreviews", data).then(res => {
            this.setState({
                reviewData: res.data.reviewData,
                isLoading: false
            })
          })
          .catch(err => console.log("Error in componentDidMount on Review Page", err));
            // console.log("Res = : ", res);
            // console.log(this.state)
    }


    handleChange = (e, { value, text }) => {
        const tasks = ["", "603e7d4cf49dab101cb36398", "603e7d4cf49dab101cb36399", "603e7d4cf49dab101cb3639a", "603e7d4cf49dab101cb3639b", "603e7d4cf49dab101cb3639c", "603e7d4cf49dab101cb3639d", "603e7d4cf49dab101cb3639e", "603e7d4cf49dab101cb3639f", "603e7d87f49dab101cb363a0"]
        this.setState({ value: value })
        console.log("Hell Yeah!!", value)
        const data = {
          userId: this.context[0].id,
          // "userId": "60ba74fe58bb8d6268e11971",
          "taskId": tasks[value]
        }
        axios.post("api/getreviews", data).then(res => {
            console.log("Inside then")
          this.setState({
            reviewData: res.data.reviewData
          })
        })
        .catch(err => console.log("Error from Task Analytics Frontend : ", err));  
      }


    render() {

        console.log(this.state.reviewData.length);
        const options = [
            { key: '2', value: '1', text: 'Dunk of Dunkin' },
            { key: '3', value: '2', text: 'Dunk of Dunkin' },
            { key: '4', value: '3', text: 'Dunk of Dunkin' },
            { key: '5', value: '4', text: 'Dunk of Dunkin' },
            { key: '6', value: '5', text: 'Dunk of Dunkin' },
            { key: '7', value: '6', text: 'Dunk of Dunkin' },
            { key: '8', value: '7', text: 'Dunk of Dunkin' },
            { key: '9', value: '8', text: 'Dunk of Dunkin' },
            { key: '10', value: '9', text: 'Dunk of Dunkin' },
        ]
    

        const pageIsLoading = <LoadingAnimation />

        var ctr = 0;
        const reviewBoxCallingArray = this.state.reviewData.map((item) =>{
            ctr++;
            return(<ReviewBox key = {item._id} reviewNumber = {ctr} positiveAnswer = {item.positiveReview} negativeAnswer={item.negativeReview} image = "https://media.istockphoto.com/vectors/cute-tiger-face-emoticon-emoji-showing-sad-face-expression-vector-id903164224" />);
        })


        const pageIsNotLoading =
                    <div>
                        <div className="total-grid-read-review">
                            <div className="read-review-title">
                                <div className="headings">

                                    <div className="article-topic">
                                        <h1> Reviews </h1>
                                    </div>

                                    <div className="sub-nav" id="task-nav-read-review">
                                        <NavLink to="/overall-analytics">OVERVIEW</NavLink>
                                        <NavLink to="/analytics">TASKS</NavLink>
                                        <NavLink to="/readreview" className="active">REVIEW</NavLink>
                                        {/* <NavLink to="/airating">AI REVIEW</NavLink>
                                        <NavLink to="/engagement">ENGAGEMENT</NavLink> */}
                                    </div>

                                    
                                </div>
                                <div className="nav-div-readreview">
                                    <Grid columns={2}>
                                        <Grid.Column>
                                        <Dropdown
                                            className="nav-button"
                                            onChange={this.handleChange}
                                            options={options}
                                            placeholder='Dunk of Dunkin'
                                            selection
                                            value={this.state.value}
                                        />
                                        </Grid.Column>
                                    </Grid>
                                </div>  
                            </div>
                        </div>

                        <div className="read-reviews">
                            <div className="content-box-review-box">
                                {this.state.reviewData.length == 0 && <ErrorMessage />}
                                {reviewBoxCallingArray}
                            </div>
                        </div>
                    </div>


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

export default ReadReview;
