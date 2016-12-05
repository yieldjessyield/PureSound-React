import $ from 'jquery'
import {storeArtist} from './ReactActions'
import {storeArtistRails} from './RailsActions'
import {storeSongs} from './ReactActions'

export function findInitialArtist(artistName){
  event.preventDefault()
  return function(dispatch){
    $.ajax({
      method:'GET',
      url: `https://api.spotify.com/v1/search?q=${artistName}&type=artist&market=US`
    }).done(function(data){


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
      // need to do this
      dispatch(storeArtistRails(artistInfo))
  })
  }
}

export function findArtistById(artistId){
  return function(){
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
              // dispatch(storeArtist(artistInfo))
              console.log(artistInfo);
  })
  }
}

export function findRelatedArtist(artistId){
  return function(){
    $.ajax({
     url: 'http://api.spotify.com/v1/artists/' + artistId + '/related-artists',
     type:'GET'
    }).done(function(data){
      // this needs to go to root reducter and update state with related artists array
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
        album_art:data.tracks[0].album.images[1].url,
        preview:data.tracks[0].preview_url
      },
      {
        id:data.tracks[1].id,
        name:data.tracks[1].name,
        album_art:data.tracks[1].album.images[1].url,
        preview:data.tracks[1].preview_url
      },
      {
        id:data.tracks[2].id,
        name:data.tracks[2].name,
        album_art:data.tracks[2].album.images[1].url,
        preview:data.tracks[2].preview_url
      }]
      console.log(songs)
      dispatch(storeSongs(songs))
  })
  }
}
