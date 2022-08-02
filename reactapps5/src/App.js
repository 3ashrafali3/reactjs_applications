import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import ParentComponent from './component/ParentComponent';

class App extends Component{

  render(){
 
 return(
 <div className="App">
 <ParentComponent></ParentComponent>
 </div>
 )
 }
 }
 
 
 export default App;

