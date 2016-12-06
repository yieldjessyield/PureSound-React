import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
// import CreateUser from './components/CreateUser'
// import LoginUser from './components/LoginUser'
import SearchArtist from './components/SearchArtist'
import SubmitArtists from './components/SubmitArtists'
import SwipeArtist from './components/SwipeArtist'
import InitialArtist from './components/InitialArtist'

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    {/* <Route path="/signup" component={CreateUser} />
    <Route path="/login" component={LoginUser} /> */}
    <Route path="/artists" component={InitialArtist} />
    <Route path="/search" component={SearchArtist} />
    <Route path="/submit" component={SubmitArtists} />
    <Route path="/swipeArtist" component={SwipeArtist} />
  </Route>
)

module.exports = Routes