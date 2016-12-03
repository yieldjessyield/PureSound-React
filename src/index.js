import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer'
import Routes from './Routes'
import { Router, hashHistory } from 'react-router'

const composeEnhancers = composeWithDevTools({});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory} routes={Routes} />
  </Provider>,
  document.getElementById('root')
);
