import { combineReducers } from 'redux'

function reducerUser(state = {}, action){
  switch (action.type){
    case "NEW_USER":
    //maybe should be id here?
      return {...state, email: action.payload.userEmail}
    case "LOGIN_USER":
      return action.payload.userId
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

      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

function reducerInitialArtist(state={}, action) {
  switch (action.type) {
    case 'INITIAL_ARTIST':
      return state = action.payload
    default:
      return state
  }
}

function reducerYesArtists(state={artist: []}, action) {
  switch (action.type) {
    case 'YES_ARTISTS':
      return {...state, artist: [...state.artist, action.payload]}
    default:
      return state
  }
}

const rootReducer = combineReducers({user: reducerUser, artist: reducerStarterArtist, initialArtist: reducerInitialArtist, yesArtists: reducerYesArtists})
// {user:{} artist{artist_spotifyId}}
// include later songs: reducerSongs, and artist: reducerArtist

export default rootReducer
