import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeYesArtists, storeNoArtist } from '../actions/ReactActions'
import { bindActionCreators } from 'redux'
import $ from 'jquery'
import '../App.css';

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
    if(artist.length !== 0) {
      checkArtistDiv =
        <div id='checkArtistDivId'>
          <br/>
          <img id='artistCheckImage' role='presentation' src={artist.artistUrl}/><br/>
          <button className ='checkButtons' onClick={this.handleYesCheck.bind(this)}>v e r i f y</button>
          <button className ='checkButtons' onClick={this.handleNoCheck.bind(this)}>n v m</button>
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
