import styles from "./Tracklist.module.css";
import Track, { ITrack } from "../Track/Track";

interface ITracklistProps {
  tracks: ITrack[];
  handleRemoveTrack: (trackId: string) => void;
}

function Tracklist({ tracks, handleRemoveTrack }: ITracklistProps) {
  return (
    <>
      <ul className={styles.tracklist}>
        {tracks.map((track) => (
          <li key={track.id} className={styles.item}>
            <button onClick={() => handleRemoveTrack(track.id)}>remove</button>
            <Track track={track} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tracklist;
