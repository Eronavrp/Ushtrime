import React,{ Component } from 'react';
import './App.css';
import Card from './components/Card';

class App extends Component {
  state={
    languages : [
      {name: "Java", votes: 0},
      {name: "Python", votes: 0},
      {name: "Go", votes: 0},
      {name: "Sdi", votes: 0}
    ]
  };

  voteHandler = ( index ) => {
    const votat = [...this.state.languages];
    votat[index].votes++;
    this.setState({
      languages:votat
    })
  }

  render () {
    const votes= this.state.languages.map((l,index) =>{
      return <Card 
              votes={l.votes} 
              name={l.name} 
              key={index}
              clicked={ () => this.voteHandler(index)}/>
    })
   return (
      <div className="App">
      <h1>Whatever</h1>
      {votes}
      </div>
   )};
}

export default App;
