import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer'

const composeEnhancers = composeWithDevTools({});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  < Provider store={store} >
    <App />
  </ Provider>,

  document.getElementById('root')
);
