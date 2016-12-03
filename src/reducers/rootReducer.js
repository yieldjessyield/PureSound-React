import { combineReducers } from 'redux'

function reducerUser(state = {}, action){
  switch (action.type){
    case "NEW_USER":
      return action.payload.name
    case "LOGIN_USER":
      return action.payload.name
    default:
      return state
  }
}

function reducerArtist(state= {}, action){
  switch (action.type){
    case "SAVE_ARTIST_INFO":

      // this is like an object.assign but only for use with bable
      // nvm didnt use this  ^
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

const rootReducer = combineReducers({user: reducerUser, artist: reducerArtist})
// {user:{} artist{artist_spotifyId}}
// include later songs: reducerSongs, and artist: reducerArtist

export default rootReducer
