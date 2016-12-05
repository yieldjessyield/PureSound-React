import React from 'react';
import { createUserAction } from '../actions/RailsActions'
import {connect} from 'react-redux'
// import { Component } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, browserHistory } from 'react-router'
// import { findArtistByName } from '../actions/SpotifyActions'

class CreateUser extends React.Component {

    handleCreateUser (event){
      event.preventDefault()
      let email = event.target.children[1].value
      let password = event.target.children[4].value
      let phoneNumber = event.target.children[7].value

      this.props.createUserAction(email, password, phoneNumber)
      this.props.history.push('/artists')
      // browserHistory.push('/artists')
  }

  render() {
    return(
      <div>
      <h1>Sign Up</h1>
      <form onSubmit={this.handleCreateUser.bind(this)}>
        <label type="text">email</label>
        <input type="text" /><br/>
        <label type="text">password</label>
        <input type="password" /><br/>
        <label type="text">phone number</label>
        <input type="tel" /><br/>
        <button type="submit">Create User</button>
        {/* <Link to='/artists' type="submit">Create User</Link> */}
      </form>
      </div>
    )
  }
// onChange -- setState
// onSubmit -- send the entire state?
}

// function mapStateToProps(state){
//   return {artists: state.artists}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

function mapDispatchToProps(dispatch){
  return bindActionCreators({createUserAction}, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateUser)
