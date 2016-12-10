import React from 'react';
import '../App.css';
import { bindActionCreators } from 'redux'
import {submitUserUpdate} from '../actions/RailsActions'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom';


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
      <div id='userBarDiv'>
      <div id='userBarForm'>
        <form className='form-group' onSubmit={this.handleUserEdit.bind(this)}>
          <label className='col-form-label' type="text">e m a i l</label>
            <input className='form-control' type="text" onChange={this.handleEmailChange.bind(this)} value={this.state.email}/>
          <label className='col-form-label' type="text">p a s s w o r d</label>
            <input className='form-control' type="password" onChange={this.handlePasswordChange.bind(this)} value={this.state.password} />
            <label className='col-form-label' type="text">p h o n e  n u m b e r</label>
              <input className='form-control' type="text" onChange={this.handlePhoneNumberChange.bind(this)} value={this.state.phoneNumber}/>
          <button id='userBarButton' type="submit">&#9998;</button>
        </form>
      </div>
      <div className='yourLikedArtists'>{this.props.user.userEmail}</div>
    </div>
    )
  }
}

function mapStateToProps(state){
  return {user: state.user}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({submitUserUpdate: submitUserUpdate }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBar)
