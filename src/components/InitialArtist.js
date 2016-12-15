import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { findArtistByName } from '../actions/SpotifyActions'
import CheckArtist from './CheckArtist'
import YesArtists from './YesArtists'
import { browserHistory } from 'react-router'
import { storeArtistsRails } from '../actions/RailsActions'
import '../App.css';
import $ from 'jquery'


class InitialArtist extends Component {
  handleArtistCheck(event){
    event.preventDefault()
//       here too, don't pull data directly off the dom, but instead store it in state every time an input changes.
    this.props.findArtistByName(event.target.children[1].value)
  }

  render(){

    if(this.props.yesArtists.yesArtists.length === 3){
      this.props.storeArtistsRails(this.props.yesArtists.yesArtists)
      browserHistory.push('/swipeArtist')
    }

    return(
      <div id='InitialArtist'>
      <YesArtists />
      <h1 id='initialArtistsProcess'>s u b m i t&nbsp; t h r e e&nbsp; a r t i s t s</h1>
      <form onSubmit={this.handleArtistCheck.bind(this)}>
        <label className='initialArtistsProcess' type="text">n a m e:</label>&nbsp;&nbsp;
        <input id='artistSearch' type="text" autoComplete='off'/>&nbsp;&nbsp;
        <button className='initialArtistsProcess' id='initialArtistSubmit' type="submit">s u b m i t</button>
      </form>
      <CheckArtist />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {yesArtists: state.yesArtists}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({findArtistByName: findArtistByName, storeArtistsRails: storeArtistsRails }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(InitialArtist)
