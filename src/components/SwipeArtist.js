import React from 'react';
import {findRelatedArtist} from '../actions/SpotifyActions'
import { getNewSwipeFromLikedAction } from '../actions/ReactActions'
import {storeLikedArtistAction} from '../actions/RailsActions'
import { findTopTracks } from '../actions/SpotifyActions'
import {getLikedArtistsAction} from '../actions/RailsActions'
import {connect} from 'react-redux'
import { removeSongsState } from '../actions/ReactActions'
import { bindActionCreators } from 'redux'
import ShowArtist from './ShowArtist'
import '../App.css';
import ShowSongs from './ShowSongs'
import ShowUserProfile from './ShowUserProfile'

class SwipeArtist extends React.Component {

  handleShowSongs (event){
    event.preventDefault()
    this.props.findTopTracks(this.props.swipeArtist.spotify_id)
  }

// will set the swipe artist based on a related artist
// of a random artist from likedartist state
// will add artist to nahArtist array in state
  handleNahArtist(event){
    event.preventDefault()
// $('#songNames').empty()
// $('#songsBar').empty()
    this.props.getNewSwipeFromLikedAction(this.props.likedArtists, this.props.swipeArtist, this.props.nahArtists)
    this.props.getLikedArtistsAction()
    this.props.removeSongsState()
  }

  handleLikeArtist(event){
    event.preventDefault()
    // should create new swipe artist based on likedartist related artist
    // should also save to rails db and update liked artist state
    this.props.storeLikedArtistAction(this.props.swipeArtist)
    this.props.findRelatedArtist(this.props.swipeArtist.spotify_id, this.props.nahArtists)
    this.props.removeSongsState()
  }

  handleUserProfile(event){
    event.preventDefault()
    this.props.userInfo
  }

    render() {
        var songsBar;

        if(this.props.songs.songs){
          songsBar = this.props.songs.songs.map((song)=>{
            return< ShowSongs song={song}/>
          })
        }

        return (
          <div>
              <ShowUserProfile user={this.props.userInfo}/>
              <ShowArtist handleShowSongs={this.handleShowSongs.bind(this)} artist={this.props.swipeArtist}/>
              <button id='like_button' type="button" onClick={this.handleNahArtist.bind(this)}>Nah</button>
              <button id='next_button' type="button" onClick={this.handleLikeArtist.bind(this)}>Like</button>
              {songsBar}
          </div>
        );
      }

}

// <span>{songs[0].name}   {songs[1].name}   {songs[2].name}</span>



function mapStateToProps(state){
  return {songs: state.songs, swipeArtist: state.swipeArtist, likedArtists:state.likedArtists, nahArtists: state.nahArtists, userInfo: state.user}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({removeSongsState:removeSongsState, findTopTracks:findTopTracks, getLikedArtistsAction:getLikedArtistsAction, getNewSwipeFromLikedAction:getNewSwipeFromLikedAction, storeLikedArtistAction:storeLikedArtistAction, findRelatedArtist: findRelatedArtist }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipeArtist)
