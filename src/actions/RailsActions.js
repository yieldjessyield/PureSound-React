import $ from 'jquery'
import {findRelatedArtist} from './SpotifyActions'
import { browserHistory } from 'react-router'

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
      browserHistory.push('/artists')
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
      dispatch(getLikedArtistsAction())
      browserHistory.push('/swipeArtist')
      // login with this email it's the first user: desmond.farrell@ryan.biz
      //ben's email is this anais@jaskolskinitzsche.co
      //becca's email: garett.rodriguez@stromanconn.info
    })
  }
}

export function storeArtistsRails(artistsData){
  return function(dispatch){
    // Go to rails and set up in artists controller create
    // method. parce this data and save relevent stuff to db
    $.ajax({url:"http://localhost:3000/artists",
            type: "POST",
            data: JSON.stringify({artists: {artistsData: artistsData}}),
     contentType:"application/json; charset=utf-8",
     headers: {authorization: localStorage.getItem('jwt')}
    }).done(function(data){
      debugger
      // this will save likedartists to state
      dispatch({type: 'SAVE_LIKED_ARTISTS', payload: data})
      let artists = data.liked_artists
      var randArtist = artists[Math.floor(Math.random()*artists.length)];
      dispatch(findRelatedArtist(randArtist.artist_spotify_id))
    })
  }
}

// makes sure this works, not tested yet should get triggered by login button
export function getLikedArtistsAction(){
  return function(dispatch){
    $.ajax({url:"http://localhost:3000/liked_artists",
            type: "GET",
     contentType:"application/json; charset=utf-8",
     headers: {authorization: localStorage.getItem('jwt')}
    }).done(function(data){
      // debugger
      // saves the user's liked artists to the state
      dispatch({type: 'SAVE_LIKED_ARTISTS', payload: data})
      let artists = data.liked_artists
      var randArtist = artists[Math.floor(Math.random()*artists.length)];
      // then finds the related artist based on random artist
      dispatch(findRelatedArtist(randArtist.artist_spotify_id))
    })
  }
}


// need to create a storeSwipeArtist action that is called when swiped
