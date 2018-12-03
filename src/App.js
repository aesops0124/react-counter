import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {number:0}
  addValue = ()=>{this.setState({number:this.state.number+1})}
  minorValue = ()=>{this.setState({number:this.state.number-1})}
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
        <div>
        <button onClick={this.addValue}>+</button> 
        {this.state.number}
        <button onClick={this.minorValue}>-</button> 
        </div>
    );
  }
}

export default App;
