import React from 'react';
import { loginUserAction } from '../actions/RailsActions'
import { loginSpotUserAction } from '../actions/SpotifyActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css';
import $ from 'jquery'

class LoginUser extends React.Component {
  constructor(props) {
      super(props);
      this.state = { formOpen: false,}
    }


  switchVisible(event){
    debugger
    this.setState({formOpen: !this.state.formOpen}) 
  }

  handleloginUser (event){
    event.preventDefault()
    let email = event.target.children[1].value
    let password = event.target.children[4].value

    this.props.loginUserAction(email, password)
    $('.form-control').val('')
  }


  render() {
    debugger
    if (this.state.formOpen === false){
      debugger
      var show = <button id='login' onClick={this.switchVisible.bind(this)} type='submit'>Login</button>
    }

    if (this.state.formOpen === true){
      debugger
      var show = <div id='loginForm' className='form-group'>
        <form className='form-group' onSubmit={this.handleloginUser.bind(this)}>
          <label className='col-form-label' type="text">e m a i l</label>
          <input className='form-control' type="text" /><br/>
          <label className='col-form-label' type="text">p a s s w o r d</label>
          <input className='form-control' type="password" /><br/>
          <button id='login' type='submit'>Login</button>
        </form>
        </div>
    }

    return(
      <div>
        {show}
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({loginUserAction, loginSpotUserAction}, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginUser)
