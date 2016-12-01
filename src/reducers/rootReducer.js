import { combineReducers } from 'redux'

export default function reducerArtist(state = {users:[]}, action){
  switch (action.type){
    case "FETCH_USER":
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({artist: reducerArtist, songs: reducerSongs})

export default rootReducer
