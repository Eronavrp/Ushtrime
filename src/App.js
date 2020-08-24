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
    const votes = [...this.state.languages];
    votes[index].votes++;
    this.setState({
      languages:votes
    })
  }

  render () {
    const votes= this.state.languages.map(({name,votes},index) =>{
      return <Card 
              votes={votes} 
              name={name} 
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
