import {findRelatedArtist} from './SpotifyActions'
import { audioPlay } from 'redux-audio/actions'
import { audioPause } from 'redux-audio/actions'
import { audioSrc } from 'redux-audio/actions'
// artistInfo comes from SpotifyActions, findArtist function
export function storeArtist(artistInfo){
  return function(dispatch){
    dispatch({type: 'SAVE_ARTIST_INFO', payload: artistInfo})
  }
}

export function storeSongs(songs){
  return function(dispatch){
    dispatch({type: 'SAVE_SONGS', payload:songs})
  }
}

export function storeNoArtist() {
  return function(dispatch) {
    dispatch({type: 'INITIAL_ARTIST', payload: ''})
  }
}

export function storeYesArtists(artist) {
  return function(dispatch) {
    dispatch({type: 'YES_ARTISTS', payload: artist})
  }
}

// this is used on the Nah button
// make sure nahArtists is coming in as an array from state
export function getNewSwipeFromLikedAction(likedState, nahArtist, stateNahArtists){

  return function(dispatch){
    if (stateNahArtists === undefined || stateNahArtists.length > 150){
      var nahArtists = []
      dispatch({type: 'CLEAR_NAH', payload: nahArtists})
    }else{
       var nahArtists = stateNahArtists
    }
    let artists = likedState
    var randArtist = artists[Math.floor(Math.random() * artists.length)];
    // var randArtist = artists[Math.floor(Math.random()*likedState.liked_artists.length)];
    // then finds the related artist based on random artist
    // and sets the state
    dispatch(findRelatedArtist(randArtist.artist_spotify_id, nahArtists))
    dispatch({type: 'ADD_TO_NAH', payload: nahArtist.spotify_id})
  }
}

export function removeSongsState(){
  return function(dispatch){
    dispatch({type: 'SAVE_SONGS', payload:[]})
  }
}


export function playSong(songs, clickedSong){

  return function(dispatch){
    let i = songs.indexOf(clickedSong)
    debugger
    let notClicked = [0,1,2].filter(function(n){
      return n != i
    })
    debugger
    songs[i].playStatus = true
    songs[notClicked[0]].playStatus = false
    songs[notClicked[1]].playStatus = false



    dispatch({type: 'SAVE_SONGS', payload: songs});

    let call1 = function (){
    dispatch(audioPlay(songs[i].id));
    dispatch(audioSrc(songs[i].preview));}

    let call2 = function(){
    dispatch(audioPause(songs[notClicked[0]].id));
    dispatch(audioSrc(songs[notClicked[0]].preview));}

    let call3 = function(){
    dispatch(audioPause(songs[notClicked[1]].id));
    dispatch(audioSrc(songs[notClicked[1]].preview));}

    call1()
    call2()
    call3()

  }
}



export function pauseSong(songs){

  return function(dispatch){
    songs.map(function(song){
       return song.playStatus = false
    })

    dispatch({type: 'SAVE_SONGS', payload: songs})

    songs.map(function(song) {
        dispatch(audioPause(song.id));
        dispatch(audioSrc(song.preview));
    })
  }
}

export function logoutUser(){
  return function (dispatch) {
    dispatch({type: 'LOGOUT_USER'})
  }
}
