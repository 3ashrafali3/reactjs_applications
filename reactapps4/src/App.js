import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';

class App extends Component{

 render(){

return(
<div className="App">
<FunctionClick></FunctionClick>
<ClassClick></ClassClick>
<EventBind></EventBind>
</div>
)
}
}


export default App;