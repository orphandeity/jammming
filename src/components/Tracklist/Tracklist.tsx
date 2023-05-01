import Track from "../Track/Track";
import { XCircle, PlusCircle } from "lucide-react";
import styles from "./Tracklist.module.css";

interface TracklistProps {
  tracks: TrackType[];
  onAddTrack?: (track: TrackType) => void;
  onRemoveTrack?: (trackId: string) => void;
}

function Tracklist({
  tracks,
  onAddTrack = undefined,
  onRemoveTrack = undefined,
}: TracklistProps) {
  return (
    <>
      <ul className={styles.tracklist}>
        {tracks.map((track) => (
          <li key={track.id} className={styles.item}>
            {onAddTrack ? (
              <button onClick={() => onAddTrack(track)}>
                <PlusCircle />
              </button>
            ) : onRemoveTrack ? (
              <button onClick={() => onRemoveTrack(track.id)}>
                <XCircle />
              </button>
            ) : null}
            <Track track={track} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tracklist;
