import React from 'react';
import { createUserAction } from '../actions/RailsActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css';

class CreateUser extends React.Component {

  switchVisible(event){
    if (document.getElementById('signUp')){
      if (document.getElementById('signUpForm').style.display === ''){
        document.getElementById('signUpForm').style.display = 'block'
      }
      else {
        document.getElementById('signUpForm').style.display = ''
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
          <form onSubmit={this.handleCreateUser.bind(this)}>
            <label type="text">email</label>
            <input type="text" /><br/>
            <label type="text">password</label>
            <input type="password" /><br/>
            <label type="text">phone number</label>
            <input type="tel" /><br/>
            <button type="submit">Create User</button>
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
