import React from 'react';
import undraw_typewriter_i8xd from "../../../images/undraw_typewriter_i8xd.svg";
import undraw_respond_8wjt from "../../../images/undraw_respond_8wjt.svg";
import undraw_stepping_up_g6oo from "../../../images/undraw_stepping_up_g6oo.svg";
import undraw_connected_world_wuay from "../../../images/undraw_connected_world_wuay.svg";
import undraw_public_discussion_btnw from "../../../images/undraw_public_discussion_btnw.svg";
import undraw_Post_re_mtr4 from "../../../images/undraw_Post_re_mtr4.svg";
import undraw_community_8nwl from "../../../images/undraw_community_8nwl.svg";
import { gsap } from "gsap";

class MainPage extends React.Component {
    constructor() {
        super();

        this.herotext = null;
        this.boxes = null;
        this.midwayTextContainerh2 = null;
        this.midwayTextContainerh4 = null;
        this.odd = null;
        this.even = null;
    }
    componentDidMount() {

        gsap.from(this.herotext, {
            opacity: 0, 
            duration: 2, 
            y: -50
        });
        
        gsap.from(this.boxes, {
            scrollTrigger: '.boxes',
            opacity: 0,
            y: 50,
            duration: 0.6,
            scale: 0.9
        });
        
        gsap.from(this.midwayTextContainerh2, {
            scrollTrigger: '.midwayTextContainer',
            opacity: 0,
            y: 80,
            duration: 1,
        });
        
        gsap.from(this.midwayTextContainerh4, {
            scrollTrigger: '.midwayTextContainer',
            opacity: 0,
            y: 50,
            duration: 1.2,
        });
        
        gsap.from(this.odd, {
            scrollTrigger: '.odd',
            opacity: 0,
            x: -100,
            duration: 0.7,
            scale: 0.9,
            stagger: 1
        });
        
        gsap.from(this.even, {
            scrollTrigger: '.even',
            opacity: 0,
            x: 100,
            duration: 0.7,
            scale: 0.9,
            stagger: 1
        });
         
    }
    
    render() {
        return(
            <div>

                <div class="totalHero">

                    {/* <!-- navbar --> */}
                    <div class="navbar">
                        <div class="container flex">
                            <h1 class="logo">SkillLy</h1>
                            <nav>
                                <ul>
                                    <li><a href="index.html">Login</a></li>
                                    <li><a href="features.html">Sign Up</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* <!-- hero section --> */}
                    <div class="container">
                        <div ref={(div) => (this.herotext = div)} class="hero-text">
                            <h2>Easiest way to start a <br/>career in Content Writing</h2>
                            <div class="subtext">Learn as a community, Give back to the community, Grow as a community</div>
                            <div class="buttonHero"><a class="aButton" href="#">Join now</a></div>
                        </div>
                    </div>

                </div>

                {/* <!-- how we work --> */}
                <div class="threeBoxLayout">
                    <div class="mainHeading">How We Work</div>
                    <div ref={(div) => (this.boxes = div)} class="boxes">
                        <div class="individualBoxes">
                            <div class="individualBoxesImage"><img src={undraw_typewriter_i8xd}/></div>  
                            <p>Practice writing on the platform through articles on real life issues</p>
                        </div>
                        <div class="individualBoxes">
                            <div class="individualBoxesImage"><img src={undraw_respond_8wjt}/></div>
                            <p>Get feedback on your work from the community and upskill your content writing</p>                    
                        </div>
                        <div class="individualBoxes">
                            <div class="individualBoxesImage"><img src={undraw_stepping_up_g6oo}/></div>
                            <p>Create your portfolio and grow as a content writer with the community</p>
                        </div>
                    </div>
                </div>

                <div class="midwayContainer">
                    <div class="midwayTextContainer">
                        <h2 ref={(div) => (this.midwayTextContainerh2 = div)} >Everyone needs talent, and we have the talent network</h2>
                        <h4 ref={(div) => (this.midwayTextContainerh4 = div)} >Content operations platform for all kinds of customers. Save on time, quality and cost with Pepper Content.</h4>
                    </div>
                </div>

                <div class="meritsSection">
                    <div ref={(div) => (this.odd = div)} class="meritsContainer odd">
                        <div class="meritsText">
                            <div class="meritsTextContainer">
                                <h3>Real World issues</h3>
                                <p>Skillly offers you acces to real world issues to write to help buil your portfolio</p>
                            </div>
                        </div>
                        <div class="meritsSvgs">
                            <div class="mySvg">
                                <img src={undraw_connected_world_wuay}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="meritsSection">
                    <div ref={(div) => (this.even = div)} class="meritsContainer even">
                        <div class="meritsText">
                            <div class="meritsTextContainer"><h3>learn from the community</h3>
                                <p>Skilly acts as a medium to generate real and constructive feedback on your work to help you identify mistakes and improve as a writer</p>
                            </div>
                        </div>
                        <div class="meritsSvgs">
                            <div class="mySvg">
                                <img src={undraw_public_discussion_btnw}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="meritsSection">
                    <div ref={(div) => (this.odd = div)} class="meritsContainer odd">
                        <div class="meritsText">
                            <div class="meritsTextContainer">
                                <h3>read fellow writers work</h3>
                                <p>Skilly allows you to be inspired by the content written by others in the community</p>
                            </div>
                        </div>
                        <div class="meritsSvgs">
                            <div class="mySvg">
                                <img src={undraw_Post_re_mtr4}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="meritsSection">
                    <div ref={(div) => (this.even = div)} class="meritsContainer even">
                        <div class="meritsText">
                            <div class="meritsTextContainer"><h3>Give back to the community</h3>
                                <p>Skillly allows you to help fellow artists learn and grow and hence give back to the community</p>
                            </div>
                        </div>
                        <div class="meritsSvgs">
                            <div class="mySvg">
                                <img src={undraw_community_8nwl}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer">
                    <div class="footer_menu">
                        <div class="col_1">
                            <div class="title">
                                Company  
                            </div>  
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div class="col_2">
                            <div class="title">
                                Help & Support 
                            </div>  
                            <ul>
                                <li><a href="#">Support Center</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Call Center</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                        <div class="col_3">
                            <div class="title">
                                Services  
                            </div>  
                            <ul>
                                <li><a href="#">Business Consultancy</a></li>
                                <li><a href="#">Digital Marketing</a></li>
                                <li><a href="#">Market Analysis</a></li>
                                <li><a href="#">Web Development</a></li>
                            </ul>
                        </div>
                        <div class="col_4">
                            <div class="title">
                                Solutions  
                            </div>  
                            <ul>
                                <li><a href="#">Facilities Services</a></li>
                                <li><a href="#">Workplace Staffing</a></li>
                                <li><a href="#">Project Management</a></li>
                                <li><a href="#">Wordpress Management</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="social_media">
                        <ul>
                            <li><a class="facebook" href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a class="instagram" href="#"><i class="fab fa-instagram"></i></a></li>
                            <li><a class="whatsapp" href="#"><i class="fab fa-whatsapp"></i></a></li>
                        </ul>
                        <p>Copyright © SkillLy</p>
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
