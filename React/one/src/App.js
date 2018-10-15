import React, { Component } from 'react';
import './App.css';
import X from './xsk'
import User from './user'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "司超飞"
    }
  }
  all() {
    console.log(1)
    this.setState({
      name: "scf"
    })
  }
  render() {
    return (
      <div>
        <User />
        <button onClick={this.all.bind(this)}>123</button>
        <div><X name={this.state.name} /></div>
      </div>
    )
  }
}

export default App;
