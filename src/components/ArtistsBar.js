import React from 'react';
// import { Rails call for like artists?, delete and new actions } from '../actions/RailsActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css'
import ReactDOM from 'react-dom'
import Coverflow from 'react-coverflow'

class ArtistsBar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.runURL = this.runURL.bind(this)
  // }
  // runURL(url){
  //   window.open(url)
  // }

  displayCoverFlow(){
    let url = 'https://play.spotify.com/artist/'
    return (
      this.props.likedArtists.map(artist => {
        return(
          // <span>
          <img id='coverFlowPhoto' height='175px' src={artist.image}
          alt={artist.name.toLowerCase().split('').join(' ')} />
        )
      })
    )
  }

  render() {
    return(
      <div>
      <br/>
      <Coverflow height='270' width='100%' id='CoverFlow'
        startPosition={0}
        displayQuantityOfSide={3}
        navigation={false}
        enableScroll={true}
        clickable={true}
        active={0}
      >
        {this.displayCoverFlow()}
      </Coverflow>
      <div className='yourLikedArtists'>artists</div>
    </div>
    )
  }

}

function mapStateToProps(state){
  return {likedArtists: state.likedArtists }
}

function mapDispatchToProps(dispatch){
  //return bindActionCreators({ new, create, delete}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsBar)
