import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineGoogle } from 'react-icons/ai';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router';

import axios from 'axios';


function Copyright() {
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



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
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
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
    const [id, setId ] = useState("");
    const [name, setName ] = useState("");
    const [username, setUsername ] = useState("");
    const [email, setEmail ] = useState("");
    const [displayPicture, setDisplayPicture ] = useState("");
    const [loggedIn, setLoggedIn ] = useState(false);
    const [exists, setExists ] = useState(false);

  const responseGoogle = (response) => {
    // console.log("Google : ", response);
    var uname = "";
    for(let i = 0; i < response.profileObj.email.length; i++) {
        if(response.profileObj.email[i] == '@') {
            break;
        }
        uname += response.profileObj.email[i];
    }
    // this.setState({
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setDisplayPicture(response.profileObj.imageUrl);
        setUsername(uname);
        setLoggedIn(true);
    // })
    // console.log("State : ", this.state)
    axios.post('/api/users/add', this.state).then(res => {
        console.log(res);
        // this.setState({
            setId(res.data.userData._id);
            setExists(res.data.exist);
        // })
    })
    .catch(res => {
        console.log(res);
    })
    
}
const responseFacebook = (response) => {
    // console.log("Facebook :", response);
    var uname = "";
    for(let i = 0; i < response.email.length; i++) {
        if(response.email[i] == '@') {
            break;
        }
        uname += response.email[i];
    }
    // this.setState({
        setName(response.name);
        setEmail(response.email);
        setDisplayPicture(response.picture.data.url);
        setUsername(uname);
        setLoggedIn(true);
    // })

    // console.log("State : ", this.state);

    axios.post('/api/users/add', this.state).then(res => {
        console.log(res);
        // this.setState({
            setId(res.data.userData._id);
            setExists(res.data.exist);
        // })
    })
    .catch(res => {
        console.log(res);
    })

}

const componentClicked = () => {
    console.log("Clicked!");
}

if(loggedIn) {
    return( <Redirect to={'/dashboard'} /> );
}


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            Login / Sign Up
          </Typography>
          <Typography component="h2" variant="h6">
            using
          </Typography>
          {/* <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
            <div className='login-page'>
                                <ul>
                                    {/* <li><p><h4> Login / Sign Up </h4> </p></li>
                                    <li><p><h6> using </h6> </p></li> */}
                                    <li>
                                        {/* <a href="index.html">Login</a> */}
                                        <GoogleLogin
                                            clientId="949452281203-a5upq6fj02kl2t11gbrpa476n2vu3e04.apps.googleusercontent.com"
                                            buttonText="Login"
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            render={renderProps => (
                                                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn btn-lg btn-danger m-1"><i className="fa fa-google"></i></button>
                                            )}
                                            cookiePolicy={'single_host_origin'}
                                        />

                                        <FacebookLogin
                                            appId="1828585720649229"
                                            // autoLoad={true}
                                            fields="name,email,picture"
                                            onClick={componentClicked}
                                            callback={responseFacebook} 
                                            cssClass="btn btn-primary btn-lg m-1"
                                            textButton=""
                                            icon="fab fa-facebook"
                                        />
                                    </li>
                                    {/* <li><a href="features.html">Sign Up</a></li> */}
                                </ul>
                            </div>
            <Box mt={5}>
              <Copyright />
            </Box>
        </div>
      </Grid>
    </Grid>
  );
}
