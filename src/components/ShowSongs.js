import React from 'react';
import { findArtistById, findTopTracks } from '../actions/SpotifyActions'
// import { findTopTracks }  from '../actions/SpotifyActions'
import { likedArtist, unlikeArtist } from '../actions/ReactActions'
// import { unlikeArtist } from '../actions/ReactActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css';

export default class ShowSongs extends React.Component {

  render() {
    return(
      <div>
        <h4> {this.props.song.name}</h4>
        <a href={this.props.song.preview}><img src={this.props.song.album_art}/></a>
      </div>
    )
  }

}
