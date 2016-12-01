import React, { Component } from 'react';
import './App.css';
import CreateUser from './views/CreateUser'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateUser />
      </div>
    );
  }
}

export default App;
