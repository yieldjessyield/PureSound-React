import $ from 'jquery'

export default function createUser(){
  return function(dispatch){
  $.ajax({
     url: 'http://localhost:3000/users',
     type:"POST",
     data: JSON.stringify({auth: {email: email, password: password, phone_number: phone_number}}),
     contentType:"application/json; charset=utf-8",
     dataType:"json"
    })
  }
}


export default function getUsers(){
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
