import { combineReducers } from 'redux'

function reducerUser(state = {}, action){
  switch (action.type){
    case "NEW_USER":
    debugger
    console.log(action.payload)
    //maybe should be id here?
    case "LOGIN_USER":
      return action.payload.userId
    debugger
    //save user id and current user t or false
    // save artist info related to user
      return action.payload.name
    default:
      return state
  }
}

function reducerStarterArtist(state= {}, action){
  switch (action.type){
    case "SAVE_ARTIST_INFO":
      debugger
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

const rootReducer = combineReducers({user: reducerUser, artist: reducerStarterArtist})
// {user:{} artist{artist_spotifyId}}
// include later songs: reducerSongs, and artist: reducerArtist

export default rootReducer
