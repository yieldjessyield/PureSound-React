import React from 'react';
import { findArtistById, findTopTracks } from '../actions/SpotifyActions'
// import { findTopTracks }  from '../actions/SpotifyActions'
import { likedArtist, unlikeArtist } from '../actions/ReactActions'
// import { unlikeArtist } from '../actions/ReactActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import ShowArtist from './ShowArtist'
import ShowSongs from './ShowSongs'
import '../App.css';

class SwipeArtist extends React.Component {

  constructor(props){
    super(props);
  }


  handleShowSongs (event){
    event.preventDefault()
    this.props.findTopTracks(this.props.swipeArtist.spotify_id)
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
              <ShowArtist handleShowSongs={this.handleShowSongs.bind(this)} artist={this.props.swipeArtist}/>
              {songsBar}
          </div>
        );
      }

}



function mapStateToProps(state){
  return {songs: state.songs, swipeArtist: state.swipeArtist}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({findTopTracks:findTopTracks }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipeArtist)
