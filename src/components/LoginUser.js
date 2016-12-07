import React from 'react';
import { loginUserAction } from '../actions/RailsActions'
import { loginSpotUserAction } from '../actions/SpotifyActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css';

class LoginUser extends React.Component {

  switchVisible(event){
    if (document.getElementById('login')){
      if (document.getElementById('loginForm').style.display === ''){
        document.getElementById('loginForm').style.display = 'block'
      }
      else {
        document.getElementById('loginForm').style.display = ''
      }
    }
  }

  handleloginUser (event){
    event.preventDefault()
    let email = event.target.children[1].value
    let password = event.target.children[4].value

    this.props.loginUserAction(email, password)
  }


  render() {
    return(
      <div>
        <button id='login' onClick={this.switchVisible}>Login Form</button>
        <div id='loginForm'>
        <form onSubmit={this.handleloginUser.bind(this)}>
          <label type="text">email</label>
          <input type="text" /><br/>
          <label type="text">password</label>
          <input type="password" /><br/>
          <button type="submit">Login</button>
        </form>
        </div>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({loginUserAction, loginSpotUserAction}, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginUser)
