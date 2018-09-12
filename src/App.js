import React, { Component } from 'react';
import Calculator from './Calculator';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Advanced Calculator</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;