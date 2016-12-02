// import React from 'react';
// import { loginSpotUserAction } from '../actions/SpotifyActions'
// import {connect} from 'react-redux'
// // import { Component } from 'react-redux'
// import { bindActionCreators } from 'redux'
//
//   class SpotloginUser extends React.Component {
//
//     handleSpotloginUser (event){
//       event.preventDefault()
//       let email = event.target.children[1].value
//       let password = event.target.children[4].value
//
//       this.props.loginSpotUserAction(email, password)
//     }
//
//
//   render() {
//     return(
//       <div>
//       <h1>Login To Spotify</h1>
//       <form onSubmit={this.handleSpotloginUser.bind(this)}>
//         <label type="text">email</label>
//         <input type="text" /><br/>
//         <label type="text">password</label>
//         <input type="password" /><br/>
//         <button type="submit">Login</button>
//       </form>
//       </div>
//     )
//   }
//
// }
//
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({loginSpotUserAction, loginSpotUserAction}, dispatch)
// }
//
// export default connect(null, mapDispatchToProps)(SpotloginUser)
//
