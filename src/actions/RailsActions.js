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


export function getUserAction(){
  return function(dispatch){
    $.ajax({url:"http://localhost:3000/users",
            type: "GET",
            headers: {authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.5bOtjhjsuq1aGYz_FOYasMyWL8KgEyllESDwX_VLwuU"}
            })
    .done(function(data){
      console.log(data)
      dispatch({type: 'FETCH_USERS', payload: data})
    })
  }
}
