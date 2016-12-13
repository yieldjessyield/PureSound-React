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
        <button onClick={this.props.handleNahArtist} id='leftArrow'>&#9747;</button>
        <div className='leftRight'>
        <img onClick={this.props.handleShowSongs} id='showArtistPhoto' src={this.props.artist.image} alt='0' />
        </div>
        <button onClick={this.props.handleLikeArtist} id='rightArrow'>&#9825;</button>
      </div>
    )
  }

}
