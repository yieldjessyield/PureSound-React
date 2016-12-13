import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer'
import Routes from './Routes'
import { Router, browserHistory } from 'react-router'
import configureStore from './store/configureStore';

const composeEnhancers = composeWithDevTools({});

// export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory} routes={Routes} />
  </Provider>,
  document.getElementById('root')
);
