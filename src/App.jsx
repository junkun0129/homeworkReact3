import { Component } from 'react';
import ChallengeOne from "./components/ChallengeOne.jsx";
import ChallengeTwo from './components/ChallengeTwo.jsx';

class App extends Component{

  render(){
    return (
      <div className="App">
        <h1>React Lab 3</h1>
        <ChallengeOne/>
        <ChallengeTwo/>
      </div>
    );
  }

}

export default App;