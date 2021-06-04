import React, { useState, useContext } from 'react';
import {
  withStyles,
  makeStyles
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './setprofile.css';
import Button from '@material-ui/core/Button';
import { Redirect, useLocation } from 'react-router';
import { Message } from 'semantic-ui-react'

import { UserContext } from '../../AuthContext';

import axios from 'axios';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'blue',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
      '&.MuiInput-inputMultiline:after': {
          outline: 'none'
      }
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%'
  },
  margin: {
    margin: theme.spacing(1),
    width: '100%'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(10, 6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));



export default function SetProfile(props) {
  const [user, setUser] = useContext(UserContext);
    //const [id, setId ] = useState(props.location.state.id);
    const [bio, setBio ] = useState("");
    const [fb, setFB ] = useState("");
    const [twitter, setTwitter ] = useState("");
    const [linked, setLinked ] = useState("");
    const [submit, setSubmit ] = useState(false); 
    const [bioError, setBioError ] = useState(false);
    const [bioErrorText, setBioErrorText ] = useState("");

    const classes = useStyles();
    let location = useLocation();

    const handleChange = (event) => {
        // console.log(event);
        // const [name, value] = event.target.value;
        if(event.target.name == "bio") {
            setBio(event.target.value)
        }
        else if(event.target.name == "fb") {
            setFB(event.target.value)
        }
        else if(event.target.name == "twitter") {
            setTwitter(event.target.value)
        }
        else if(event.target.name == 'linked') {
            setLinked(event.target.value);
        }
    }

    const handleSubmit = () => {
        if(bio.length > 300) {
            setBioError(true);
            setBioErrorText("Bio can't be longer than 300 characters :(");
            console.log(bioErrorText);
        }
        else if(bio.length < 50) {
            setBioError(true);
            setBioErrorText("Bio can't be shorter than 50 characters :(");
            console.log(bioErrorText);
        }
        else {
            // Send data to backend
            //api/adduserdata
            const data = {
              bio: bio,
              facebookId: fb,
              twitterId: twitter,
              linkedinId: linked
            };
            axios.post(`/api/adduserdata/${user.id}`, data).then(res => {
              console.log("Done dona done: ", res);
            })
            .catch(err => {console.log("Error in setprofile: ", err)});
            setSubmit(true);
        }
    }

    const MessageExampleWarning = (props) => (
        <Message warning>
          <Message.Header>Oh No! There is a Problem</Message.Header>
          <p>{props.message}</p>
        </Message>
      )

  
    function Copyright() {
      
      var id = user.id;
        return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" >
            Skillly
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
        );
    }

    if(submit) {
        return (
            <Redirect to={"/dashboard"} />
        );
    }

    console.log("Location : ", location)
  

  return (
    <Grid container component="main" style={{height: '100vh'}}>
        {/* <CssBaseline /> */}

        <Grid item xs={false} sm={4} md={5} className={classes.image} />

        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
            <div className={classes.paper}>
                <Typography component="h1" variant="h3">
                    About Me
                </Typography>
                <form className={classes.root} >
                    <CssTextField className={classes.margin} id="custom-css-standard-input" name="bio" label="Bio" value={bio} onChange={event => handleChange(event)} error={bioError} multiline required />
                    <CssTextField className={classes.margin} id="custom-css-standard-input" name="fb" label="Facebook Profile URL" onChange={event => handleChange(event)} value={fb} />
                    <CssTextField className={classes.margin} id="custom-css-standard-input" name="twitter" label="Twitter Profile URL" onChange={event => handleChange(event)} value={twitter}  />
                    <CssTextField className={classes.margin} id="custom-css-standard-input" name="linked" label="LinkedIn Profile URL" onChange={event => handleChange(event)} value={linked} />
                </form>
                {bioError && <MessageExampleWarning message={bioErrorText} />}
                <Button variant="contained" color="primary" onClick={handleSubmit} >
                    Let's Go!
                </Button>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </div>
        </Grid>
    </Grid>
  );
}



