import React from 'react';
import { Audio } from 'redux-audio'
import '../App.css';

export default class ShowSongs extends React.Component {


  render() {
    let url = 'https://embed.spotify.com/?uri=spotify:track:' + this.props.song.id

    return(
      <div id='songsBar'>
        <h4> {this.props.song.name}</h4>
        <img id='albumPhoto'role='presentation' src={this.props.song.album_art}/>
        <Audio src={this.props.song.preview} uniqueId='example' controls loop/>
      </div>
    )
  }

}
