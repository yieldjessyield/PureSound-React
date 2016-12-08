import React from 'react';
import '../App.css';
import { bindActionCreators } from 'redux'
import {submitUserUpdate} from '../actions/RailsActions'
import {connect} from 'react-redux'

class UserBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: this.props.user.userEmail, password: this.props.user.userPassword, phoneNumber: this.props.user.userPhoneNumber }
  }

  handleUserEdit(event){
    event.preventDefault()

    this.props.submitUserUpdate(this.state.email, this.state.password, this.state.phoneNumber)
  }

  handleEmailChange(event){
    this.setState({email: event.target.value })
  }

  handlePhoneNumberChange(event){
    this.setState({phoneNumber: event.target.value })
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value })
  }

  render() {
    return(
      <div>
        <h3 id='showUserName'>Hello, {this.props.user.userEmail}</h3>
        <h5>Edit your info below</h5>
        <form onSubmit={this.handleUserEdit.bind(this)}>
          <label type="text">Email:</label>
            <input type="text" onChange={this.handleEmailChange.bind(this)} value={this.state.email}/>
          <label type="text">Phone Number:</label>
            <input type="text" onChange={this.handlePhoneNumberChange.bind(this)} value={this.state.phoneNumber}/>
          <label type="text">Password:</label>
            <input type="password" onChange={this.handlePasswordChange.bind(this)} value={this.state.password} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({submitUserUpdate: submitUserUpdate }, dispatch)
}

export default connect(null, mapDispatchToProps)(UserBar)
