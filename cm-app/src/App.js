import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Current from './components/Current';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Current/>
      </div>
    );
  }
}

export default App;
