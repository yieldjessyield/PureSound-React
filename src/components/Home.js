import '../App.css';
import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className="Home">
      <button><Link to='/signup'>Sign Up</Link></button>
      <button><Link to='/login'>Login</Link></button>
    </div>
  )
}

module.exports = Home
