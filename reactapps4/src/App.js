import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';

class App extends Component{

 render(){

return(
<div className="App">
<FunctionClick></FunctionClick>
<ClassClick></ClassClick>
</div>
)
}
}


export default App;