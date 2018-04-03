import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar/Calendar';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Change Detection Demo</h1>
        <Calendar></Calendar>
      </div>
    );
  }
}

export default App;
