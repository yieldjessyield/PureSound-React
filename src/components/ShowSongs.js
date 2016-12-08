import React from 'react';
import { Audio } from 'redux-audio'
import { playSong, pauseSong } from '../actions/ReactActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css';

class ShowSongs extends React.Component {


  handlePlayPauseSong(event){
    var songPlaying = this.props.songs.filter(function(song){
      return song.playStatus === true
    })

    var songs = this.props.songs

    var songToPlay = this.props.song

    if(songPlaying && songPlaying.length>0){
      var songPlayingId = songPlaying.id
      var songPlayingUrl = songPlaying.preview
      var uniqueId = this.props.song.id
      var src = this.props.song.preview

      if(this.props.song.playStatus === false){
        this.props.pauseSong(songPlayingId, songPlayingUrl, songPlaying)
        this.props.playSong(uniqueId,src,songToPlay)

      }
      else if (this.props.song.playStatus === true) {
        this.props.pauseSong(uniqueId,src, this.props.song, songToPlay)
      }
    } else {
        var uniqueId = this.props.song.id
        var src = this.props.song.preview
        this.props.playSong(uniqueId,src,songToPlay)
      }

  }



  render() {

    // let url = 'https://embed.spotify.com/?uri=spotify:track:' + this.props.song.id
    //   if(this.props.songs[0].id === this.props.song.id){
    //     var cssClass = "left"
    //   }
    //   else if (this.props.songs[1].id === this.props.song.id) {
    //     var cssClass = "center"
    //   }
    //   else if (this.props.songs[2].id === this.props.song.id) {
    //     var cssClass = "right"
    //   }
    return(
      <span id='songsBar' className='showSongsClass' >
        <h4>{this.props.song.name}</h4>
        <img id='albumPhoto' role='presentation' src={this.props.song.album_art} onClick={this.handlePlayPauseSong.bind(this)}/>
        <Audio src={this.props.song.preview} uniqueId={this.props.song.id} />
      </span>
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
