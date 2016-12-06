import React from 'react';
import '../App.css';

export default class ShowSongs extends React.Component {

  render() {
    return(
      <span id='span'>
        <h4> {this.props.song.name}</h4>
        <a href={this.props.song.preview}><img id='albumPhoto' role='presentation' src={this.props.song.album_art}/></a>
      </span>
    )
  }

}
