import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Greet from './components/Greet';

class App extends Component {

  render(){
  return (
    <div className="App">
      <Greet></Greet>
    </div>
  );
}
}

export default App;