import React from 'react';
import { findArtistById, findTopTracks } from '../actions/SpotifyActions'
// import { findTopTracks }  from '../actions/SpotifyActions'
import { likedArtist, unlikeArtist } from '../actions/ReactActions'
// import { unlikeArtist } from '../actions/ReactActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css';


export default class ShowArtist extends React.Component {

  render() {

    return(
      <div>
        <h3 className='showArtistName'>{this.props.artist.name}</h3>
        <img className='showArtistPhoto' src={this.props.artist.image} alt='0' onClick={this.props.handleShowSongs}/>
      </div>
    )
  }

}
