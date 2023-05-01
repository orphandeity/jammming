import Tracklist from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css";

interface IPlaylistProps {
  playlistTracks: TrackType[];
  onNameChange: (name: string) => void;
  onRemoveTrack: (trackId: string) => void;
  onSave: () => void;
}

function Playlist({
  playlistTracks,
  onNameChange,
  onRemoveTrack,
  onSave,
}: IPlaylistProps) {
  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    onNameChange(event.target.value);
  }

  return (
    <div className={styles.playlist}>
      <input
        type="text"
        defaultValue={"New Playlist"}
        onChange={handleNameChange}
      />
      <Tracklist tracks={playlistTracks} onRemoveTrack={onRemoveTrack} />
      <button onClick={onSave}>save to spotify</button>
    </div>
  );
}

export default Playlist;
