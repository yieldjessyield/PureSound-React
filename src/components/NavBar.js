import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom';
import ArtistsBar from './ArtistsBar'
import UserBar from './UserBar'
import HelpBar from './HelpBar'
import { browserHistory } from 'react-router'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { logoutUser } from '../actions/ReactActions'

class NavBar extends React.Component {

  constructor(){
    super()

    this.state = {
      artistsBar: false,
      userBar: false,
      helpBar: false
    }

    this.artistsBarClick = this.artistsBarClick.bind(this)
    this.userBarClick = this.userBarClick.bind(this)
    this.helpBarClick = this.helpBarClick.bind(this)
    this.logOut = this.logOut.bind(this)

  }

  artistsBarClick(){
    if (this.state.artistsBar == false){
//       don't hide something with jquery - in fact should remove the jquery library from your components - bc you don't need it
      
      $('#divFocus').hide()
//       you can set multiple states at once: this.setState({userBar: false, helpBar: false})
      this.setState({userBar: false})
      this.setState({helpBar: false})
    } else {
      $('#divFocus').show()
    }
    this.setState({artistsBar: !this.state.artistsBar})
  }

  userBarClick(){
    if (this.state.userBar == false){
      //       don't hide something with jquery - in fact should remove the jquery library from your components - bc you don't need it
      $('#divFocus').hide()
      this.setState({artistsBar: false})
      this.setState({helpBar: false})
    } else {
      $('#divFocus').show()
    }
    this.setState({userBar: !this.state.userBar})
  }

  helpBarClick(){
    if (this.state.helpBar == false){
      //       don't hide something with jquery - in fact should remove the jquery library from your components - bc you don't need it
      $('#divFocus').hide()
      this.setState({artistsBar: false})
      this.setState({userBar: false})
    } else {
      $('#divFocus').show()
    }
    this.setState({helpBar: !this.state.helpBar})
  }

  logOut(){
    this.props.logoutUser()
    localStorage.clear()
    browserHistory.push('/')
  }


  render(){
    return(
      <span id='navBar'>
        &nbsp;<button  className='navBarButtons' onClick={this.artistsBarClick}>&hearts;</button>&nbsp;
        <button  className='navBarButtons' onClick={this.userBarClick}>&#9786;</button>&nbsp;
        <button  className='navBarButtons' onClick={this.helpBarClick}>?</button>&nbsp;
        <button  className='navBarButtons' onClick={this.logOut}>&#10007;</button>
        {this.state.artistsBar === true ? <ArtistsBar /> : null}
        {this.state.userBar === true ? <UserBar /> : null}
        {this.state.helpBar === true ? <HelpBar /> : null}
      </span>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({logoutUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(NavBar)
