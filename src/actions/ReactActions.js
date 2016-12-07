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
