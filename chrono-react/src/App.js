import React, { Component } from 'react';
import Chrono from './components/Chrono';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Chrono</h1>
        <Chrono />
      </div>
    );
  }
}

export default App;
