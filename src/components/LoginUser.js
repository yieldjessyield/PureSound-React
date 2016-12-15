import React from 'react';
import { loginUserAction } from '../actions/RailsActions'
import { loginSpotUserAction } from '../actions/SpotifyActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css';
import $ from 'jquery'

class LoginUser extends React.Component {

  switchVisible(event){
//       Here you don't want to directly access the dom, but instead have changes in state, and because a change in state
//     always re-renders the dom, you are ok.
    if (document.getElementById('login')){
      if (document.getElementById('loginForm').style.display === ''){
        document.getElementById('loginForm').style.display = 'block';
        $('#signUp').hide()
      }
      else {
        document.getElementById('loginForm').style.display = '';
        $('#signUp').show()
      }
    }
  }

  handleloginUser (event){
    event.preventDefault()
//     here again, you don't want to grab data off of the dom but instead, have a onChange on an input, have that call a callback
//     that changes the state.
    let email = event.target.children[1].value
    let password = event.target.children[4].value

    this.props.loginUserAction(email, password)
    $('.form-control').val('')
  }


  render() {
    return(
      <div>
        <button id='login' onClick={this.switchVisible}>Login</button>
        <div id='loginForm' className='form-group'>
        <form className='form-group' onSubmit={this.handleloginUser.bind(this)}>
          <label className='col-form-label' type="text">e m a i l</label>
          <input className='form-control' type="text" /><br/>
          <label className='col-form-label' type="text">p a s s w o r d</label>
          <input className='form-control' type="password" /><br/>
          <button className='formButton' type="submit">&#8594;</button>
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
