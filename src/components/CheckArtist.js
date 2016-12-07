import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeYesArtists, storeNoArtist } from '../actions/ReactActions'
import { bindActionCreators } from 'redux'
import $ from 'jquery'
import '../App.css';
import { browserHistory } from 'react-router'
import InitialArtist from './InitialArtist'


class CheckArtist extends Component {

  handleYesCheck(){
    event.preventDefault()
    $('#artistSearch').val('')
    $('#checkArtistDivId').hide()
    this.props.storeYesArtists(this.props.initialArtist)
  }

  handleNoCheck(){
    event.preventDefault()
    $('#artistNameCheck').empty()
    $('#artistSearch').val('')
    this.props.storeNoArtist()
  }

  render(){
    let artist = this.props.initialArtist;
    let checkArtistDiv;
    if(artist.length != 0) {
      checkArtistDiv =
        <div id='checkArtistDivId'>
          <h5 id='artistNameCheck'>{artist.artistName}</h5>
          <img id='artistCheckImage' role='presentation' src={artist.artistUrl}/>
          <h5>Correct?</h5>
          <button onClick={this.handleYesCheck.bind(this)}>Yes</button>
          <button onClick={this.handleNoCheck.bind(this)}>No</button>
        </div>
    }

    return(
      <div>
        {checkArtistDiv}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {initialArtist: state.initialArtist }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({storeYesArtists: storeYesArtists, storeNoArtist: storeNoArtist }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckArtist)
