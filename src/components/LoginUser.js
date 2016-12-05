import React from 'react';
import { loginUserAction } from '../actions/RailsActions'
import { loginSpotUserAction } from '../actions/SpotifyActions'
import {connect} from 'react-redux'
// import { Component } from 'react-redux'
import { bindActionCreators } from 'redux'

class LoginUser extends React.Component {

    handleloginUser (event){
      event.preventDefault()
      let email = event.target.children[1].value
      let password = event.target.children[4].value

      this.props.loginUserAction(email, password)
    }


  render() {
    return(
      <div>
      <h1>Login</h1>
      <form onSubmit={this.handleloginUser.bind(this)}>
        <label type="text">email</label>
        <input type="text" /><br/>
        <label type="text">password</label>
        <input type="password" /><br/>
        <button type="submit">Login</button>
      </form>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({loginUserAction, loginSpotUserAction}, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginUser)
