import React from 'react';
import { findTopTracks } from '../actions/SpotifyActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import ShowArtist from './ShowArtist'
import ShowSongs from './ShowSongs'
import '../App.css';

class SwipeArtist extends React.Component {

  handleShowSongs (event){
    event.preventDefault()
    this.props.findTopTracks(this.props.swipeArtist.spotify_id)
  }

  // <h4>{songs[2].name}</h4>

    render() {
        var songsBar;

        // if(this.props.songs.songs){
        //   songsBar = this.props.songs.songs.map((song)=>{
        //     return< ShowSongs song={song}/>
        //   })
        // }
        let songs = this.props.songs.songs
        //
        if(songs){
          songsBar =
          <div>
          <div id='songNames'>
            <span>{songs[0].name}   {songs[1].name}   {songs[2].name}</span>
          </div>
          <div id='songsBar'>
          <a href={songs[0].preview} target='_blank'><img id='albumPhoto' role='presentation' src={songs[0].album_art}/></a>&nbsp;&nbsp;&nbsp;
          <a href={songs[1].preview} target='_blank'><img id='albumPhoto' role='presentation' src={songs[1].album_art}/></a>&nbsp;&nbsp;&nbsp;
          <a href={songs[2].preview} target='_blank'><img id='albumPhoto' role='presentation' src={songs[2].album_art}/></a>
          </div>
          </div>
        }

        return (
          <div>
              <ShowArtist handleShowSongs={this.handleShowSongs.bind(this)} artist={this.props.swipeArtist}/><br/>
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
