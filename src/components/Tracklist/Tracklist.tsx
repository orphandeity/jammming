import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

interface TracklistProps {
  tracks: TrackType[];
  onRemoveTrack: (trackId: string) => void;
}

function Tracklist({ tracks, onRemoveTrack }: TracklistProps) {
  return (
    <>
      <ul className={styles.tracklist}>
        {tracks.map((track) => (
          <li key={track.id} className={styles.item}>
            <button onClick={() => onRemoveTrack(track.id)}>remove</button>
            <Track track={track} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tracklist;
