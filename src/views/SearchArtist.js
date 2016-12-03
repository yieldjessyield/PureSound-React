import React from 'react';
import { findTopTracks } from '../actions/SpotifyActions'
// import { loginSpotUserAction } from '../actions/SpotifyActions'
import {connect} from 'react-redux'
// import { Component } from 'react-redux'
import { bindActionCreators } from 'redux'

  class SearchArtist extends React.Component {

    handleArtistSearch (event){
      event.preventDefault()
      let artist = event.target.children[1].value
      this.props.findTopTracks(artist)
    }

    // 56ZTgzPBDge0OvCGgMO3OY


  render() {
    return(
      <div>
      <h1>Put In Your Favorite Artist</h1>
      <form onSubmit={this.handleArtistSearch.bind(this)}>
        <label type="text">Artist Name</label>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({findTopTracks}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchArtist)
