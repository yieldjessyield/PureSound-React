import React from 'react';
import { findArtistById } from '../actions/SpotifyActions'
import { findTopTracks }  from '../actions/SpotifyActions'
import { likedArtist } from '../actions/ReactActions'
import { unlikeArtist } from '../actions/ReactActions'
import {connect} from 'react-redux'
// import { Component } from 'react-redux'
import { bindActionCreators } from 'redux'


export default class ShowArtist extends React.Component {

  render() {
    let artist = {
      artistName: "Beach House",
      artistImage: "https://i.scdn.co/image/ec7988b89f339182bc5292d42fa02479a39e9b8d"
    }

    return(
      <div>
        <h3>{artist.artistName}</h3>
        <img src={artist.artistImage} alt='0' onClick={this.props.handleShowSongs}/>
      </div>
    )
  }

}
