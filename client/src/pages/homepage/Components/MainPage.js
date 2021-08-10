import React, {useContext, useEffect} from 'react';
import { UserContext } from '../../AuthContext';
import undraw_typewriter_i8xd from "../../../images/undraw_typewriter_i8xd.svg";
import undraw_respond_8wjt from "../../../images/undraw_respond_8wjt.svg";
import undraw_stepping_up_g6oo from "../../../images/undraw_stepping_up_g6oo.svg";
import undraw_connected_world_wuay from "../../../images/undraw_connected_world_wuay.svg";
import undraw_public_discussion_btnw from "../../../images/undraw_public_discussion_btnw.svg";
import undraw_Post_re_mtr4 from "../../../images/undraw_Post_re_mtr4.svg";
import undraw_community_8nwl from "../../../images/undraw_community_8nwl.svg";

import GoogleLogin from 'react-google-login';

import { Redirect } from 'react-router'

import axios from 'axios';



function PageChangeToDashboardFunction(props) {
    const [user, setUser] = useContext(UserContext);
      setUser({
        username: props.username,
        id: props.id,
        isAuth: true
      })
  
      console.log("Excuse me, User : ", user)
      console.log("Excuse me, User Pt2 : ", props)
  
      if(props.exists) {
        return( <Redirect to={"/dashboard"} /> );
      }
      else {
        return (<Redirect to={{
          pathname: '/setprofile'
        }} />);
      }
  
  }


class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            username: "",
            email: "",
            displayPicture: "", 
            loggedIn: false,
            exists: false,

            setUserContext: props.setUserContext
        }

        this.herotext = null;
        this.boxes = null;
        this.midwayTextContainerh2 = null;
        this.midwayTextContainerh4 = null;
        this.odd = null;
        this.even = null;
        this.responseGoogle = this.responseGoogle.bind(this);

    }


    // componentDidMount() {

    //     gsap.from(this.herotext, {
    //         opacity: 0, 
    //         duration: 2, 
    //         y: -50
    //     });
        
    //     gsap.from(this.boxes, {
    //         scrollTrigger: ".boxes",
    //         opacity: 0,
    //         y: 50,
    //         duration: 0.6,
    //         scale: 0.9
    //     });
        
    //     gsap.from(this.midwayTextContainerh2, {
    //         scrollTrigger: ".midwayTextContainer",
    //         opacity: 0,
    //         y: 80,
    //         duration: 1,
    //     });
        
    //     gsap.from(this.midwayTextContainerh4, {
    //         scrollTrigger: ".midwayTextContainer",
    //         opacity: 0,
    //         y: 50,
    //         duration: 1.2,
    //     });
        
    //     gsap.from(this.odd, {
    //         scrollTrigger: ".odd",
    //         opacity: 0,
    //         x: -100,
    //         duration: 0.7,
    //         scale: 0.9,
    //         stagger: 1
    //     });
        
    //     gsap.from(this.even, {
    //         scrollTrigger: ".even",
    //         opacity: 0,
    //         x: 100,
    //         duration: 0.7,
    //         scale: 0.9,
    //         stagger: 1
    //     });
         
    // }

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
            name: response.profileObj.name,
            email: response.profileObj.email,
            displayPicture: response.profileObj.imageUrl,
            username: uname,
        })

        // console.log("State : ", this.state)


        axios.post('/api/users/add', this.state).then(res => {
            console.log("Res : ",res);
            this.setState(prevState => ({
                ...prevState,
                id : res.data.userData._id,
                exists: res.data.exist,
                loggedIn: true
            }))
            console.log("Now state : ", this.state)
            const user = {
                id: this.state.id,
                username: this.state.username,
                isAuth: this.state.loggedIn
            }
    
            this.state.setUserContext(user);

        })
        .catch(res => {
            console.log("Error from Login Backend: ", res);
        })

        // console.log("This is the final state :", this.state)
    }
    
    render() {

        const componentClicked = () => {
            console.log("Clicked!");
        }

        if(this.state.loggedIn && this.state.exists ) {
            return <PageChangeToDashboardFunction username={this.state.username} id={this.state.id} isLoggedIn={this.state.loggedIn} exists = {this.state.exists} />
          }
          else if(this.state.loggedIn && !this.state.exists) {
            return <PageChangeToDashboardFunction username={this.state.username} id={this.state.id} isLoggedIn={this.state.loggedIn} exists = {this.state.exists} />
          }


        // console.log(window.location.pathname)

        return(
            <div>

                <div className="totalHero">

                    {/* <!-- navbar --> */}
                    <div className="homepageNavbar">
                        <div className="homepageContainer flex">
                            <h1 className="logo">SkillLy</h1>
                            {/* <LoginPage /> */}
                            <nav>
                                <ul>
                                    <li>
                                        {/* <Link to={'/login'} target='_blank' > */}
                                            <GoogleLogin
                                                clientId="949452281203-a5upq6fj02kl2t11gbrpa476n2vu3e04.apps.googleusercontent.com"
                                                buttonText="Login"
                                                onSuccess={this.responseGoogle}
                                                onFailure={this.responseGoogle}
                                                render={renderProps => (
                                                    <button className="login-page"onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign In </button>
                                                )}
                                                cookiePolicy={'single_host_origin'}
                                            />
                                        {/* </Link>  */}
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* <!-- hero section --> */}
                    <div className="homepageContainer">
                        <div ref={(div) => (this.herotext = div)} className="hero-text">
                         
                            <h2>The easiest way to start a<br/>career in Content Writing</h2>
                            <div className="subtext">Learn as a community, Give back to the community, Grow as a community</div>
                                            <GoogleLogin
                                                clientId="949452281203-a5upq6fj02kl2t11gbrpa476n2vu3e04.apps.googleusercontent.com"
                                                buttonText="Login"
                                                onSuccess={this.responseGoogle}
                                                onFailure={this.responseGoogle}
                                                render={renderProps => (
                                                    <button className="aButton"onClick={renderProps.onClick} disabled={renderProps.disabled}>Join now</button>
                                                )}
                                                cookiePolicy={'single_host_origin'}
                                            />                      
                            
                        </div>
                    </div>

                </div>

                {/* <!-- how we work --> */}
                <div className="threeBoxLayout">
                    <div className="mainHeading">How We Work ?</div>
                    <div ref={(div) => (this.boxes = div)} className="boxes">
                        <div className="individualBoxes">
                            <div className="individualBoxesImage"><img src={undraw_typewriter_i8xd}/></div>  
                            <p>Practise through writing prompts on real-world issues</p>
                        </div>
                        <div className="individualBoxes">
                            <div className="individualBoxesImage"><img src={undraw_respond_8wjt}/></div>
                            <p>The community helps you improve your craft</p>                    
                        </div>
                        <div className="individualBoxes">
                            <div className="individualBoxesImage"><img src={undraw_stepping_up_g6oo}/></div>
                            <p>Create your portfolio and grow with the community</p>
                        </div>
                    </div>
                </div>

                <div className="midwayContainer">
                    <div className="midwayTextContainer">
                        <h2 ref={(div) => (this.midwayTextContainerh2 = div)} >Everyone has talent, and we have the network to refine it!</h2>
                        <h4 ref={(div) => (this.midwayTextContainerh4 = div)} >Skillly molds you as a writer and gives you the opportunity to assist, learn and grow with the fellow artists.</h4>
                    </div>
                </div>

                <div className="meritsSection">
                    <div ref={(div) => (this.odd = div)} className="meritsContainer odd">
                        <div className="meritsText">
                            <div className="meritsTextContainer">
                                <h3>Real World issues</h3>
                                <p>The writing prompts offered are based on prevalent themes which in turn will assist you in curating an contemporary portfolio.</p>
                            </div>
                        </div>
                        <div className="meritsSvgs">
                            <div className="mySvg">
                                <img src={undraw_connected_world_wuay}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="meritsSection">
                    <div ref={(div) => (this.even = div)} className="meritsContainer even">
                        <div className="meritsText">
                            <div className="meritsTextContainer"><h3>Learn From The Community</h3>
                                <p>The community helps you in identifying your weaknesses and improve as a writer.</p>
                            </div>
                        </div>
                        <div className="meritsSvgs">
                            <div className="mySvg">
                                <img src={undraw_public_discussion_btnw}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="meritsSection">
                    <div ref={(div) => (this.odd = div)} className="meritsContainer odd">
                        <div className="meritsText">
                            <div className="meritsTextContainer">
                                <h3>Get inspired by the community</h3>
                                <p>Take inspiration from the work of people from a diverse background and learn from them.</p>
                            </div>
                        </div>
                        <div className="meritsSvgs">
                            <div className="mySvg">
                                <img src={undraw_Post_re_mtr4}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="meritsSection">
                    <div ref={(div) => (this.even = div)} className="meritsContainer even">
                        <div className="meritsText">
                            <div className="meritsTextContainer"><h3>Grow With The Community</h3>
                                <p>Help others through your valuable feedback and grow with the community.</p>
                            </div>
                        </div>
                        <div className="meritsSvgs">
                            <div className="mySvg">
                                <img src={undraw_community_8nwl}/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="homepageFooter">
                    <div className="FooterContainer">
                        <h1 className="FooterLogo">
                            SKILLLY.
                        </h1>
                        <h4 className="FooterQuote">
                            {/* Made with ❤ in New Delhi - India */}
                        </h4>
                        <div className="socials">
                            <a className="SocialLinks" href="http://www.google.com">
                                    Facebook
                            </a >
                            <a className="SocialLinks" href="http://www.google.com">
                                    Instagram
                            </a >
                            <a className="SocialLinks" href="http://www.google.com">
                                    LinkedIN
                            </a >
                        </div>
                    </div>
                </div>
            

                

                


                <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js" ></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/CSSRulePlugin.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js"></script>
            </div>
        )
    }
}

export default MainPage;
