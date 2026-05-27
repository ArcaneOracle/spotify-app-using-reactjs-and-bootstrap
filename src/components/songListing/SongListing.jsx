import Song from '../song/Song.jsx';

function SongListing(props) {
    return (
      <div>
          {props.songs.map(song => (
            <Song
              key={song.id}
              song={song}
            />
          ))}
      </div>
    )
}

export default SongListing;