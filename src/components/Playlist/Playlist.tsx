import styles from "./Playlist.module.css";
import { useMemo, useState } from "react";
import { ITrack } from "../Track/Track";
import Tracklist from "../Tracklist/Tracklist";

interface IPlaylistProps {
  playlistTracks: ITrack[];
  handleRemoveTrack: (trackId: string) => void;
}

function Playlist({ playlistTracks, handleRemoveTrack }: IPlaylistProps) {
  // user can customize playlist name
  const [playlistName, setPlaylistName] = useState("My playlist");

  // array containing spotify uri for each track in playlist
  const trackUris = useMemo(
    () => playlistTracks.map((track) => track.uri),
    [playlistTracks]
  );

  return (
    <>
      <input
        className={styles.title}
        type="text"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />
      <Tracklist
        tracks={playlistTracks}
        handleRemoveTrack={handleRemoveTrack}
      />
      {trackUris.join()}
    </>
  );
}

export default Playlist;
