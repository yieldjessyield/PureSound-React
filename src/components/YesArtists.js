import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css';

class YesArtists extends React.Component {
  render(){
    let artists
    if (this.props.yesArtists){
      artists = this.props.yesArtists.yesArtists.map(function(artist) {
        return <ul>{artist.artistName}</ul>
      })
    }
    return(
      <div>{artists}</div>
    )
  }
}

function mapStateToProps(state){
  return {yesArtists: state.yesArtists }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({storeYesArtists: storeYesArtists }, dispatch)
// }

export default connect(mapStateToProps)(YesArtists)
