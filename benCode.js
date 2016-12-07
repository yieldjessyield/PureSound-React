//swipe artist component

if(this.props.songs.songs){
  let songs = this.props.songs.songs
  songsBar =
  <div>
  <div id='songNames'>

  </div>
  <div id='songsBar'>
  <a href={songs[0].preview} target='_blank'><img id='albumPhoto' role='presentation' src={songs[0].album_art}/></a>&nbsp;&nbsp;&nbsp;
  <a href={songs[1].preview} target='_blank'><img id='albumPhoto' role='presentation' src={songs[1].album_art}/></a>&nbsp;&nbsp;&nbsp;
  <a href={songs[2].preview} target='_blank'><img id='albumPhoto' role='presentation' src={songs[2].album_art}/></a>
  </div>
  </div>
}
else


//show songs component
<span id='span'>
  <h4> {this.props.song.name}</h4>
  <a href={this.props.song.preview} target="_blank"><img src={this.props.song.album_art}/></a>
  <a href={this.props.song.preview}><img id='albumPhoto' role='presentation' src={this.props.song.album_art}/></a>
</span>
