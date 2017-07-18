import React, { Component } from 'react';
import TaskWrapper from './components/TaskWrapper/TaskWrapper';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TaskWrapper />
      </div>
    );
  }
}

export default App;
