import { XCircle, PlusCircle } from "lucide-react";
import styles from "../styles/track.module.css";

interface TrackProps {
  track: TrackType;
  onAddTrack?: (track: TrackType) => void;
  onRemoveTrack?: (trackId: string) => void;
}

function Track({ track, onAddTrack, onRemoveTrack }: TrackProps) {
  function clickHandler(track: TrackType) {
    if (onAddTrack) {
      return onAddTrack(track);
    } else if (onRemoveTrack) {
      return onRemoveTrack(track.id);
    }
  }

  return (
    <div className={styles.container}>
      <button
        className="text-neutral-300 transition-colors hover:text-purple-500"
        onClick={() => clickHandler(track)}
      >
        {onAddTrack && <PlusCircle />}
        {onRemoveTrack && <XCircle />}
      </button>
      <img
        src={track.image.url}
        alt={`artwork for ${track.artist} album "${track.album}"`}
      />

      <dl className={styles.datalist}>
        <dt>Track</dt>
        <dd>{track.name}</dd>
        <dt>Artist</dt>
        <dd>{track.artist}</dd>
        <dt>Album</dt>
        <dd>{track.album}</dd>
      </dl>
    </div>
  );
}

export default Track;
