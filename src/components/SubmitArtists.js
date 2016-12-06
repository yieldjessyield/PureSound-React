import React from 'react';
import { storeArtistsRails } from '../actions/RailsActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

  class SubmitArtist extends React.Component {

    handleSubmitArtists (event){
      event.preventDefault()
      // filling this with fake data
      // will fill this from the state possibly after the artists have been
      // confirmed by user with spotify api
      let artist1 = {artist_spotify_id: "0OdUWJ0sBjDrqHygGUXeCF", name: "Band Of Horses", image: "https://i.scdn.co/image/0f9a5013134de288af7d49a962417f4200539b47"}
      let artist2 = {artist_spotify_id: "0TnOYISbd1XYRBk9myaseg", name: "Pitbull", image: "https://i.scdn.co/image/d6955bc790b818df4efb719a863e4d26f0c2522b"}
      let artist3 = {artist_spotify_id: "2CIMQHirSU0MQqyYHq0eOx", name: "deadmau5", image: "https://i.scdn.co/image/3e671ea42708d84694e05a2d2b9346a8e107ebcc"}
      let artists = [artist1: artist1, artist2: artist2, artist3: artist3]

      this.props.storeArtistsRails(artists)
    }

    // 56ZTgzPBDge0OvCGgMO3OY


  render() {
    return(
      <div>
      <h1>Submit Your Favorite Artists</h1>
      <form onSubmit={this.handleSubmitArtists.bind(this)}>
        <label type="text">Artist Name</label>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({storeArtistsRails}, dispatch)
}

export default connect(null, mapDispatchToProps)(SubmitArtist)
