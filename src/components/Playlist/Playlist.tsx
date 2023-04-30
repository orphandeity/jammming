import styles from "./Playlist.module.css";
import { useState } from "react";
import { ITrack } from "../Track/Track";
import Tracklist from "../Tracklist/Tracklist";

interface IPlaylistProps {
  playlistTracks: ITrack[];
  handleRemoveTrack: (trackId: string) => void;
}

function Playlist({ playlistTracks, handleRemoveTrack }: IPlaylistProps) {
  const [playlistName, setPlaylistName] = useState("My playlist");

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
    </>
  );
}

export default Playlist;
