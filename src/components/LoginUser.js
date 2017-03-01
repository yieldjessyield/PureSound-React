import React from 'react';
import { loginUserAction } from '../actions/RailsActions'
import { loginSpotUserAction } from '../actions/SpotifyActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css';
import $ from 'jquery'

class LoginUser extends React.Component {

  handleloginUser (event){
    event.preventDefault()
    let email = event.target.children[1].value
    let password = event.target.children[4].value

    this.props.loginUserAction(email, password)
    $('.form-control').val('')
  }


  render() {
    if (this.props.loginFormOpen === false && this.props.loginVis === true){
      var show = <button id='login' onClick={this.props.onLoginClick} type='submit'>Login</button>
    }

    if (this.props.loginFormOpen === false && this.props.loginVis === false){
      var show = ""
    }

    if (this.props.loginFormOpen === true){
      var backButton = <button className='formButton' onClick={this.props.onBackClick}>&#8592;</button>
      var show = <form className='form-group' onSubmit={this.handleloginUser.bind(this)}>
          <label className='col-form-label' type="text">e m a i l</label>
          <input className='form-control' type="text" /><br/>
          <label className='col-form-label' type="text">p a s s w o r d</label>
          <input className='form-control' type="password" /><br/>
          <button id='login' type='submit'>Login</button>
        </form>
    }

    return(
      <div>
        {backButton}
        {show}
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({loginUserAction, loginSpotUserAction}, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginUser)
