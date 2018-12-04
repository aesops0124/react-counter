import React, { Component } from 'react'

export default class CounterGroup extends Component {
    

    render() {
        return (
        <div>
            <button onClick={this.addValue}>+</button> 
            <span>{0}</span>
            <button onClick={this.minorValue}>-</button> 
        </div>
        )
    }
}
