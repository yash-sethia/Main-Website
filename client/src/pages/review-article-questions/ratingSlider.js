import React, { Component, useContext } from "react";

import Button from 'react-bootstrap/Button';
import '../../Css/review-article-questions/ratingSlider.css';
import { Link } from "react-router-dom";


import { UserContext } from '../AuthContext';


class RatingSlider extends Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);
        this.state = {
          userId: "",
          articleId: this.props.location.state.articleId, 
          ratingNumericValue: 0
        };

        this.handleChangeSlider = this.handleChangeSlider.bind(this)
    }
    
    handleChangeSlider = () => {
        const range = document.querySelector('input');
        const div = document.querySelector('.emoji');
        const texty = document.querySelector('.sliderText')
        const emojis = ['😄','🙂','😐','😑','☹️'];
        const sliderPhrases = ['Awesome Work!!','Good Job!!','Not Bad :)','Could be better...', "Didn't like it :/"];

        range.addEventListener('input', (e) => {
        var rangeValue = e.target.value;
        div.textContent = emojis[rangeValue];
        texty.textContent = sliderPhrases[rangeValue];
        this.setState((prevState)=> {
            return {
                ratingNumericValue: rangeValue
            }
        })
});
        
    }


  render() {

        console.log("On Slider : ", this.state); 
        console.log("On Slider2 : ", this.props.location);
        console.log("On Slider 3: ", this.context)        
    
   
        return (
            <div className="parentSlider">
                <div className="container">
                    <div className="emoji">😄</div>

                    <span className="sliderText">awesome work</span>

                    <div className="slider">
                        <input 
                            type="range" 
                            value={this.state.ratingNumericValue }
                            min="0" 
                            max="4" 
                            step="1"
                            onChange={this.handleChangeSlider} 
                            className="mySlider"/>
                    </div>

                    <div className="submit-button">
                        <Link 
                            to={{
                            pathname: '/question-like',
                            state: {
                                userId: this.context[0].id,
                                articleId: this.state.articleId,
                                rating: this.state.ratingNumericValue
                                }
                            }}
                        >
                            <button className="myButton"> Next </button>
                        </Link>
                    </div> 
                </div>

                
            </div>
            
        );
    

  }
}

export default RatingSlider;
