import React, { Component } from "react";

import Button from 'react-bootstrap/Button';
import '../../Css/review-article-questions/ratingSlider.css';
import { Link } from "react-router-dom";


class RatingSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        const sliderPhrases = ['awesome work','good job','not bad','could be better','disgusting bro']

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
                                articleId: this.state.articleId,
                                rating: this.state.ratingNumericValue
                                }
                            }}
                        >
                            <Button variant="info"> Next </Button>
                        </Link>
                    </div> 
                </div>

                
            </div>
            
        );
    

  }
}

export default RatingSlider;
