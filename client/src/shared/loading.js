import React from "react"
import "./loading.css"

class LoadingAnimation extends React.Component {
  constructor(){
    super();
    this.state = {
    };
  }
  render(){

    return (
      <div className="loading">
        <div className="bounce">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div> 
    </div>
    )
  }
}

export default LoadingAnimation;