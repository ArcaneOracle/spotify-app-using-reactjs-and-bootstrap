import './Song.css'

function Song(props) {
  return (
    <div className="song">
      <img src={props.song.source} className="albumCover" alt="Song" />
      <div className="songInformation">
        <h4 className="songTitle">{props.song.title}</h4>
        <div className="songYearAndArtistAndAlbum">
          <p className="songArtist">{props.song.artist}</p>
          <p className="songYear">, {props.song.album}, ({props.song.year})</p>
        </div>
      </div>
    </div>
  )
}

export default Song;