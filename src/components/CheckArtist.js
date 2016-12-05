import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeYesArtists } from '../actions/ReactActions'
import { bindActionCreators } from 'redux'

class CheckArtist extends Component {

  handleYesCheck(){
    event.preventDefault()
    this.props.storeYesArtists(this.props.initialArtist[0])
  }

  render(){
    let artist = this.props.initialArtist
    return(
      <div>
      {artist}
      <h5>Correct?</h5>
      <button onClick={this.handleYesCheck.bind(this)}>Yes</button>
      <button>No</button>
      </div>
    )
  }
}

function mapStateToProps(state){

  return {initialArtist: state.initialArtist }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({storeYesArtists: storeYesArtists }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckArtist)
