import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css';

class YesArtists extends React.Component {
  render(){

    let artists = this.props.yesArtists;
    let yesArtistsDiv;
    let selectedArtists;

    if(artists.length != 0){
      debugger
      selectedArtists = this.props.yesArtists.map(function(artist) {
        return (
          <span>
            <img id='yesArtistsPhoto' role='presentation' src={artist.artistUrl}/>
            {artist.artistName}
          </span>
        )
      })
      yesArtistsDiv =
        <div>
          <h1>Selected Artists</h1>
          {selectedArtists}
        </div>
    }

    return(
      <div>{yesArtistsDiv}</div>
    )
  }
}

function mapStateToProps(state){
  return {yesArtists: state.yesArtists.yesArtists }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({storeYesArtists: storeYesArtists }, dispatch)
// }

export default connect(mapStateToProps)(YesArtists)
