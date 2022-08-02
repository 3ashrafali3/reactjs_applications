import React, { Component } from 'react';

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Bismillah'
      };
    };

    ClickHandler(){

        this.setState({

            message:'New Test..'
        })
    }
    
  render() {
    return (
      <div> 
        {this.state.message}
        {/* <button onClick={this.ClickHandler.bind(this)}>Click New</button>  */}

        {/* <button onClick={this.ClickHandler()}>Click New</button>  */}
        <button onClick={()=>this.clickHandler()}>Click New</button> 
      </div>
    );
  }
}

export default EventBind;