import React, { Component } from 'react'
import '../App.css';
import Home from './Home'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer'
const composeEnhancers = composeWithDevTools({});

class App extends Component {
  componentWillReceiveProps(nextProps){
    debugger;
  }
  render() {
    return (
      <div className="App">
        {/* <Home /> */}

        {this.props.children}
      </div>
    );
  }
}
export default App;
