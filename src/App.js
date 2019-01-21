import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Hello from App</h1>
      </div>
    );
  }
}

export default App;
