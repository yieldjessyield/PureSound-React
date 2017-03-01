import React from 'react';
import { createUserAction } from '../actions/RailsActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css';
import $ from 'jquery'


class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formOpen: false,}
  }

  switchVisible(event){
    if (document.getElementById('signUp')){
      if (document.getElementById('signUpForm').style.display === ''){
        document.getElementById('signUpForm').style.display = 'block';
        $('#login').hide()
      }
      else {
        document.getElementById('signUpForm').style.display = '';
        $('#login').show()
      }
    }
  }

  handleCreateUser (event){
    event.preventDefault()
    let email = event.target.children[1].value
    let password = event.target.children[4].value
    // let phoneNumber = event.target.children[7].value

    this.props.createUserAction(email, password)
  }

  render() {


    if (this.props.signupFormOpen === false && this.props.signupVis === true){
      var show = <button id='signUp' onClick={this.props.onSignupClick}>Sign Up</button>
    }

    if (this.props.signupFormOpen === false && this.props.signupVis === false){
      var show = ""
    }

    if (this.props.signupFormOpen === true){
      var backButton = <button className='formButton' onClick={this.props.onBackClick}>&#8592;</button>
      var show =<form className='form-group' onSubmit={this.handleCreateUser.bind(this)}>
            <label className='col-form-label' type="text">e m a i l</label>
            <input className='form-control' type="text" required/><br/>
            <label className='col-form-label' type="text">p a s s w o r d</label>
            <input className='form-control' type="password" required/><br/>
            <button id='login' type='submit'>Sign Up</button>
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
  return bindActionCreators({createUserAction: createUserAction}, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateUser)
