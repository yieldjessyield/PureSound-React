import $ from 'jquery'
// import {passport} from 'passport-spotify'
// import {SpotifyStrategy} from 'passport-spotify'
// import {User} from 'passport-spotify'

var client_id = 'd4ed30d7fe77479192e87098f379d0fc'; // Your client id
var client_secret = 'e4c0f3dd90304d3292c0f4ac63652304'; // Your secret
var redirect_uri = 'http://localhost:3001'; // Your redirect uri
var scopes = 'user-follow-modify user-follow-read user-library-modify user-top-read'

// export function loginSpotUserAction(){
//   passport.use(new SpotifyStrategy({
//       clientID: client_id,
//       clientSecret: client_secret,
//       callbackURL: redirect_uri
//     },
//     function(accessToken, refreshToken, profile, done) {
//     debugger
//       // User.findOrCreate({ spotifyId: profile.id }, function (err, user) {
//       //   return done(err, user);
//       // });
//     }
//   ));
// }

// started using Passport
// https://github.com/jmperez/passport-spotify

export function loginSpotUserAction(){
  event.preventDefault()
  return function(dispatch){
    $.ajax({
     url: 'http://api.spotify.com/v1/artists/q=dnce',
     type:'GET'
    }).done(function(data){
      debugger
  })
  }
}

// //top tracks
// /v1/artists/{id}/top-tracks
// related artists
// /v1/artists/{id}/related-artists








// our thingy
//https://accounts.spotify.com/authorize/?client_id=d4ed30d7fe77479192e87098f379d0fc&response_type=code&redirect_uri=http://localhost:3001&scope=user-follow-modify%20user-follow-read%20user-library-modify%20user-top-read`

// GET https://accounts.spotify.com/authorize
// example:
// GET https://accounts.spotify.com/authorize/?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09
// ask for scopes from user
// user-follow-modify
// user-follow-read
// user-library-modify
// user-top-read

// app.get('/login', function(req, res) {
// var scopes = 'user-read-private user-read-email';
// res.redirect('https://accounts.spotify.com/authorize' +
//   '?response_type=code' +
//   '&client_id=' + my_client_id +
//   (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
//   '&redirect_uri=' + encodeURIComponent(redirect_uri));
// });

// user will get pop-up
// user is sent to specificed URI
// we get code
// example: https://example.com/callback?code=NApCCg..BkWtQ&state=profile%2Factivity

// POST request
// POST https://accounts.spotify.com/api/token


// Spotify example of an OAuth request
// curl -X POST "https://api.spotify.com/v1/users/chris/playlists" -H "Accept: application/json" -H "Authorization: Bearer QB0zg...eF9U"
// -H "Content-Type: application/json" --data "{\"name\":\"NewPlaylist\",\"public\":true}"
