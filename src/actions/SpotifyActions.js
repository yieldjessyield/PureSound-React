import $ from 'jquery'
import {storeArtist} from './ReactActions'
import {storeArtistRails} from './RailsActions'

export function findInitialArtist(artistName){
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
      let artistFollowers = artist.followers.total
      let artistInfo = {artistName: artistName,
                            artistId: artistId,
                            artistImage: artistImage,
                            artistFollowers: artistFollowers}
      // go to ReactActions and save artist info to state
      // this saves to state artist info
      dispatch(storeArtist(artistInfo))
      // need to do this
      dispatch(storeArtistRails(artistInfo))
  })
  }
}

export function findArtistById(artistId){
  event.preventDefault()
  return function(dispatch){
    $.ajax({
      method:'GET',
      url: `https://api.spotify.com/v1/artists/` + artistId
    }).done(function(data){
      let artistName = data.name
      let artistImage = data.images[0].url
      let artistFollowers = data.followers.total
      let artistInfo = {artistName: artistName,
                        artistId: artistId,
                        artistImage: artistImage,
                        artistFollowers: artistFollowers}
        //not going to keep this data in database until they swipe right
  })
  }
}

export function findRelatedArtist(artistId){
  event.preventDefault()
  return function(dispatch){
    $.ajax({
     url: 'http://api.spotify.com/v1/artists/' + artistId + '/related-artists',
     type:'GET'
    }).done(function(data){
      let relatedArtists = []

      for (let i = 0; i<5; i++){
        relatedArtists.push(data.artists[i].id)
      }
  })
  }
}

export function findTopTracks(artistId){
  event.preventDefault()
  return function(dispatch){
    $.ajax({
     url: 'http://api.spotify.com/v1/artists/' + artistId + '/top-tracks?country=SE',
     type:'GET'
    }).done(function(data){
      //can refactor later
      let songs = [{
        id:data.tracks[0].id,
        name:data.tracks[0].name,
        album_id:data.tracks[0].album.id,
        preview:data.tracks[0].preview_url
      },
      {
        id:data.tracks[1].id,
        name:data.tracks[1].name,
        album_id:data.tracks[1].album.id,
        preview:data.tracks[1].preview_url
      },
      {
        id:data.tracks[2].id,
        name:data.tracks[2].name,
        album_id:data.tracks[2].album.id,
        preview:data.tracks[2].preview_url
      }]

  })
  }
}

export function findAlbumArt(albumId){
  event.preventDefault()
  return function(dispatch){
    $.ajax({
     url: `https://api.spotify.com/v1/albums/` + albumId ,
     type:'GET'
    }).done(function(data){
      let albumArt = data.images[0].url

      //3o8PXwaEbXtQMt4DgBNH2L
  })
  }
}
