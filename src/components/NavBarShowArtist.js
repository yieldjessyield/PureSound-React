import React from 'react';
import '../App.css';

export default class NavBarShowArtist extends React.Component {

  render() {
    return(
      <div>
        <h4>{this.props.artist.name}</h4>
          <a href={this.props.artist.spotifyUrl} target='blank'><img id={this.props.artist.name} src={this.props.artist.image} style="max-height: 300px; max-width: 300px" alt='0' /></a>
          <button onClick={this.props.handleDeleteArtist.bind(this)}>
        //delete
      </div>
    )
  }
}

//if you have time create a hover event for artist to expand a little on={this.props.handleEnlarge artist and show delete button}
