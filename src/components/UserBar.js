import React from 'react';
// import { Rails call for like artists?, delete and new actions } from '../actions/RailsActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css';

class UserBar extends React.Component {

  render() {
    return(
      <div className='navBar'>
        userbar
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

export default connect(mapStateToProps, mapDispatchToProps)(UserBar)
