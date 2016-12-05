import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { findArtistByName } from '../actions/SpotifyActions'
import CheckArtist from './CheckArtist'
import YesArtists from './YesArtists'

// id, name, image

class InitialArtist extends Component {
  handleArtistCheck(event){
    event.preventDefault()
    this.props.findArtistByName(event.target.children[1].value)
  }

  render(){
    return(
      <div>
      <h1>Type an Artist</h1>
      <form onSubmit={this.handleArtistCheck.bind(this)}>
        <label type="text">Name:</label>
        <input type="text"/>
        <button type="submit">Submit</button>
      </form>
      <CheckArtist />
      <h1>Your Artists</h1>
      <YesArtists />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({findArtistByName: findArtistByName }, dispatch)
}



export default connect(null, mapDispatchToProps)(InitialArtist)
