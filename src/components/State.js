import React, { Component } from 'react'

export class State extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         model: 'fz',
    //         company: 'yamaha',
    //         year: 2020
    //     }
    // }
    state = {
        model: 'fz',
        company: 'yamaha',
        year: 2020

    }
    
    updateYear=()=>{
        this.setState({
            year: this.state.year + 1
        })
    }
  render() {
    return (
      <div>
        <button onClick={this.updateYear}>Increment</button>
        <h1>{this.state.model}</h1>
        <h1>{this.state.year}</h1>
      </div>
    )
  }
}

export default State
