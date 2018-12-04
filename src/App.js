import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from './Components/CounterGroup.js';

class App extends Component {
  state = {
    size: this.props.size,
    numberArray: new Array(this.props.size).fill(0)
  }

    addValue = ()=>{
      var updatedNumber = this.state.size+1;
      this.setState({
        size:updatedNumber,
      })
      
      this.setState({
        numberArray: new Array(updatedNumber).fill(0)})
    }
    minorValue = ()=>{
      var updatedNumber = this.state.size-1;
      this.setState({
        size:updatedNumber,
      })
      this.setState({
        numberArray: new Array(updatedNumber).fill(0)})
    }

  render() {
    return (
        <div>
            <button onClick={this.addValue}>+</button> 
            <span>Size: {this.state.size}</span>
            <button onClick={this.minorValue}>-</button>
            {this.state.numberArray.map(() => (<CounterGroup/>))} 
        </div>
        
    );
  }
}

export default App;
