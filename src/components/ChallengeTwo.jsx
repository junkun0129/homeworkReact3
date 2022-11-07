import React, { Component } from 'react'

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

let keyNum = 0;

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: []
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() { 
    //display the student list after 3 seconds
    setTimeout(()=>{
      this.setState({arr:studentList})
    }, 3000);

    
  }

  //random button handler
  randomize = () => {
    //shuffle the array and set the state
    for(let i = studentList.length - 1; i >= 1; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // 0 <= j <= i
      let temp = studentList[j];
      studentList[j] = studentList[i];
      studentList[i] = temp;
    }
    console.log("invoke")
    this.setState({arr:studentList});
    //console.log(this.state.arr)
  }

  

  render() {
    
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
            {
              this.state.arr.map(name=>{
                keyNum++
                
                return(

                <div key = {keyNum}>
                  {name}
                </div>
                )
                
              })
            }
          </ul>
        </div>
        <button className='btn large' onClick={()=>this.randomize()}>Randomize</button>
      </>
    )
  }
}
