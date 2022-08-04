import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Greet from './components/Greet';
import Welcome from './components/Welcome';
class App extends Component {

  render(){
  return (
    <div className="App">
      <Greet name="Bruce"></Greet>
      <Welcome name="Bruce"></Welcome>
    </div>
  );
}
}

export default App;
