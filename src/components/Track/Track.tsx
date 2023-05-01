import styles from "./Track.module.css";

interface TrackProps {
  track: TrackType;
}

function Track({ track }: TrackProps) {
  return (
    <div className={styles.card}>
      <dl className={styles.content}>
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
