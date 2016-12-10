import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom';
import ArtistsBar from './ArtistsBar'
import UserBar from './UserBar'
import HelpBar from './HelpBar'


export default class NavBar extends React.Component {

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


  }

  artistsBarClick(){
    if (this.state.artistsBar == false){
      $('#divFocus').hide()
    } else {
      $('#divFocus').show()
    }
    this.setState({artistsBar: !this.state.artistsBar})
    // ReactDOM.findDOMNode(this.refs.divFocus).focus();
  }

  userBarClick(){
    if (this.state.userBar == false){
      $('#divFocus').hide()
    } else {
      $('#divFocus').show()
    }
    this.setState({userBar: !this.state.userBar})
    // ReactDOM.findDOMNode(this.refs.divFocus).focus();
  }

  helpBarClick(){
    this.setState({helpBar: !this.state.helpBar})
    // ReactDOM.findDOMNode(this.refs.divFocus).focus();
  }


  render(){
    return(
      <span id='navBar'>
        &nbsp;<button  className='navBarButtons' onClick={this.artistsBarClick}>&hearts;</button>&nbsp;
        <button  className='navBarButtons' onClick={this.userBarClick}>&#9786;</button>&nbsp;
        <button  className='navBarButtons' onClick={this.helpBarClick}>?</button>
        {this.state.artistsBar === true ? <ArtistsBar /> : null}
        {this.state.userBar === true ? <UserBar /> : null}
        {this.state.helpBar === true ? <HelpBar /> : null}
      </span>
    )
  }

}
