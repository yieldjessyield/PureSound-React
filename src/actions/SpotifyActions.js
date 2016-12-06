import $ from 'jquery'
import { storeSongs } from './ReactActions'
import { storeArtist } from './ReactActions'
import { storeArtistRails } from './RailsActions'
import { browserHistory } from 'react-router'

// change function names (initial artist)
export function findArtistByName(artistName){
  return function(dispatch){
    $.ajax({
      method:'GET',
      url: `https://api.spotify.com/v1/search?q=${artistName}&type=artist&market=US`
    }).done(function(data){
      if (data.artists.items[0].id === undefined || data.artists.items[0].name === undefined || data.artists.items[0].images[0].url === undefined){
        alert('Invalid Artist')
        browserHistory.push('/artists')
      } else {
        let artistId = data.artists.items[0].id
        let artistName = data.artists.items[0].name
        let artistUrl = data.artists.items[0].images[0].url
        let artist = {artistId: artistId, artistName: artistName, artistUrl: artistUrl}
        dispatch({type: 'INITIAL_ARTIST', payload: artist})
      }
    })
  }
}

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

// this lil baby is used by both getLikeArtists action and the storeArtistsRails action
export function findRelatedArtist(artistId){
  // event.preventDefault()
  return function(dispatch){
    $.ajax({
     url: 'http://api.spotify.com/v1/artists/' + artistId + '/related-artists',
     type:'GET'
    }).done(function(data){
      // this needs to go to root reducter and update state with shortened related artists array
      var relatedArtists = data.artists.slice(0,10)
      //grab only one artist form this and dispatch SET_SWIPE_ARTIST
      var randArtist = relatedArtists[Math.floor(Math.random()*relatedArtists.length)];
      //grab only the data we want from randArtist and organize under swipeArtist
      // debugger
      var swipeArtist = {spotify_id: randArtist.id, name: randArtist.name, image: randArtist.images[1].url, followers: randArtist.followers.total}
      // set swipeArtist state with dispatch
      dispatch({type: 'SET_SWIPE_ARTIST', payload: swipeArtist})
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
