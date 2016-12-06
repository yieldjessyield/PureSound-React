import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { findArtistByName } from '../actions/SpotifyActions'
import CheckArtist from './CheckArtist'
import YesArtists from './YesArtists'
import { browserHistory } from 'react-router'
import { storeArtistsRails } from '../actions/RailsActions'
import '../App.css';

class InitialArtist extends Component {
  handleArtistCheck(event){
    event.preventDefault()
    this.props.findArtistByName(event.target.children[1].value)
  }

  render(){
    if (this.props.yesArtists.yesArtists.length === 3){
      this.props.storeArtistsRails(this.props.yesArtists.yesArtists)
      browserHistory.push('/swipeArtist')
    }
      return(
        <div>
        <h1>Submit Three of Your Favorite Artists</h1>
        <form onSubmit={this.handleArtistCheck.bind(this)}>
          <label type="text">Name:</label>
          <input type="text"/>
          <button type="submit">Submit</button>
        </form>
        <CheckArtist />
        <h1>Selected Artists</h1>
        <YesArtists />
        </div>
      )
  }
}

function mapStateToProps(state){
  return {yesArtists: state.yesArtists }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({findArtistByName: findArtistByName, storeArtistsRails: storeArtistsRails }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(InitialArtist)
