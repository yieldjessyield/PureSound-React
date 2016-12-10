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
import ArtistsBar from './ArtistsBar'
import UserBar from './UserBar'
import HelpBar from './HelpBar'
import $ from 'jquery'

class SwipeArtist extends React.Component {

  constructor(){
    super()
    this.state = {
      artistsBar: false,
      userBar: false,
      helpBar: false
    }

    this.handleNahArtist = this.handleNahArtist.bind(this)
    this.handleLikeArtist = this.handleLikeArtist.bind(this)
    this.handleShowSongs = this.handleShowSongs.bind(this)
    this.artistsBarClick = this.artistsBarClick.bind(this)
    this.userBarClick = this.userBarClick.bind(this)
    this.helpBarClick = this.helpBarClick.bind(this)
  }

  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.divFocus).focus();
  }

  artistsBarClick(){
    if (this.state.artistsBar == false){
      $('#divFocus').hide()
    } else {
      $('#divFocus').show()
    }
    this.setState({artistsBar: !this.state.artistsBar})
    ReactDOM.findDOMNode(this.refs.divFocus).focus();
  }

  userBarClick(){
    if (this.state.userBar == false){
      $('#divFocus').hide()
    } else {
      $('#divFocus').show()
    }
    this.setState({userBar: !this.state.userBar})
    ReactDOM.findDOMNode(this.refs.divFocus).focus();
  }

  helpBarClick(){
    this.setState({helpBar: !this.state.helpBar})
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
    }
    else if (event.keyCode === 38){
      //  up
    }
  }

  handleShowSongs (event){
    // event.preventDefault()
    this.props.findTopTracks(this.props.swipeArtist.spotify_id)
  }


  handleNahArtist(){
    // will set the swipe artist based on a related artist
    // of a random artist from likedartist state
    // will add artist to nahArtist array in state
    // event.preventDefault()
    this.props.getNewSwipeFromLikedAction(this.props.likedArtists, this.props.swipeArtist, this.props.nahArtists)
    // check what this is below
    this.props.getLikedArtistsAction()
    this.props.removeSongsState()
  }

  handleLikeArtist(){
    // should create new swipe artist based on likedartist related artist
    // should also save to rails db and update liked artist state
    this.props.storeLikedArtistAction(this.props.swipeArtist)
    this.props.findRelatedArtist(this.props.swipeArtist.spotify_id, this.props.nahArtists)
    this.props.removeSongsState()
  }

  render() {
    var songsBar;

    if(this.props.songs.songs){
      songsBar = this.props.songs.songs.map((song)=>{
        return< ShowSongs songs={this.props.songs.songs} song={song}/>
      })
    }
// add a focus event, perhaps it has to be on input or checkbox
// listening for every keydown, and checking the key code.
    return (
      <div id='coverFlowDiv'>
        <span id='navBar'>
          &nbsp;<button  className='navBarButtons' onClick={this.artistsBarClick}>&hearts;</button>&nbsp;
          <button  className='navBarButtons' onClick={this.userBarClick}>&#9786;</button>&nbsp;
          <button  className='navBarButtons' onClick={this.helpBarClick}>?</button>
          {this.state.artistsBar === true ? <ArtistsBar /> : null}
          {this.state.userBar === true ? <UserBar user={this.props.user}/> : null}
          {this.state.helpBar === true ? <HelpBar /> : null}
        </span>
        <span id='divFocus' ref='divFocus' tabIndex="0" onKeyDown={this.handleOnKeyDown.bind(this)} >
          <ShowArtist artist={this.props.swipeArtist}/>
          {songsBar}
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
