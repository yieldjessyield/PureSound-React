import React from 'react'
import '../App.css';
import LoginUser from './LoginUser'
import CreateUser from './CreateUser'


const Home = () => {
  return (
    <span className="Home">
        <LoginUser /><br/>
        <CreateUser />
      <div id='logo'>simplify</div>
    </span>
  )
}


module.exports = Home
