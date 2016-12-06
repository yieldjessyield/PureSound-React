import React from 'react'
import '../App.css';
import LoginUser from './LoginUser'
import CreateUser from './CreateUser'


const Home = () => {
  return (
    <div className="Home">
      <LoginUser />
      <CreateUser />
      <div id='logo'>simplify</div>
    </div>
  )
}


module.exports = Home
