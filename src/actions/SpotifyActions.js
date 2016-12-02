import $ from 'jquery'

export function findArtist(artistId){
  event.preventDefault()
  return function(dispatch){
    $.ajax({
      method:'GET',
      url: 'http://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF'
    }).done(function(data){
      debugger
      // photo : data.images[0].url
      // name: data.name
      // followers: data.followers.total
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
     url: 'http://api.spotify.com/v1/artists/' + artistId + 'top-tracks',
     type:'GET'
    }).done(function(data){
      //get album art
  })
  }
}
