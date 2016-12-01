import React, { Component } from 'react';
import './App.css';
import CreateUser from './views/CreateUser'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateUser />
      </div>
    );
  }
}

