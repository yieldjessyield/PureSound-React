import React from 'react'
import '../App.css';
import LoginUser from './LoginUser'
import CreateUser from './CreateUser'


const Home = () => {
  return (
    <div id="Home">
      <LoginUser />
      <CreateUser />
      <div id='logo'>simplify</div>
    </div>
  )
}


module.exports = Home
