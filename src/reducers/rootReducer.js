import { combineReducers } from 'redux'

function reducerUser(state = {}, action){
  switch (action.type){
    case "FETCH_USER":
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({user: reducerUser})
// include later songs: reducerSongs, and artist: reducerArtist

export default rootReducer
