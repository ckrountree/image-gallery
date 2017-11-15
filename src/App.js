import React, { Component } from 'react';
import bunny from './image/bunny.jpg';
import './App.css';
import BunnyList from './BunnyList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={bunny} className="App-logo" alt="" />
          <h1 className="App-title">Welcome to a World of Bunnies</h1>
        </header>
        <BunnyList/>
      </div>
    );
  }
}

export default App;