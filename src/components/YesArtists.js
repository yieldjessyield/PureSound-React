import React from 'react';
import { connect } from 'react-redux'
import '../App.css';

class YesArtists extends React.Component {
  render(){

    let artists = this.props.yesArtists;
    let yesArtistsDiv;
    let selectedArtists;

    if(artists.length !== 0){
      selectedArtists = this.props.yesArtists.map(function(artist) {
        return (
          <span className='yesArtistsSpan'>
            <img id='yesArtistsPhoto' role='presentation' src={artist.artistUrl}/>&nbsp;&nbsp;
          </span>
        )
      })
      yesArtistsDiv =
        <div>
          <h1 className='signUpProcess'>y o u r&nbsp; a r t i s t s</h1>
          {selectedArtists}
        </div>
    }

    return(
      <div>{yesArtistsDiv}</div>
    )
  }
}

function mapStateToProps(state){
  return {yesArtists: state.yesArtists.yesArtists }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({storeYesArtists: storeYesArtists }, dispatch)
// }

export default connect(mapStateToProps)(YesArtists)
