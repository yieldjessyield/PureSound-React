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
      localStorage.setItem('jwt', data.jwt)
      // fix this dispatch it's not working yet
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
      localStorage.setItem('jwt', data.jwt)
      // fix this dispatch it's not working yet
      dispatch({type: 'LOGIN_USER', payload: data})
    })
  }
}

export function getArtistAction(artist_spotify_id){
  return function(dispatch){
    $.ajax({url:"http://localhost:3000/artists",
            type: "GET",
            data: JSON.stringify({artist_spotify_id: artist_spotify_id}),
     contentType:"application/json; charset=utf-8",
     headers: {authorization: localStorage.getItem('jwt')}
    }).done(function(data){
      // fix this dispatch it's not working yet
      dispatch({type: 'SAVE_ARTIST_INFO', payload: data})
    })
  }
}
