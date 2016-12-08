import React from 'react';
// import { Rails call for like artists?, delete and new actions } from '../actions/RailsActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css';

  class NavBarArtists extends React.Component {



  render() {
    return(
      <div>
      </div>
    )
  }

}

function mapStateToProps(state){
  return {likeArtist: state.likeArtist }
}

function mapDispatchToProps(dispatch){
  //return bindActionCreators({ new, create, delete}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarArtists)
