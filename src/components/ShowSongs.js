import React from 'react';
import '../App.css';

export default class ShowSongs extends React.Component {


  render() {
    let url = 'https://embed.spotify.com/?uri=spotify:track:' + this.props.song.id

    return(
      <div>
          <div id='songNames'>
      </div>
          <div id='songsBar'>
            <iframe id='iFrame' src={url} width="300" height="80"></iframe>
          </div>
      </div>
    )
  }

}
