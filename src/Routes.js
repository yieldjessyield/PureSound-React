import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import SearchArtist from './components/SearchArtist'
import SwipeArtist from './components/SwipeArtist'
import InitialArtist from './components/InitialArtist'

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/artists" component={InitialArtist} />
    <Route path="/search" component={SearchArtist} />
    <Route path="/swipeArtist" component={SwipeArtist} />
  </Route>
)

module.exports = Routes
