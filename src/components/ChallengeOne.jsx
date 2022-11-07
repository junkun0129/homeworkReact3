import React, { Component } from 'react';
//import images
import left from "../assets/look-left.jpeg";
import right from "../assets/look-right.jpeg";

class ChallengeOne extends Component {
  //declare the state here
  state = {
    img:left
  };

  //click left/right button handler goes here
  pictureSwich = (e)=>{
    if(e.target.name === "left"){
      return this.setState({img:left});
      
    }
    if(e.target.name === "right"){
      return this.setState({img:right});
    }
  }

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.img}
            alt=""
            style={{width:200,height:200}}
          />
        </div>
        <button className="btn" name = "left" onClick={this.pictureSwich}>⭠</button>
        <button className="btn" name = "right" onClick={this.pictureSwich}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;