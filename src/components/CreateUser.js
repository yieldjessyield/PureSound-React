import React from 'react';
import { createUserAction } from '../actions/RailsActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css';
import $ from 'jquery'


class CreateUser extends React.Component {

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
    let phoneNumber = event.target.children[7].value

    this.props.createUserAction(email, password, phoneNumber)
  }

  render() {
    return(
      <div>
        <button id='signUp' onClick={this.switchVisible}>Sign Up</button>
        <div id='signUpForm'>
          <form className='form-group' onSubmit={this.handleCreateUser.bind(this)}>
            <label className='col-form-label' type="text">email</label>
            <input className='form-control' type="text" /><br/>
            <label className='col-form-label' type="text">password</label>
            <input className='form-control' type="password" /><br/>
            <label className='col-form-label' type="text">phone number</label>
            <input className='form-control' type="tel" /><br/>
            <button className='formButton' type="submit">Create User</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({createUserAction: createUserAction}, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateUser)
