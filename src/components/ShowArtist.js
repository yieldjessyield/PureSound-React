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

    return(
      <div>
        <h3>{this.props.artist.name}</h3>
        <img src={this.props.artist.image} alt='0' onClick={this.props.handleShowSongs}/>
      </div>
    )
  }

}
