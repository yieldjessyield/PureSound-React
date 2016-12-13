import React from 'react';
import { Audio } from 'redux-audio'
import { playSong, pauseSong } from '../actions/ReactActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css';

class ShowSongs extends React.Component {

  constructor(){
    super()
  }


  handlePlayPauseSong(event){
    let songs = this.props.songs
    let clickedSong = this.props.song
    // let i = songs.indexOf(clickedSong)

    if(this.props.song.playStatus === false){
      this.props.playSong(songs,clickedSong)

        // this.props.handleShowSongName(songToPlay)
    }
    else if (this.props.song.playStatus === true) {
      this.props.pauseSong(songs);
    }
  }

  handleDoubleClick(event){
    this.props.handleShowSongName(this.props.song.name)
  }


  render() {

    return(
      <span className='showSongsClass' >
      <img id='albumPhoto' role='presentation' src={this.props.song.album_art}
         onClick={this.handlePlayPauseSong.bind(this)}
       onDoubleClick={this.handleDoubleClick.bind(this)}/>
        <Audio src={this.props.song.preview} loop uniqueId={this.props.song.id} />&nbsp;&nbsp;&nbsp;
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
