import React from 'react';
import {findRelatedArtist, findTopTracks} from '../actions/SpotifyActions'
import { getNewSwipeFromLikedAction, removeSongsState } from '../actions/ReactActions'
import { storeLikedArtistAction, getLikedArtistsAction } from '../actions/RailsActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import ShowArtist from './ShowArtist'
import '../App.css';
import ShowSongs from './ShowSongs'
import ReactDOM from 'react-dom';
import $ from 'jquery'
import NavBar from './NavBar'
import { browserHistory } from 'react-router'

class SwipeArtist extends React.Component {

  constructor(){
    super()
    this.state = {
      songPlaying: ""
    }

    this.handleNahArtist = this.handleNahArtist.bind(this)
    this.handleLikeArtist = this.handleLikeArtist.bind(this)
    this.handleShowSongs = this.handleShowSongs.bind(this)
    this.handleShowSongName = this.handleShowSongName.bind(this)
  }


  componentDidMount(){
    // debugger
    if (this.props.user.jwt === undefined){
      browserHistory.push('/')
    }
    ReactDOM.findDOMNode(this.refs.divFocus).focus();
  }

  handleOnKeyDown(event){
    event.preventDefault()
    if (event.keyCode === 37){
      // left
      this.handleNahArtist()
    }
    else if (event.keyCode === 39){
      // right
      this.handleLikeArtist()
    }
    else if (event.keyCode === 40){
      // down
      this.handleShowSongs()
      $('#container').show()
    }
    else if (event.keyCode === 38){
      //  up
      $('#container').hide()
    }
  }

  handleShowSongs (event){
    this.setState({songPlaying: ""})
    this.props.findTopTracks(this.props.swipeArtist.spotify_id)
  }

  handleShowSongName(songName){
    this.setState({songPlaying: songName})
  }


  handleNahArtist(){
    // will set the swipe artist based on a related artist
    // of a random artist from likedartist state
    // will add artist to nahArtist array in state
    // event.preventDefault()
    this.setState({songPlaying: ""})
    this.props.getNewSwipeFromLikedAction(this.props.likedArtists, this.props.swipeArtist, this.props.nahArtists)
    // check what this is below
    this.props.getLikedArtistsAction()
    this.props.removeSongsState()
  }

  handleLikeArtist(){
    // should create new swipe artist based on likedartist related artist
    // should also save to rails db and update liked artist state
    this.setState({songPlaying: ""})
    this.props.storeLikedArtistAction(this.props.swipeArtist)
    this.props.findRelatedArtist(this.props.swipeArtist.spotify_id, this.props.nahArtists)
    this.props.removeSongsState()
  }

  render() {

    let songName = this.state.songPlaying

    var songsBar;

    if(this.props.songs.songs){
      songsBar = this.props.songs.songs.map((song)=>{
        return< ShowSongs songs={this.props.songs.songs} song={song} handleShowSongName={this.handleShowSongName}/>
      })
    }
// add a focus event, perhaps it has to be on input or checkbox
// listening for every keydown, and checking the key code.
    return (
      <div id='coverFlowDiv'>
        <NavBar />
        <span id='divFocus' ref='divFocus' tabIndex="0" onKeyDown={this.handleOnKeyDown.bind(this)} >
          <ShowArtist handleNahArtist={this.handleNahArtist}
            handleLikeArtist={this.handleLikeArtist} handleShowSongs={this.handleShowSongs} artist={this.props.swipeArtist}/>
            <div id='container'>
              <h4 id='doubleClickSong'>{songName}</h4>
              {songsBar}
            </div>
        </span>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {songs: state.songs, swipeArtist: state.swipeArtist, likedArtists: state.likedArtists, nahArtists: state.nahArtists, user: state.user}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({removeSongsState:removeSongsState, findTopTracks:findTopTracks, getLikedArtistsAction:getLikedArtistsAction, getNewSwipeFromLikedAction:getNewSwipeFromLikedAction, storeLikedArtistAction:storeLikedArtistAction, findRelatedArtist: findRelatedArtist }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipeArtist)
