import React, { Component } from 'react'
import './App.css';

class App extends Component {
  foo = () => {
    return 'Bar'
  }
  render () {
    const name = 'John Doe';
    return (
      <div className="App">
        <h1>Hello from {this.foo()}</h1>
        <h1>Hello from {name}</h1>
      </div>
    );
  }

}

export default App;
