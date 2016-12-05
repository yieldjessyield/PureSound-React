import $ from 'jquery'
import {findRelatedArtist} from './SpotifyActions'

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

export function storeArtistsRails(artistsData){
  // debugger
  return function(dispatch){
    // Go to rails and set up in artists controller create
    // method. parce this data and save relevent stuff to db
    $.ajax({url:"http://localhost:3000/artists",
            type: "POST",
            data: JSON.stringify({artists: {artistsData: artistsData}}),
     contentType:"application/json; charset=utf-8",
     headers: {authorization: localStorage.getItem('jwt')}
    }).done(function(data){
      // save likedartists to state
      dispatch({type: 'SAVE_LIKED_ARTISTS', payload: data})
      let artists = data.liked_artists
      var randArtist = artists[Math.floor(Math.random()*artists.length)];

      dispatch(findRelatedArtist(randArtist.artist_spotify_id))

      // Dispatch to spotifyactions getSongs action maybe after
      // dispatch({type: 'GET_ARTIST_SONGS', payload: data})
    })
  }
}

// makes sure this works, not tested yet
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


// need to create a storeSwipeArtist action that is called when swiped
