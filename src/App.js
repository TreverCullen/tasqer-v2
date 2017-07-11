import React, { Component } from 'react';
import Intro from './components/Intro/Intro';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Intro />
      </div>
    );
  }
}

export default App;
