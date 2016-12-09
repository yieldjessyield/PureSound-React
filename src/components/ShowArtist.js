import React from 'react';
import '../App.css';
import $ from 'jquery'

export default class ShowArtist extends React.Component {

  flip() {
    $('#showArtistPhoto').toggleClass('active');
  }

  render() {

    return(
      <div id='ShowArtist'>
        <h3 id='showArtistName'>{this.props.artist.name}</h3>
        <img  onClick={this.flip()} id='showArtistPhoto' src={this.props.artist.image} alt='0' />
      </div>
    )
  }

}
