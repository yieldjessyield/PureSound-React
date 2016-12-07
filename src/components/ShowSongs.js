import React from 'react';
import { Audio } from 'redux-audio'
import { playSong, pauseSong } from '../actions/ReactActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css';

class ShowSongs extends React.Component {


  handlePlayPauseSong(event){

    var songPlaying = this.props.songs.filter(function(song){
                        song.playStatus === true
    })

    if(songPlaying){
      var songPlayingId = songPlaying.id
      var songPlayingUrl = songPlaying.preview
      var uniqueId = this.props.song.id
      var src = this.props.song.preview

      if(this.props.song.playStatus === false){
        this.props.playSong(uniqueId,src)
        this.props.pauseSong(songPlayingId,songPlayingUrl)
      }
      else if (this.props.song.playStatus === true) {
        this.props.pauseSong(uniqueId,src)
      }
    } else {
      this.props.playSong(uniqueId,src)
      }

  }



  render() {

    let url = 'https://embed.spotify.com/?uri=spotify:track:' + this.props.song.id

    return(
      <div id='songsBar' >
        <h4>{this.props.song.name}</h4>
        <img id='albumPhoto'role='presentation' src={this.props.song.album_art} onClick={this.handlePlayPauseSong.bind(this)}/>
        <Audio src={this.props.song.preview} uniqueId={this.props.song.id} />
      </div>
    )
  }

}

function mapStateToProps(state){
  return {audio: state.audio}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ playSong, pauseSong }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowSongs)
