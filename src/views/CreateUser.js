import React from 'react'

export default function CreateUser(){
  function handleCreateUser (event){
    event.preventDefault()
    let email = event.target.children[1].value
    let password = event.target.children[4].value
    let phoneNumber = event.target.children[7].value

    debugger
  }

  return(
    <form onSubmit={handleCreateUser}>
      <label type="text">email</label>
      <input type="text" /><br/>
      <label type="text">password</label>
      <input type="password" /><br/>
      <label type="text">phone number</label>
      <input type="tel" /><br/>
      <button type="submit">Create User</button>
    </form>
    )
}
