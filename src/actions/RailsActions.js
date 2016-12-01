import $ from 'jquery'

export function createUserAction(email, password, phoneNumber){
  return function(dispatch){
  $.ajax({
     url: 'http://localhost:3000/users',
     type:'POST',
     data: JSON.stringify({user: {email: email, password: password, phone_number: phoneNumber}}),
     contentType:"application/json; charset=utf-8",
     dataType:"json"
    }).done(function(data){
      debugger
      dispatch({type: 'NEW_USER', payload: data})
  })
  }
}


export function loginUserAction(email, password){
  return function(dispatch){
    $.ajax({url:"http://localhost:3000/sessions",
            type: "POST",
            data: JSON.stringify({user: {email: email, password: password}}),
     contentType:"application/json; charset=utf-8",
     dataType:"json"
    }).done(function(data){
      debugger
      dispatch({type: 'NEW_USER', payload: data})
    })
  }
}
