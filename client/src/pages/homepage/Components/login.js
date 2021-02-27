import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router';
import { withTheme } from '@material-ui/core/styles';

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



const styles = (theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#eeeeee',

      // theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: '64px 32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: '8px',
    backgroundColor: '#dc004e',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '8px',
  },
  submit: {
    margin: '24px 0 16px',
  },
});

class SignInSide extends React.Component {
  // const classes = useStyles();
  //   const [id, setId ] = useState("");
  //   const [name, setName ] = useState("");
  //   const [username, setUsername ] = useState("");
  //   const [email, setEmail ] = useState("");
  //   const [displayPicture, setDisplayPicture ] = useState("");
  //   const [loggedIn, setLoggedIn ] = useState(false);
  //   const [exists, setExists ] = useState(false);
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      email: "",
      username: "",
      displayPicture: "",
      exists: false,
      loggedIn: false
    }
    this.responseGoogle = this.responseGoogle.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  responseGoogle = (response) => {
    console.log("Google : ", response);
    var uname = "";
    for(let i = 0; i < response.profileObj.email.length; i++) {
        if(response.profileObj.email[i] == '@') {
            break;
        }
        uname += response.profileObj.email[i];
    }
    this.setState({
        name: (response.profileObj.name),
        email: (response.profileObj.email),
        displayPicture: (response.profileObj.imageUrl),
        username: (uname)
    })
    console.log("State : ", this.state)
    // console.log(name, email,username, displayPicture);

    // var data = {
    //   name: name,
    //   email: email,
    //   username: username,
    //   displayPicture: displayPicture
    // }

    //console.log("data : ", this)
    axios.post('/api/users/add', this.state).then(res => {
        console.log(res);
        this.setState({
          id: res.data.userData._id,
          exist: res.data.exist,
          loggedIn: true
        })
        // setId(res.data.userData._id);
        // setExists(res.data.exist);
        // setLoggedIn(true);
    })
    .catch(res => {
        console.log(res);
    })
    
}
responseFacebook = (response) => {
    // console.log("Facebook :", response);
    var uname = "";
    for(let i = 0; i < response.email.length; i++) {
        if(response.email[i] == '@') {
            break;
        }
        uname += response.email[i];
    }
    this.setState({
        name: (response.name),
        email: (response.email),
        displayPicture: (response.picture.data.url),
        username: (uname),
    })

    console.log("State : ", this.state);
    // const data = {
    //   name: name,
    //   email: email,
    //   username: username,
    //   displayPicture: displayPicture
    // }

    axios.post('/api/users/add', this.state).then(res => {
        console.log(res);
        this.setState({
            id: (res.data.userData._id),
            exists: (res.data.exist),
            loggedIn: (true),
        })
    })
    .catch(res => {
        console.log(res);
    })

}

componentClicked = () => {
    console.log("Clicked!");
}
render() {
  const { classes } = this.props;
  console.log("Classes : ", classes);
  const classes1 = styles();
  console.log("Classes : ", classes1);

  if(this.state.loggedIn && this.state.exists ) {
  return( <Redirect to={'/dashboard'} /> );
  }
  else if(this.state.loggedIn && !this.state.exists) {
    return (<Redirect to={{
      pathname: '/setprofile',
      state: { userId: this.state.id }
    }} />);
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
            Sign In
          </Typography>
          <Typography component="h2" variant="h6">
            using
          </Typography>
            <div className='login-page'>
                                <ul>
                                    {/* <li><p><h4> Login / Sign Up </h4> </p></li>
                                    <li><p><h6> using </h6> </p></li> */}
                                    <li>
                                        {/* <a href="index.html">Login</a> */}
                                        <GoogleLogin
                                            clientId="949452281203-a5upq6fj02kl2t11gbrpa476n2vu3e04.apps.googleusercontent.com"
                                            buttonText="Login"
                                            onSuccess={this.responseGoogle}
                                            onFailure={this.responseGoogle}
                                            render={renderProps => (
                                                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn btn-lg btn-danger m-1"><i style = {{padding: '5px'}} className="fa fa-google"> &nbsp;&nbsp; with Google</i></button>
                                            )}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                          <br />
                                        {/* <FacebookLogin
                                            appId="1828585720649229"
                                            // autoLoad={true}
                                            fields="name,email,picture"
                                            onClick={this.componentClicked}
                                            callback={this.responseFacebook} 
                                            cssClass="btn btn-primary btn-lg m-1"
                                            textButton="  with Facebook"
                                            icon="fab fa-facebook"
                                        /> */}
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
}

export default withTheme(withStyles(styles)(SignInSide));
