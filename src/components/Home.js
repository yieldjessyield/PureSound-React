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
    	this.setState({loginFormOpen: !this.state.loginFormOpen}) 
  	}
  	
  	onLoginClick(event){
  		this.setState({loginVis: !this.state.loginVis, loginFormOpen: !this.state.loginFormOpen, signupVis: !this.state.signupVis})
  	}

  	onSignupClick(event){
  		this.setState({signupVis: !this.state.signupVis, signupFormOpen: !this.state.signupFormOpen, loginVis: !this.state.loginVis})
  	}

  	onBackClick(event){
  		this.setState({ loginFormOpen: false, signupFormOpen: false, loginVis: true, signupVis: true})
  	}

    render(){
		return (
		  <span className="Home">
		      <LoginUser onBackClick={this.onBackClick.bind(this)} onLoginClick={this.onLoginClick.bind(this)} loginFormOpen={this.state.loginFormOpen} loginVis={this.state.loginVis}/><br/>
		      <CreateUser onBackClick={this.onBackClick.bind(this)} onSignupClick={this.onSignupClick.bind(this)} signupVis={this.state.signupVis} signupFormOpen={this.state.signupFormOpen}/>
		    <div id='logo'>simplify</div>
		  </span>
		)	
    }
}

