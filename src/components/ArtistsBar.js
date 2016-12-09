import React from 'react';
// import { Rails call for like artists?, delete and new actions } from '../actions/RailsActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css'
import ReactDOM from 'react-dom'
import Coverflow from 'react-coverflow'

class ArtistsBar extends React.Component {

  displayCoverFlow(){
    let url = 'https://play.spotify.com/artist/'

    return (
      this.props.likedArtists.map(artist => {return(
          <img id='coverFlowPhoto' height='175px' src={artist.image} alt={artist.name.toLowerCase().split('').join(' ')} />
        )
      })
    )
  }

  render() {
    return(
      <div>
      <Coverflow height='200' width='auto' id='CoverFlow'
        startPosition={0}
        displayQuantityOfSide={3}
        navigation={false}
        enableScroll={true}
        clickable={true}
        active={0}
      >
        {this.displayCoverFlow()}
      </Coverflow>
    </div>
    )
  }

}

function mapStateToProps(state){
  debugger
  return {likedArtists: state.likedArtists.liked_artists }
}

function mapDispatchToProps(dispatch){
  //return bindActionCreators({ new, create, delete}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsBar)
