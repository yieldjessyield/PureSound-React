import $ from 'jquery'
import {storeArtist} from './ReactActions'
import {storeArtistRails} from './RailsActions'

export function findArtist(artistName){
  event.preventDefault()
  return function(dispatch){
    $.ajax({
      method:'GET',
      url: `https://api.spotify.com/v1/search?q=${artistName}&type=artist&market=US`
    }).done(function(data){
      debugger
      let artist = data.artists.items[0]
      let artistName = artist.name
      let artistId = artist.id
      let artistImage = artist.images[0].url
      let artistInfo = {artistName, artistId, artistImage}
      // go to ReactActions and save artist info to state
      // this saves to state artist info
      dispatch(storeArtist(artistInfo))
      // need to do this
      dispatch(storeArtistRails(artistInfo))
      // photo : data.images[0].url
      // name: data.name
      // followers: data.followers.total
      //data.tracks[0].name
      //data.tracks[0].preview_url
  })
  }
}

export function findRelatedArtist(artistId){
  event.preventDefault()
  return function(dispatch){
    $.ajax({
     url: 'http://api.spotify.com/v1/artists/' + artistId + 'related-artists',
     type:'GET'
    }).done(function(data){
      //array of #? artists
        //artist.id
        //will have to call the findArtist function to get artist details

  })
  }
}

export function findTopTracks(artistId){
  event.preventDefault()
  return function(dispatch){
    $.ajax({
     url: 'http://api.spotify.com/v1/artists/' + artistId + 'top-tracks',
     type:'GET'
    }).done(function(data){
      //array of 3 songs
        //song id
        //song name
      //get album id (to make call for album image)

  })
  }
}

export function findAlbumArt(albumId){
  event.preventDefault()
  return function(dispatch){
    $.ajax({
     url: 'http://api.spotify.com/v1/artists/' + albumId + 'top-tracks',
     type:'GET'
    }).done(function(data){
      //get album art
  })
  }
}
