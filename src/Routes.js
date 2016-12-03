import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import CreateUser from './components/CreateUser'
import LoginUser from './components/LoginUser'
import SearchArtist from './components/SearchArtist'

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/signup" component={CreateUser} />
    <Route path="/login" component={LoginUser} />
    <Route path="/search" component={SearchArtist} />
  </Route>
)

module.exports = Routes
