import React from 'react'
import '../App.css';
import LoginUser from './LoginUser'
import CreateUser from './CreateUser'


export default class Home extends React.Component {
	constructor(props) {
      super(props);
      this.state = { loginFormOpen: false, signupFormOpen: false, loginVis: true, signupVis: true}
    }

    switchVisible(event){
    	debugger
    	this.setState({loginFormOpen: !this.state.loginFormOpen}) 
  	}
  	onLoginClick(event){
  		debugger
  		this.setState({loginVis: !this.state.loginVis, loginFormOpen: !this.state.loginFormOpen})
  	}

  	onSignupClick(event){
  		debugger
  		this.setState({signupVis: !this.state.signupVis, signupFormOpen: !this.state.signupFormOpen})
  	}

    render(){
		return (
		  <span className="Home">
		      <LoginUser onLoginClick={this.onLoginClick.bind(this)} loginFormOpen={this.state.loginFormOpen} loginVis={this.state.loginVis}/><br/>
		      <CreateUser onSignupClick={this.onSignupClick.bind(this)} signupVis={this.state.signupVis} signupFormOpen={this.state.signupFormOpen}/>
		    <div id='logo'>simplify</div>
		  </span>
		)	
    }
}

