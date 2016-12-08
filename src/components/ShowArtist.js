import React from 'react';
import '../App.css';

export default class ShowArtist extends React.Component {

  render() {

    return(
      <div id='ShowArtist'>
        <h3 id='showArtistName'>{this.props.artist.name}</h3>
        <img id='showArtistPhoto' src={this.props.artist.image} alt='0' />
      </div>
    )
  }

}
