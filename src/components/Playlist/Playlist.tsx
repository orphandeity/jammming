import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

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
    <>
      <input
        type="text"
        defaultValue={"New Playlist"}
        onChange={handleNameChange}
        className={styles.title}
      />
      <Tracklist tracks={playlistTracks} onRemoveTrack={onRemoveTrack} />
      <button onClick={onSave}>save to spotify</button>
    </>
  );
}

export default Playlist;
